import React from 'react';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import ImageCard from '../../Components/ImageCard/ImageCard.component'
import NikeAirForceOne from '../../Assets/NikeAirForceOne.png'
import FruitCake from '../../Assets/FruitCake.png'
import LemonPie from '../../Assets/LemonPie.png'
import QrCode from '../../Assets/QrCode.png'

const items = [
    {
        title: 'Nike AirForce One',
        cover: NikeAirForceOne,
        url: "https://devimages-cdn.apple.com/ar/photogrammetry/AirForce.usdz",
    },
    {
        title: 'Fruit Cake',
        cover: FruitCake,
        url: "https://devimages-cdn.apple.com/ar/photogrammetry/FruitCakeSlice.usdz"
    },
    {
        title: 'Lemon Meringue Pie',
        cover: LemonPie,
        url: "https://devimages-cdn.apple.com/ar/photogrammetry/LemonMeringuePie.usdz",
    }
]


function Items() {
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                    <div>
                        <h1>Scan here, only works with Ios and Safari</h1>
                    </div>
                    <div>
                        <img src={QrCode}></img>
                    </div>
                </Grid>
                {items.map((item, index) => {
                    console.log(item);
                    return <Slide direction="left" in={true} key={index}
                        style={{ transitionDelay: index * 50 }}
                        mountOnEnter unmountOnExit>
                        <Grid item xs={12} md={4}>
                            <ImageCard card={item} index={index} />
                        </Grid>
                    </Slide>
                })}
            </Grid>
        </div>
    );
}

export default Items; 
