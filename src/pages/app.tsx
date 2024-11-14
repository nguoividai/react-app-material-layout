import { Helmet } from 'react-helmet-async';
import { CONFIG } from 'src/config-global';
import Apps from 'src/sections/apps';

export default function App() {
  return (
    <>
      <Helmet>
        <title> {`Blog - ${CONFIG.appName}`}</title>
      </Helmet>

      <Apps />
    </>
  );
}
