import isValidCardNumber from "./luhn";
import getPaymentSystem  from "./paymentSystem";

import visa from '../img/visa.png';
import mastercard from '../img/mastercard.png';
import amex from '../img/amex.png';
import discover from '../img/discover.png';
import jcb from '../img/jcb.png';
import diners from '../img/diners.png';
import mir from '../img/mir.png';

const CARDS = [
  {name: 'visa', src: visa},
  {name: 'mastercard', src: mastercard},
  {name: 'amex', src: amex},
  {name: 'discover', src: discover},
  {name: 'jcb', src: jcb},
  {name: 'diners', src: diners},
  {name: 'mir', src: mir},
];

export default class CardWidget {
    constructor(container) {
      this.container = container;
    }

    render() {
      const icons = CARDS.map((card) => `<img class='card-icon' src='${card.src}' alt='${card.name}' data-name='${card.name}'>`).join('');
      this.container.innerHTML = `      <div class="cards">${icons}</div>
      <form class="validator-form">
        <input class="card-input" type="text" placeholder="Номер карты">
        <button type="submit">Click to Validate</button>
      </form>
      <div class="result"></div>
    `;
    this.form = this.container.querySelector('.validator-form');
    this.input = this.container.querySelector('.card-input');
    this.result = this.container.querySelector('.result');
    this.icons = this.container.querySelectorAll('.card-icon');
    this.form.addEventListener('submit', (e) => 
      this.onSumbit(e));
    }
    onSumbit(e) {
      e.preventDefault();

      const number = this.input.value.replace(/\s/g, '');
      const system = getPaymentSystem(number);
      const isValid = isValidCardNumber(number);
      this.highlight(system);
      this.result.textContent = isValid ? 'Номер валиден' : 'Номер невалиден';
    }

    highlight(system) {
      this.icons.forEach((icon) => {
        icon.classList.toggle('active', icon.dataset.name === system);
      });
    }

    
  }