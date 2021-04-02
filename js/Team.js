export default class Team {
  constructor(
    city,
    teamName,
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
    this.teamName = teamName;
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
    [0, 0, 1, 1, 1],
    [1, 2, 2, 3, 3],
    [3, 3, 4, 4, 4],
    [4, 5, 5, 5, 6],
    [6, 7, 7, 7, 8],
    [8, 8, 8, 9, 9],
    [9, 10, 10, 10, 11],
    [11, 11, 11, 12, 12],
    [12, 12, 13, 13, 13],
    [14, 14, 15, 15, 16],
  ];

  static teams = [
      {
        city: "Buffalo",
        teamName: "Sabres",
        abrev: "BUF",
        logo:
          "https://content.sportslogos.net/logos/1/4/full/5493_buffalo_sabres-primary-2021.png",
      },
      {
        city: "Vancouver",
        teamName: "Canucks",
        abrev: "VAN",
        logo:
          "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
      },
      {
        city: "Minnesota",
        teamName: "Wild",
        abrev: "MIN",
        logo:
          "https://content.sportslogos.net/logos/1/15/full/8810_minnesota_wild-primary-2014.png",
      },
      {
        city: "Florida",
        teamName: "Panthers",
        abrev: "FLO",
        logo:
          "https://content.sportslogos.net/logos/1/13/full/8078_florida_panthers-primary-2017.png",
      },
      {
        city: "Montreal",
        teamName: "Canadiens",
        abrev: "MON",
        logo:
          "https://content.sportslogos.net/logos/1/16/full/5362_montreal_canadiens-primary_on_dark-2000.png",
      },
      {
        city: "Winnipeg",
        teamName: "Jets",
        abrev: "WPG",
        logo:
          "https://content.sportslogos.net/logos/1/3050/full/z9qyy9xqoxfjn0njxgzoy2rwk.png",
      }
    ];
    

  static returnVal(num) {
    return Math.floor(Math.random() * num);
  }

  static getShots() {
    let shots = this.statValues[this.returnVal(9)][this.returnVal(4)];
    return shots;
  }

  static getHits() {
    let hits = this.statValues[this.returnVal(9)][this.returnVal(4)];
    return hits;
  }

  static getGoals() {
    let goals = this.statValues[this.returnVal(2)][this.returnVal(4)];
    return goals;
  }

  static getTeamCity(){
    let city = this.teams[this.returnVal(5)].city;
    return city;
  }
}

// import { Team } from './Team';

export class HomeTeam extends Team {
  constructor() {
    super(city, teamName, abrev, logo, p1Shots, p2Shots, p3Shots, p1Hits, p2Hits, p3Hits, p1Goals, p2Goals, p3Goals);
  }
}

export class AwayTeam extends Team {
  constructor() {
    super(city, teamName, abrev, logo, p1Shots, p2Shots, p3Shots, p1Hits, p2Hits, p3Hits, p1Goals, p2Goals, p3Goals);
  }
}

