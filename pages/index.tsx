import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>@salgnt/next-template</title>
        <meta
          name="description"
          content="Next.js Template with TypeScript, Windi CSS, Jest, ESLint, Prettier, pnpm."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello world!</h1>
      </main>
    </div>
  );
};

export default Home;
