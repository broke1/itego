'use strict'

window.addEventListener('load', function() {

 // МЕНЮ
      
 Vue.component('menu-items', {
  props: ['menu'],
  template: `
    <a :href="menu.url" :class="menu.class">{{menu.name}}<span></span></a>
  `
})


new Vue({
  el: ".menu",
  data: {
    menu: [
      {url:"../index.html",name:"Обратно на сайт",class:""},
      {url:"#",name:"Оставить заявку",class:"callback-menu callback"},
    ]
  }

})


// Контакты


Vue.component('contact-item', {
  props: ['contacts'],
  template: `
      <a :href="contacts.url" class="contact-link" target="_blanc">
        <i :class="contacts.class" class="contact-icon"></i>
        <p class="text-block">{{contacts.description}}</p>
      </a>
  `
})


new Vue({
  el: "#contacs",
  data: {
    text: "Контакты",
    contacts: [
      {url:"tel:12345678", class: "fas fa-mobile-alt", description: "8-(912)-234-53-76"},
      {url: "mailto:support@yandex.ru", class: "far fa-envelope", description: "support@yandex.ru"},
      {url:"https://api.whatsapp.com/send?phone=77079389810",class: "fab fa-whatsapp", description: "8-(912)-234-53-76"},
      {url: "https://tlgg.ru/itego", class: "fab fa-telegram-plane", description: "@it_support"},
    ]
  }

})


let contacts = document.querySelector('#contacs')
let pos_contacts =  contacts.offsetTop - contacts.offsetHeight/3


window.onscroll = () => { 

  let current_scroll = window.pageYOffset
  

  if (current_scroll > pos_contacts) {
    document.querySelectorAll('.contact-icon').forEach( item => {
      item.classList.add('show-icon')
    })
  } else {
    document.querySelectorAll('.contact-icon').forEach( item => {
      item.classList.remove('show-icon')
    })
  }



}



// Модальное окно

let body = document.querySelector('body')


let modal = new Vue({
  el: ".modal_callback",
  data: {
    active: false,
    text: "Оставьте свои данные",
    name: '',
    phone: '',
    email: '',
    text_success: 'Мы скоро с Вами свяжемся.' 
  }

})

document.querySelectorAll('.callback').forEach( item => {
  item.addEventListener('click', e=> {
    modal.active = !modal.active
    body.style.overflow = 'hidden'
  })
})

document.querySelector('.cancel-icon').addEventListener('click', e=> {
    modal.active = !modal.active
    body.style.overflow = 'auto'
    showStuff()
})

document.querySelector('.callback-send').addEventListener('click', e=>{
  // collect data and send
  modal.name = ''
  modal.phone = ''
  modal.email = ''
  showStuff()

})

function showStuff() {
  let success = document.querySelector('.success'),
      inputs = document.querySelector('.inputs-block'),
      button = document.querySelector('.form .button')

  if (success.classList.contains('show')) {
    success.classList.remove('show')
    inputs.classList.add('show')
    button.classList.add('show')
  } else {
    success.classList.add('show')
    inputs.classList.remove('show')
    button.classList.remove('show')
  }
}



})