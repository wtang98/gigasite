import React, { useState } from "react";
import logo from "../../assets/giga logo.png";
import { Link } from "react-router";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import "./header.scss";

export const Header = ({ currentLanguage, setCurrentLanguage }) => {
    const pages = [
        {
            Eng: "About Us",
            简体: "关于我们",
            繁體: "關於我們",
        },
        {
            Eng: "Securities",
            简体: "证券",
            繁體: "證券",
        },
        { Eng: "Services", 简体: "服务", 繁體: "服務" },
        { Eng: "Contact Us", 简体: "联系我们", 繁體: "聯絡我們" },
    ];
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
            <div className="header__left">
                <Link to="/gigasite">
                    <img src={logo} className="header-logo" alt="logo" />
                </Link>
                <div className="header__left--menu">
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
                                key={page?.[currentLanguage]}
                                className="menu-appbar"
                                sx={{ textAlign: "center" }}
                            >
                                <Link
                                    to={`gigaSite/${
                                        page["Eng"].toLowerCase().split(" ")[0]
                                    }`}
                                    onClick={handleCloseNavMenu}
                                >
                                    {page?.[currentLanguage]}
                                </Link>
                            </Typography>
                        ))}
                    </Menu>
                </div>
                <div className="header__left--links">
                    <Link to="/gigasite/securities">
                        {
                            {
                                Eng: "Securities",
                                简体: "证券",
                                繁體: "證券",
                            }[currentLanguage]
                        }
                    </Link>
                    <Link to="/gigasite/services">
                        {
                            {
                                Eng: "Services",
                                简体: "服务",
                                繁體: "服務",
                            }[currentLanguage]
                        }
                    </Link>
                    <Link to="/gigasite/about">
                        {
                            {
                                Eng: "About",
                                简体: "关于",
                                繁體: "關於",
                            }[currentLanguage]
                        }
                    </Link>
                </div>
            </div>
            <div onClick={handleLanguage} className="header__language">
                {currentLanguage}
            </div>
        </header>
    );
};
