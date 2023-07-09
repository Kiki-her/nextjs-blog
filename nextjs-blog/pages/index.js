import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi~👋🏻 I'm Kiki. I'm an instructor for a company that trains full-stack
          engineers.{" "}
        </p>
        <p>
          My Github is <a href="https://github.com/Kiki-her">here</a>. Happy
          Hacking!
        </p>
        <p>
          (This is a simple website by{" "}
          <a href="https://nextjs.org/learn">Next.js</a>.)
        </p>
      </section>
    </Layout>
  );
}
