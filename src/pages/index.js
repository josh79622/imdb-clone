import Head from 'next/head'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Results from '@/components/Results'

export default function Home() {
  return (
    <>
      <Head>
        <title>IMDB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>

      {/* Navbar */}
      <Navbar/>

      {/* Results */}
      <Results/>
    </>
  )
}
