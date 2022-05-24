import Image from 'next/image';
import SadhanaContainer from '../components/Containers/SadhanaContainer';
import styles from './sadhana.module.css';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import ButtonBack from '../components/Layout/ButtonBack';

export default function SadhanaLayout({ children, content }) {
  return (
    <SadhanaContainer music={content.music} date={content.date}>
      <article className={styles.contentContainer}>
        <h1>{content.sadhana}</h1>
        <h2>{content.title}</h2>
        <h3>
          Session {content.index} - {content.date}
        </h3>
        {content.sessionDuration && (
          <h5>Duration: {content.sessionDuration} </h5>
        )}
        {content.music && content.music ? (
          <a
            className={styles.musicLink}
            href={content.music}
            target={'_blank'}
          >
            Listen to the music of this day
          </a>
        ) : (
          <p>There is no music for today</p>
        )}

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
        <ButtonBack
          linkReference={`/sadhana/${content.sadhanaslug}`}
          msg='Back'
        />
      </article>
    </SadhanaContainer>
  );
}
