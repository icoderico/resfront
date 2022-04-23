import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Home.scss";
import data from "./data.json";
import Card from "./../Components/Card";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  if (!i18n.language) {
    i18n.changeLanguage("ru");
  }
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  let curlang = i18n.language;

  return (
    <>
      <nav>
        <div className="top-nav">
          <h1>logo</h1>
          <div>
            <h3>{t("about")}</h3>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Til</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={curlang}
                label="Til"
                onChange={handleChange}
              >
                <MenuItem value={"en"}>Eng</MenuItem>
                <MenuItem value={"ru"}>Rus</MenuItem>
                <MenuItem value={"uz"}>Uzb</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="menus">
          {data?.navbar.map((categ) => {
            return (
              <div className="categs">
                <a href={`#${categ.uz}`}>{categ[curlang]}</a>
              </div>
            );
          })}
        </div>
      </nav>

      <div className="body">
        {data.navbar.map((category) => {
          let categ = category.uz;
          return (
            <div id={categ}>
              <h1>{category[curlang]}</h1> <br />
              <div className="foods">
                {data.foods[categ].map((food, ind) => {
                  return <Card key={ind} food={food} />;
                })}
              </div>
              <br /> <br />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default HomePage;
