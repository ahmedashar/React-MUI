import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export const MuiCard = () => {
    const cardData = [
        {
            image: "https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2",
            title: "React JS",
            description: "React JS is an open-source library used for mobile and web development. It enables developers to build reliable, fast, and scalable web applications. It works on the UI in the application and enables the creation of reusable UI components."
        },
        {
            image: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
            title: "Node JS",
            description: " Node. js (Node) is an Open Source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language."
        }, {
            image: "https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2",
            title: "React JS",
            description: "React JS is an open-source library used for mobile and web development. It enables developers to build reliable, fast, and scalable web applications. It works on the UI in the application and enables the creation of reusable UI components."
        }
    ]
    return (
        <>
            <Grid container>
                {cardData.map((item, key) => (
                    <Grid item xs={12} md={6} lg={4} mb={4}>
                        <Box width="320px" key={key} sx={{margin:"auto"}}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height={160}
                                    image={item.image}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography variant='h5' component="p">{item.title}</Typography>
                                    <Typography variant='body2' color="text.secondary">{item.description}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small'>Share</Button>
                                    <Button size='small'>Learn More</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                ))}

            </Grid>
        </>
    )
}

// 1. Card (wrapper)
// 2. CardMedia (self closing) --> component, height, image, alt
// 3. CardContent (for content)
// 4. CardActions (for buttons)