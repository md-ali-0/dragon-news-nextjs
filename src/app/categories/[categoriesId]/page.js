import getCategoryNews from "@/utils/getCategoryNews";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DynamicNewsPage = async ({ params, searchParams }) => {
    const { data: categoryPosts } = await getCategoryNews(searchParams.category);
    console.log(categoryPosts);
    return (
        <div>
            <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {categoryPosts.map((post) => (
                    <Grid item xs={6} key={post._id}>
                        <Link href={`/${post.category.toLowerCase()}/${post._id}`}>
                        <Card>
                            <CardActionArea sx={{ "& img": { width: "100%", height: "250px" } }}>
                                <CardMedia>
                                    <Image
                                        src={post?.thumbnail_url}
                                        width="800"
                                        height="250"
                                        alt=""
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom>
                                        {post.title.length > 30
                                            ? post.title.slice(0, 30) + "..."
                                            : post.title}
                                    </Typography>
                                    <Typography gutterBottom className="my-2.5">
                                        By {post?.author?.name} - {post?.author?.published_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {post.details.length > 200
                                            ? post.details.slice(0, 200) + "..."
                                            : post.details}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default DynamicNewsPage;
