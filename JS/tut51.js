console.log("Tut 51");
//Iterators
function fruitsIterator(values)
{
    let nextIndex =0;
    // we will return an object
    return{
        next:function()
        {
            if(nextIndex<values.length)
            {
                //we will return below object'
                return{
                    value:values[nextIndex++],
                    done:false
                }
            }
            else{
                return
                {
                    done:true
                }
            }
        }
    }
}
const myArray = ['Apple','Grapes','Orange','Bhindi'];
console.log("My Array is ",myArray);



//using the iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
