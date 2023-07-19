---
title: "Server-side Renderingについて"
date: "2023-07-19"
---

[Next.js](https://nextjs.org/) の tutorial を抜粋してまとめる。

## リクエスト時のデータの取得

build 時ではなく、リクエスト時にデータを fetch する必要がある場合は、

Server-side Rendering を使用できる。

この場合は、`getStaticProps`ではなく、`getServerSideProps`を export する必要がある。

### getServerSideProps とは？

`getServerSideProps`はリクエスト時に呼び出されるため、パラメータ(`context`)にはリクエスト固有のものが含まれる。

`getServerSideProps`は、リクエスト時にデータを取得しなければならないページを、pre-rendering する必要がある場合のみ使ってください。

以下に、例のコードを載せる。

```
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```
