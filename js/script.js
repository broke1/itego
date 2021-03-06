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
        icon: "fas fa-laptop-house",
        title:"Нужно организовать удаленную работу сотрудников?",
        description: `В кратчайшие сроки переведём сотрудников на удаленную работу и сохраним деятельность компании в полном объеме.`
      },
      {
        icon: "fas fa-server",
        title:"Тормозит сервер 1с?",
        description: `Наши специалисты найдут причины медленной работы 1с сервера, предлежат решение по оптимизации и улучшению работы.`
      },
      {
        icon: "far fa-frown",
        title:"Избавим вас от головной боли it.",
        description: `В нашей команде ребята с огромным опытом работы с серверами, пользовательскими компьютерами и сетевым оборудованием. 
                      Возьмём все головные боли на себя, организуем работу таким образом что бы не отвлекать вас от бизнеса.`
      },
      {
        icon: "fas fa-user-tie",
        title:"Нужен программист 1с?",
        description: `В нашем штате настоящие профессионалы, которые закроют любой вопрос связанный с 1с, за приемлемый бюджет.`
      },
      {
        icon: "fas fa-truck-loading",
        title:"Планируете переезжать или расширять офис?",
        description: `Наша команда спроектирует всё необходимое для it структуры вашей организации и перевезет ваше оборудование.`
      },
      {
        icon: "fas fa-wifi",
        title:"Плохо работает wi-fi?",
        description: `Мы спроектируем и настроим «бесшовный» wi-fi на всей территории помещения, 
                      без лишних переключений, вы перемешаетесь, а оборудование всё будет делать за вас.`
      },
      {
        icon: "fas fa-user-clock",
        title:"Ваш системный администратор часто «пропадает»?",
        description: `Если вам необходимо, то наши специалисты будут на связи 24/7.`
      },
      {
        icon: "fas fa-headset",
        title:"Техническая поддержка пользователей.",
        description: `Мы постоянно на связи, используем лучшие по безопасности программы 
                      для удаленного доступа и решение пользовательских задач.`
      },
      {
        icon: "fas fa-business-time",
        title:"Ваш администратор или аутсорсинг работают строго с 9-18?",
        description: `Мы подходим индивидуально к каждому клиенту, и планируем работы так что бы не отвлекать 
                      ваших специалистов от работы, нужно обновление в 3 часа ночи? Значит так и сделаем!`
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
    description: 'Согласитесь не обработку данных',
    descriptionShow: true,
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
  let formData = new FormData()
  formData.append('name', modal.name)
  formData.append('phone', modal.phone)
  formData.append('email', modal.email)

  let accept = document.querySelector('input[type="checkbox"]')
  if (accept.checked) {
    sendModal(formData)
  } else {
    modal.description = 'Согласитесь не обработку данных'
    modal.descriptionShow = false
    setTimeout( () => {
      modal.descriptionShow = true
    },2000)
  }

})


function sendModal(formData) {
   

  let xhr = new XMLHttpRequest()
  xhr.open("POST", "/send/send.php")
  xhr.send(formData)

  xhr.onreadystatechange = function() {
    
    if (this.readyState != 4) return

    if (this.status != 200) {
      console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') )
      modal.description = 'Ошибка отправки запроса. Попробуйте снова.'
      modal.descriptionShow = false
      setTimeout( () => {
        modal.descriptionShow = true
      },2000)

      return
    } else {
     console.log(this.responseText);
    
    modal.name = ''
    modal.phone = ''
    modal.email = ''
    accept.checked = false
    success.classList.add('show')
    inputs.classList.remove('show')
    button.classList.remove('show')

      // document.querySelector('.modal-form .description').classList.remove('hide');
      // document.querySelector('.modal-form form').classList.add('hide');
      // setTimeout(()=>{
      //     document.querySelector('.modal-form').style.opacity = "0";
      //     document.querySelector('.modal-form').style.visibility = "hidden";
      // }, 800);

    }

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
      <div class="item ">{{compare[5].text}}</div>
      <div class="item ">{{compare[5].text2}}</div>
      <div class="item ">{{compare[5].text3}}</div>
      <div class="item blue">{{compare[6].text}}</div>
      <div class="item blue">{{compare[6].text2}}</div>
      <div class="item blue">{{compare[6].text3}}</div>
      <div class="item ">{{compare[7].text}}</div>
      <div class="item ">{{compare[7].text2}}</div>
      <div class="item ">{{compare[7].text3}}</div>
      <div class="item footer blue">{{compare[8].text}}</div>
      <div class="item footer blue">{{compare[8].text2}}</div>
      <div class="item footer blue">{{compare[8].text3}}</div>
    </div>
  `
})



new Vue({
  el: "#compare",
  data: {
    text: "Содержать штатного специалиста или локальную it инфраструктуру это <br> <span>не выгодно</span> Давайте посчитаем.",
    table: [
      { text: "Расходы из рассчета за год", text2: "Штатный сотрудник", text3: "Команда itego" },
      { text: "Зарплата", text2: "600 000", text3: "500 000" },
      { text: "Налоги", text2: "258 000", text3: "0" },
      { text: "Рабочее место (ПК)", text2: "50 000", text3: "0" },
      { text: "Больничный", text2: "25 000", text3: "0" },
      { text: "Аренда и доп. расходы сотрудника", text2: "30 000", text3: "0" },
      { text: "Повышение квалификации", text2: "30 000", text3: "0" },
      { text: "ПО для удаленного доступа", text2: "27 000", text3: "0" },
      { text: "Всего", text2: "1 020 000", text3: "500 000" },
    ],
    benefit: "Выгода в год	<span>520 000 руб.</span>"
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

// document.addEventListener("touchmove", function (e) {
//    let node = e.target
//    if (node.nodeName == 'SPAN') {
//      node = node.parentElement
//    }
//    if (node.classList.contains('text-block')) {
//       if ((e.touches[0].pageX < touchcoord)) {
//         let items = document.querySelectorAll('.service-item')
//         let last = items.length - 1
//         let clone = items[last].cloneNode(true)
//         clone.style.marginLeft = `-${step}px`
//         let service_block = items[0].parentElement
//         service_block.removeChild(items[last])
//         service_block.insertBefore(clone, items[0])
//         setTimeout( () => {
//           clone.style.marginLeft = `${margin}px`
//         },50)
//       } else {
//         let items = document.querySelectorAll('.service-item')
//         let clone = items[0].cloneNode(true)
//         let service_block = items[0].parentElement
//         items[0].style.marginLeft = `-${step}px`
//         setTimeout(() => {
//           service_block.removeChild(items[0])
//           service_block.appendChild(clone)
//         },300)
//       }
//    } 
// })

document.addEventListener("touchend", function (e) {
    let node = e.target
    if (node.nodeName == 'SPAN') {
      node = node.parentElement
    }
    if (node.classList.contains('text-block')) {
      if ((e.changedTouches[0].pageX < touchcoord)) {
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