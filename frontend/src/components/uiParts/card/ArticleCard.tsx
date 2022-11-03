import { AspectRatio, Card, createStyles, Image, Text } from '@mantine/core';
import NoImage from 'images/noImage.png';
import Link from 'next/link';
import type { article } from 'pages/blog';

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

type ArticleCardProps = {
  article: article;
};
export const ArticleCard = ({ article }: ArticleCardProps) => {
  const { classes } = useStyles();

  const src =
    typeof article.image === 'string' ? article.image : article.image?.src;

  return (
    <Link href={`/blog/${article.id}`} style={{ textDecoration: 'none' }}>
      <Card p="md" radius="md" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
          <Image src={src || NoImage.src} alt="article.image" />
        </AspectRatio>
        <Text
          color="dimmed"
          size="xs"
          transform="uppercase"
          weight={700}
          mt="md"
        >
          {article.date}
        </Text>
        <Text className={classes.title} mt={5}>
          {article.title}
        </Text>
      </Card>
    </Link>
  );
};
