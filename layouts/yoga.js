import Image from 'next/image';
import YogaContainer from 'components/containers/YogaContainer';
import styles from './bloglayout.module.css';
import Link from 'next/link';

export default function YogaLayout({ children, content }) {
  return (
    <YogaContainer teacher={content.teacher} date={content.date}>
      <article className={styles.contentContainer}>
        <h1>
          {content.yogatype} -{' '}
          <a
            target='_blank'
            href={`https://www.instagram.com/${content.teacherInstagram}`}
          >
            @{content.teacherInstagram}
          </a>
        </h1>
        <h5>Class Duration: {content.sessionDuration} minutes</h5>
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
        <div className={styles.contentTextContainer}>{children}</div>
        <Link href='/yoga'>
          <a>Back to Yoga</a>
        </Link>
      </article>
    </YogaContainer>
  );
}
