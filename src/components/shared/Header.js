import showCurrentDate from "@/utils/getDate";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import HeaderLogo from "../../assets/TheDragonNews.png";
const Header = () => {
    const currentDate = showCurrentDate()
    return (
        <Box>
            <Container className=" py-5">
                <Image className="mx-auto py-2" width="250" height="50" src={HeaderLogo} alt="" />
                <Typography variant="body2" color='gray' textAlign="center">
                    Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign="center">
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;
