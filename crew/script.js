const role = document.querySelector('#role') 
const bodyText = document.querySelector('.body-text') 
const crewImage = document.querySelector('#crew-image')
const crewName = document.getElementById('crew-name')
const crewNav = document.querySelector('#crew-nav-wide')
const crewNavMobile = document.querySelector('#crew-nav-mobile')

const navOption2 = document.getElementsByClassName('active')

const crewArray = [{
  role: 'Commander',
  crewName:`Douglas Hurley`,
  description:` Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
  imageSrc:"../assets/crew/image-douglas-hurley.png"
},{
  role: 'Mission Specialist',
  crewName:`Mark Shuttleworth`,
  description:` Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
  imageSrc:"../assets/crew/image-mark-shuttleworth.png"
},{
  role: 'Pilot',
  crewName: `Victor Glover`,
  description: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `,
  imageSrc: "../assets/crew/image-victor-glover.png"
},{
  role: 'Flight Engineer',
  crewName:`Anousheh Ansari`,
  description:`Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `,
  imageSrc:"../assets/crew/image-anousheh-ansari.png"
}]

function onClickDestinationHandler(id){
  const arrayIndex = id-1
  role.innerText = crewArray[arrayIndex].role.toUpperCase()
  bodyText.innerText = crewArray[arrayIndex].text
  crewName.innerText = crewArray[arrayIndex].distance.toUpperCase()
  crewImage.src= crewArray[arrayIndex].imageSrc
}

let currentActive = 0



crewArray.forEach((crew, index) => {
  let div = document.createElement('div')
  div.setAttribute('class','nav-option')
  div.setAttribute('id',`${'crewIndex'+index}`)
  div.addEventListener('click',()=>{currentCrew(index)})
  if (currentActive == index){
    div.classList.add('active')
  }
  crewNavMobile.append(div)
})

crewArray.forEach((crew, index) => {
  let div = document.createElement('div')
  div.setAttribute('class','nav-option')
  div.setAttribute('id',`${'crewIndex'+index}`)
  div.addEventListener('click',()=>{
    currentCrew(index)}
    )
  if (currentActive == index){
    div.classList.add('active')
  }
  crewNav.append(div)
})

const currentCrew = (id) =>{
  const navOption = document.querySelectorAll('.active')
  role.innerText = crewArray[id].role
  crewName.innerText = crewArray[id].crewName
  bodyText.innerText = crewArray[id].description
  crewImage.src = crewArray[id].imageSrc
  Array.prototype.forEach.call(navOption, (option) => {
    option.classList.remove('active')
  })
  const crewIndex = document.querySelectorAll('#crewIndex'+id)
  Array.prototype.forEach.call(crewIndex, (crew)=>{
    crew.classList.add('active')
  })
}




