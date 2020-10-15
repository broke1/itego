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
        {url:"#greeting",name:"Приветствие",class:"anchor-link"},
        {url:"#troubles",name:"Решения",class:"anchor-link"},
        {url:"#compare",name:"Сравнения",class:"anchor-link"},
        {url:"main",name:"Услуги",class:"anchor-link"},
        {url:"main",name:"Контакты",class:"anchor-link"},
        {url:"#",name:"Оставить заявку",class:"callback-menu callback"},
      ]
    }

  })

  let anchors = document.querySelectorAll('.anchor-link')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      let id = anchor.getAttribute('href')
      
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

// Приветствие


new Vue({
  el: "#greeting",
  data: {
    text: "ITEGO - это небольшая команда специалистов, которая подходит индивидуально к каждому клиенту."
  }

})

// Проблемы

Vue.component('trouble-item', {
  props: ['troubles'],
  template: `
    <div class="item">
      <i :class="troubles.icon" class="icon"></i>
      <div class="item-title">{{troubles.title}}</div>
      <div class="item-description">{{troubles.description}}</div>
    </div>
  `
})

new Vue({
  el: "#troubles",
  data: {
    text: "Проблемы, от которых мы вас избавим.",
    troubles: [
      {
        icon: "fas fa-piggy-bank",
        title:"Экономия",
        description: `Исходя из всех исследований рынка труда, можно с уверенностью сказать, 
                      что наше аутсоурс решение, будет для Вас гораздо выгоднее,
                      чем штатный сотрудник.`
      },
      {
        icon: "fas fa-project-diagram",
        title:"Эффективность",
        description: `Зачастую один сотрудник просто физически не может справится с задачами,
                      появившимися в одно время. Наша команда, распределяет задачи и проблемы так,
                      чтобы они были решены максимально быстро и эффективно.`
      },
      {
        icon: "fas fa-piggy-bank",
        title:"Экономия",
        description: `Исходя из всех исследований рынка труда, можно с уверенностью сказать, 
                      что наше аутсоурс решение, будет для Вас гораздо выгоднее,
                      чем штатный сотрудник.`
      },
      {
        icon: "fas fa-project-diagram",
        title:"Эффективность",
        description: `Зачастую один сотрудник просто физически не может справится с задачами,
                      появившимися в одно время. Наша команда, распределяет задачи и проблемы так,
                      чтобы они были решены максимально быстро и эффективно.`
      },
      {
        icon: "fas fa-piggy-bank",
        title:"Экономия",
        description: `Исходя из всех исследований рынка труда, можно с уверенностью сказать, 
                      что наше аутсоурс решение, будет для Вас гораздо выгоднее,
                      чем штатный сотрудник.`
      },
      {
        icon: "fas fa-project-diagram",
        title:"Эффективность",
        description: `Зачастую один сотрудник просто физически не может справится с задачами,
                      появившимися в одно время. Наша команда, распределяет задачи и проблемы так,
                      чтобы они были решены максимально быстро и эффективно.`
      },
    ]
  }

})


// Свяжитесь с нами

new Vue({
  el: "#contact_us",
  data: {
    text: "Оставьте свои данные и мы поможем Вам более эффективно построить it инфраструктуру."
  }

})

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


// Сравнение


Vue.component('grid-table', {
  props: ['compare'],
  template: `
    <div class="grid-table">
      <div class="item header">{{compare[0].text}}</div>
      <div class="item  header">{{compare[0].text2}}</div>
      <div class="item  header">{{compare[0].text3}}</div>
      <div class="item ">{{compare[1].text}}</div>
      <div class="item ">{{compare[1].text2}}</div>
      <div class="item ">{{compare[1].text3}}</div>
      <div class="item blue">{{compare[2].text}}</div>
      <div class="item blue">{{compare[2].text2}}</div>
      <div class="item blue">{{compare[2].text3}}</div>
      <div class="item ">{{compare[3].text}}</div>
      <div class="item ">{{compare[3].text2}}</div>
      <div class="item ">{{compare[3].text3}}</div>
      <div class="item blue">{{compare[4].text}}</div>
      <div class="item blue">{{compare[4].text2}}</div>
      <div class="item blue">{{compare[4].text3}}</div>
      <div class="item footer">{{compare[5].text}}</div>
      <div class="item footer">{{compare[5].text2}}</div>
      <div class="item footer">{{compare[5].text3}}</div>
    </div>
  `
})



new Vue({
  el: "#compare",
  data: {
    text: "Содержать штатного специалиста или локальную it инфраструктуру это <br> <span>не выгодно</span> Давайте посчитаем.",
    table: [
      { text: "Расходы в месяц в руб.", text2: "Штатный сотрудник", text3: "IT-аутсорс" },
      { text: "Sony playstation 4 и игры", text2: "30 000", text3: "-" },
      { text: "Кальян и табак", text2: "7 000", text3: "-" },
      { text: "Проститутки", text2: "50 000", text3: "-" },
      { text: "Зарплата", text2: "80 000", text3: "50 000" },
      { text: "Итого", text2: "167 000", text3: "50 000" },
    ]
  }

})





})