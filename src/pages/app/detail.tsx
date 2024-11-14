import { Helmet } from 'react-helmet-async';
import { CONFIG } from 'src/config-global';
import AppDetailLayout from 'src/sections/apps/Detail/AppDetailLayout';

export default function AppDetail() {
  return (
    <>
      <Helmet>
        <title> {`App - ${CONFIG.appName}`}</title>
      </Helmet>

      <AppDetailLayout />
    </>
  );
}
