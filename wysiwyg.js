console.log("hihi");

var famous = [{
  title: "Artist",
  name: "Artemesia Gentileschi",
  bio: "Artemisia Gentileschi was an Italian Baroque painter, today considered one of the most accomplished painters in the generation following that of Caravaggio.",
  image: "img/Artemesia.jpg",
  lifespan: {
    birth: 1593,
    death: 1653
  }
},

{
  title: "Artist/Sculptor",
  name: "Gian Lorenzo Bernini",
  bio: "Gian Lorenzo Bernini was an Italian sculptor and architect. While a major figure in the world of architecture, he was the leading sculptor of his age, credited with creating the Baroque style of sculpture.",
  image: "img/Bernini.jpg",
  lifespan: {
    birth: 1598,
    death: 1680
  }
},

{
  title: "Artist",
  name: "Michelangelo Merisi da Caravaggio",
  bio: "Michelangelo Merisi da Caravaggio was an Italian painter. His paintings, which combine a realistic observation of the human state, both physical and emotional, with a dramatic use of lighting, had a formative influence on Baroque painting.",
  image: "img/Caravaggio.jpg",
  lifespan: {
    birth: 1571,
    death: 1610
  }
},

{
  title: "Artist",
  name: "Guido Reni",
  bio: "Guido Reni was an Italian painter of the high Baroque style.",
  image: "img/Guido-Reni.jpg",
  lifespan: {
    birth: 1575,
    death: 1642
  }
}];

console.log(famous);

var output = document.getElementById("stickItHere");

famous.forEach(function(person, index){
	var personCard = `<person class="card">
  						<header>
  							<h1 id="name--${index}">${person.name}</h1>
  							<h2 id="title--${index}">${person.title}</h2>
  						</header>
  						<section>
  							<p><img id="image--${index}" src="${person.image}" alt="Picture of an art piece by ${person.name}"</p>
  							<p id="bio--${index}">${person.bio}</p>
  						</section>
  						<footer>
  							<p id="birth--${index}">Birth: ${person.lifespan.birth}</p>
  							<p id="death--${index}">Death: ${person.lifespan.death}</p>
  						</footer>
					  </person>`;
	output.innerHTML += personCard;
});



// Did a for loop, then I wanted to practice the for each loops. This loop works, fwiw.
// for (i = 0; i < famous.length; i++){
// 	var personCard = `<person class="card">
//   					<header>
//   						<h2>${famous[i].name}</h2>
//   						<h3>${famous[i].title}</h3>
//   					</header>
//   					<section>
//   						<p>${famous[i].bio}</p>
//   						<p><img class="img" src="${famous[i].image}" alt="picture of ${famous[i].name}"></p>
//   					</section>
//   					<footer>
//   						<p>${famous[i].lifespan.birth}</p>
//   						<p>${famous[i].lifespan.death}</p>
//   					</footer>
// 				  </person>`
// 	output.innerHTML += personCard;
// }