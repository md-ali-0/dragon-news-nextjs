import {
    Box,
    ButtonBase,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Image from "next/image";
import topNews from "../../../assets/Rectangle 8.png";

const Sidebar = () => {
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
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Image src={topNews} alt="" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2" gutterBottom>
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Sidebar;
