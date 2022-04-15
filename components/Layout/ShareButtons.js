import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  InstagramShareButton,
  InstagramIcon,
} from 'next-share';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './ShareButtons.module.css';

const ShareButtons = () => {
  const router = useRouter();
  return (
    <div className={styles.shareContainer}>
      <h4>Share this piece:</h4>
      <FacebookShareButton url={'https://www.jpfraneto.com' + router.asPath}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <RedditShareButton url={'https://www.jpfraneto.com' + router.asPath}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton url={'https://www.jpfraneto.com' + router.asPath}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={'https://www.jpfraneto.com' + router.asPath}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButtons;
