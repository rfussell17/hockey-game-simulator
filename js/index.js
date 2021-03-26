// import HomeTeam from "./HomeTeam.js";
// import AwayTeam from "./AwayTeam.js";

import Team from "./Team.js";

//variables

const homeP1Shots = document.getElementById("home-p1-shots");
const homeP2Shots = document.getElementById("home-p2-shots");
const homeP3Shots = document.getElementById("home-p3-shots");

const awayP1Shots = document.getElementById("away-p1-shots");
const awayP2Shots = document.getElementById("away-p2-shots");
const awayP3Shots = document.getElementById("away-p3-shots");

//hits html

const homeP1Hits = document.getElementById("home-p1-hits");
const homeP2Hits = document.getElementById("home-p2-hits");
const homeP3Hits = document.getElementById("home-p3-hits");

const awayP1Hits = document.getElementById("away-p1-hits");
const awayP2Hits = document.getElementById("away-p2-hits");
const awayP3Hits = document.getElementById("away-p3-hits");

//goals html

const homeP1Goals = document.getElementById("home-p1-goals");
const homeP2Goals = document.getElementById("home-p2-goals");
const homeP3Goals = document.getElementById("home-p3-goals");

const awayP1Goals = document.getElementById("away-p1-goals");
const awayP2Goals = document.getElementById("away-p2-goals");
const awayP3Goals = document.getElementById("away-p3-goals");

//totals html

const homeShotsTotal = document.getElementById("home-total-shots");
const homeHitsTotal = document.getElementById("home-total-hits");
const homeGoalsTotal = document.getElementById("home-total-goals");

const awayShotsTotal = document.getElementById("away-total-shots");
const awayHitsTotal = document.getElementById("away-total-hits");
const awayGoalsTotal = document.getElementById("away-total-goals");

const homeStatHeader = document.getElementById("home-stat-header");
const awayStatHeader = document.getElementById("away-stat-header");
const btn = document.getElementById("btn");

//create getCity, getTeam, getAbr, getLogo functions

function sum(input) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}

let homeShotsArr = [];
let awayShotsArr = [];

let homeHitsArr = [];
let awayHitsArr = [];

let homeGoalsArr = [];
let awayGoalsArr = [];

let Home = new Team(
  "Vancouver",
  "Canucks",
  "VAN",
  "https://content.sportslogos.net/logos/1/29/full/2084_vancouver_canucks-primary-2020.png",
  Team.getShots(),
  Team.getHits(),
  Team.getGoals(),
  Team.getShots(),
  Team.getHits(),
  Team.getGoals(),
  Team.getShots(),
  Team.getHits(),
  Team.getGoals()
);

homeStatHeader.innerHTML = Home.abrev;

let Away = new Team(
  "Buffalo",
  "Sabres",
  "BUF",
  "https://content.sportslogos.net/logos/1/29/full/2084_vancouver_canucks-primary-2020.png",
  Team.getShots(),
  Team.getHits(),
  Team.getGoals(),
  Team.getShots(),
  Team.getHits(),
  Team.getGoals(),
  Team.getShots(),
  Team.getHits(),
  Team.getGoals()
);
awayStatHeader.innerHTML = Away.abrev;

//render period logic

function displayFirstPeriod() {
  homeP1Shots.innerHTML = Home.p1Shots;
  awayP1Shots.innerHTML = Away.p1Shots;
  homeP1Hits.innerHTML = Home.p1Hits;
  awayP1Hits.innerHTML = Away.p1Hits;
  homeP1Goals.innerHTML = Home.p1Goals;
  awayP1Goals.innerHTML = Away.p1Goals;

  homeShotsArr.push(Home.p1Shots);
  awayShotsArr.push(Away.p1Shots);
  homeHitsArr.push(Home.p1Hits);
  awayHitsArr.push(Away.p1Hits);
  homeGoalsArr.push(Home.p1Goals);
  awayGoalsArr.push(Away.p1Goals);
}

function displaySecondPeriod() {
  homeP2Shots.innerHTML = Home.p2Shots;
  awayP2Shots.innerHTML = Away.p2Shots;
  homeP2Hits.innerHTML = Home.p2Hits;
  awayP2Hits.innerHTML = Away.p2Hits;
  homeP2Goals.innerHTML = Home.p2Goals;
  awayP2Goals.innerHTML = Away.p2Goals;

  homeShotsArr.push(Home.p2Shots);
  awayShotsArr.push(Away.p2Shots);
  homeHitsArr.push(Home.p2Hits);
  awayHitsArr.push(Away.p2Hits);
  homeGoalsArr.push(Home.p2Goals);
  awayGoalsArr.push(Away.p2Goals);
}

function displayThirdPeriod() {
  homeP3Shots.innerHTML = Home.p3Shots;
  awayP3Shots.innerHTML = Away.p3Shots;
  homeP3Hits.innerHTML = Home.p3Hits;
  awayP3Hits.innerHTML = Away.p3Hits;
  homeP3Goals.innerHTML = Home.p3Goals;
  awayP3Goals.innerHTML = Away.p3Goals;

  homeShotsArr.push(Home.p3Shots);
  awayShotsArr.push(Away.p3Shots);
  homeHitsArr.push(Home.p3Hits);
  awayHitsArr.push(Away.p3Hits);
  homeGoalsArr.push(Home.p3Goals);
  awayGoalsArr.push(Away.p3Goals);
}

function displayTotals() {
  homeShotsTotal.innerHTML = sum(homeShotsArr);
  awayShotsTotal.innerHTML = sum(awayShotsArr);
  homeHitsTotal.innerHTML = sum(homeHitsArr);
  awayHitsTotal.innerHTML = sum(awayHitsArr);
  homeGoalsTotal.innerHTML = sum(homeGoalsArr);
  awayGoalsTotal.innerHTML = sum(awayGoalsArr);
}

function simulate() {
  setTimeout(displayFirstPeriod, 1000);
  setTimeout(displaySecondPeriod, 3000);
  setTimeout(displayThirdPeriod, 5000);
  setTimeout(displayTotals, 6000);
}

// let table = [
//   homeP1Shots,
//   homeP1Hits,
//   homeP1Goals,
//   homeP2Shots,
//   homeP2Hits,
//   homeP2Goals,
//   homeP3Shots,
//   homeP3Hits,
//   homeP3Goals,
//   homeShotsTotal,
//   homeHitsTotal,
//   homeGoalsTotal,
//   awayP1Shots,
//   awayP1Hits,
//   awayP1Goals,
//   awayP2Shots,
//   awayP2Hits,
//   awayP2Goals,
//   awayP3Shots,
//   awayP3Hits,
//   awayP3Goals,
//   awayGoalsTotal,
//   awayShotsTotal,
//   awayHitsTotal,
//   awayGoalsTotal,
// ];

// function clearData(table) {
//   let appendedTable = table.map((item) => {
//     return `${item}.innerHTML = 0;`;
//   });
//   return appendedTable;
// }

btn.addEventListener("click", () => {
  clearData(table);
  simulate();
});
