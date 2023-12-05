import getSingleNews from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const page = async ({ params }) => {
    const { data: news } = await getSingleNews(params.id);
    return (
        <Box>
            <Container className="py-5">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Image src={news.thumbnail_url} width="600" height="500" alt="" />
                        <Grid container spacing={2} className="pt-5">
                            <Grid item xs={6}>
                                <Image src={news.image_url} width="500" height="500" alt="" />
                            </Grid>
                            <Grid item xs={6}>
                                <Image src={news.image_url} width="500" height="500" alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3">{news.title}</Typography>
                        <Box sx={{display: "flex", gap: 3, alignItems: "center", padding: '10px 0'}}>
                            <Avatar alt="Remy Sharp" src={news.author.img} />

                            <Typography>By {news.author.name}</Typography>
                            <Typography>Published: {news.author.published_date}</Typography>
                        </Box>
                        <Typography style={{textAlign: "justify", whiteSpace: "pre-line"}}>{news.details}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default page;
