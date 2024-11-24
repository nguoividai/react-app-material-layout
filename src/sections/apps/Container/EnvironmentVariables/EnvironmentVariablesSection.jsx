import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Editor } from '@monaco-editor/react';

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
            <Editor
              height={500}
              language="json"
              defaultValue={JSON.stringify(JSON.parse('{}'), null, 1)}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default React.memo(EnvironmentVariablesSection);
