import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from './modules/forms';
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from './modules/filter';
import pictureHover from "./modules/pictureHover";
import accordion from "./modules/accordion";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  modals();
  showMoreStyles('.button-styles', '#styles .row');
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  filter();
  pictureHover('.sizes-block');
  accordion('.accordion-heading');
});