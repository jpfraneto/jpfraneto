import Image from 'next/image';
import Container from 'components/Container';
import styles from './bloglayout.module.css';

export default function BlogLayout({ children, content }) {
  return (
    <Container title={content.title} date={content.date}>
      <article className={styles.contentContainer}>
        <h1>{content.title}</h1>
        {content.author && (
          <h3 className={styles.authorText}>{content.author}</h3>
        )}
        {content.tags && (
          <h3>
            Posted in{' '}
            {content.tags?.split(',').map(x => (
              <span className={styles.tag}>{x}</span>
            ))}
          </h3>
        )}
        <h5>Estimated Reading Time: {content.estimatedReadingTime} minutes</h5>
        <hr />
        <div className={styles.contentTextContainer}>{children}</div>
      </article>
    </Container>
  );
}
