import Image from 'next/image';
import ProgrammingContainer from '../components/Containers/ProgrammingContainer';
import styles from './programming.module.css';
import Link from 'next/link';
import ReactPlayer from 'react-player';

export default function ProgrammingLayout({ children, content }) {
  return (
    <ProgrammingContainer music={content.music} date={content.date}>
      <article className={styles.contentContainer}>
        <h2>{content.title}</h2>
        <h3>
          Session {content.index} - {content.date}
        </h3>
        {content.sessionDuration && (
          <h5>Duration: {content.sessionDuration} </h5>
        )}
        <div className={styles.musicBtnContainer}>
          <a className={styles.musicBtn} href={content.music} target={'_blank'}>
            Play This Sessions Music
          </a>
        </div>

        {content.loomRecording && (
          <div className={styles.loomRecordingContainer}>
            <div
              style={{
                position: 'relative',
                paddingBottom: 62.5 + '%',
                height: 0,
              }}
            >
              <iframe
                src={content.loomRecording.replace('share', 'embed')}
                frameborder='0'
                webkitAllowFullscreen
                mozAllowFullscreen
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>
          </div>
        )}

        <div className={styles.contentTextContainer}>{children}</div>
        <Link href={`/programming`}>
          <a>Back to programming</a>
        </Link>
      </article>
    </ProgrammingContainer>
  );
}
