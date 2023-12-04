"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";

const navItems = [
    {
        route: "Home",
        pathname: "/",
    },
    {
        route: "Pages",
        pathname: "/pages",
    },
    {
        route: "Category",
        pathname: "/category",
    },
    {
        route: "News",
        pathname: "/news",
    },
    {
        route: "Post",
        pathname: "/post",
    },
    {
        route: "Contact",
        pathname: "/contact",
    },
];

const Footer = () => {
    return (
        <Box className="bg-gray-900 px-2 py-10 w-full text-center">
            <Container>
                <Box sx={{ "& svg": { color: "white" } }}>
                    <IconButton aria-label="Facebook">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="Twitter">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton aria-label="Youtube">
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton aria-label="Linked In">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton aria-label="Instagram">
                        <InstagramIcon />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        "& a": { my: 2, color: "white", display: "block" },
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {navItems.map((link) => (
                        <Link className="mr-2" key={link.route} href={link.pathname}>
                            {link.route}
                        </Link>
                    ))}
                </Box>
                <Typography color="white" variant="body2" textAlign="center">@2023 Dragon News. Design by Programming Hero</Typography>
            </Container>
        </Box>
    );
};

export default Footer;
