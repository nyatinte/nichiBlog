import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import fs from 'fs';

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

for (let i = 0; i < process.argv.length; i++) {
  console.log(i, process.argv[i]);
}

const template = createTemplate(process.argv[2], process.argv[3]);

// 上書き保存を防ぐために、ファイルが存在しない場合のみ保存する
if (fs.existsSync(`./src/pages/blog/${process.argv[2]}.mdx`)) {
  console.error('既にファイルが存在しています');
  process.exit(1);
}
fs.writeFileSync(`./src/pages/blog/${process.argv[2]}.mdx`, template);
