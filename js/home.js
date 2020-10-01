const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const portada = document.querySelector(".portada");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut });
.fromTo(hero, 1.2, {width: "100%"},{ width:"80%" })