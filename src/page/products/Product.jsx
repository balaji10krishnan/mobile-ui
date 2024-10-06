import React, { useState } from "react";
import "./Product.css";
import { HeaderText } from "../../components/HeaderText";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import { Fade } from "react-reveal";
import { Appdata } from "../../data/AppData";
const productList = Appdata.productList;
export const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterText, setFilerText] = useState("all");
  const handleProductFilter = (product, index) => {
    setActiveIndex(index);
    setFilerText(product);
  };

  const filterData =
    filterText !== "" && filterText !== "all"
      ? productList.filter((item) => item.type === filterText)
      : productList;
  return (
    <section id="product" className="product">
      <Fade bottom cascade>
        <Box className="product-header">
          <HeaderText text={"Products"} />
          <p>Be Wise, Shop Wise</p>
        </Box>
      </Fade>
      <Box className="product-filter">
        {Appdata.productFilterList.map((item, index) => {
          return (
            <Button
              className={`product-list ${activeIndex === index && "active"}`}
              onClick={() => handleProductFilter(item.value, index)}
              key={index}
            >
              {item.text}
            </Button>
          );
        })}
      </Box>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {filterData.map((item, index) => {
          return (
            <Grid item key={index} md={4} lg={3} sm={6} xs={12}>
              <div
                style={{
                  position: "relative",
                  opacity: 0,
                  animation: `fade-in-right-bottom 0.5s ease-in-out ${
                    index * 200
                  }ms forwards`
                }}
              >
                {item.title}

                {item.featuresList.map((item, index) => {
                  return !item.bold ? <p>{item.text}</p> : <p>{item.text}</p>;
                })}
              </div>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};
