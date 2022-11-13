import { MantineProvider } from '@mantine/core';
import { BlogHeader } from 'components/layouts/Header';
import { AppProps } from 'next/app';
import Head from 'next/head';

const links = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>にちブロ</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <BlogHeader links={links} />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
