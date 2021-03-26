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

let shotOptions = [
  [1, 2, 3, 4, 5],
  [5, 7, 8, 9, 10],
  [1, 7, 8, 9, 10],
  [5, 7, 3, 9, 10],
  [7, 9, 10, 11, 12],
  [3, 9, 5, 11, 12],
  [7, 9, 10, 11, 12],
  [4, 9, 10, 11, 12],
  [10, 11, 12, 13, 14],
  [12, 13, 14, 15, 16],
];

let hitOptions = [
  [2, 2, 3, 4, 5],
  [5, 7, 8, 9, 10],
  [5, 7, 8, 9, 10],
  [0, 7, 8, 9, 10],
  [1, 2, 3, 4, 5],
  [5, 7, 8, 9, 10],
  [7, 9, 10, 11, 12],
  [1, 2, 3, 4, 5],
  [5, 7, 8, 9, 10],
  [12, 13, 14, 15, 16],
];

let goalOptions = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 5, 1],
  [0, 3, 1, 1, 2],
  [0, 0, 1, 2, 0],
  [1, 2, 0, 2, 1],
  [1, 2, 2, 2, 0],
  [1, 2, 4, 2, 3],
  [0, 4, 2, 3, 4],
  [1, 2, 1, 2, 3],
  [1, 2, 1, 2, 3],
];

// sim calculations

function returnRow() {
  return Math.floor(Math.random() * 9);
}

function returnCol() {
  return Math.floor(Math.random() * 4);
}

function getShots() {
  let shots = shotOptions[returnRow()][returnCol()];
  return shots;
}

function getHits() {
  let hits = hitOptions[returnRow()][returnCol()];
  return hits;
}

function getGoals() {
  let goals = goalOptions[returnRow()][returnCol()];
  return goals;
}

