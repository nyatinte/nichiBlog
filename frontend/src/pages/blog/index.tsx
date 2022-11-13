import { ActionIcon, Container, Pagination, SimpleGrid } from '@mantine/core';
import { ArticleCard } from 'components/uiParts/card/ArticleCard';
import { globby } from 'globby';
import { StaticImageData } from 'next/image';
import { useMemo, useState } from 'react';
import { ArrowsSort } from 'tabler-icons-react';

export type article = {
  id: string;
  title: string;
  date: string;
  image?: StaticImageData | string;
  published: boolean;
};

const Page = ({ mdxFilesMeta }: { mdxFilesMeta: article[] }) => {
  // 昇順・降順の切り替え
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  // ページネーション
  const [page, setPage] = useState(1);
  const fileLength = mdxFilesMeta.length;
  const perPage = 6;
  const totalPage = Math.ceil(fileLength / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;

  const sortedMdxFilesMeta = useMemo(
    () =>
      mdxFilesMeta.sort((a, b) => {
        if (order === 'asc') {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }

        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }),
    [mdxFilesMeta, order]
  );

  const handleClickToggleOrder = () => {
    setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };
  const cards = sortedMdxFilesMeta.slice(start, end).map((article) => {
    if (article.published) {
      return <ArticleCard key={article.id} article={article} />;
    }
  });

  return (
    <Container py="xl">
      <ActionIcon onClick={handleClickToggleOrder} size="lg" color="green">
        <ArrowsSort size={30} />
      </ActionIcon>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
      <Pagination
        total={totalPage}
        page={page}
        onChange={setPage}
        color="green"
        style={{
          marginTop: '2rem',
          justifyContent: 'center',
        }}
      />
    </Container>
  );
};

export default Page;

// .mdxファイルを読み込み、記事の情報を取得する
export async function getStaticProps() {
  const mdxFiles = await globby('src/pages/blog/*.mdx');
  const mdxFilesName = mdxFiles.map((file) => file.split('/').pop());
  const mdxFilesMeta = mdxFilesName.map(async (file) => {
    // jsonにundifinedが入っているとエラーになるので、nullを入れる
    try {
      const { meta } = await import(`/${file}`);
      if (meta) {
        return meta as article;
      }
      return null;
    } catch (e) {
      return null;
    }
  });

  return {
    // propsとして渡す
    props: {
      mdxFilesMeta: (await Promise.all(mdxFilesMeta)).filter(
        (article) => article !== null
      ) as article[],
    },
  };
}
