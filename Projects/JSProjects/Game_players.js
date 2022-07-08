// Working with aarrays and objects, moddifying them


const team = {
    _players: [
      {firstname: 'Joe', lastname: 'Schmoe', age: 34},
      {firstname: 'Jack', lastname: 'Black', age: 20 },
      {firstname: 'Jean', lastname: 'Peirre', age: 25}],
    _games: [
      {opponent: 'Flanders', teamPoints: 2, opponentPoints: 4},   {opponent: 'Barcelona', teamPoints: 7, opponentPoints: 2},
      {opponent: 'RealMadrid', teamPoints: 3, opponentPoints: 6} ],
  
    get players() {
      return this._players
    },
    get games(){
      return this._games
    },
    addPlayer(newFirstName , newLastName, newAge) {
      let player = {
        firstname: newFirstName,
        lastname: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = { 
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
  this.games.push(game);
    }
  };
  
  team.addPlayer('Bob', 'Builder', 34);
  team.addGame('Titans',100, 98)
  console.log(team._players)
  console.log(team._games)