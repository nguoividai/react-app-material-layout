import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Chip,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import FoodCard from 'src/sections/pos/FoodCard';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

import ListAltIcon from '@mui/icons-material/ListAlt';
import TuneIcon from '@mui/icons-material/Tune';
import ListIcon from '@mui/icons-material/List';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const increaseDate = () => {
    setSelectedDate((s) => dayjs(s).add(1, 'day'));
  };
  const decreaseDate = () => {
    setSelectedDate((s) => dayjs(s).subtract(1, 'day'));
  };
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
        <Box display="flex" alignItems="center" mb={3} sx={{ '& .MuiBadge-root': { mr: 2 } }}>
          <Badge badgeContent={4} color="primary">
            <Button variant="outlined" color="secondary">
              All
            </Button>
          </Badge>
          <Badge badgeContent={12} color="primary">
            <Button variant="outlined" color="secondary">
              On Dine
            </Button>
          </Badge>
          <Badge badgeContent={8} color="primary">
            <Button variant="outlined" color="secondary">
              Reservation
            </Button>
          </Badge>
          <Badge badgeContent={1} color="primary">
            <Button variant="outlined" color="secondary">
              Free
            </Button>
          </Badge>
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            '& .MuiBox-root ': {
              width: '100%',
              textAlign: 'center',
            },
          }}
        >
          <IconButton onClick={decreaseDate}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Box
            sx={{
              '& fieldset': { display: 'none' },
              '& input': { textAlign: 'center' },
              '& .MuiTextField-root': { width: '100%' },
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker value={selectedDate} onChange={(value: any) => setSelectedDate(value)} />
            </LocalizationProvider>
          </Box>
          <IconButton onClick={increaseDate}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <TextField placeholder="Search Customer..." size="small" fullWidth sx={{ pr: 2 }} />
          <Button variant="outlined" sx={{ height: '100%' }}>
            <TuneIcon />
          </Button>
        </Box>

        <Box
          mt={3}
          display="flex"
          alignItems="center"
          sx={{ backgroundColor: '#fff', borderRadius: 1, border: '1px solid #ddd', p: 2 }}
        >
          <Box className="time">7:30 AM</Box>
          <Box className="content">Customer name</Box>
        </Box>
        <Button startIcon={<AddCircleIcon />} variant="contained" sx={{ width: '100%', mt: 2 }}>
          Add New Reservation
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
