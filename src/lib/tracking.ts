// 追踪相关类型定义
type Properties = Record<string, string | number | boolean>;

type BrowserInfo = {
  name: string;
  version: string;
};

// 获取浏览器信息
function getBrowserInfo(): BrowserInfo {
  const userAgent = navigator.userAgent;
  let browserName: string = 'Unknown';
  let browserVersion: string = 'Unknown';

  if (userAgent.includes('Chrome')) {
    browserName = 'Google Chrome';
    const match = userAgent.match(/Chrome\/([\d.]+)/);
    browserVersion = match?.[1] ?? 'Unknown';
  } else if (userAgent.includes('Safari')) {
    browserName = 'Apple Safari';
    const match = userAgent.match(/Version\/([\d.]+)/);
    browserVersion = match?.[1] ?? 'Unknown';
  } else if (userAgent.includes('Firefox')) {
    browserName = 'Mozilla Firefox';
    const match = userAgent.match(/Firefox\/([\d.]+)/);
    browserVersion = match?.[1] ?? 'Unknown';
  } else if (userAgent.includes('MSIE') || userAgent.includes('Trident')) {
    browserName = 'Microsoft Internet Explorer';
    const match = userAgent.match(/(?:MSIE |rv:)([\d.]+)/);
    browserVersion = match?.[1] ?? 'Unknown';
  } else if (userAgent.includes('Edge')) {
    browserName = 'Microsoft Edge';
    const match = userAgent.match(/Edge\/([\d.]+)/);
    browserVersion = match?.[1] ?? 'Unknown';
  }

  return {
    name: browserName,
    version: browserVersion,
  };
}

// 获取时区偏移
function getBrowserTimezoneOffset() {
  const currentDate = new Date();
  const timezoneOffsetInMinutes = currentDate.getTimezoneOffset();
  const timezoneOffsetInHours = Math.floor(timezoneOffsetInMinutes / 60);
  return {
    timezoneOffsetInMinutes,
    timezoneOffsetInHours,
  };
}

// 获取上一页域名
function getPreviousPageDomain() {
  const referrerURL = document.referrer;

  if (referrerURL) {
    try {
      const urlObj = new URL(referrerURL);
      return urlObj.hostname;
    } catch {
      return '';
    }
  }
  return '';
}

// 追踪数据构建
const tracking = (event: string, assign: Properties) => {
  const devices = (window as any).devices || {};
  const borwserInfo = getBrowserInfo();
  return [
    {
      project: 'web_brainco_cn',
      distinctId: devices.fingerprint,
      time: Date.now(),
      event,
      properties: {
        $browser: borwserInfo.name,
        $browser_version: borwserInfo.version,
        $timezone_offset: getBrowserTimezoneOffset().timezoneOffsetInHours,
        $title: document.title,
        $url: location.href,
        $url_query: location.search,
        $url_path: location.hash,
        $referrer: document.referrer,
        $referrer_title: '强脑科技BrainCo – 脑机科技，开启生命更多可能性',
        $referrer_host: getPreviousPageDomain(),
        sub_item_id: localStorage.getItem('channelId') || '',
        sub_item_name: localStorage.getItem('channelName') || '',
        ...assign,
      },
    },
  ];
};

// 追踪点击事件
export const trackingPoint = (event: string, assign: Properties) => {
  if (!(window as any).devices) {
    console.warn('Tracking (devices not ready):', event, assign);
    return tracking(event, assign);
  }
  const data = tracking(event, assign);

  // 获取追踪API地址
  const VITE_API_BASE_TRACKING = process.env.NEXT_PUBLIC_API_BASE_TRACKING || '';

  if (!VITE_API_BASE_TRACKING) {
    console.warn('Tracking (no API endpoint):', event, assign);
    return Promise.resolve(data);
  }

  return fetch(`${VITE_API_BASE_TRACKING}/tracking/api/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
