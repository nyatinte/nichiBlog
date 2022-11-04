import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';
import { ReactNode } from 'react';

import { CodeBlock } from './uiParts/code/CodeBlock';
import { SpaceDivider } from './uiParts/divider/spaceDivider';
import { HeadingBox } from './uiParts/heading/HeadingBox';
import { TooltipLink } from './uiParts/Link/TooltipLink';
import { MDXCustomText } from './uiParts/text/MDXCustomText';

const components = {
  code: CodeBlock,
  a: TooltipLink,
  hr: SpaceDivider,
  h2: HeadingBox,
  p: MDXCustomText,
} as MDXComponents;

const MDXCustomProvider = ({ children }: { children: ReactNode }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXCustomProvider;
