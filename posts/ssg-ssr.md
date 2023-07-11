---
title: "Pre-renderingについて"
date: "2023-07-12"
---

Next.js の tutorial を抜粋して、主に React との相違点をまとめる。

## Pre-rendering

デフォルトでは、Next.js はすべてのページを pre-rendering する。各ページの HTML を事前に生成することで、パフォーマンスと SEO が向上する。

生成された HTML は、そのページに必要な最小限の JS コードと関連づけられる。ページがブラウザに読み込まれると、その JS コードが実行され、ページが完全にインタラクティブになる。

アプリが React.js を使用している場合は、pre-rendering がないため、JS を無効にするとコンテンツを見ることができない。

pre-rendering がある Next.js を使うと、JS がロードされていない初回ロードでも HTML が表示される。

## 二種類の Pre-rendering

Next.js には二種類の pre-rendering がある。

- **Static Generation**

  静的ジェネレーションは、build 時に HTML を生成する手法だ。pre-rendering された HTML は、リクエストごとに再利用される。

- **Server-side Rendering**
  サーバーサイドレンダリングは、リクエストごとに HTML を生成する pre-rendering 手法だ。

  ```
  開発モードでは、ページはリクエストごとにpre-renderingされる。これは静的ジェネレーションにも適用される。
  本番環境では、静的ジェネレーションはbuild時に一度だけ行われ、リクエストがリクエストごとに生成されるわけではない。
  ```

### ページ単位での選択

Next.js ではページごとに、どの pre-rendering 形式を使うかを選択できる。使い分けることで、ハイブリッドな Next.js アプリを作成できる。

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
