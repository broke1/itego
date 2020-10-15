'use strict'

window.addEventListener('load', function() {


  // МЕНЮ
      
  Vue.component('menu-items', {
    props: ['menu'],
    template: `
      <a :href="menu.url" :class="menu.class" class="anchor-link">{{menu.name}}<span></span></a>
    `
  })


  new Vue({
    el: ".menu",
    data: {
      menu: [
        {url:"#greeting",name:"Приветствие",class:""},
        {url:"#troubles",name:"Решения",class:""},
        {url:"main",name:"Сравнения",class:""},
        {url:"main",name:"Услуги",class:""},
        {url:"main",name:"Контакты",class:""},
        {url:"main",name:"Оставить заявку",class:"callback-menu"},
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


})