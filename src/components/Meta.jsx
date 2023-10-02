import Head from "next/head";

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

Meta.defaultProps = {
  title: "A&G SOFTWARE",
  keywords: "A&G Insurance",
  description: "A&G Software Docs",
};

export default Meta;
