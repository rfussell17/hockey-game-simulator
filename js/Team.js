export default class Team {
  constructor(
    city,
    TeamName,
    abrev,
    logo,
    p1Shots,
    p1Hits,
    p1Goals,
    p2Shots,
    p2Hits,
    p2Goals,
    p3Shots,
    p3Hits,
    p3Goals
  ) {
    this.city = city;
    this.TeamName = TeamName;
    this.abrev = abrev;
    this.logo = logo;
    this.p1Shots = p1Shots;
    this.p2Shots = p2Shots;
    this.p3Shots = p3Shots;
    this.p1Hits = p1Hits;
    this.p2Hits = p2Hits;
    this.p3Hits = p3Hits;
    this.p1Goals = p1Goals;
    this.p2Goals = p2Goals;
    this.p3Goals = p3Goals;
  }

  static statValues = [
    [0, 0, 0, 1, 1],
    [1, 1, 2, 2, 2],
    [2, 2, 2, 3, 3],
    [4, 4, 5, 5, 6],
    [6, 7, 7, 7, 8],
    [8, 8, 8, 9, 9],
    [9, 10, 10, 10, 11],
    [11, 11, 11, 12, 12],
    [12, 12, 13, 13, 13],
    [14, 14, 15, 15, 16],
  ];

  static returnVal(num) {
    return Math.floor(Math.random() * num);
  }

  static getShots() {
    let shots = this.statValues[this.returnVal(9)][this.returnVal(4)];
    console.log("shots: " + shots);
    return shots;
  }

  static getHits() {
    let hits = this.statValues[this.returnVal(9)][this.returnVal(4)];
    console.log("hits: " + hits);
    return hits;
  }

  static getGoals() {
    let goals = this.statValues[this.returnVal(2)][this.returnVal(4)];
    console.log("goals: " + goals);
    return goals;
  }
}
