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
        {url:"main",name:"Ссылка 1",class:""},
        {url:"main",name:"Ссылка 2",class:""},
        {url:"main",name:"Ссылка 3",class:""},
        {url:"main",name:"Ссылка 4",class:""},
        {url:"main",name:"Ссылка 5",class:""},
        {url:"main",name:"Ссылка 6",class:"callback-menu"},
      ]
    }

  })






})