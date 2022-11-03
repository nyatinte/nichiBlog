import { Prism } from '@mantine/prism';
import type { Language } from 'prism-react-renderer';
import type { ComponentProps } from 'react';

type CodeBlockProps = {
  children?: string;
} & ComponentProps<'code'>;
export const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const language = (className?.replace(/language-/, '') ?? 'bash') as Language;
  return (
    <>
      <Prism
        colorScheme="dark"
        withLineNumbers
        language={language}
        copyLabel="クリップボードにコピー"
        copiedLabel="コピーしました!"
      >
        {children ?? ''}
      </Prism>
    </>
  );
};
