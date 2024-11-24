import React, { useState } from 'react';
import EnvironmentVariablesSection from 'src/sections/apps/Container/EnvironmentVariables/EnvironmentVariablesSection';

const EnvironmentVariables = () => {
  const [state, setState] = useState();
  return <EnvironmentVariablesSection />;
};

export default React.memo(EnvironmentVariables);
