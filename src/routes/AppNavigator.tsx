import React, { useEffect } from 'react';

import { ENVIRONMENT } from 'config/config';
import AppStack from './AppStack';

const AppNavigator: React.FC = () => {
  useEffect(() => {
    console.info(`Environment: ${ENVIRONMENT}`);
  }, []);

  return <AppStack />;
};

export default AppNavigator;
