/**
 * Publisher Meta 标签组件
 * 在页面 head 中添加 publisher meta 标签
 *
 * 这是一个服务端组件，会在 SSR 时直接渲染到 HTML 中
 * 由于 Next.js App Router 会自动将 <head> 中的内容提升到文档头部，
 * 我们可以直接在这里渲染 meta 标签
 */

type PublisherMetaProps = {
  publisher?: string;
};

export default function PublisherMeta({ publisher = 'BrainCo' }: PublisherMetaProps) {
  return (
    <head>
      <meta name="publisher" content={publisher} />
    </head>
  );
}
