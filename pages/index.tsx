import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>@salgnt/next-template</title>
        <meta name="description" content="Next.js Template with TypeScript, Tailwind CSS, Jest, ESLint, Prettier, pnpm." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Hello world!
        </h1>
      </main>
    </div>
  )
}
