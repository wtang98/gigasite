import React, { useState } from "react";
import logo from "../../assets/giga logo.png";
import { Link } from "react-router";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import "./header.scss";

export const Header = ({ currentLanguage, setCurrentLanguage }) => {
    const pages = ["About Us", "Securities", "Services", "Contact Us"];
    const languages = ["Eng", "简体", "繁體"];
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleLanguage = () => {
        if (currentLanguage === languages[0]) setCurrentLanguage(languages[1]);
        else if (currentLanguage === languages[1])
            setCurrentLanguage(languages[2]);
        else setCurrentLanguage(languages[0]);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(
            anchorElNav === null ? event.currentTarget : !anchorElNav
        );
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <header className="header">
            <IconButton
                size="large"
                edge="start"
                color="red"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpenNavMenu}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                {pages.map((page) => (
                    <Typography
                        key={page}
                        className="menu-appbar"
                        sx={{ textAlign: "center" }}
                    >
                        <Link
                            to={page.toLowerCase().split(" ")[0]}
                            onClick={handleCloseNavMenu}
                        >
                            {page}
                        </Link>
                    </Typography>
                ))}
            </Menu>
            <Link to="/">
                <img src={logo} className="header-logo" alt="logo" />
            </Link>
            <div onClick={handleLanguage} className="header--language">
                {currentLanguage}
            </div>
        </header>
    );
};
