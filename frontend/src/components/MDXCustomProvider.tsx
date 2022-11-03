import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';

import { CodeBlock } from './uiParts/code/CodeBlock';
import { SpaceDivider } from './uiParts/divider/spaceDivider';
import { TooltipLink } from './uiParts/Link/PaddingLink';

const components = {
  code: CodeBlock,
  a: TooltipLink,
  hr: SpaceDivider,
};

const MDXCustomProvider = ({ children }: { children: ReactNode }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXCustomProvider;
