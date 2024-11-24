import { Helmet } from 'react-helmet-async';
import { CONFIG } from 'src/config-global';
import AppContainerLayout from 'src/sections/apps/Detail/AppContainerLayout';

export default function Container() {
  return (
    <>
      <Helmet>
        <title> {`App - ${CONFIG.appName}`}</title>
      </Helmet>

      <AppContainerLayout />
    </>
  );
}
