//Totally could have been a smaller code base by using arrays... might rewrite it.
//Code to randommize a message via javascript
const messageGenerator = () => {
    let randomNum = Math.floor(Math.random() * 6);
    if ( randomNum === 0) {
        return 'an Edge Switch is down!'
    } else if ( randomNum === 1) { 
        return 'BGP Route is configured Wrong!';
    } else if ( randomNum === 2) {
        return 'firewall is down and HA is not working as thought!';
    }  else if ( randomNum === 3) {
        return 'some execuitve said Wifi is slow!';
    }  else if ( randomNum === 4) {
        return 'you put that command on the wrong device!';
    }  else if ( randomNum === 5) {
        return 'your automation test went to prodcution and not the lab environment!';
    }  else {
        return 'Either the network is fine or the alerts are broken!'
    }
    
};
// Add fear to the alert on location! 
const locationGenerator = () => {
    let randomNum = Math.floor(Math.random() * 6);
    if ( randomNum === 0) {
        return 'You are at the office and'
    } else if ( randomNum === 1) { 
        return 'You are on vacation and';
    } else if ( randomNum === 2) {
        return 'You are on call and';
    }  else if ( randomNum === 3) {
        return 'You are stuck in traffic and';
    }  else if ( randomNum === 4) {
        return 'You are at a family event and';
    }  else if ( randomNum === 5) {
        return 'You are out of country and';
    }  else {
        return 'Either the network is fine or the alerts are broken'
    }
    
};
// Below is the solution part of the string.... might make sense might not
const solutionGenerator = () => {
    let randomNum = Math.floor(Math.random() * 6);
    if ( randomNum === 0) {
        return ', but you are a badass and fixed it in 30min.'
    } else if ( randomNum === 1) { 
        return ', but you ignored the alert and someone else took care if it.';
    } else if ( randomNum === 2) {
        return ', but you ignored it and the problem went away.';
    }  else if ( randomNum === 3) {
        return ', but listen to the Art of network engineering and solved it.';
    }  else if ( randomNum === 4) {
        return ', and you have no clue how to fix it.';
    }  else if ( randomNum === 5) {
        return ', and you forgot your laptop.';
    }  else {
        return 'Either the network is fine or the alerts are broken'
    }
    
};
//to run the code to output to console
console.log(locationGenerator(),messageGenerator(),solutionGenerator())

