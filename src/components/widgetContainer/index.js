

import React from 'react';
import { Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CancelIcon from '@mui/icons-material/Cancel';
import CategoryIcon from '@mui/icons-material/Category';
import Widget from '../widget';
import { calculateTotalPrice } from '../../helpers/calculate-item';



const WidgetContainer = ({
    inventoryData
}) => {


    const data = [
        {
          title: 'Total Product',
          value: inventoryData?.length,
          icon: <ShoppingCartIcon />,
        },
        {
          title: 'Total Store Value',
          value: calculateTotalPrice(inventoryData, "totalPrice"),
          icon: <AttachMoneyIcon />,
        },
        {
          title: 'Out of Stocks',
          value: calculateTotalPrice(inventoryData, 'outOfStock'),
          icon: <CancelIcon />,
        },
        {
          title: 'No of Category',
          value: calculateTotalPrice(inventoryData, 'category'),
          icon: <CategoryIcon />,
        },
      ];

    return (
        <Box display="flex" justifyContent="space-around" flexWrap="wrap" p={2} bgcolor="#1F1F1F">
        {data.map((item, index) => (
        <React.Fragment key={index}>
                <Widget
                    icon={item.icon}
                    title={item.title}
                    value={item.value}
                />
        </React.Fragment>
        ))}
        </Box>
    );
};

export default WidgetContainer;
