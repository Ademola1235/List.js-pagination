//jshint esversion:6


var options = { 
  valueNames: [
    `name`,
    {
      data: [`id`]
    },
    {
      name: `link`,
      attr: `href`
    },
    {
      name: `image`,
      attr: `data-src`
    }
  ],
  page: 3,
  pagination: true
};

var hackerList = new List(`hacker-list`, options);


hackerList.add([{
  name: `Space Jam`,
  id: 2,
  link: `https://www.imdb.com/title/tt3554046/`,
  image: `assets/spaceJam.jpg`
}, {
  name: `Venom: Let there be Carnage`,
  id: 3,
  link: `https://www.imdb.com/title/tt7097896/`,
  image: `assets/venom.jpg`
}, {
  name: `Zack Synder's Justice League`,
  id: 4,
  link: `https://www.imdb.com/title/tt12361974/`,
  image: `assets/justiceLeague.jpg`
}, {
  name: `Red Notice`,
  id: 5,
  link: `https://www.imdb.com/title/tt7991608/`,
  image: `assets/redNotice.jpg`
}, {
  name: `Loki`,
  id: 6,
  link: `https://www.imdb.com/title/tt9140554/`,
  image: `assets/loki.jpg`
}, {
  name: `Boss Baby: Family Business`,
  id: 7,
  link: `https://www.imdb.com/title/tt6932874/`,
  image: `assets/bossBaby.jpg`
}, {
  name: `Luca`,
  id: 8,
  link: `https://www.imdb.com/title/tt12801262/`,
  image: `assets/luca.jpg`
}, {
  name: `Godzilla Vs Kong`,
  id: 9,
  link: `https://www.imdb.com/title/tt5034838/`,
  image: `assets/godzillaVsKong.jpg`
}, {
  name: `Black Widow`,
  id: 10,
  link: `https://www.imdb.com/title/tt3480822/`,
  image: `assets/blackWidow.png`
}, {
  name: `Spiderman: No Way Home`,
  id: 11,
  link: `https://www.imdb.com/title/tt10872600/`,
  image: `assets/spiderman.png`
}, {
  name: `Free Guy`,
  id: 12,
  link: `https://www.imdb.com/title/tt6264654/`,
  image: `assets/freeGuy.png`
}, {
  name: `Army of Thieves`,
  id: 13,
  link: `https://www.imdb.com/title/tt13024674/`,
  image: `assets/armyOfThieves.jpg`
}, {
  name: `Mortal Kombat`,
  id: 14,
  link: `https://www.imdb.com/title/tt0293429/`,
  image: `assets/mortalKombat.jpg`
}, {
  name: `The Matrix: Resurrections`,
  id: 15,
  link: `https://www.imdb.com/title/tt10838180/`,
  image: `assets/matrix.jpg`
}, {
  name: `F9`,
  id: 16,
  link: `https://www.imdb.com/title/tt5433138/`,
  image: `assets/f9.png`
}, {
  name: `Wrath of Man`,
  id: 17,
  link: `https://www.imdb.com/title/tt11083552/`,
  image: `assets/wrathOfMan.png`
}, {
  name: `Oxygen`,
  id: 18,
  link: `https://www.imdb.com/title/tt6341832/`,
  image: `assets/oxygen.png`
}, {
  name: `Jungle Cruise`,
  id: 19,
  link: `https://www.imdb.com/title/tt0870154/`,
  image: `assets/jungleCruise.png`
}, {
  name: `Suicide Squad`,
  id: 20,
  link: `https://www.imdb.com/title/tt6334354/`,
  image: `assets/suicideSquad.png`
}]);



//Disabled links cannot take you back to the top of the page
function disableLink() {
    var disabledLink = document.querySelector(`.pagination li.disabled a`);

    disabledLink.setAttribute(`href`, `#!`);

}
disableLink();



document.body.addEventListener(`mouseover`, function() {
  var totalItems = hackerList.matchingItems.length;//Total number of items in a list
  var itemsPerPage = options.page;//Number of items you can see in one page
  let value = Math.ceil(totalItems / itemsPerPage);

  if (value <= 3) {

  }else if (value >= 4) {
    disableLink();
  }
});

var firstList = document.getElementsByTagName('img')[0];
// Create a data-img-full attribute:
const att = document.createAttribute("data-src");
// Set the value of the data-img-full attribute:
att.value = "assets/finch.jpg";
// Add the style attribute to the first image:
firstList.setAttributeNode(att);

function lazy(e) {
  var img = document.querySelectorAll('img');
setInterval(() => {

  for (let i = 0; i < img.length; i++) {

    let url = img[i].getAttribute('data-src');
    img[i].setAttribute("src", url);
    img[i].classList.add('noAnimation');

    setInterval(() => {
      img[i].classList.add('no-animation');
    }, 4000);//To prevent fade-in from recurring
  }
  
}, 2500);

  console.log(e)
}
lazy();

window.addEventListener('scroll', lazy);