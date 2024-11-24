import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  Badge,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Box,
} from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import Food from 'src/assets/food.jpg';
import OrderLineCard from 'src/sections/pos/OrderLineCard';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PrintIcon from '@mui/icons-material/Print';

const orders = [
  { orderId: 'F0027', table: '03', items: '8X', time: '2 mins ago', status: 'In Kitchen' },
  { orderId: 'F0028', table: '07', items: '3X', time: 'Just Now', status: 'Wait List' },
  { orderId: 'F0029', table: '02', items: '10X', time: '10 mins ago', status: 'Ready' },
  { orderId: 'F0030', table: '12', items: '9X', time: 'Just Now', status: 'Served' },
  { orderId: 'F0031', table: '22', items: '2X', time: 'Just Now', status: 'Served' },
  { orderId: 'F0032', table: '23', items: '1X', time: 'Just Now', status: 'Served' },
];

function App() {
  const [tab, setTab] = useState<Number>(0);
  const [paymentMethod, setPaymentMethod] = useState<String>('cash');
  const [foods, setFoods] = useState([
    { name: 'Grilled Salmon Steak', price: 15, quantity: 1 },
    { name: 'Tofu Poke Bowl', price: 7, quantity: 1 },
    { name: 'Pasta with Roast Beef', price: 10, quantity: 1 },
    { name: 'Beef Steak', price: 30, quantity: 1 },
    { name: 'Shrimp Rice Bowl', price: 6, quantity: 1 },
    { name: 'Apple Stuffed Pancake', price: 35, quantity: 1 },
  ]);

  const increaseQuantity = (item: (typeof foods)[0]) => {
    setFoods((s) =>
      s.map((food) => (food.name === item.name ? { ...food, quantity: food.quantity + 1 } : food))
    );
  };

  const decreaseQuantity = (item: (typeof foods)[0]) => {
    setFoods((s) =>
      s.map((food) =>
        food.name === item.name
          ? { ...food, quantity: food.quantity - 1 <= 0 ? 1 : food.quantity - 1 }
          : food
      )
    );
  };
  return (
    <Grid container spacing={3} padding={3}>
      {/* Order Line */}
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom mb={2}>
          Order Line
        </Typography>
        <Grid container spacing={2}>
          {['All', 'Dine in', 'Wait List', 'Take Away', 'Served'].map((status, index) => (
            <Grid item key={index}>
              <Badge badgeContent={index * 20 + 10} color="error">
                <Button
                  variant={index === 0 ? 'contained' : 'outlined'}
                  color={index === 0 ? 'primary' : 'secondary'}
                >
                  {status}
                </Button>
              </Badge>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', overflowX: 'auto', mt: 2, pt: 2, pb: 2 }}>
          {orders.map((order, index) => (
            <Box key={index} sx={{ pr: 2 }}>
              <OrderLineCard {...order} />
            </Box>
          ))}
        </Box>
      </Grid>

      {/* Foodies Menu */}
      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom>
          Foodies Menu
        </Typography>
        <Tabs value={tab} variant="scrollable" scrollButtons="auto">
          {['All Menu', 'Special', 'Soups', 'Desserts', 'Chickens'].map((e, index) => (
            <Tab label={e} key={index} onClick={() => setTab(index)} />
          ))}
        </Tabs>
        <Grid container spacing={2} marginTop={2}>
          {foods.map((item, index) => (
            <Grid item xs={6} sm={4} key={item.name}>
              <Card
                sx={{
                  '& .MuiCardActions-root': { display: 'flex', justifyContent: 'space-between' },
                  '& .food-img': {
                    mt: 2,
                    borderRadius: 1,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  <Box className="food-img" component="img" src={Food} alt="food" />
                </CardContent>
                <CardActions>
                  <Typography variant="h6" color="primary">
                    ${item.price.toFixed(2)}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <IconButton onClick={() => decreaseQuantity(item)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1" mx={2}>
                      {item.quantity}
                    </Typography>
                    <IconButton onClick={() => increaseQuantity(item)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Order Details */}
      <Grid item xs={12} md={4} sx={{ '& .MuiCard-root': { mt: 2 } }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Table No #04
            </Typography>
            <List>
              {foods.map((item, index) => (
                <ListItem key={index} divider={index < foods.length - 1}>
                  <ListItemText
                    primary={`${item.quantity}x ${item.name}`}
                    secondary={`$${item.price.toFixed(2)}`}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Payment Summary
            </Typography>
            <List
              sx={{
                '&  .MuiListItemText-root': {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
                '& .MuiTypography-root': {
                  textTransform: 'uppercase',
                },
              }}
            >
              <ListItem divider>
                <ListItemText primary="Subtotal" secondary="$67.00" />
              </ListItem>
              <ListItem divider>
                <ListItemText primary="Tax" secondary="$4.00" />
              </ListItem>
              <ListItem divider>
                <ListItemText primary="Tip" secondary="$1.00" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Total" secondary="$72.00" />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Payment Method</Typography>

            <Grid container spacing={2} mt={2}>
              <Grid item xs={6}>
                <Button
                  variant={paymentMethod === 'cash' ? 'contained' : 'outlined'}
                  color={paymentMethod === 'cash' ? 'success' : 'primary'}
                  startIcon={<AttachMoneyIcon />}
                  sx={{ width: '100%' }}
                  onClick={() => setPaymentMethod('cash')}
                >
                  Cash
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant={paymentMethod === 'card' ? 'contained' : 'outlined'}
                  color={paymentMethod === 'card' ? 'success' : 'primary'}
                  sx={{ width: '100%' }}
                  startIcon={<CreditCardIcon />}
                  onClick={() => setPaymentMethod('card')}
                >
                  Card
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              sx={{ width: '100%', borderColor: '#ddd', color: '#858F9F' }}
              startIcon={<PrintIcon />}
              onClick={() => setPaymentMethod('cash')}
            >
              Print
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Button
              variant="contained"
              sx={{ width: '100%' }}
              onClick={() => setPaymentMethod('cash')}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
