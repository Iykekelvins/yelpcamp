import Head from "next/head";

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
