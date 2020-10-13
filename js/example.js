'use strict'

window.addEventListener('load', function() {

        

    let sections = document.querySelectorAll(".section");
    let main_menu = document.querySelector(".main-menu");
    //let menu_links = document.querySelectorAll(".menu-link");
  
    new Vue({
      el: '.circles',
      data: {
        circles: [
            { number: "250" ,text: "счатсливых свадеб"},
            { number:  "120", text: "веселых дней рождений"},
            { number:  "7", text: "лет опыта" },
        ]
      }
    });

    new Vue({
      el: ".gallery-itself",
      data: {
        imgs: [
          {url:"img/gallery/img-1.png"},
          {url:"img/gallery/img-2.png"},
          {url:"img/gallery/img-3.png"},
          {url:"img/gallery/img-3.png"},
          {url:"img/gallery/img-2.png"},
          {url:"img/gallery/img-1.png"},
          {url:"img/gallery/img-1.png"},
          {url:"img/gallery/img-2.png"},
          {url:"img/gallery/img-3.png"},
          {url:"img/gallery/img-1.png"},
          {url:"img/gallery/img-2.png"},
          {url:"img/gallery/img-3.png"},
        ]
      }

    })

        
    Vue.component('otziv-items', {
      props: ['otzivi'],
      template: `
      <div class="otziv-itself">
          <div class="left-side">
                  <div class="img-otziv">
                      <img :src="otzivi.img" >
                  </div>
                  <div class="name-otziv">{{otzivi.name}}</div>
              <div class="link-otziv"><a :href="otzivi.url"><span>otzivi.link</span><i class="fa  fa-fw" :class="otzivi.fa"></i></a></div>
          </div>
          <div class="right-side">
                  <div class="text-otziv"><p>{{otzivi.text}}</p></div>
          </div>
      </div>
      `
    })


    new Vue({
      el: ".otzivi-block",
      data: {
        otzivi: [
          {img:"img/otzivi/img-1.png",name: "Иван и Алина", url:"#", link:"vk.com/alina",fa:"fa-vk", text: `
          Так не хочется повторяться, столько сказано того, что и мы хотели тебе сказать..., но не повториться не получится...)))
           Антош, ты настолько позитивный и отдающий полностью себя этой профессии, что мы еще такого не видели)
           Как большинство пар, мы переживали, чтобы найти хорошего фотографа, свадьба-это ведь такой день..., 
           в общем с фотографом ни в коем случае нельзя ошибиться) Мы не ошиблись, получили в миллион раз больше чем ожидали! 
           У нас теперь есть не только офигенные фотография в потрясающем качестве (хочу заметить из более 700 штук, ни одной повторяющейся),
            мы получили искренне радостную улыбку фотографа! Это так приятно, когда посторонний человек не просто пришел работать, 
            но и еще радовался вместе с вами)) Все гости в невероятном восторге, потому что вот ты подходишь к людям, чтобы сфоткать,
             а у них в ответ улыбчивые лица, это непроизвольно, потому что тот позитив, который ты несешь, он необъятен!!!!!))))) 
             Спасибо тебе огромнейшее за фото, за то дополнительное счастье к нашему празднику, за улыбки на лицах гостей, за приятное общение,
              за поддержку, за помощь, за подсказки, в те моменты, когда мы может где-то и терялись и за то, что ты такой хороший человечек)
               СПАСИБО ТЕБЕ ЗА ВСЕ ВСЕ ВСЕ!!! ТЫ ЛУЧШИЙ ФОТОГРАФ!!!
          `},
          {img:"img/otzivi/img-1.png",name: "Иван и Алина", url:"#", link:"vk.com/alina",fa:"fa-vk", text: `
          Так не хочется повторяться, столько сказано того, что и мы хотели тебе сказать..., но не повториться не получится...)))
           Антош, ты настолько позитивный и отдающий полностью себя этой профессии, что мы еще такого не видели)
           Как большинство пар, мы переживали, чтобы найти хорошего фотографа, свадьба-это ведь такой день..., 
           в общем с фотографом ни в коем случае нельзя ошибиться) Мы не ошиблись, получили в миллион раз больше чем ожидали! 
           У нас теперь есть не только офигенные фотография в потрясающем качестве (хочу заметить из более 700 штук, ни одной повторяющейся),
            мы получили искренне радостную улыбку фотографа! Это так приятно, когда посторонний человек не просто пришел работать, 
            но и еще радовался вместе с вами)) Все гости в невероятном восторге, потому что вот ты подходишь к людям, чтобы сфоткать,
             а у них в ответ улыбчивые лица, это непроизвольно, потому что тот позитив, который ты несешь, он необъятен!!!!!))))) 
             Спасибо тебе огромнейшее за фото, за то дополнительное счастье к нашему празднику, за улыбки на лицах гостей, за приятное общение,
              за поддержку, за помощь, за подсказки, в те моменты, когда мы может где-то и терялись и за то, что ты такой хороший человечек)
               СПАСИБО ТЕБЕ ЗА ВСЕ ВСЕ ВСЕ!!! ТЫ ЛУЧШИЙ ФОТОГРАФ!!!
          `},
        ]
      },
      mounted: function(){
          document.querySelector('.preloader').style.height = "0vh";
      }

    })


    Vue.component('price-items', {
      props: ['price'],
      template: `
        <div class="price-item"  :class="{active_price:price.isActive}">
            <div class="price-name line">{{price.name}}</div>
            <div class="price-time line">{{price.time}}</div>
            <div class="price-place line">{{price.place}}</div>
            <div class="price-photo line">{{price.place}}</div>
            <div class="price-work line">{{price.work}}</div>
            <div class="price-days line">{{price.days}}</div>
            <div class="price-tag">{{price.price_tag}}<i class="fa fa-ruble fa-fw"></i>
                            <div class="line-cross" v-if="price.seen"></div>
                            <div class="price-tag-under" v-if="price.seen">{{price.price_tag_under}}<i class="fa fa-ruble fa-fw"></i></div> 
            </div>
        </div>
      `
    })


    new Vue({
      el: ".price-block",
      data: {
        price_list: [
          {name:"Бомж",time:"1 час съемки",place:'Выезд',photo:'100 фото',work:'Photoshop',days:'3 дня',price_tag:"10 000",seen:false,price_tag_under:"", isActive:false},
          {name:"Рабочий",time:"2 часа съемки",place:'Выезд',photo:'150 фото',work:'Photoshop + молитвы',days:'7 дней',price_tag:"15 000",seen:true,price_tag_under:"17 000", isActive:true},
          {name:"Депутат",time:"3.5 часа съемки",place:'Выезд  + студия',photo:'300 фото',work:'Photoshop + магия',days:'14 дней',price_tag:"25 000",seen:false,price_tag_under:"",isActive:false},
        ]
      }

    })


    new Vue({
      el: ".contact-block",
      data: {
        contact: [
          {url:"tel:+79233453445",link:"+7 (923) 345-34-45",fa_class:'fa-phone'},
          {url:"mailto:anton@yandex.ru",link:"anton@yandex.ru",fa_class:'fa-envelope'},
          {url:"vk.ru/anton",link:"vk.ru/anton",fa_class:'fa-vk'},
          {url:"twitter.ru/anton",link:"twitter.ru/anton",fa_class:'fa-twitter'},
          {url:"instagram.ru/anton",link:"instagram.ru/anton",fa_class:'fa-instagram'},
        ]
      }

    })


    Vue.component('modal-form', {
      props: ['settings'],
      template: `
        <div class="modal-form">
            <div class="shadow-back"></div>
            <div class="modal-form-itself">
                <form action="/send/send.php" name="modal">
                    <div class="close-btn">X</div>
                    <p class="zagolovok-form">{{settings.zagolovok}}</p>
                    <input type="hidden" name="name_form" v-bind:value="settings.hidden" class="form-item">
                    <input type="text" name="name" placeholder="Ваше имя" class="form-item">
                    <input type="text" name="phone" class="phone-form-modal form-item"  placeholder="+7 (___) ___-__-__ " >
                    <textarea rows="7" cols="42" v-if="settings.textarea"   name="otziv" class="form-item" :placeholder="settings.textarea_placeholder"></textarea>
                    <div class="form-group modal-file form-item" v-if="settings.file"  >
                        <label for="modal__file" class="textover">Файл не загружен</label>
                        <input type="file" id="modal__file" name="file"   value=""></input>
                    </div>
                    <div class="accept-block">
                        <input id="accept-modal" type="checkbox" name="accept" value="male">
                        <label for="accept-modal">Я разрешаю обработку моих персональных данных</label>
                    </div> 
                    <div class="description-accept hide">Согласитесь с обработкой данных</div>
                    <div  class="button-send-modal  form-item" >Отправить</div>
                </form>
                <div class="description hide">{{settings.description}}</div>
            </div>
        </div>
      `
    })

   new Vue({
        el: '.otzivi-form',
        data: {
          settings: 
              { 
                zagolovok: "Оставьте свой отзыв и скоро он появится на сайте",
                description: 'Ваш отзыв отправлен',
                hidden : 'otzivi',
                textarea: true,
                textarea_placeholder: "Ваш отзыв",
                file: true
              },
        },
          mounted: function () {
            $(".phone-form-modal").mask("+7 (999) 999-99-99");
          }
    })


    document.querySelector(".btn-otzivi").addEventListener('click', () => {

      
      document.querySelector('.modal-form form').reset();
      if(document.querySelector('.modal-file label')) {
         document.querySelector('.modal-file label').innerHTML = "Файл не выбран"; 
      }
      document.querySelector('.modal-form .description').classList.add('hide');
      document.querySelector('.modal-form form').classList.remove('hide');
      document.querySelector('.modal-form').style.visibility = "visible";
      document.querySelector('.modal-form').style.opacity = "1";

    });

    document.querySelector('input[type=file]').addEventListener('change', ()=>{
      let value = document.querySelector('input[type=file]').value.split ('/');
      if (value.length == 1){
        value = document.querySelector('input[type=file]').value.split ('\\').pop();
      };
        document.querySelector('.modal-file label').innerHTML = value;
 });



 
 document.querySelector('.modal-form .close-btn').addEventListener('click', () => { 
          document.querySelector('.modal-form').style.opacity = "0";
          document.querySelector('.modal-form').style.visibility = "hidden";
 });
 
 document.querySelector('.modal-form .shadow-back').addEventListener('click', () => { 
        document.querySelector('.modal-form').style.opacity = "0";
        document.querySelector('.modal-form').style.visibility = "hidden";
  });


 document.querySelector('.modal-form .button-send-modal').addEventListener('click', () => {
     
          let parrent = event.target.parentElement;

          let accept = parrent.querySelector('input[type="checkbox"]');
          let description = parrent.parentElement.querySelector('.description-accept');
           if (accept.checked) { 
               
            sendModal(document.forms.modal);
             }  else {
              description.classList.remove('hide');
              setTimeout(() =>{
                description.classList.add('hide');
                    }, 2000);
            }


        });


    

       

    
    $('.scroll-block').jScrollPane();

    
     

    $('.otzivi-block').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    document.querySelectorAll('.text-otziv').forEach(item => {
      $(item).jScrollPane();
    });
    
   
    $('#fullpage').fullpage({
         anchors: ['about', 'achive', 'gallery', 'otzivi', 'price', 'contacts'],
         menu: '#menu',
         css3: true,
         afterLoad: function(origin,index) {
           // setWhite(menu_links);
            Scroll(index);
          },
          onLeave (index){
            ScrollOut(index);
          }

        });

        let canvas = document.querySelectorAll('.circle');
        let flag = 0;
        let number = 0;

        function Scroll(index) {

        
            setTimeout(()=>{

            let section = sections[index-1];

            if (section.classList.contains('about')) {
                
                    section.querySelector('.zagolovok').classList.add('zagolovok-show');
                    section.querySelector('.img-logo').classList.add('img-logo-show');
                    section.querySelector('.obo-mne').classList.add('obo-mne-show');
  
            }

            if (section.classList.contains('achive')) {
             
                
                // section.querySelector('.vspishka').classList.add('vspishka-show');
                // setTimeout(()=>{
                //   section.querySelector('.img-block-2').classList.add('img-block-2-show');
                 
                // },300);

                main_menu.style.opacity = '1';

              

                  canvas.forEach(item => {

                    item.parentElement.classList.add('circle-block-show');
                    number = item.parentElement.querySelector('.circle-numbers');
                 
                            number.parentElement.classList.add('circle-block-show');
                            if (flag < 3) {
                              createCircle(item,number); 
                            }
                            flag += 1;

                 });

               


            }

            if (section.classList.contains('gallery')) {

              main_menu.style.opacity = '1';
            
              section.querySelector('.zagolovok').classList.add('zagolovok-show');
              section.querySelector('.scroll-block').classList.add('scroll-block-show');
              
              $("#lightgallery").lightGallery(); 
             
              document.querySelector('.gallery-itself').addEventListener("mouseover",function(){
                document.querySelector('#fullpage').onwheel =  function(event) {
                  event.stopPropagation();
                  
                };
              });
              document.querySelector('.gallery-itself').addEventListener("mouseout",function(){
                document.querySelector('#fullpage').onwheel =  function() {
                  document.querySelector('#fullpage').originalEvent;
                };
              });

            }

            if (section.classList.contains('otzivi')) {

              main_menu.style.opacity = '1';
            
              section.querySelector('.zagolovok').classList.add('zagolovok-show');
              section.querySelector('.otzivi-block').classList.add('otzivi-block-show');
              section.querySelector('.btn-otzivi').classList.add('btn-otzivi-show');
              

              document.querySelectorAll('.text-otziv').forEach(item => {
                
                item.addEventListener("mouseover",function(){
                  document.querySelector('#fullpage').onwheel =  function(event) {
                    event.stopPropagation();
                    
                  };
                });
                item.addEventListener("mouseout",function(){
                  document.querySelector('#fullpage').onwheel =  function() {
                    document.querySelector('#fullpage').originalEvent;
                  };
                });
              });
           

            }


            if (section.classList.contains('price')) {

              main_menu.style.opacity = '1';
            
              section.querySelector('.zagolovok').classList.add('zagolovok-show');

      
                     document.querySelectorAll('.price-item').forEach(item => {
                              item.addEventListener('click', () => {
                                 document.querySelectorAll('.price-item').forEach(items => {
                                     items.classList.remove('active_price');
                                 });
                                 item.classList.add('active_price');
                              });
                     });
             

            }

            if (section.classList.contains('contacts')) {

                main_menu.style.opacity = '1'; 

                section.querySelector('.zagolovok').classList.add('zagolovok-show');
                section.querySelector('.contact-block').classList.add('contact-block-show');
          

            }

        },300);

        }

        function ScrollOut(index) {
            let section = sections[index-1];

            if (section.classList.contains('about')) {
                section.querySelector('.zagolovok').classList.remove('zagolovok-show');
                section.querySelector('.img-logo').classList.remove('img-logo-show');
                section.querySelector('.obo-mne').classList.remove('obo-mne-show');
            }

            if (section.classList.contains('gallery')) {
              section.querySelector('.zagolovok').classList.remove('zagolovok-show');
              section.querySelector('.scroll-block').classList.remove('scroll-block-show');
            }
           
            if (section.classList.contains('otzivi')) {
            
              section.querySelector('.zagolovok').classList.remove('zagolovok-show');
              section.querySelector('.otzivi-block').classList.remove('otzivi-block-show');
              section.querySelector('.btn-otzivi').classList.remove('btn-otzivi-show');

            }

            if (section.classList.contains('price')) {
            
              section.querySelector('.zagolovok').classList.remove('zagolovok-show');
            }

            if (section.classList.contains('contacts')) {

              section.querySelector('.zagolovok').classList.remove('zagolovok-show');
              section.querySelector('.contact-block').classList.remove('contact-block-show');
            }
        }



});



