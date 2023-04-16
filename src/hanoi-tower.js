const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi( disksNumber, turnsSpeed ) {
  var turns = 1;
  for (var i = 1; i < disksNumber; i++) {
    turns = turns * 2 + 1;
  }
  var seconds = Math.floor(turns / (turnsSpeed / 3600));
  return { turns, seconds };
}


module.exports = {
  calculateHanoi
};
