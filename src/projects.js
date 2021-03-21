import twitter from "./images/twitter.webp";
import stock from "./images/stock-beacon.webp";
import weather from "./images/weather-now.png";
import covid from "./images/covid-tracker.png";

import html from "./images/html.svg";
import css from "./images/css.svg";
import javascript from "./images/javascript.svg";
import react from "./images/react.svg";
import bulma from "./images/bulma.svg";
import bootstrap from "./images/bootstrap.svg";
import node from "./images/nodejs.svg";
import firebase from "./images/firebase.svg";
import aws from "./images/aws.png";
import django from "./images/django.svg";
import python from "./images/python.svg";
import elasticsearch from "./images/elasticsearch.svg";

const projects = [
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    img: twitter,
    live: "https://kenwilde-twitter-clone.netlify.app/",
    code: "https://github.com/kenwilde1/twitter-clone",
    description:
      "Twitter Clone that supports basic twitter functionality such as Create Tweet, Like Tweet, View Feed, Search Users.",
    technologies: [react, node, firebase],
    tech: ["react", "node", "firebase"],
  },
  {
    id: "stock-beacon",
    title: "Stock Beacon Bot",
    img: stock,
    live:
      "https://discord.com/oauth2/authorize?client_id=805516936594063377&scope=bot",
    code: "https://github.com/kenwilde1/stock-beacon",
    description:
      "Discord JS bot that provides intra-day time series data for tickers on the NYSE",
    technologies: [node, javascript],
    tech: ["node", "javascript"],
  },
  {
    id: "covid-tracker",
    title: "Covid IE Tracker",
    img: covid,
    live: "https://kenwilde1.github.io/covid-ie-tracker/",
    code: "https://github.com/kenwilde1/covid-ie-tracker",
    description:
      "Provides daily Covid-19 statistics for Ireland. Additionally, User can enter a date to view historical data.",
    technologies: [react, javascript, css],
    tech: ["react", "javascript", "css"],
  },
  {
    id: "weather-now",
    title: "Weather Now",
    img: weather,
    live: "https://kenwilde1.github.io/weather-now/",
    code: "https://github.com/kenwilde1/weather-now",
    description:
      "Provides Live and Forecast weather data for a custom or current location.",
    technologies: [html, bootstrap, javascript],
    tech: ["html", "bootstrap", "javascript"],
  },
  {
    id: "weather-now",
    title: "Weather Now",
    img: weather,
    live: "https://kenwilde1.github.io/weather-now/",
    code: "https://github.com/kenwilde1/weather-now",
    description:
      "Provides Live and Forecast weather data for a custom or current location.",
    technologies: [html, bootstrap, javascript],
    tech: ["html", "bootstrap", "javascript"],
  },
];

export default projects;
