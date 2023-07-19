---
title: "静的生成について"
date: "2023-07-18"
---

[Next.js](https://nextjs.org/) の tutorial を抜粋してまとめる。

## データを使用した静的生成

一部のページでは、最初に外部データを取得しないと HTML をレンダリングできない場合がある。

Next.js はデータを使用した静的生成もサポートしている。

### getStaticProps とは？

Next.js では、ページコンポーネントを export する時に、`getStaticProps`という async 関数も export できる。

`getStaticProps`はビルド時に実行され、関数内で外部データを fetch し、それを props としてページに送信できる。

以下に、例のコードを載せる。

```
export default function Home(props) { ... }

export async function getStaticProps() {
  // APIやDBなど、外部からデータを取得する
  const data = ...

  // `props`キーは`Home`コンポーネントに渡される
  return {
    props: ...
  }
}

```

次の記事では、サーバーサイドレンダリングについて見ていく。
