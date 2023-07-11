---
title: "abstract of Next.js tutorial to Japanese"
date: "2023-07-11"
---

Next.js の tutorial を抜粋して、主に React との相違点をまとめる。

## <Link>component を使う

Next.js では、Link コンポーネントを提供している。

```
import Link from 'next/link'
```

上記のように Link コンポーネントを import することで、簡単にページ遷移をすることができる。
例を以下に示す。

```
<h1 className="title">
    Read<Link href="/posts/first-post">this page!</Link>
</h1>
```

Link コンポーネントは、同じ Next.js アプリ内の 2 つのページ間の**クライアントサイドナビゲーション**を可能にする。

## クライアントサイドナビゲーション

クライアントサイドナビゲーションとは、JS を使用してページ遷移を行うことを意味する。
ブラウザが行うデフォルトのナビゲーションよりも高速だ。
`<a href="...">`を使用してこの操作を行った場合、ブラウザはサーバーとやり取りし完全なリフレッシュを行う。

Next.js は自動的にコードを分割するため、各ページはそのページに必要なものだけを読み込む。

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
