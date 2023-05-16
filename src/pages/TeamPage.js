import Card from "../components/UI/Card";
import "../index.css";

const TeamPage = () => {
  return (
    <div className="justify-center items-center ml-32 mt-6">
      <div className="text-3xl font-bold text-white">Your Team</div>
      <div className="team">
        {player.map((player) => (
          <Card>
            <div>{player.name}</div>
            <div className="text-center mt-2">
              {player.position} | {player.number}
            </div>
            <div className="text-center bottom-6 absolute text-xs left-0 right-0">
              {player.team}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;


const player = [
    {
      name: "Patrick Mahomes",
      team: "Kansas City Chiefs",
      position: "QB",
      number: 15,
      fantasy_score: 23.4,
    },
    {
      name: "Christian McCaffrey",
      team: "San Fransisco 49ers",
      position: "RB",
      number: 23,
      fantasy_score: 21.4,
    },
    {
      name: "D'andre Swift",
      team: "Philadelphia Eagles",
      position: "RB",
      number: 0,
      fantasy_score: 16.2,
    },
    {
      name: "D.J. Moore",
      team: "Carolina Panthers",
      position: "WR",
      number: 2,
      fantasy_score: 15.7,
    },
    {
      name: "Jaylen Waddle",
      team: "Miami Dolphins",
      position: "WR",
      number: 17,
      fantasy_score: 17.6,
    },
    {
      name: "Mark Andrews",
      team: "Baltimore Ravens",
      position: "TE",
      number: 89,
      fantasy_score: 18.1,
    },
    {
      name: "Ceedee Lamb",
      team: "Dallas Cowboys",
      position: "WR",
      number: 88,
      fantasy_score: 19.4,
    },
    {
      name: "Juju Smith-Schuster",
      team: "New England Patriots",
      position: "WR",
      number: 9,
      fantasy_score: 15.9,
    },
    {
      name: "Adam Thielen",
      team: "Carolina Panthers",
      position: "WR",
      number: 19,
      fantasy_score: 13.4,
    },
    {
      name: "Travis Kelce",
      team: "Kansas City Chiefs",
      position: "TE",
      number: 87,
      fantasy_score: 20.4,
    },
    {
      name: "Darren Waller",
      team: "New York Giants",
      position: "TE",
      number: 83,
      fantasy_score: 15.4,
    },
    {
      name: "Dak Prescott",
      team: "Dallas Cowboys",
      position: "QB",
      number: 4,
      fantasy_score: 18.4,
    },
    {
      name: "Justin Jefferson",
      team: "Minnesota Vikings",
      position: "WR",
      number: 18,
      fantasy_score: 19.4,
    },
    {
      name: "Aaron Rodgers",
      team: "New York Jets",
      position: "QB",
      number: 12,
      fantasy_score: 18.4,
    },
    {
      name: "Saquon Barkley",
      team: "New York Giants",
      position: "RB",
      number: 26,
      fantasy_score: 18.4,
    },
    {
      name: "Tyreek Hill",
      team: "Miami Dolphins",
      position: "WR",
      number: 10,
      fantasy_score: 18.4,
    },
    {
      name: "Mike Williams",
      team: "Los Angeles Chargers",
      position: "WR",
      number: 81,
      fantasy_score: 15.4,
    },
    {
      name: "Tony Pollard",
      team: "Dallas Cowboys",
      position: "RB",
      number: 20,
      fantasy_score: 18.4,
    },    
  ];
