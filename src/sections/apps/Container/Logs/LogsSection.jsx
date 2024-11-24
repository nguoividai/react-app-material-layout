import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { LazyLog } from '@melloware/react-logviewer';

const EnvironmentVariablesSection = () => {
  const [state, setState] = useState();
  return (
    <Box
      sx={{
        '& .MuiCard-root': {
          mt: 3,
          mb: 3,
        },
        '& .actions': {
          borderTop: '1px solid #ddd',
          display: 'flex',
          justifyContent: 'end',
          backgroundColor: '#fafafa',

          '&.error': {
            backgroundColor: '#fff0f0',
          },
        },

        '& .MuiListItemText-secondary': {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      }}
    >
      <Card>
        <CardContent>
          <Box sx={{ minHeight: 500 }}>
            <LazyLog
              caseInsensitive
              enableHotKeys
              enableSearch
              extraLines={1}
              height="520"
              selectableLines
              url="https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default React.memo(EnvironmentVariablesSection);
