//exercise 1
//let mytext = 'google';
//let link = document.links;
//let href;
//Array.from(link).forEach(function(element)
//{
 //  href =element.href;
  // if(href.includes(mytext))
  // {
  // console.log(href);
  //  }
//})


let mytext = 'google';
let link = document.links;

for (let index = 0; index < link.length; index++) {
    let matching = link[index];
    if(matching.href.includes(mytext))
    {
        console.log(matching.href);
    }

    
}









