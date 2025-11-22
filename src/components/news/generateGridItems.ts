import type { ReactElement } from 'react';
import type { StrapiNewsItem } from './types';

/**
 * Fisher-Yates 洗牌算法，用于随机打乱数组
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j] as T, shuffled[i] as T];
  }
  return shuffled;
}

/**
 * 生成 GridMotion 组件所需的 items 数组
 * 从新闻列表中提取封面图，排除当前新闻，确保不重复
 * @param newsList 所有新闻列表
 * @param currentNewsId 当前新闻的 ID（用于排除）
 * @returns items 数组，包含新闻封面图 URL，尽可能不重复
 */
export function generateGridItems(
  newsList: StrapiNewsItem[],
  currentNewsId?: number | string,
): (string | ReactElement)[] {
  // 过滤掉当前新闻，并提取有封面图的新闻
  const otherNews = newsList.filter(
    news => (news.coverImage || news.coverImageUrl) && news.id.toString() !== currentNewsId?.toString(),
  );

  // 提取封面图 URL 并去重（使用 Set 确保每个 URL 只出现一次）
  // 优先使用 coverImage，如果没有则使用 coverImageUrl
  const uniqueCoverImages = Array.from(
    new Set(
      otherNews
        .map(news => news.coverImage || news.coverImageUrl)
        .filter((url): url is string => Boolean(url)),
    ),
  );

  // GridMotion 需要 28 个项目（4行 x 7列）
  const totalItems = 28;
  const items: (string | ReactElement)[] = [];

  if (uniqueCoverImages.length === 0) {
    // 如果没有封面图，使用占位符
    for (let i = 0; i < totalItems; i++) {
      items.push(`Item ${i + 1}`);
    }
    return items;
  }

  // 打乱封面图顺序，增加随机性
  const shuffledImages = shuffleArray(uniqueCoverImages);

  if (uniqueCoverImages.length >= totalItems) {
    // 如果封面图足够，直接使用前 28 个（已打乱）
    return shuffledImages.slice(0, totalItems);
  }

  // 如果封面图不够 28 个，使用智能填充策略避免重复
  // 计算每个图片应该出现的次数，尽量均匀分布
  const imageCount = shuffledImages.length;
  const timesPerImage = Math.floor(totalItems / imageCount);
  const remainder = totalItems % imageCount;

  // 为每个图片分配出现次数，确保总数等于 28
  const imageCounts: number[] = shuffledImages.map((_, index) =>
    timesPerImage + (index < remainder ? 1 : 0),
  );

  // 使用轮询方式填充，确保相同图片之间有最大间隔
  const result: string[] = [];
  const imageQueues: string[][] = shuffledImages.map(() => []);

  // 将每个图片的副本分配到队列中
  shuffledImages.forEach((image, index) => {
    const count = imageCounts[index];
    const queue = imageQueues[index];
    if (count !== undefined && queue) {
      for (let i = 0; i < count; i++) {
        queue.push(image);
      }
    }
  });

  // 使用轮询策略填充，每次选择距离上次使用最远的图片
  const lastUsedIndex = new Map<string, number>();

  for (let i = 0; i < totalItems; i++) {
    let bestImage: string | null = null;
    let bestQueueIndex = -1;
    let maxDistance = -1;

    // 找到距离上次使用位置最远的图片
    for (let j = 0; j < imageQueues.length; j++) {
      const queue = imageQueues[j];
      if (!queue || queue.length === 0) {
        continue;
      }

      const image = queue[0];
      if (!image) {
        continue;
      }

      const lastUsed = lastUsedIndex.get(image) ?? -Infinity;
      const distance = i - lastUsed;

      if (distance > maxDistance) {
        maxDistance = distance;
        bestImage = image;
        bestQueueIndex = j;
      }
    }

    // 如果所有图片都刚使用过，选择队列最长的（确保均匀分布）
    if (bestImage === null || bestQueueIndex === -1) {
      let maxLength = 0;
      for (let j = 0; j < imageQueues.length; j++) {
        const queue = imageQueues[j];
        if (queue && queue.length > maxLength) {
          const firstImage = queue[0];
          if (firstImage) {
            maxLength = queue.length;
            bestQueueIndex = j;
            bestImage = firstImage;
          }
        }
      }
    }

    if (bestImage && bestQueueIndex >= 0) {
      const queue = imageQueues[bestQueueIndex];
      if (queue) {
        result.push(bestImage);
        lastUsedIndex.set(bestImage, i);
        // 从队列中移除已使用的图片
        queue.shift();
      }
    }
  }

  return result;
}