function createCircle(canvas,number) {
        
  let ctx = canvas.getContext('2d');
  ctx.lineWidth = 5;
  ctx.strokeStyle="#ffffff";
  let degree = 0;
  let number_begin = 0;
  let number_end = number.innerHTML;
  let number_iter = Math.round(parseInt(number_end.replace(/\D/g, '')) / 74);
  
  
        let  interval = setInterval(function(){
          ctx.beginPath();
          ctx.arc(150, 150, 125, 0, getRadians(degree));
          ctx.stroke();
          degree = parseInt(degree + 5);
          number.innerHTML = number_begin;
          number_begin += number_iter;
          if (degree == 370){
            clearInterval(interval);
            number.innerHTML = number_end;  
          }
         
    },20);
 }


  function getRadians(degrees) {
      return (Math.PI/180)*degrees;
  }


  // function setWhite(menu_links){
  //   let name_page = document.location.hash;

  //   if (name_page == "#about" || name_page == "") {
  //      document.querySelector('#menu').style.opacity = '0';
  //   } else {
  //     document.querySelector('#menu').style.opacity = '0.9';
  //   }

  //   menu_links.forEach(item => {
  //       if (name_page.indexOf(item.getAttribute('data-menuanchor')) != -1) {
  //          item.querySelector('a').style.background = "#ffffff";
  //       } else {
  //         item.querySelector('a').style.background = "transparent";
  //       }
  //   });

  // }

  function sendModal(form) {


             
    var formData = new FormData(form);




    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/send/send.php");
    xhr.send(formData);

    xhr.onreadystatechange = function() {
    if (this.readyState != 4) return;

    if (this.status != 200) {
    console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );

    document.querySelector('.modal-form .description').classList.remove('hide');
    document.querySelector('.modal-form form').classList.add('hide');
    setTimeout(()=>{
        document.querySelector('.modal-form').style.opacity = "0";
        document.querySelector('.modal-form').style.visibility = "hidden";
    }, 1500);


    return;
    } else {
     // console.log(this.responseText);

      document.querySelector('.modal-form .description').classList.remove('hide');
      document.querySelector('.modal-form form').classList.add('hide');
      setTimeout(()=>{
          document.querySelector('.modal-form').style.opacity = "0";
          document.querySelector('.modal-form').style.visibility = "hidden";
      }, 800);

    }

    }
}