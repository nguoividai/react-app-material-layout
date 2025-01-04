import React from 'react';
import FormSectionView from 'src/components/form-section-view';
import AppCreateForm from 'src/sections/apps/AppCreateForm';

function TestView() {
  return (
    <FormSectionView
      title="Test Create"
      breadcrumbs={[
        { title: 'Dashboard', route: '/' },
        { title: 'Test', route: '/test' },
        { title: 'Create' },
      ]}
    >
      <AppCreateForm />
    </FormSectionView>
  );
}

export default React.memo(TestView);
