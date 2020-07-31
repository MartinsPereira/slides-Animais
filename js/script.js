import slide from './slide.js'
import Slide from './slide.js'


const slides = new Slide('.slide','.slide-wrapper')
slides.init();

slides.changeSlide(3)