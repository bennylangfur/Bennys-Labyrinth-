// ======================================
// BENNY LANGFUR MUSIC
// script.js
// ======================================

const bands = {

rabbit:{

title:"Rabbit Hole Orchestra",

description:"Improvised journeys through enchanted forests, moonlit landscapes and musical adventures.",

albums:[

{
title:"Album One",
cover:"assets/covers/rabbit-hole.jpg",
download:"#"
},

{
title:"Album Two",
cover:"assets/covers/rabbit-hole.jpg",
download:"#"
}

]

},

morph:{

title:"Morph Dwarf",

description:"Crystal caves, forgotten mountains and ancient legends.",

albums:[

{
title:"Album One",
cover:"assets/covers/morph-dwarf.jpg",
download:"#"
}

]

},

forgotten:{

title:"Forgotten Kingdoms",

description:"Epic cinematic soundtracks from mythical kingdoms.",

albums:[

{
title:"Album One",
cover:"assets/covers/forgotten-kingdoms.jpg",
download:"#"
}

]

},

earth:{

title:"Earth Jam",

description:"Organic improvisation around the fire under the stars.",

albums:[

{
title:"Album One",
cover:"assets/covers/earth-jam.jpg",
download:"#"
}

]

},

kaleidoscope:{

title:"Kaleidoscope Karavan",

description:"Psychedelic colors, cosmic deserts and infinite journeys.",

albums:[

{
title:"Album One",
cover:"assets/covers/kaleidoscope-karavan.jpg",
download:"#"
}

]

}

};

const gallery=document.getElementById("gallery");
const world=document.getElementById("worldView");
const title=document.getElementById("bandTitle");
const description=document.getElementById("bandDescription");
const albumContainer=document.getElementById("albumContainer");
const back=document.getElementById("backButton");

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

const band=card.dataset.band;

openBand(band);

});

});

function openBand(name){

const band=bands[name];

title.innerText=band.title;

description.innerText=band.description;

albumContainer.innerHTML="";

band.albums.forEach(album=>{

albumContainer.innerHTML+=`

<div class="card">

<img src="${album.cover}" alt="">

<div class="cardInfo">

<h2>${album.title}</h2>

<p>${band.description}</p>

<a href="${album.download}" download>

<button>

Download Album

</button>

</a>

</div>

</div>

`;

});

gallery.style.display="none";

document.querySelector("header").style.display="none";

world.style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

}

back.addEventListener("click",()=>{

world.style.display="none";

gallery.style.display="grid";

document.querySelector("header").style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

});