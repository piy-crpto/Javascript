console.log("this is tutorial 57");

//Maps in Javascript : We can use any type of key or value
const myMap = new Map();
const key1='myStr',key2 = {},key3 = function(){};

//setting the map values
myMap.set(key1,'This is a string');
myMap.set(key2,'This is a blank obj');
myMap.set(key3,'This is an empty function');
console.log(myMap);

//Getting the values from the values
let value1 = myMap.get(key1);
//let value1 = myMap.get(key2);
//let value1 = myMap.get(key3);
console.log(value1);


console.log(myMap.size);

//you can loop using for-of to get keys and values
for(let [key,value] of myMap)
{
    console.log(key,value);
}

//Get only keys
for(let key of myMap.keys())
{
    console.log('key is',key);
}

//Get only values
for(let value of myMap.values())
{
    console.log('value is',value);
}

//you can loop through a map using for each loop
myMap.forEach((value,key)=>{
    console.log('key is ',key);
    console.log('value is ',value);
})

//converting map to array
let myArray = Array.from(myMap);
console.log('Map to array is ',myArray);

//converting map keys to  an array
let mykeysArray = Array.from(myMap.keys());
console.log('Map to keys array is ',mykeysArray);

//converting map values to  an array
let myvaluesArray = Array.from(myMap.values());
console.log('Map to keys array is ',myvaluesArray);



