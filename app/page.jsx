/* ::: HOME ::: */
import App from './program/page.jsx'
import styles from './page.module.css';

export default function Home() {
  return (<>
  <header>
    <h1>Audio Visual</h1>
  </header>
  <main className={styles.main}>
    <section>
      <App/>
    </section>
  </main>
    </>)
}
