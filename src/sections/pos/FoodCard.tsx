import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import convertToCurrency from 'src/utils/convert-to-currency';

type FoodCardProps = {
  categoryName: string;
  name: string;
  price: number;
};

const FoodCard: React.FC<FoodCardProps> = ({ categoryName, name, price }) => (
  <Card sx={{ height: '100%' }}>
    <CardMedia component="img" alt="green iguana" height="140" image="src/assets/food.jpg" />
    <CardContent sx={{ pb: '4px !important' }}>
      <Typography gutterBottom variant="caption" component="div">
        {categoryName}
      </Typography>
      <Typography gutterBottom variant="button" component="div">
        {name}
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
        {convertToCurrency(price)}
      </Typography>
    </CardContent>
  </Card>
);

export default React.memo(FoodCard);
