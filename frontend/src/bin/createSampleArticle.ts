import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import fs from 'fs';

const createArticle = (id: string, title: string) => {
  const utcDate = new Date();
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  const jstString = format(jstDate, 'yyyy-MM-dd HH:mm:ss');

  const createTemplate = (id: string, title: string) => {
    return `import { ArticleLayout } from 'components/layouts/ArticleLayout';

export const meta = {
  id: '${id}',
  title: '${title}',
  date: '${jstString}',
  // image: '',
  published: true,
};

# ${title}

export default ({ children }) => (
  <ArticleLayout meta={meta}>{children}</ArticleLayout>
);

`;
  };

  const template = createTemplate(id, title);

  // 上書き保存を防ぐために、ファイルが存在しない場合のみ保存する
  if (fs.existsSync(`./src/pages/blog/${id}.mdx`)) {
    console.error('既にファイルが存在しています');
    return false;
  }
  fs.writeFileSync(`./src/pages/blog/${id}.mdx`, template);
};

for (let i = 1; i < 21; i++) {
  createArticle(`sample-${i}`, `サンプル記事${i}`);
}
