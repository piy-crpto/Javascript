console.log('tut20');
// add a key value inside local storage
localStorage.setItem('Name','Harry');
localStorage.setItem('Name2','Rohan');
let impArr = ['adrak','pyaz','bhindi'];
localStorage.setItem('sabji',JSON.stringify(impArr));
// JSON.stringfy takes object and convert into string

// 
// clears the entire local storage
//localStorage.clear();

//clear a particular item
//localStorage.removeItem('Name');
//localStorage.getItem('Name','harry');



//Retrieve an item from the local storage
//let name = localStorage.getItem('Name');
let name = JSON.parse(localStorage.getItem('sabji'));
//JSON.parse takes string and convert into object
//console.log(name);


sessionStorage.setItem('sessionName','sharry');
sessionStorage.setItem('sessionName2','rohandas');
sessionStorage.setItem('sessionSbji',JSON.stringify(impArr));




