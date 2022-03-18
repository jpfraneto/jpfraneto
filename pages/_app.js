import BottomNavbar from '../components/Layout/BottomNavbar';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BottomNavbar />
    </>
  );
}

export default App;
