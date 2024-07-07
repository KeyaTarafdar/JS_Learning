let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is: ${this.spiderman}`);
  },
};

// Adding fun() function in the Object prototype------------------------------------------------------------------------
Object.prototype.fun=function(){
    console.log("fun() is present in all object");
}

heroPower.fun(); //As heroPower is an Array & Array is an Object => so fun() is also present in myHero
heroPower.fun();
