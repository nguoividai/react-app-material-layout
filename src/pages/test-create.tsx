import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import TestView from 'src/sections/test/view/create-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Test Create - ${CONFIG.appName}`}</title>
      </Helmet>

      <TestView />
    </>
  );
}