function sum(input) {
  if (toString.call(input) !== "[object Array]") return false;

  var total = 0;
  for (var i = 0; i < input.length; i++) {
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

let HomeTeam = new Team(
  "Vancouver",
  "Canucks",
  "VAN",
  "https://content.sportslogos.net/logos/1/29/full/2084_vancouver_canucks-primary-2020.png",
  getShots(),
  getHits(),
  getGoals()
);

homeStatHeader.innerHTML = HomeTeam.abrev;

let AwayTeam = new Team(
  "Buffalo",
  "Sabres",
  "BUF",
  "https://content.sportslogos.net/logos/1/29/full/2084_vancouver_canucks-primary-2020.png",
  getShots(),
  getHits(),
  getGoals()
);

awayStatHeader.innerHTML = AwayTeam.abrev;

//render period logic

function renderFirstPeriod() {
  // calc first period

  let homeP1ShotsValue = getShots();
  homeShotsArr.push(homeP1ShotsValue);

  let awayP1ShotsValue = getShots();
  awayShotsArr.push(awayP1ShotsValue);

  let homeP1HitsValue = getHits();
  homeHitsArr.push(homeP1HitsValue);

  let awayP1HitsValue = getHits();
  awayHitsArr.push(awayP1HitsValue);

  let homeP1GoalsValue = getGoals();
  let awayP1GoalsValue = getGoals();

  //goal logic

  if (homeP1ShotsValue < homeP1GoalsValue) {
    homeP1ShotsValue = homeP1ShotsValue + 4;
    homeGoalsArr.push(homeP1GoalsValue);
  } else {
    homeGoalsArr.push(homeP1GoalsValue);
    homeP1Goals.innerHTML = homeP1GoalsValue;
  }

  if (awayP1ShotsValue < awayP1GoalsValue) {
    awayP1ShotsValue = awayP1ShotsValue + 4;
    awayGoalsArr.push(awayP1GoalsValue);
  } else {
    awayGoalsArr.push(awayP1GoalsValue);
    awayP1Goals.innerHTML = awayP1GoalsValue;
  }

  //display stats

  homeP1Shots.innerHTML = homeP1ShotsValue;
  awayP1Shots.innerHTML = awayP1ShotsValue;
  homeP1Hits.innerHTML = homeP1HitsValue;
  awayP1Hits.innerHTML = awayP1HitsValue;
}

function displaySecondPeriod() {
  let homeP2ShotsValue = getShots();
  homeShotsArr.push(homeP2ShotsValue);

  let awayP2ShotsValue = getShots();
  awayShotsArr.push(awayP2ShotsValue);

  let homeP2HitsValue = getHits();
  homeHitsArr.push(homeP2HitsValue);

  let awayP2HitsValue = getHits();
  awayHitsArr.push(awayP2HitsValue);

  let homeP2GoalsValue = getGoals();
  let awayP2GoalsValue = getGoals();

  if (homeP2ShotsValue < homeP2GoalsValue) {
    homeP2ShotsValue++;
    homeP2Goals.innerHTML = homeP2GoalsValue;
    homeGoalsArr.push(homeP2GoalsValue);
  } else {
    homeGoalsArr.push(homeP2GoalsValue);
    homeP2Goals.innerHTML = homeP2GoalsValue;
  }

  if (awayP2ShotsValue < awayP2GoalsValue) {
    awayP2ShotsValue++;
    awayGoalsArr.push(awayP2GoalsValue);
    awayP2Goals.innerHTML = awayP2GoalsValue;
  } else {
    awayGoalsArr.push(awayP2GoalsValue);
    awayP2Goals.innerHTML = awayP2GoalsValue;
  }

  homeP2Shots.innerHTML = homeP2ShotsValue;
  awayP2Shots.innerHTML = awayP2ShotsValue;
  homeP2Hits.innerHTML = homeP2HitsValue;
  awayP2Hits.innerHTML = awayP2HitsValue;
}

function displayThirdPeriod() {
  let homeP3ShotsValue = HomeTeam.shots;
  homeShotsArr.push(homeP3ShotsValue);

  let awayP3ShotsValue = getShots();
  awayShotsArr.push(awayP3ShotsValue);

  let homeP3HitsValue = getHits();
  homeHitsArr.push(homeP3HitsValue);

  let awayP3HitsValue = getHits();
  awayHitsArr.push(awayP3HitsValue);

  let homeP3GoalsValue = getGoals();
  let awayP3GoalsValue = getGoals();

  if (homeP3ShotsValue < homeP3GoalsValue) {
    homeP3ShotsValue++;
    homeP3Goals.innerHTML = homeP3GoalsValue;
    homeGoalsArr.push(homeP3GoalsValue);
  } else {
    homeGoalsArr.push(homeP3GoalsValue);
    homeP3Goals.innerHTML = homeP3GoalsValue;
  }

  if (awayP3ShotsValue < awayP3GoalsValue) {
    awayP3ShotsValue++;
    awayGoalsArr.push(awayP3GoalsValue);
    awayP3Goals.innerHTML = awayP3GoalsValue;
  } else {
    awayGoalsArr.push(awayP3GoalsValue);
    awayP3Goals.innerHTML = awayP3GoalsValue;
  }

  homeP3Shots.innerHTML = homeP3ShotsValue;
  awayP3Shots.innerHTML = awayP3ShotsValue;
  homeP3Hits.innerHTML = homeP3HitsValue;
  awayP3Hits.innerHTML = awayP3HitsValue;
}

function displayTotals() {
  let homeShotsTotalValue = sum(homeShotsArr);
  homeShotsTotal.innerHTML = homeShotsTotalValue;

  let awayShotsTotalValue = sum(awayShotsArr);
  awayShotsTotal.innerHTML = awayShotsTotalValue;

  let homeHitsTotalValue = sum(homeHitsArr);
  homeHitsTotal.innerHTML = homeHitsTotalValue;

  let awayHitsTotalValue = sum(awayHitsArr);
  awayHitsTotal.innerHTML = awayHitsTotalValue;

  let homeGoalsTotalValue = sum(homeGoalsArr);
  homeGoalsTotal.innerHTML = homeGoalsTotalValue;

  let awayGoalsTotalValue = sum(awayGoalsArr);
  awayGoalsTotal.innerHTML = awayGoalsTotalValue;
}

// simulation function

function simulate() {
  setTimeout(renderFirstPeriod, 1000);
  setTimeout(displaySecondPeriod, 3000);
  setTimeout(displayThirdPeriod, 5000);
  setTimeout(displayTotals, 6000);
}

function clearData() {
  homeP1Shots.innerHTML = 0;
  homeP1Hits.innerHTML = 0;
  homeP1Goals.innerHTML = 0;
  homeP2Shots.innerHTML = 0;
  homeP2Hits.innerHTML = 0;
  homeP2Goals.innerHTML = 0;
  homeP3Shots.innerHTML = 0;
  homeP3Hits.innerHTML = 0;
  homeP3Goals.innerHTML = 0;

  homeShotsTotal.innerHTML = 0;
  homeHitsTotal.innerHTML = 0;
  homeGoalsTotal.innerHTML = 0;

  awayP1Shots.innerHTML = 0;
  awayP1Hits.innerHTML = 0;
  awayP1Goals.innerHTML = 0;
  awayP2Shots.innerHTML = 0;
  awayP2Hits.innerHTML = 0;
  awayP2Goals.innerHTML = 0;
  awayP3Shots.innerHTML = 0;
  awayP3Hits.innerHTML = 0;
  awayP3Goals.innerHTML = 0;
  awayGoalsTotal.innerHTML = 0;

  awayShotsTotal.innerHTML = 0;
  awayHitsTotal.innerHTML = 0;
  awayGoalsTotal.innerHTML = 0;
}

btn.addEventListener("click", () => {
  clearData();
  simulate();
});
