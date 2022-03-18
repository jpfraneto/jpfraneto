import styles from './LandingContainer.module.css';

const LandingContainer = () => {
  return (
    <div>
      <div style='position: relative; padding-bottom: 62.5%; height: 0;'>
        <iframe
          src='https://www.loom.com/embed/93e6345a1f01476496641a8815d07074'
          frameborder='0'
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
        ></iframe>
      </div>
    </div>
  );
};

export default LandingContainer;
