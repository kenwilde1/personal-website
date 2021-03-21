import twitter from "./images/twitter.png";
import stock from "./images/stock-beacon.webp";
import weather from "./images/weather-now.png";
import covid from "./images/covid-tracker.png";
import patrick from "./images/patrick.png";
import battleship from "./images/battleship.png";
import crate from "./images/crate.png";
import calculator from "./images/calculator.png";

import html from "./images/html.svg";
import css from "./images/css.svg";
import javascript from "./images/javascript.svg";
import react from "./images/react.svg";
import bulma from "./images/bulma.svg";
import bootstrap from "./images/bootstrap.svg";
import node from "./images/nodejs.svg";
import firebase from "./images/firebase.svg";

const projects = [
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    img: twitter,
    live: "https://kenwilde-twitter-clone.netlify.app/",
    code: "https://github.com/kenwilde1/twitter-clone",
    description:
      "Twitter Clone that supports basic twitter functionality such as Create Tweet, Like Tweet, View Feed, Search Users.",
    technologies: [react, node, firebase, html, css],
    tech: ["react", "node", "firebase", "html", "css"],
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
    technologies: [react, html, css],
    tech: ["react", "html", "css"],
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
    id: "how-patrick-are-you",
    title: "How Patrick Are You?",
    img: patrick,
    live: "https://auxfuse.github.io/how-patrick-are-you/index.html",
    code: "https://github.com/auxfuse/how-patrick-are-you",
    description:
      "St. Patrick's themed Hackathon project collaborted with a team of 3 other developers.",
    technologies: [html, bulma, javascript, firebase],
    tech: ["html", "bulma", "javascript", "firebase"],
  },
  {
    id: "battleship",
    title: "Battleship",
    img: battleship,
    live: "https://kenwilde1.github.io/battleship-game/",
    code: "https://github.com/kenwilde1/battleship-game",
    description: "Battleship Game built using JS.",
    technologies: [html, css, javascript],
    tech: ["html", "css", "javascript"],
  },
  {
    id: "crate",
    title: "Crate O' Wine",
    img: crate,
    live: "https://kenwilde1.github.io/crate-o-wine/",
    code: "https://github.com/kenwilde1/crate-o-wine",
    description:
      "Monthly Wine Subscription Service, delivers random assortments of wine every month.",
    technologies: [html, css, bootstrap],
    tech: ["html", "css", "bootstrap"],
  },
  {
    id: "calculator",
    title: "Calculator",
    img: calculator,
    live: "https://kenwilde1.github.io/calculator/",
    code: "https://github.com/kenwilde1/calculator",
    description: "Simple Calculator App created using HTML, CSS and JS.",
    technologies: [html, css, javascript],
    tech: ["html", "css", "javascript"],
  },
];

export default projects;
