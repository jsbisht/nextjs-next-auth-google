import '../styles/globals.css'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import { Props } from '../types/Props'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
import { AuthenticationChecker } from '../components/AuthenticationChecker'

function Main({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <SessionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  )
}

function Layout({ children }: Props) {
  return (
    <section>
      <header>
        <strong>My App</strong>
      </header>

      <main>
        <AuthenticationChecker>{children}</AuthenticationChecker>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </section>
  )
}

export default Main
