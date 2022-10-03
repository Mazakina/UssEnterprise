const textTitle = document.getElementById('text-title');
const textBox = document.querySelector('.text-box');
const contentImg = document.querySelector('#content-img')
const firstHeading = document.querySelector('#first-heading')
const secondHeading = document.querySelector('#second-heading')

const technologyArray = [
  {
    id:0,
    textTitle: 'LAUNCH VEHICLE',
    textBox:  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imageSrc:"../assets/technology/image-launch-vehicle-portrait.jpg",
    imageSrcMobile:"../assets/technology/image-launch-vehicle-landscape.jpg",
  },{ 
    id:1,
    textTitle: 'SPACEPORT',
    textBox:  "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imageSrc:"../assets/technology/image-spaceport-portrait.jpg",
    imageSrcMobile:"../assets/technology/image-spaceport-landscape.jpg",
  },{ 
    id:2,
    textTitle: 'Space capsule',
    textBox: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imageSrc:"../assets/technology/image-space-capsule-portrait.jpg",
    imageSrcMobile:"../assets/technology/image-space-capsule-landscape.jpg",
  }
]
let currentId = 1;


function setActive(id){
  currentId = id
  const arrayIndex = id-1
  document.querySelector('.active').classList.remove('active');
  document.getElementById(`${'opt'+id}`).classList.add('active')
  textTitle.innerText = technologyArray[arrayIndex].textTitle.toUpperCase()
  textBox.innerText = technologyArray[arrayIndex].textBox
  if(screen.width > 1060){
    contentImg.src = technologyArray[arrayIndex].imageSrc
  } else {
    contentImg.src = technologyArray[arrayIndex].imageSrcMobile
  }
}

addEventListener('resize', (event)=>{
  if(screen.width > 1050){
    secondHeading.classList.add('no-display')
    firstHeading.classList.remove('no-display')
    contentImg.src = technologyArray[(currentId-1)].imageSrc
  } else{
    firstHeading.classList.add('no-display')
    secondHeading.classList.remove('no-display')
    contentImg.src = technologyArray[(currentId-1)].imageSrcMobile
  }
})


addEventListener('load', (event)=>{
  if(screen.width > 1050){
    document.querySelector('#second-heading').classList.add('no-display')
    document.querySelector('#first-heading').classList.remove('no-display')
    contentImg.src = technologyArray[(currentId-1)].imageSrc
  } else{
    document.querySelector('#first-heading').classList.add('no-display')
    document.querySelector('#second-heading').classList.remove('no-display')
    contentImg.src = technologyArray[(currentId-1)].imageSrcMobile
  }
})