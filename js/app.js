
//shots html

const homeP1Shots = document.getElementById('home-p1-shots')
const homeP2Shots = document.getElementById('home-p2-shots')
const homeP3Shots = document.getElementById('home-p3-shots')

const awayP1Shots = document.getElementById('away-p1-shots')
const awayP2Shots = document.getElementById('away-p2-shots')
const awayP3Shots = document.getElementById('away-p3-shots')

//hits html

const homeP1Hits = document.getElementById('home-p1-hits')
const homeP2Hits = document.getElementById('home-p2-hits')
const homeP3Hits = document.getElementById('home-p3-hits')

const awayP1Hits = document.getElementById('away-p1-hits')
const awayP2Hits = document.getElementById('away-p2-hits')
const awayP3Hits = document.getElementById('away-p3-hits')

// //goals html

const homeP1Goals = document.getElementById('home-p1-goals')
const homeP2Goals = document.getElementById('home-p2-goals')
const homeP3Goals = document.getElementById('home-p3-goals')

const awayP1Goals = document.getElementById('away-p1-goals')
const awayP2Goals = document.getElementById('away-p2-goals')
const awayP3Goals = document.getElementById('away-p3-goals')


//shot logic

let shotOptions = [
  [0, 2, 3, 4, 5],
  [0, 7, 8, 9, 10],
  [1, 7, 8, 9, 10],
  [5, 7, 3, 9, 10],
  [7, 9, 10, 11, 12],
  [3, 9, 5, 11, 12],
  [7, 9, 10, 11, 12],
  [4, 9, 10, 11, 12],
  [10, 11, 12, 13, 14],
  [12, 13, 14, 15, 16],
];

function getShots(){
  let shots = shotOptions[Math.floor(Math.random() * 9)][Math.floor(Math.random() * 4)]
  return shots;
}

//hit logic

let hitOptions = [
  [0, 2, 3, 4, 5],
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

function getHits(){
  let hits = hitOptions[Math.floor(Math.random() * 9)][Math.floor(Math.random() * 4)]
  return hits;
}

// goal logic

let goalOptions = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 5, 1],
  [0, 3, 1, 1, 2],
  [0, 0, 1, 2, 0],
  [1, 2, 0, 2, 1],
  [1, 2, 2, 2, 0],
  [1, 2, 5, 2, 3],
  [0, 4, 2, 3, 4],
  [1, 2, 1, 2, 3],
  [1, 2, 1, 2, 3],
];

function getGoals(){
  let goals = goalOptions[Math.floor(Math.random() * 9)][Math.floor(Math.random() * 4)]
  return goals;
}

//display period logic

function displayFirstPeriod(){

  let homeP1ShotsValue = getShots();
  homeP1Shots.innerHTML = homeP1ShotsValue;
  let awayP1ShotsValue = getShots();
  awayP1Shots.innerHTML = awayP1ShotsValue;

  homeP1Hits.innerHTML = getHits(); 
  awayP1Hits.innerHTML = getHits();
  
  homeP1GoalsValue = getGoals();
  awayP1GoalsValue = getGoals();

  homeP1ShotsValue > homeP1GoalsValue ? homeP1Goals.innerHTML = homeP1GoalsValue :
   homeP1Goals.innerHTML = getGoals();

   awayP1ShotsValue > awayP1GoalsValue ? awayP1Goals.innerHTML = awayP1GoalsValue :
   awayP1Goals.innerHTML = getGoals();

}

function displaySecondPeriod(){
  homeP2Shots.innerHTML = getShots();
  awayP2Shots.innerHTML = getShots();

  homeP2Hits.innerHTML = getHits();
  awayP2Hits.innerHTML = getHits();

  homeP2Goals.innerHTML = getGoals();
  awayP2Goals.innerHTML = getGoals();
}

function displayThirdPeriod(){
  homeP3Shots.innerHTML = getShots();
  awayP3Shots.innerHTML = getShots();

  homeP3Hits.innerHTML = getHits();
  awayP3Hits.innerHTML = getHits();

  homeP3Goals.innerHTML = getGoals();
  awayP3Goals.innerHTML = getGoals();
}

//simulation function

function simulate(){
  displayFirstPeriod();
  displaySecondPeriod();
  displayThirdPeriod();
}

simulate();
