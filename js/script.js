'use strict'

window.addEventListener('load', function() {


  // МЕНЮ

  let desktop = true

  if (screen.width < 500) {
    desktop = false
  }

  // Меню десктопное
      
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
        {url:"#services",name:"Услуги",class:"anchor-link"},
        {url:"#contacs",name:"Контакты",class:"anchor-link"},
        {url:"#",name:"Оставить заявку",class:"callback-menu callback"},
      ],
      desktop: desktop
    }

  })

  // Меню мобильное

Vue.component('menu-items-mobile', {
  props: ['menu'],
  template: `
    <a :href="menu.url" :class="menu.class">{{menu.name}}<span></span></a>
  `
})


let menuMob = new Vue({
  el: ".menu-mobile",
  data: {
    menu: [
      {url:"#greeting",name:"Приветствие",class:"anchor-link"},
      {url:"#troubles",name:"Решения",class:"anchor-link"},
      {url:"#compare",name:"Сравнения",class:"anchor-link"},
      {url:"#services",name:"Услуги",class:"anchor-link"},
      {url:"#contacs",name:"Контакты",class:"anchor-link"},
    ],
    button: {url:"#",name:"Оставить заявку",class:"callback-menu callback"},
    desktop: desktop,
    open: false,
  }

})

  if (document.querySelector('.hamburger')) {
    document.querySelector('.hamburger').addEventListener('click', e => {
      menuMob.open = !menuMob.open
    })
  }
  

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
    e.preventDefault()
    modal.active = !modal.active
   // let top = window.pageYOffset
    //setTimeout( () => {
      // window.scrollTo({
      //   top: top,
      //   behavior: "smooth"
      // })
   //console.log(top)
    // },1000)
    body.style.overflow = 'hidden'
   // body.style.position = 'fixed'
    //body.style.height = "100vh"
   // body.style.width = '100vw'
    //body.style.top = `-${top}px`
    
  })
})

let success = document.querySelector('.success'),
      inputs = document.querySelector('.inputs-block'),
      button = document.querySelector('.form .button')

document.querySelector('.cancel-icon').addEventListener('click', e=> {
    e.preventDefault()
    modal.active = !modal.active
    body.style.overflow = 'auto'
    //body.style.height = "auto"
    //body.style.position = 'relative'
   // body.style.width = 'auto'
   // body.style.top = `0px`
    success.classList.remove('show')
    inputs.classList.add('show')
    button.classList.add('show')
})

document.querySelector('.callback-send').addEventListener('click', e=>{
  // collect data and send
  modal.name = ''
  modal.phone = ''
  modal.email = ''
  success.classList.add('show')
  inputs.classList.remove('show')
  button.classList.remove('show')

})




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


// Команда

Vue.component('team-item', {
  props: ['team'],
  template: `
    <div class="team-item">
      <div class="img-block">
        <img :src="team.img" />
      </div>
      <div class="text-block"><span>{{team.description}}</span></div>
    </div>
  `
})

new Vue({
  el: "#team",
  data: {
    text: "В нашей команде только настоящие профессионалы своего дела.",
    team: [
      { img: "images/team/img-1.png", description: 'Благодаря большой команде мы всегда находим решения, за счет обмена опытом.'},
      { img: "images/team/img-2.png", description: 'Мы работаем по сменам, поэтому и поддержку оказываем круглосуточно.'},
      { img: "images/team/img-1.png", description: 'Благодаря большой команде мы всегда находим решения, за счет обмена опытом.'},
      { img: "images/team/img-2.png", description: 'Мы работаем по сменам, поэтому и поддержку оказываем круглосуточно.'},
    ]
  }

})

let team = document.querySelector('#team')
let pos_team =  team.offsetTop - team.offsetHeight/3

let contacts = document.querySelector('#contacs')
let pos_contacts =  contacts.offsetTop - contacts.offsetHeight/3



if (screen.width > 700) {

  window.onscroll = () => { 

    let current_scroll = window.pageYOffset
    

    if (current_scroll > pos_team) {
      document.querySelectorAll('.team-item').forEach( item => {
        item.classList.add('show-team')
      })
    } else {
      document.querySelectorAll('.team-item').forEach( item => {
        item.classList.remove('show-team')
      })
    }

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


}


// Услуги


Vue.component('service-item', {
  props: ['service'],
  template: `
    <div class="service-item">
      <a :href="service.url" target="_blanc">
        <img :src="service.img" />
        <div class="overlay"></div>
        <div class="text-block"><span>{{service.description}}</span></div>
      </a>
    </div>
  `
})


new Vue({
  el: "#services",
  data: {
    text: "Что мы предлагаем.",
    service: [
      {url:"pages/1c_program.html",img: "images/services/img-1.png", description: "1С программист"},
      {url:"pages/1c_program.html",img: "images/services/img-2.png", description: "Поддержка пользователей"},
      {url:"pages/1c_program.html",img: "images/services/img-3.png", description: "Видеонаблюдение"},
      {url:"pages/1c_program.html",img: "images/services/img-4.png", description: "Администрирвоание серверов"},
    ]
  }

})

let step = '320', margin = '20'

if(screen.width <= 1000) {
  step = '350'
  margin = '50'
} 
if (screen.width <= 800) {
  step = '450'
  margin = '150'
}
if (screen.width <= 500) {
  step = '300'
  margin = '0'
}
if (screen.height <= 400) {
  step = '400'
  margin = '100'
}
if (screen.height <= 350) {
  step = '375'
  margin = '75'
}

document.querySelector('.arrow-right').addEventListener('click', () => {
  let items = document.querySelectorAll('.service-item')
  let clone = items[0].cloneNode(true)
  let service_block = items[0].parentElement
  items[0].style.marginLeft = `-${step}px`
  setTimeout(() => {
    service_block.removeChild(items[0])
    service_block.appendChild(clone)
  },300)
})

document.querySelector('.arrow-left').addEventListener('click', () => {
  let items = document.querySelectorAll('.service-item')
  let last = items.length - 1
  let clone = items[last].cloneNode(true)
  clone.style.marginLeft = `-${step}px`
  let service_block = items[0].parentElement
  service_block.removeChild(items[last])
  service_block.insertBefore(clone, items[0])
  setTimeout( () => {
    clone.style.marginLeft = `${margin}px`
  },50)
  
})


let touchcoord = 0

document.addEventListener("touchstart", function (e) {
  touchcoord = e.touches[0].pageX
})

document.addEventListener("touchmove", function (e) {
   let node = e.target
   if (node.nodeName == 'SPAN') {
     node = node.parentElement
   }
   if (node.classList.contains('text-block')) {
      if ((e.touches[0].pageX < touchcoord)) {
        let items = document.querySelectorAll('.service-item')
        let last = items.length - 1
        let clone = items[last].cloneNode(true)
        clone.style.marginLeft = `-${step}px`
        let service_block = items[0].parentElement
        service_block.removeChild(items[last])
        service_block.insertBefore(clone, items[0])
        setTimeout( () => {
          clone.style.marginLeft = `${margin}px`
        },50)
      } else {
        let items = document.querySelectorAll('.service-item')
        let clone = items[0].cloneNode(true)
        let service_block = items[0].parentElement
        items[0].style.marginLeft = `-${step}px`
        setTimeout(() => {
          service_block.removeChild(items[0])
          service_block.appendChild(clone)
        },300)
      }
   } 
})

// document.addEventListener("touched", function (e) {
//   alert(e.touches[0].pageX)
// });


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




})