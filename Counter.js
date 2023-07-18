import React from 'react'
import { useState } from 'react';
import './Style.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
function Counter() {
    const [like, setLike] = useState(0);
    // const[state,setState] = useState(initialvalue);
    const [dislike, setDisLike] = useState(0);
    const StyledBadge = styled(Badge) (({ theme }) => ({
      '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }));
    return (
      <div >
        <button className='Counter'onClick={() => setLike(like + 1)}> 
         <IconButton aria-label="cart">
         <StyledBadge badgeContent={like} color="secondary">
         <ThumbUpIcon color='primary' />
         </StyledBadge>
          </IconButton> </button>
  
        <button className='Counter'onClick={() => setDisLike(dislike + 1)}> 
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={dislike} color="secondary">
        <ThumbDownAltIcon color='grey'/>
        </StyledBadge>
        </IconButton>
        </button>
      </div>
    );
  }

export default Counter