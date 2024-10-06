import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import "./AppBar.css";
import { Appdata } from "../../data/AppData";
import { CusButton } from "../../components/CusButton";
import { Close, MenuSharp } from "@mui/icons-material";

export const ShopAppBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isMenuBarVisible = useMediaQuery("(max-width:796px)");
  const isTablet = useMediaQuery("(max-width:1057px)");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuBarVisible, setMenuBarVisible] = useState(false);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    // Scroll to the corresponding section when a menu item is clicked
    const targetElement = document.querySelector(".link");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check if the user has scrolled down 200 pixels
      if (scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <AppBar
      position="fixed"
      className={`app-bar ${isScrolled && "active"} ${isTablet && "tablet"} ${
        menuBarVisible && "menu-bar"
      }`}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="p"
          className="logo"
          sx={{ flexGrow: 1 }}
        >
          <span>Mobile</span>
          <span>Shop.</span>
        </Typography>
        {isMenuBarVisible && !menuBarVisible ? (
          <IconButton onClick={() => setMenuBarVisible(true)}>
            <MenuSharp fontSize="large" />
          </IconButton>
        ) : (
          <Box className={`menu ${menuBarVisible && "active"}`}>
            <Box className="menu-list">
              {menuBarVisible && (
                <IconButton onClick={() => setMenuBarVisible(false)} className="menu-icon">
                  <Close fontSize="large" />
                </IconButton>
              )}
              {Appdata.menuList &&
                Appdata.menuList.map((item, index) => {
                  return item.type === "list" ? (
                    <Link
                      key={index}
                      underline="none"
                      href={item.link}
                      className={`list ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => {
                        handleItemClick(index);
                        setMenuBarVisible(false);
                      }}
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <CusButton text={item.text} key={index} link={item.link} />
                  );
                })}
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
