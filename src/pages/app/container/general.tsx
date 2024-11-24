import React, { useState } from 'react';
import GeneralForm from 'src/sections/apps/Container/General/GeneralForm';

const General = () => {
  const [state, setState] = useState();
  return <GeneralForm />;
};

export default React.memo(General);
