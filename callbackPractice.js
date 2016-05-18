//In this repo your job is to write functions to make each function call work properly.
//Below is a sample problem

//PROBLEM 1
  //code here for sayHi
   function sayHi(str, callback) {
     cb(str);
   };
   sayHi('Hi Katie', function(thingToSay){
      console.alert(thingToSay);
   });


//and what you should write is the sayHi function that makes the code above work,

//PROBLEM 2
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      console.alert(thingToSay); //should alert ('Hi Katie')'
   });

//PROBLEM 3
function first (arr, cb) {
  cb(arr[0]);
}
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

//PROBLEM 4
function last (dessert, cb) {
  cb(dessert[dessert.length-1])
}
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});

//PROBLEM 5
/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
  //Code Here for multiply
function multiply(x, y, cb) {
  cb(x*y);
}
multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});

//PROBLEM 6 - CHECK
/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
  //Code Here for contains

//function contains (arr, str, cb) {
//  var result = arr[i];
//  for(var i=0; i<names.length; i++) {
//    return arr[i];
//  }
//}
//contains(names, 'Colt', function(result){
//  if(result === true){
//    console.log('Colt is in the array');
//  } else {
//    console.log('Colt is not in the array');
//  }
//});

function contains(arr,str,cb){
  var result = false;
  for(index in arr){
    if(arr[index]=== str){
      result = true;
    }
  }
  cb(result)
}
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

//PROBLEM 7
function uniq (arr, cb) {
  var uniqArr = [];
  for(var i =0; i <=arr.length-1; i++) {
     if(uniqArr.indexOf(arr[i]) === -1)uniqArr.push(arr[i]);
  }
  return cb(uniqArr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
