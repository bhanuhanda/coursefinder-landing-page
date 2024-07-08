import { Box, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useEffect, useState } from 'react';
import { breakpoints, testimonies } from '../helpers/constants';
import { CarouselCard } from '../styles';

const typographySx={
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '4',
    WebkitBoxOrient: 'vertical',
};

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(null);

  const handleBeforeChange = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  useEffect(() => {
    const items = document.querySelectorAll('.react-multi-carousel-item');
    items.forEach((item) => {
        item.classList.remove('middle-item');
    });

    const activeItems = document.querySelectorAll('.react-multi-carousel-item--active');
    if(activeItems.length > 1) {
        activeItems[1]?.classList.add('middle-item');
    }
  }, [currentSlide]);

  return (
    <Box sx={{ position: 'relative', width: '80%', height: '350px' }}>
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            centerMode={false}
            draggable
            focusOnSelect
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={true}
            responsive={breakpoints}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            showDots
            slidesToSlide={1}
            swipeable
            beforeChange={handleBeforeChange}
        >
            {testimonies.map((card) => {
                return (
                    <CarouselCard key={card.id}>
                        <FormatQuoteIcon fontSize='large' color='primary' sx={{ transform: 'rotate(180deg)' }} />
                        <Typography sx={typographySx} my={3}>{card.quote}</Typography>
                        <Typography variant='h6'>{card.authorName}</Typography>
                        <Typography>{card.authorDesc}</Typography>
                    </CarouselCard>
                )
            })}
        </Carousel>
    </Box>
  )
}

export default CarouselComponent