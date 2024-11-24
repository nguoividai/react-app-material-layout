import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import TuneIcon from '@mui/icons-material/Tune';
import ListIcon from '@mui/icons-material/List';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FoodCard from 'src/sections/pos/FoodCard';

import SearchIcon from '@mui/icons-material/Search';

const categories = [
  {
    name: 'Dishes',
    total: 15,
    isActive: true,
  },
  { name: 'Fast Food', total: 100 },
  { name: 'Fine Dining', total: 50 },
  { name: 'Casual Dining', total: 200 },
  { name: 'Cafes', total: 150 },
  { name: 'Buffets', total: 30 },
  { name: 'Sushi', total: 10 },
  { name: 'Pizza', total: 15 },
  { name: 'Burgers', total: 2 },
  { name: 'Seafood', total: 18 },
];

const seedFoodItems = [
  { name: 'Grilled Salmon', categoryName: 'Seafood', price: 18.99 },
  { name: 'Lobster Tail', categoryName: 'Seafood', price: 25.5 },
  { name: 'Shrimp Scampi', categoryName: 'Seafood', price: 14.99 },
  { name: 'Crab Cakes', categoryName: 'Seafood', price: 16.75 },
  { name: 'Mussels in White Wine Sauce', categoryName: 'Seafood', price: 12.5 },
  { name: 'Fish Tacos', categoryName: 'Seafood', price: 10.99 },
  { name: 'Seafood Paella', categoryName: 'Seafood', price: 22.0 },
  { name: 'Fried Calamari', categoryName: 'Seafood', price: 13.25 },
  { name: 'Oysters Rockefeller', categoryName: 'Seafood', price: 20.0 },
  { name: 'Tuna Sashimi', categoryName: 'Seafood', price: 19.99 },
  { name: 'Clam Chowder', categoryName: 'Seafood', price: 9.99 },
  { name: 'Seared Scallops', categoryName: 'Seafood', price: 21.5 },
  { name: 'Octopus Salad', categoryName: 'Seafood', price: 17.0 },
  { name: 'Grilled Swordfish', categoryName: 'Seafood', price: 20.5 },
  { name: 'Salmon Sushi', categoryName: 'Seafood', price: 12.75 },
  { name: 'Ceviche', categoryName: 'Seafood', price: 13.0 },
  { name: 'Fish and Chips', categoryName: 'Seafood', price: 11.5 },
  { name: 'Seafood Risotto', categoryName: 'Seafood', price: 19.0 },
  { name: 'Blackened Catfish', categoryName: 'Seafood', price: 15.0 },
  { name: 'Grilled Shrimp Skewers', categoryName: 'Seafood', price: 16.25 },
];

function App() {
  return (
    <Grid container spacing={3} padding={3}>
      <Grid
        item
        xs={12}
        md={5}
        lg={4}
        sx={{
          p: 4,
          backgroundColor: '#F7F8FA',
          '& .category': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            backgroundColor: '#fff',
            p: 2,
            mt: 2,
            mb: 2,
            borderRadius: 1,
            cursor: 'pointer',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          },
          '& .MuiChip-root': {
            backgroundColor: '#ECEDEF',
            color: '#333',
          },
          '& .active': {
            border: '2px solid #1877F2',
            color: 'primary.main',
            '& .MuiTypography-root': {
              fontWeight: 600,
            },
            '& .MuiChip-root': {
              backgroundColor: 'primary.main',
              color: '#fff',
            },
          },
        }}
      >
        <Typography variant="h4"> Dishes Categories </Typography>
        {categories.map((category) => (
          <Box className={category.isActive ? 'category active' : 'category'} key={category.name}>
            <Typography>{category.name}</Typography>
            <Chip
              label={category.total}
              color="primary"
              sx={{
                fontSize: 12,
                height: 24,
                width: 24,
                '& .MuiChip-label': { p: 0, fontSize: 10 },
              }}
            />
          </Box>
        ))}
        <Button startIcon={<AddCircleIcon />} variant="contained" sx={{ width: '100%', mt: 2 }}>
          Add New Category
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        lg={8}
        sx={{
          p: 4,
          backgroundColor: '#fff',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6"> Dishes (12) </Typography>
          <Box display="flex" alignItems="center">
            <TextField
              id="input-with-icon-textfield"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              sx={{ mr: 2 }}
            />
            <ButtonGroup aria-label="Basic button group" sx={{ backgroundColor: '#fff' }}>
              <Button variant="contained">
                <ListAltIcon />
              </Button>
              <Button variant="outlined">
                <ListIcon />
              </Button>
            </ButtonGroup>
            <Button startIcon={<TuneIcon />} variant="outlined" sx={{ width: 125, ml: 2 }}>
              Filter
            </Button>
          </Box>
        </Box>

        <Grid container spacing={5} mt={2}>
          {seedFoodItems.map((e) => (
            <Grid key={e.name} item xs={4}>
              <FoodCard name={e.name} categoryName={e.categoryName} price={e.price} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
