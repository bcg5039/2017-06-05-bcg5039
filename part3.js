const teams = [
  {id: 1, name: "Braves", league: "NL"},
  {id: 1, name: "Yankees", league: "AL"},
  {id: 1, name: "Red Sox", league: "AL"},
  {id: 1, name: "Mariners", league: "AL"},
  {id: 1, name: "Mets", league: "NL"},
  {id: 1, name: "Cubs", league: "NL"}
]

function filterByLeague(league,teams){
 return function isL(team){
  return team.league === league
}}
console.log("NL Teams")
console.log(teams.filter(filterByLeague("NL",teams)).map(teams => teams))
console.log("AL Teams")
console.log(teams.filter(filterByLeague("AL",teams)).map(teams => teams))
