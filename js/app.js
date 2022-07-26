const slides = [
  './img/01.jpg',
  './img/02.jpg',
  './img/03.jpg',
  './img/04.jpg',
  './img/05.jpg',

]
const slidesElements = []
let currentIndex = 0
const slidesWrapper = document.querySelector('.slides-wrapper')
slidesWrapper.innerHTML = ''
const dotsEl = document.querySelector('.dots')

for( let i = 0; i < slides.length; i++){
  const src = slides[i]
  // creo li e li aggiungo al secondo array
  const li = document.createElement('li')
  const dotsDiv = document.createElement('div')
  slidesElements.push(li)
  // aggiungo la classe slide
  li.classList.add('slide')
  dotsDiv.classList.add('dot')

  if( i === currentIndex){
    li.classList.add('active')
    dotsDiv.classList.add('active')
  }
  // creo img
  const img = document.createElement('img')
  // faccio si' che l'img abbia l'attributo src in base all'array
  img.src = src
  
  li.append(img)
  // inserisco il list item dentro la ul
  slidesWrapper.append(li)
  dotsEl.append(dotsDiv)
}

// prendo la freccia verso dx dal dom
const rightArrow = document.querySelector('.arrow-next')
rightArrow.addEventListener('click',
function () {
  if(currentIndex !== slidesElements.length - 1 ){
    // toglie la classe active dalla slide attiva e la da alla slide successiva se non e' l'ultimo
    const slideAttiva = slidesElements[currentIndex]
    console.log(slideAttiva)
    slideAttiva.classList.remove('active')
    // do la classe active alla slide successiva
    const slideSuccessiva = slidesElements[currentIndex + 1]
    slideSuccessiva.classList.add('active')
  
    currentIndex++

  }else if(currentIndex === slidesElements.length - 1 ){
    // tolgo la classe active dalla slide attiva 
    const slideAttiva = slidesElements[currentIndex]
    console.log(slideAttiva)
    slideAttiva.classList.remove('active')
    // do la classe active alla prima slide
    const slideSuccessiva = slidesElements[0]
    slideSuccessiva.classList.add('active')
  
    currentIndex = 0
  }
})
// prendo la freccia verso sx dal dom
const leftArrow = document.querySelector('.arrow-prev')
leftArrow.addEventListener('click',
function(){
  if (currentIndex !== 0){
    // toglie la classe active dalla slide attiva e la da alla slide precedente se non e' il primo
      const slideAttiva = slidesElements[currentIndex]
      console.log(slideAttiva)
      slideAttiva.classList.remove('active')
      // do la classe active alla slide precedente
      const slidePrecedente = slidesElements[currentIndex - 1]
      slidePrecedente.classList.add('active')
    
      currentIndex--
  } else if(currentIndex === 0){
    const slideAttiva = slidesElements[currentIndex]
    slideAttiva.classList.remove('active')

    const slidePrecedente = slidesElements[slidesElements.length - 1]
    slidePrecedente.classList.add('active')

    currentIndex = slidesElements.length - 1
  }
})








