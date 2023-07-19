---
title: "Pre-renderingについて"
date: "2023-07-12"
---

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
