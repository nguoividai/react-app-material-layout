import React from 'react';

import { Button } from '@mui/material';
import { Iconify } from 'src/components/iconify';
import FormSectionView from 'src/components/form-section-view';
import AppCreateForm from 'src/sections/apps/AppCreateForm';

function TestView() {
  return (
    <FormSectionView title="Test Create">
      <AppCreateForm />
    </FormSectionView>
  );
}

export default React.memo(TestView);
