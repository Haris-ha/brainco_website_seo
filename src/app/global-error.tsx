'use client';

import NextError from 'next/error';
import { useEffect } from 'react';

export default function GlobalError(props: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // 在生产环境中，可以将错误发送到错误跟踪服务
    // 例如：Sentry, LogRocket, Bugsnag 等
    if (process.env.NODE_ENV === 'production') {
      console.error('Global error:', props.error);
    }
  }, [props.error]);

  return (
    <html lang="zh">
      <body>
        <NextError statusCode={500} />
      </body>
    </html>
  );
}
