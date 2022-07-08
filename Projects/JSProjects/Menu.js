//Getters and Setters 



const menu =  {
    _meal: '',
    _price: 0,
  set meal(mealToCheck) {
    if ( typeof mealToCheck === 'string' ) {
      return this._meal = mealToCheck;
    } else { 
      console.log(`Error please input a string`)
    }
  },
  set price(priceToCheck){
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    } else {
      console.log(`Error, please inut a number`)
    }
  },
  get todaysSpecial() {
   if ( this._meal && this._price) {
     return `Today's Special is ${this._meal} for ${this._price}!`
   } else {
     return 'Meal or price was not set correctly!'
   }
  }
  };
  menu.meal = 'Spagehtti';
  menu.price = 5;
  
  console.log(menu.todaysSpecial)