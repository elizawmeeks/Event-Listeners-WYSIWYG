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
	// Adding Cards to Dom
  var personCard = `<person class="card">
  						<header>
  							<h1 id="name--${index}">${person.name}</h1>
  							<h2 id="title--${index}">${person.title}</h2>
  						</header>
  						<section>
  							<p><img id="image--${index}" src="${person.image}" alt="Picture of an art piece by ${person.name}"</p>
  							<p class="changeBio" id="bio--${index}">${person.bio}</p>
  						</section>
  						<footer>
  							<p id="birth--${index}">Birth: ${person.lifespan.birth}</p>
  							<p id="death--${index}">Death: ${person.lifespan.death}</p>
  						</footer>
					  </person>`;
  var quoteDiv = document.createElement("div");
  quoteDiv.innerHTML = personCard;
  output.appendChild(quoteDiv);
    // Adding class to divs to style cards
  var addClass = document.getElementsByTagName("div");
  for (var y = 0; y < addClass.length; y++){
    addClass.item(y).classList.add("flex");
  }
  // Name Event Listeners
    // variables for Event Listeners
  var name = document.getElementById(`name--${index}`);
  var title = document.getElementById(`title--${index}`);
  var image = document.getElementById(`image--${index}`);
  var bio = document.getElementById(`bio--${index}`);
  var birth = document.getElementById(`birth--${index}`);
  var death = document.getElementById(`death--${index}`);
  var textBox = document.getElementById("textBox");

    // Now for the event listeners themselves. When clicked they toggle the borders of the elemnts, put focus on the input box, and allow the input value to replace the text of the bio.
  name.addEventListener("click", function (event){
    event.target.classList.toggle("bordered");
    textBox.focus();
    var currentTarget = event.target.closest("div > person").querySelector('p[class="changeBio"]');
    console.log("currentTarget", currentTarget);
    textBox.addEventListener("keyup", function(event){
      currentTarget.innerHTML = event.target.value;
      var x = event.key;
      if (x === "Enter"){
        currentTarget.innerHTML = "";
        event.target.value = "";
      }
    });
  });

  title.addEventListener("click", function (event){
    event.target.classList.toggle("bordered");
    textBox.focus();
    textBox.addEventListener("keyup", function(event){
      bio.innerHTML = event.target.value;
      var x = event.key;
      if (x === "Enter"){
        bio.innerHTML = "";
        event.target.value = "";
      }
    });
  });

  image.addEventListener("click", function (event){
    event.target.classList.toggle("bordered");
    textBox.focus();
    textBox.addEventListener("keyup", function(event){
      bio.innerHTML = event.target.value;
      var x = event.key;
      if (x === "Enter"){
        bio.innerHTML = "";
        event.target.value = "";
      }
    });
  });

  bio.addEventListener("click", function (event){
    event.target.classList.toggle("bordered");
    textBox.focus();
    textBox.addEventListener("keyup", function(event){
      bio.innerHTML = event.target.value;
      var x = event.key;
      if (x === "Enter"){
        bio.innerHTML = "";
        event.target.value = "";
      }
    });
  });

  birth.addEventListener("click", function (event){
    event.target.classList.toggle("bordered");
    textBox.focus();
    textBox.addEventListener("keyup", function(event){
      bio.innerHTML = event.target.value;
      var x = event.key;
      if (x === "Enter"){
        bio.innerHTML = "";
        event.target.value = "";
      }
    });
  });

  death.addEventListener("click", function (event){
    event.target.classList.toggle("bordered");
    textBox.focus();
    textBox.addEventListener("keyup", function(event){
      bio.innerHTML = event.target.value;
      var x = event.key;
      if (x === "Enter"){
        bio.innerHTML = "";
        event.target.value = "";
      }
    });
  });

});



// Did a 'for' loop, then I wanted to practice the 'for each' loops. This loop worked, fwiw.
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