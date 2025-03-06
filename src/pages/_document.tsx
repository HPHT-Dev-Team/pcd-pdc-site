import { Html, Head, Main, NextScript } from 'next/document';
import { getBasePath } from '@/config/site';

export default function Document() {
  const basePath = getBasePath();
  
  return (
    <Html lang="en">
      <Head>
        {/* Add base tag for GitHub Pages */}
        {basePath && <base href={`${basePath}/`} />}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 