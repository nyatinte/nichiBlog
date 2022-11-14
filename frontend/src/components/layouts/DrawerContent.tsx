import { Box, Container, createStyles } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'left',
  },
  linkWrapper: {
    borderBottom: '3px solid gray',
  },
  link: {
    fontFamily: 'Zen Maru Gothic, sans-serif',
    display: 'block',
    fontSize: 50,
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: '10px',
    '&:hover': {
      paddingLeft: '20px',
      transition: 'all 0.3s ease-in-out',
    },
  },
}));

type DrawerContentProps = {
  onClose: () => void;
  links: { label: string; link: string }[];
};
export const DrawerContent = ({ onClose, links }: DrawerContentProps) => {
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      {links.map((link) => (
        <Box key={link.label} mb="md" className={classes.linkWrapper}>
          <Link href={link.link} onClick={onClose} className={classes.link}>
            {link.label}
          </Link>
        </Box>
      ))}
    </Container>
  );
};
