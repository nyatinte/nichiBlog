import { Divider, DividerProps } from '@mantine/core';

type SpaceDividerProps = DividerProps;
export const SpaceDivider = (props: SpaceDividerProps) => {
  return (
    <Divider
      style={{
        padding: '1rem 0',
      }}
      {...props}
    />
  );
};
