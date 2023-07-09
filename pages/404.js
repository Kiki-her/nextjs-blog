import Image from "next/image";
import styles from "../components/layout.module.css";

export default function Custom404() {
  return (
    <>
      <div className={styles.container}>
        <Image
          priority
          src="/images/404_bird.gif"
          height={144}
          width={144}
          alt="trembling bird"
        />
        <h1>404 - Page Not Found</h1>
      </div>
    </>
  );
}
