export default class Team {
  constructor(city, TeamName, abrev, logo, shots, hits, goals) {
    this.city = city;
    this.TeamName = TeamName;
    this.abrev = abrev;
    this.logo = logo;
    this.shots = shots;
    this.hits = hits;
    this.goals = goals;
  }
}




// function renderHomePeriod(periodNum, homeShotsValue, homeHits, homeGoals){
//   homeShotsValue = HomeTeam.shots;
//   homeShotsArr.push(homeShotsValue);
//   let homeHitsValue = HomeTeam.hits;
//   homeHitsArr.push(homeHitsValue);
//   let homeGoalsValue = HomeTeam.goals;
//   if (homeShotsValue < homeGoalsValue) {
//     homeShotsValue = homeShotsValue + 4;
//     homeGoalsArr.push(homeGoalsValue);
//   } else {
//     homeGoalsArr.push(homeGoalsValue);
//     homeP1Goals.innerHTML = homeGoalsValue;
//   }
//   console.log(periodNum)
//   homeShots = `let homeP${periodNum}shots.innerHTML = homeP${periodNum}ShotsValue;`;
//   console.log(homeShots)
//   return homeShots;
// }