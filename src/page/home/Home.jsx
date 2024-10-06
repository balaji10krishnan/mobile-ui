import React from "react";
import "./Home.css";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { EndIconButton } from "../../components/EndIconButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/components/pagination/pagination.min.css';

// Import Swiper core and required modules
import { Autoplay, FreeMode } from "swiper/modules";
import { Fade, Zoom } from "react-reveal";
import { Appdata } from "../../data/AppData";
const productSliderImg = Appdata.productLogoSlider;
const Home = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet1 = useMediaQuery("(max-width:796px)");
  const isTablet = useMediaQuery("(max-width:1057px)");
  return (
    <section id="home" className="home">
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item className="home-container" xs={12} sm={12} md={4}>
          <Fade top>
            <h1>Sell all kinds of mobile phone accessories</h1>{" "}
          </Fade>
          <Fade top delay={500}>
            <h2>
              Mobile Store Online offers the lowest price phone repairs and best
              deals on smartphones, tablets, computers, consoles and accessories
            </h2>
          </Fade>
          <Fade top delay={1000}>
            <div className="get-start-btn">
              <EndIconButton text={"Get Started"} link={"#product"} />
            </div>
          </Fade>
        </Grid>
        <Grid item className="home-container" xs={12} sm={12} md={8}>
          <Fade right>
            <div className="">
              <img
                src={"./assets/Apple-iPhone.png"}
                alt=""
                className="img-animated"
              />
            </div>
          </Fade>
        </Grid>
        <Grid item xs={12} className="">
          {/* Add swiper slides */}
          <Zoom top>
            <Box className="mySwiper">
              <Swiper
                slidesPerView={isMobile ? 2 : isTablet1 ? 3 : isTablet ? 4 : 5}
                // spaceBetween={-30}
                freeMode={true}
                loop={true} // Enable loop
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                  reverseDirection: true
                }}
                pagination={{
                  clickable: true
                }}
                modules={[Autoplay, FreeMode]}
              >
                {productSliderImg &&
                  productSliderImg.map((item, index) => {
                    return (
                      <SwiperSlide className="swiper-slide" key={index}>
                        <img
                          src={item.imgURL}
                          className="img-fluid"
                          alt="Image Loading..."
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </Box>
          </Zoom>
          {/* <div className="container">
            <div className="products-slider swiper">
              <div className="swiper-wrapper align-items-center">
                
              </div>
            </div>
          </div> */}
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;
