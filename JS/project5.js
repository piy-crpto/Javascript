console.log("Tut 55");
//Data is an arrray of objects which contains information about the candidates

const data = [
    {
        namr: 'Rohan Das',
        age: 18,
        city: 'kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'

    },

    {
        namr: 'Aishwarya Rai',
        age: 42,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/61.jpg'

    },

    {
        namr: 'Camella cabelo',
        age: 30,
        city: 'Bangalore',
        language: 'Javascript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/68.jpg'

    },
    {
        namr: 'Rohit Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'Javascript',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/67.jpg'

    }
    

]
//CV iterator
function cvIterator(profiles)
{
      let nextIndex =0;
      return {
          next: function(){
              return nextIndex<profiles.length ?
              {value: profiles[nextIndex++],done:false} : {done:true}
          }
      };
}
const candidates = cvIterator(data);


//Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);

nextCV();

function nextCV()
{   const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate!=undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;

    profile.innerHTML = ` <ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework}</li>
  </ul>`;
    }
    else
    {
        alert('End of the candidate applications');
        window.location.reload();
    }
}
