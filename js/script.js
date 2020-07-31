import {slideNav, Slide} from './slide.js'


const slides = new slideNav('.slide','.slide-wrapper')
slides.init();
slides.addArrow('.prev','.next')