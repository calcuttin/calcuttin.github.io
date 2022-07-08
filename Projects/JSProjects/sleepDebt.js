
const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if ( day === 'tuesday') { 
      return 7;
    } else if ( day === 'wednesday') {
      return 8;
    } else if ( day === 'thursday') {
      return 6; 
    } else if (day === 'friday') { 
      return 5; 
    } else if (day === 'saturday') {
      return 10;
    } else if (day === 'sunday') {
      return 9;
    } else {
      return console.log( ' Please enter in a day to pass a value');
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours *7;
  };
  
  calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours > idealSleepHours) {
      console.log('You got' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than the ideal number.');
      } else if  (actualSleepHours === idealSleepHours) {
      console.log('You got the ideal amount of sleep.'); 
       } else {
          console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) of sleep, you need to get more sleep!');
          }
  };
    
  calculateSleepDebt();
  