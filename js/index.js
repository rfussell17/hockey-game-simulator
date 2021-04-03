import HomeTeam from "./Team.js";
import AwayTeam from "./Team.js";

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

let Home = new HomeTeam(
  "Vancouver",
  "Canucks",
  "VAN",
  "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
  HomeTeam.getShots(),
  HomeTeam.getHits(),
  HomeTeam.getGoals(),
  HomeTeam.getShots(),
  HomeTeam.getHits(),
  HomeTeam.getGoals(),
  HomeTeam.getShots(),
  HomeTeam.getHits(),
  HomeTeam.getGoals()
);

let Away = new AwayTeam(
  "Buffalo",
  "Sabres",
  "BUF",
  "https://content.sportslogos.net/logos/1/29/full/2084_vancouver_canucks-primary-2020.png",
  AwayTeam.getShots(),
  AwayTeam.getHits(),
  AwayTeam.getGoals(),
  AwayTeam.getShots(),
  AwayTeam.getHits(),
  AwayTeam.getGoals(),
  AwayTeam.getShots(),
  AwayTeam.getHits(),
  AwayTeam.getGoals()
);

homeStatHeader.innerHTML = Home.abrev;
awayStatHeader.innerHTML = Away.abrev;

let homeShotsArr = [];
let awayShotsArr = [];

let homeHitsArr = [];
let awayHitsArr = [];

let homeGoalsArr = [];
let awayGoalsArr = [];

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

//display period logic

function displayFirstPeriod() {
  homeP1Shots.innerHTML = Home.p1Shots;
  awayP1Shots.innerHTML = Away.p1Shots;
  homeP1Hits.innerHTML = Home.p1Hits;
  awayP1Hits.innerHTML = Away.p1Hits;
  homeP1Goals.innerHTML = Home.p1Goals;
  awayP1Goals.innerHTML = Away.p1Goals;

  homeShotsArr.push(Home.p1Shots)
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

function clearData() {

  homeP1Shots.innerHTML = "",
  homeP1Hits.innerHTML = "",
  homeP1Goals.innerHTML = "",
  homeP2Shots.innerHTML = "",
  homeP2Hits.innerHTML = "",
  homeP2Goals.innerHTML = "",
  homeP3Shots.innerHTML = "",
  homeP3Hits.innerHTML = "",
  homeP3Goals.innerHTML = "",
  homeShotsTotal.innerHTML = "",
  homeHitsTotal.innerHTML = "",
  homeGoalsTotal.innerHTML = "",
  awayP1Shots.innerHTML = "",
  awayP1Hits.innerHTML = "",
  awayP1Goals.innerHTML = "",
  awayP2Shots.innerHTML = "",
  awayP2Hits.innerHTML = "",
  awayP2Goals.innerHTML = "",
  awayP3Shots.innerHTML = "",
  awayP3Hits.innerHTML = "",
  awayP3Goals.innerHTML = "",
  awayGoalsTotal.innerHTML = "",
  awayShotsTotal.innerHTML = "",
  awayHitsTotal.innerHTML = "",
  awayGoalsTotal.innerHTML = ""

  homeShotsArr = [];
  awayShotsArr = [];

  homeHitsArr = [];
  awayHitsArr = [];
  
  homeGoalsArr = [];
  awayGoalsArr = [];

  setTimeout(function (){
    btn.innerHTML = "New Matchup";
  }, 8000)
}

function refreshTeamObjs(){

  clearData()

  let refreshedTeams = [  

    Away = new AwayTeam(
    undefined,
    undefined,
    undefined,
    undefined,
    AwayTeam.getShots(),
    AwayTeam.getHits(),
    AwayTeam.getGoals(),
    AwayTeam.getShots(),
    AwayTeam.getHits(),
    AwayTeam.getGoals(),
    AwayTeam.getShots(),
    AwayTeam.getHits(),
    AwayTeam.getGoals(),
  ),

  Home = new HomeTeam(
    undefined,
    undefined,
    undefined,
    undefined,
    HomeTeam.getShots(),
    HomeTeam.getHits(),
    HomeTeam.getGoals(),
    HomeTeam.getShots(),
    HomeTeam.getHits(),
    HomeTeam.getGoals(),
    HomeTeam.getShots(),
    HomeTeam.getHits(),
    HomeTeam.getGoals(),
  )]
  return refreshedTeams;
}

function simulate() {
  refreshTeamObjs();
  btn.innerHTML = "Simulating..."
  setTimeout(displayFirstPeriod, 1000);
  setTimeout(displaySecondPeriod, 3000);
  setTimeout(displayThirdPeriod, 5000);
  setTimeout(displayTotals, 6000);
}

btn.addEventListener("click", () => {
  simulate();
});
