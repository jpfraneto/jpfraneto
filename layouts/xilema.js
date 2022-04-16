import Image from 'next/image';
import XilemaContainer from '../components/Containers/XilemaContainer';
import styles from './xilema.module.css';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import ButtonBack from '../components/Layout/ButtonBack';

export default function XilemaLayout({ children, content }) {
  return (
    <XilemaContainer title={`· jp · xilema · ${content.title}`}>
      <article className={styles.contentContainer}>
        <h2>{content.title}</h2>
        <Image src={content.imageUrl} width='350' height='350' />

        <div className={styles.contentTextContainer}>{children}</div>

        <ButtonBack linkReference='/xilema' msg='Back to Xilema' />
      </article>
    </XilemaContainer>
  );
}
