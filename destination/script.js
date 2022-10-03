const title = document.querySelector('.title') 
const bodyText = document.querySelector('.body-text') 
const planetImage = document.querySelector('.planet-image')
const distance = document.getElementById('distance')
const duration = document.getElementById('duration')

const destinationArray = [{
  title: 'Moon',
  text:`See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
  distance:'384,400 KM',
  duration:'3 Days',
  imageSrc:"../assets/destination/image-moon.png"
},{
  title: 'Mars',
  text:`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
  distance:'225 Mil. KM',
  duration:'9 Months',
  imageSrc:"../assets/destination/image-mars.png"
},{
  title: 'Europa',
  text:`The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
  distance:'628 mil. km',
  duration:'3 years',
  imageSrc:"../assets/destination/image-europa.png"
},{
  title: 'Titan',
  text:`The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
  distance:'1.6 bil. km',
  duration:'7 years',
  imageSrc:"../assets/destination/image-titan.png"
}]

function onClickDestinationHandler(id){
  const arrayIndex = id-1
  document.querySelector('.active').classList.remove("active")
  document.getElementById(`${'destination'+id}`).classList.add("active")
  title.innerText = destinationArray[arrayIndex].title.toUpperCase()
  bodyText.innerText = destinationArray[arrayIndex].text
  distance.innerText = destinationArray[arrayIndex].distance.toUpperCase()
  duration.innerText = destinationArray[arrayIndex].duration.toUpperCase()
  planetImage.src= destinationArray[arrayIndex].imageSrc
}
