import { Box, CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import topImage2 from "../../../assets/Rectangle 10.png";
import topImage3 from "../../../assets/Rectangle 11.png";
import topImage4 from "../../../assets/Rectangle 12.png";
import topNews from "../../../assets/Rectangle 8.png";
import topImage1 from "../../../assets/Rectangle 9.png";

const LatestNews = () => {
    return (
        <Box>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews} width="800" alt="" />
                    </CardMedia>
                    <p className="bg-red-600 text-white rounded px-2 py-1 my-5 mx-2 w-fit">
                        Technology
                    </p>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom className="my-2.5">
                            By Awlad Hossain - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topImage1} width="800" alt="" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className="my-2.5">
                                    By Awlad Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its
                                    layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topImage2} width="800" alt="" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className="my-2.5">
                                    By Awlad Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its
                                    layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topImage3} width="800" alt="" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className="my-2.5">
                                    By Awlad Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its
                                    layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topImage4} width="800" alt="" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className="my-2.5">
                                    By Awlad Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its
                                    layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestNews;
