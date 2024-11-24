import React, { useState } from 'react';
import LogsSection from 'src/sections/apps/Container/Logs/LogsSection';

const Logs = () => {
  const [state, setState] = useState();
  return <LogsSection />;
};

export default React.memo(Logs);
