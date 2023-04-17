const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let dreamTeam = '';
  // for (let i=0;i<arr.length;i++) {
  //   if (typeof arr[i] === 'string') {      
  //     let noSpace = arr[i].split(' ').join('');
  //     dreamTeam += noSpace[0];      
  //     } else {
  //     return false;
  //     } 
  // }
  if (Array.isArray(arr) === true) {
    arr.forEach(element => {
      if (typeof element === 'string') {      
        let noSpace = element.split(' ').join('');
        dreamTeam += noSpace[0];      
      } else {
        return false;
      } 
    });
    return [...dreamTeam].sort((a,b) => a.localeCompare(b)).join('').toUpperCase();
  }
  else {
    return false;
  }
  // console.log([...dreamTeam].sort((a,b) => a.localeCompare(b)).join('').toUpperCase());
}
console.log(createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']));
module.exports = {
  createDreamTeam
};
