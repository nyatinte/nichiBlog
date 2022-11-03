import { AspectRatio, Box, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: '50%',
    textAlign: 'center',
    fontFamily: 'monospace',
    backgroundImage: `repeating-linear-gradient(135deg, white, white 3px, ${theme.colors.gray[2]} 3px, ${theme.colors.gray[2]} 5px )`,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  year: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 'bold',
  },
  monthDay: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 900,
  },
  week: {
    fontSize: theme.fontSizes.xs,
    fontWeight: 'bold',
    color: theme.colors.gray[8],
  },
}));

type CircleDateProps = {
  date: Date;
  size?: number;
  color?: string;
};

export const CircleDate = ({
  date,
  size = 75,
  color = '#f7fee7',
}: CircleDateProps) => {
  const { classes } = useStyles();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const monthFormat = month < 10 ? `0${month}` : month;
  const day = date.getDate();
  const dayFormat = day < 10 ? `0${day}` : day;

  const weekList = [
    'SUN DAY',
    'MON DAY',
    'TUE DAY',
    'WED DAY',
    'THU DAY',
    'FRI DAY',
    'SAT DAY',
  ];
  const week = date.getDay();
  return (
    <AspectRatio
      ratio={1}
      className={classes.root}
      style={{
        width: size,
        backgroundColor: color,
      }}
    >
      <Box className={classes.container}>
        <Box className={classes.year}>{year}</Box>
        <Box className={classes.monthDay}>
          {monthFormat}/{dayFormat}
        </Box>
        <Box className={classes.week}>{weekList[week]}</Box>
      </Box>
    </AspectRatio>
  );
};
