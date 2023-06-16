import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: 'Widget',
    keywords: 'travel holidays chillout',
    description: 'zadanie rekrutacyjne',
  }

export default Meta;