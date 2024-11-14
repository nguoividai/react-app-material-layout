import { Helmet } from 'react-helmet-async';
import { CONFIG } from 'src/config-global';
import AppCreateLayout from 'src/sections/apps/AppCreateLayout';

export default function AppDetail() {
  return (
    <>
      <Helmet>
        <title> {`Blog - ${CONFIG.appName}`}</title>
      </Helmet>

      <AppCreateLayout />
    </>
  );
}
