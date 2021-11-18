import React from 'react';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import ImageCard from '../../Components/ImageCard/ImageCard.component'

const books = [
    {
        title: 'Code Complete 2nd Ed.',
        subheader: 'by Steve McConnell',
        cover: 'https://images.gr-assets.com/books/1396837641l/4845.jpg',
        stars: 4,
        url: "https://devimages-cdn.apple.com/ar/photogrammetry/AirForce.usdz",
    },
    {
        title: 'Clean Code',
        subheader: 'by Robert Cecil Martin',
        cover: 'https://images.gr-assets.com/books/1436202607l/3735293.jpg',
        stars: 5,
        url: "https://devimages-cdn.apple.com/ar/photogrammetry/FruitCakeSlice.usdz"
    },
    {
        title: 'Working Effectively with Legacy Code',
        subheader: 'by Michael Feathers',
        cover: 'https://images.gr-assets.com/books/1348627451l/44919.jpg',
        stars: 4,
        url: "https://devimages-cdn.apple.com/ar/photogrammetry/LemonMeringuePie.usdz",
    }
]


function Books() {
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                    <div>
                        <h1>My Favorite Items</h1>
                    </div>
                </Grid>
                {books.map((book, index) => {
                    return <Slide direction="left" in={true} key={index}
                        style={{ transitionDelay: index * 50 }}
                        mountOnEnter unmountOnExit>
                        <Grid item xs={12} md={4}>
                            <ImageCard card={book} index={index} />
                        </Grid>
                    </Slide>
                })}
            </Grid>
        </div>
    );
}

export default Books; 
