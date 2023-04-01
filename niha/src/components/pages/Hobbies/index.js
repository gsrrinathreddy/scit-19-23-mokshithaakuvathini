import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.ID5ev9w6d6ethyBkp7dtcAHaE8&pid=Api&P=0',
    title: 'Badminton',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.s2s2eHdYaHlQQgUYCI3HywHaE6&pid=Api&P=0',
    title: 'cricket',
    
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.u6eH7BfhTApc1T2kBXxmSgHaEo&pid=Api&P=0',
    title: 'Music',
    
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.OnrLhgJa8D4hqltu3wY1mAHaE7&pid=Api&P=0',
    title: 'Cooking',
    
    cols: 2,
  },
];