import { LinkPreview } from '@dhaiwat10/react-link-preview';
import NoImage from 'images/noImage.png';

import { TooltipLink } from '../Link/TooltipLink';

type MetaData = {
  title: string | null;
  description: string | null;
  image: string | null;
  siteName: string | null;
  hostname: string | null;
};
const fetcher = async (url: string) => {
  const LINK_PRECIEW_SERVER_API =
    'https://js-linkpreview.herokuapp.com/api/link-preview/?url=';
  const CONFIG = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch(LINK_PRECIEW_SERVER_API + url, CONFIG);
  const data = await res.json();
  console.log(data);
  const {
    title,
    description,
    domain: siteName,
    img: image,
    requestUrl: hostname,
  } = data.data;
  return { title, description, image, siteName, hostname } as MetaData;
};

type LinkCardProps = {
  url: string;
};
export const LinkCard = ({ url }: LinkCardProps) => {
  return (
    <LinkPreview
      url={url}
      fetcher={fetcher}
      width="100%"
      imageHeight="200px"
      fallbackImageSrc={NoImage.src}
      fallback={<TooltipLink href={url}>{url}</TooltipLink>}
    />
  );
};
