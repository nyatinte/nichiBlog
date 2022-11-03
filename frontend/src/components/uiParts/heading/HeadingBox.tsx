import { Title, TitleProps } from '@mantine/core';
import { ReactNode } from 'react';

type HeadingBoxProps = {
  children: ReactNode;
} & Omit<TitleProps, 'children'>;

export const HeadingBox = ({ children, ...props }: HeadingBoxProps) => {
  return (
    <Title
      order={2}
      style={{
        display: 'box',
        color: '#494949',
        backgroundColor: '#f4f4f4',
        borderLeft: 'solid 5px #7db4e6',
        borderBottom: 'solid 3px #d7d7d7',
        marginTop: '1.5rem',
        padding: '0.5rem 1rem',
      }}
      {...props}
    >
      {children}
    </Title>
  );
};
