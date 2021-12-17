import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Blog = (props) => {
    const { name, title, discripation, img, date } = props.blog

    return (
        <Grid item sx={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Box>
                        <img width="60" src={img} alt="" srcset="" />
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            {name}
                        </Typography>

                        <Typography variant="caption">
                            {date}
                        </Typography>

                    </Box>
                </Box>
                <Box>

                    <Typography variant="h5" sx={{ fontWeight: 600, py: 3 }}>
                        {title}
                    </Typography>

                    <Typography variant="caption" sx={{ color: "gray", }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero voluptatem numquam dolore libero quasi, iusto dolores beatae obcaecati ut aspernatur veniam animi! Maxime est unde dolor consequatur enim perferendis?
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Blog;