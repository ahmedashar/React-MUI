import { ImageList, ImageListItem, Stack, Box, ImageListItemBar } from '@mui/material'
import React from 'react'
const imgData = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFx557XPIXXmnhk7joe2Pq2uQhb1iCJ688RgQZzH5ZA&s", title: "A majestic mountain range bathed in golden sunlight" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0va-Y5gI_CwfAIlHes8kpl0pa_H5A1eAwYlRLivX-LiFpwQHA4VC0adh1Ng1ZDvLETII&usqp=CAU", title: "A playful cat chasing a ball of yarn" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhXSM8hxLjZYThXiSUGP0x1QCn9Gc3dFtJoWjDNzGIw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhXSM8hxLjZYThXiSUGP0x1QCn9Gc3dFtJoWjDNzGIw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Ikk90mUOvu_9s8GQ_K83DPP7BaW5EFo7qiIhGBVz9w&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMm6czgdy0VJqh95gOkZaHRlLfo5ZzkpNJ26nvjOXpyw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvURjlN23_YdIjkC-_VBJrqJbDDZ2fo_cqqrCwpYHUnw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFx557XPIXXmnhk7joe2Pq2uQhb1iCJ688RgQZzH5ZA&s", title: "A majestic mountain range bathed in golden sunlight" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0va-Y5gI_CwfAIlHes8kpl0pa_H5A1eAwYlRLivX-LiFpwQHA4VC0adh1Ng1ZDvLETII&usqp=CAU", title: "A playful cat chasing a ball of yarn" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhXSM8hxLjZYThXiSUGP0x1QCn9Gc3dFtJoWjDNzGIw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhXSM8hxLjZYThXiSUGP0x1QCn9Gc3dFtJoWjDNzGIw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Ikk90mUOvu_9s8GQ_K83DPP7BaW5EFo7qiIhGBVz9w&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMm6czgdy0VJqh95gOkZaHRlLfo5ZzkpNJ26nvjOXpyw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvURjlN23_YdIjkC-_VBJrqJbDDZ2fo_cqqrCwpYHUnw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFx557XPIXXmnhk7joe2Pq2uQhb1iCJ688RgQZzH5ZA&s", title: "A majestic mountain range bathed in golden sunlight" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0va-Y5gI_CwfAIlHes8kpl0pa_H5A1eAwYlRLivX-LiFpwQHA4VC0adh1Ng1ZDvLETII&usqp=CAU", title: "A playful cat chasing a ball of yarn" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhXSM8hxLjZYThXiSUGP0x1QCn9Gc3dFtJoWjDNzGIw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhXSM8hxLjZYThXiSUGP0x1QCn9Gc3dFtJoWjDNzGIw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Ikk90mUOvu_9s8GQ_K83DPP7BaW5EFo7qiIhGBVz9w&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMm6czgdy0VJqh95gOkZaHRlLfo5ZzkpNJ26nvjOXpyw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvURjlN23_YdIjkC-_VBJrqJbDDZ2fo_cqqrCwpYHUnw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFx557XPIXXmnhk7joe2Pq2uQhb1iCJ688RgQZzH5ZA&s", title: "A majestic mountain range bathed in golden sunlight" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0va-Y5gI_CwfAIlHes8kpl0pa_H5A1eAwYlRLivX-LiFpwQHA4VC0adh1Ng1ZDvLETII&usqp=CAU", title: "A playful cat chasing a ball of yarn" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhXSM8hxLjZYThXiSUGP0x1QCn9Gc3dFtJoWjDNzGIw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhXSM8hxLjZYThXiSUGP0x1QCn9Gc3dFtJoWjDNzGIw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Ikk90mUOvu_9s8GQ_K83DPP7BaW5EFo7qiIhGBVz9w&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMm6czgdy0VJqh95gOkZaHRlLfo5ZzkpNJ26nvjOXpyw&s", title: "A bustling city street at night" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvURjlN23_YdIjkC-_VBJrqJbDDZ2fo_cqqrCwpYHUnw&s", title: "A bustling city street at night" },

];
export const MuiImageList = () => {
    return (
        <>
            <Stack spacing={4}>
                <ImageList
                    sx={{ width: 500, height: 450 }}
                    cols={3}
                    rowHeight={160}
                >
                    {imgData.map((item, key) => (
                        <ImageListItem key={key}>
                            <img src={item.img} alt={item.title} />
                            <ImageListItemBar title={item?.title} />
                        </ImageListItem>
                    ))}
                </ImageList>

                <ImageList
                    variant='woven'
                    sx={{ width: 500, height: 450 }}
                    cols={3}
                    rowHeight={160}
                    gap={3}
                >
                    {imgData.map((item, key) => (
                        <ImageListItem key={key}>
                            <img src={item.img} alt={item.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
                {/* dynamic sizing */}
                <Box sx={{ width: 500, height: 450, overflowY:"scroll" }}>
                    <ImageList
                        variant='masonry'
                        cols={3}
                        gap={6}
                    >
                        {imgData.map((item, key) => (
                            <ImageListItem key={key}>
                                <img src={item.img} alt={item.title} loading='lazy' />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Stack>

        </>
    )
}

// 1. ImageList --> sx, cols, rowHeight, variant (masonry, woven)
// 2. ImageListItem    
// 3. ImageListItemBar