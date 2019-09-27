import './hw_10.scss';

const redLightOn = document.querySelector(".traffic-light__block_red");
const orangeLightOn = document.querySelector(".traffic-light__block_orange");
const greenLightOn = document.querySelector(".traffic-light__block_green");

document.querySelector(".traffic-light__block_red").onclick = function red(){
	redLightOn.classList.add("light__red_on");
	orangeLightOn.classList.remove("light__orange_on");
	greenLightOn.classList.remove("light__green_on");
};

document.querySelector(".traffic-light__block_orange").onclick = function orange(){
	redLightOn.classList.remove("light__red_on");
	orangeLightOn.classList.add("light__orange_on");
	greenLightOn.classList.remove("light__green_on");
};

document.querySelector(".traffic-light__block_green").onclick = function green(){
	redLightOn.classList.remove("light__red_on");
	orangeLightOn.classList.remove("light__orange_on");
	greenLightOn.classList.add("light__green_on");
};