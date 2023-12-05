"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import Header from "./Header";

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
        pathname: "/categories/news?category=all-news",
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

const Navbar = () => {
    return (
        <>
            <Header />
            <AppBar position="static" sx={{ background: "black" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters className="flex justify-between">
                        <Image src={logo} width="100" height="100" alt="" />
                        <Box>
                            {navItems.map((link) => (
                                <Link
                                    className="mr-2"
                                    key={link.route}
                                    href={link.pathname}
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                    {link.route}
                                </Link>
                            ))}
                        </Box>
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
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};
export default Navbar;
