import { Alert, AlertProps } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';

type AlertCardProps = {
  children?: React.ReactNode;
  title?: string;
} & AlertProps;
export const AlertCard = ({
  title = '注意',
  children,
  ...props
}: AlertCardProps) => {
  return (
    <Alert
      icon={<AlertCircle size={16} />}
      title={title}
      color="red"
      {...props}
    >
      {children}
    </Alert>
  );
};
