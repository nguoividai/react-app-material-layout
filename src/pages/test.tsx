import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import TestView from 'src/sections/test/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Test - ${CONFIG.appName}`}</title>
      </Helmet>

      <TestView />
    </>
  );
}
