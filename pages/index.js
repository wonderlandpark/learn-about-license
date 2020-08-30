import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>오픈소스 라이선스 알아보기</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>라이선스</a> 쉽게 알아보기
        </h1>

        <p className={styles.description}>
          오픈소스 라이선스를 쉽게 알아보세요
        </p>

        <div className={styles.grid}>
          <a href="/choose" className={styles.card}>
            <h3>적합한 라이선스 고르기 &rarr;</h3>
            <p>내 프로젝트에 맞는 오픈소스 라이선스를 골라보세요!</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>라이선스 정보 보기 &rarr;</h3>
            <p>여러 라이선스들의 정보를 확인해보세요</p>
          </a>
        </div>
        <h2 className={styles.subtitle}>유명한 오픈소스 라이선스</h2>
        <p>아래는 유명한 오픈소스 라이선스들입니다!</p>
        <div className={styles.grid}>
          <a href="/license/mit" className={styles.card}>
            <h3>MIT 라이선스&rarr;</h3>
            <p>기본적인 저작권 보존을 요구하는 조건만 있고 아주 자유로운 라이선스입니다!</p>
          </a>

          <a href="/license/gpl3" className={styles.card}>
            <h3>GNU GPLv3&rarr;</h3>
            <p>오픈소스 라이선스중 강력한 편에 속합니다.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          해당 정보들은 법적인 효력이 없습니다.
        </a>
      </footer>
    </div>
  )
}
