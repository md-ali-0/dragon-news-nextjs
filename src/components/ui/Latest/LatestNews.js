import { Box, CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import getAllNews from "@/utils/getAllNews";
import Image from "next/image";
import Link from "next/link";

const LatestNews = async () => {
    const { data } = await getAllNews();
    return (
        <Box>
            <Link key={data[0]._id} href={`/news/${data[0]._id}`}>
                <Card>
                    <CardActionArea>
                        <CardMedia>
                            <Image src={data[0].thumbnail_url} width="800" height="700" alt="" />
                        </CardMedia>
                        <p className="bg-red-600 text-white rounded px-2 py-1 my-5 mx-2 w-fit">
                            {data[0].category}
                        </p>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {data[0].title}
                            </Typography>
                            <Typography gutterBottom className="my-2.5">
                                By {data[0].author.name} - {data[0].author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data[0].details.slice(0, 300) + "..."}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
            <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data.slice(1, 7).map((news) => (
                    <Grid
                        key={news._id}
                        item
                        xs={6}
                        sx={{ "& img": { width: "100%", height: "250px" } }}
                    >
                        <Link key={news._id} href={`/news/${news._id}`}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia>
                                        <Image
                                            src={news.image_url}
                                            width="700"
                                            height="500"
                                            alt=""
                                        />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom>
                                            {news.title.slice(0, 30) + "..."}
                                        </Typography>
                                        <Typography gutterBottom className="my-2.5">
                                            By {news.author.name} - {news.author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {news.details.slice(0, 300) + "..."}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LatestNews;
