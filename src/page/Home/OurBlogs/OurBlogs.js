import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from "../../../img/people-1.png"
import img2 from "../../../img/people-2.png"
import img3 from "../../../img/people-3.png"
import Blog from '../Bolg/Blog';

const OurBlogs = () => {
    const blogs = [
        {
            name: "Dr, Caudi",
            title: "2 times of bursh in day can  keep you healthy",
            discripation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente tempore molestiae deleniti voluptas temporibus consectetur harum, veritatis quidem officia atque?",
            img: img1,
            date: "23 April 2019"

        },
        {
            name: "Dr, Rajesh",
            title: "2 times of bursh in day can  keep you healthy",
            discripation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente tempore molestiae deleniti voluptas temporibus consectetur harum, veritatis quidem officia atque?",
            img: img2,
            date: "23 April 2019"

        },
        {
            name: "Dr, Ruhol Amin",
            title: "2 times of bursh in day can  keep you healthy",
            discripation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente tempore molestiae deleniti voluptas temporibus consectetur harum, veritatis quidem officia atque?",
            img: img3,
            date: "23 April 2019"

        }
    ]
    return (
        <Container sx={{ height: "500px", }}>
            <Typography variant="h6" component="h4" sx={{ textAlign: 'center', fontWeight: 500, color: '#16E3E3' }
            } >
                Our Blog
            </Typography >
            <Typography variant="h4" component="h4" sx={{ textAlign: 'center', fontWeight: 400, color: "#161919", py: 4 }}>
                From Our Blogs News
            </Typography>
            <Grid container spacing={2}>
                {
                    blogs.map(blog => <Blog key={blog.name} blog={blog}> </Blog>)
                }
            </Grid>
        </Container >
    );
};

export default OurBlogs;