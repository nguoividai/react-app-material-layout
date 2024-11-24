import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

type OrderLineCardProps = {
  orderId: string;
  table: string;
  items: any;
  status: string;
  time: any;
};
type ColorItem = { bg: string; btn: string };
type Color = {
  [key: string]: ColorItem;
};

const color: Color = {
  'Wait List': {
    bg: '#FFE2DE',
    btn: '#D04910',
  },
  'In Kitchen': {
    bg: '#C1EAE4',
    btn: '#0D5D5B',
  },
  Ready: {
    bg: '#E8D4ED',
    btn: '#683088',
  },
  Served: {
    bg: '',
    btn: '#023D03',
  },
};

const OrderLineCard: React.FC<OrderLineCardProps> = ({ orderId, table, items, time, status }) => (
  <Card
    sx={{
      borderRadius: '15px',
      backgroundColor: color[status]?.bg,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '10px',
      minWidth: 300,
    }}
  >
    <CardContent>
      {/* Order ID và Table */}
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={1}>
        <Typography variant="body1" fontWeight="bold">
          Order #{orderId}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Table {table}
        </Typography>
      </Box>

      {/* Số lượng Items */}
      <Typography variant="h6" color="textPrimary" marginBottom={1}>
        Item: {items}
      </Typography>

      {/* Thời gian */}
      <Typography variant="body2" color="textSecondary" marginBottom={2}>
        {time}
      </Typography>

      {/* Nút trạng thái */}
      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: color[status]?.btn,
          color: '#fff',
          textTransform: 'none',
          borderRadius: '20px',
        }}
      >
        {status}
      </Button>
    </CardContent>
  </Card>
);

export default React.memo(OrderLineCard);
