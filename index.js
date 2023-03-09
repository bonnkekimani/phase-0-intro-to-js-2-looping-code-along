//for loop

// for (let age = 30; age< 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
// }


// using for with arrays

// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }
// wrapGifts(gifts);



// // using for with arrays f0r writeCards assignment

// const names = ["Guadalupe", "Ollie", "Aki"];
// function writeCards(names, surprise) {
//   for (let i = 0; i < names.length; i++) {
//     console.log(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
//   }
//   return names;
// }
// writeCards(names);

function writeCards(names, eventName){

  let messages = [];
  for(let i=0; i < names.length; i++){
       console.log(i);

     console.log (messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`));
    debugger;



  }

  return messages;

}

writeCards( ["Ada", "Brendan", "Ali"],"birthday");



// using while practice

// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts){
//     let i = 0 //the initialization moves OUTSIDE the body of the loop!
//     while( i<gifts.length){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++; //the iteration moves INSIDE the body of the loop!
//     }
//     return gifts;
// }
// wrapGifts(gifts);


//while assignment

function countDown(num) {
    while(num >= 0) {
      console.log(num);
      num--;
    }
  }
  countDown(10);