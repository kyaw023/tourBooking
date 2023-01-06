//  for dark mode
const darkSwitchIcon = document.querySelector("#dark-switch-icon");

                        const darkSwitch = document.querySelector("#dark-switch")
                        const darkText = document.querySelector("#dark-text")
                        const darkChangeText = document.querySelector("#dark-text-change")
                        const html = document.documentElement;
                        let isDarkMode = false;

                        // Switch theme function
                        const toggleTheme = () => {
                            isDarkMode = !isDarkMode;
                            switchTheme()
                        }

                        const toDark = () => {
                            darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]','bg-slate-900')
                            darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`
                            // darkChangeText.innerText = 'Dark'
                            darkSwitch.classList.remove('bg-slate-800')
                            darkSwitch.classList.add('bg-slate-100')
                            localStorage.setItem('data-theme', 'dark')
                            html.classList.add('dark')
                            darkText.classList.add('-translate-x-7')
                            darkText.innerText = 'ON'
                        }

                        const toLight = () => {
                            darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900')
                            // darkChangeText.innerText = 'Light'
                            darkSwitch.classList.remove('bg-slate-100')
                            darkSwitch.classList.add('bg-slate-800')
                            localStorage.removeItem('data-theme')
                            html.classList.remove('dark')
                            darkText.classList.remove('-translate-x-7')
                            darkText.innerText = 'FF'
                            darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
                            setTimeout(() => {
                                darkSwitchIcon.classList.remove('rotate-[360deg]')
                            }, 200)
                        }

                        const switchTheme = () => {
                            isDarkMode ? toDark() : toLight()
                            // or
                            // if (isDarkMode) {
                            //     toDark()
                            // } else {
                            //     toLight()
                            // }
                        }


                        // If you do reload the webpage,
                        // doesn't change you choose theme.
                        // This `dataTheme` function save permentaly choose theme.

                        const dataTheme = localStorage.getItem('data-theme')

                        dataTheme === 'dark' ? toDark() : toLight();
                        // or
                        // if(dataTheme === 'dark') {
                        //     toDark()
                        // } else {
                        //     toLight()
                        // }



                        // for profile

                        let imgBtn = document.getElementById('img-btn');
                        let profileMenu = document.getElementById('profile-menu') ;
                            
                            imgBtn.addEventListener('click',()=>{
                                profileMenu.classList.toggle('active')
                            })

                            
                        let listOpen = document.getElementById('list-open');
                        let listOpenSlide = document.getElementById('list-open-slide')

                        listOpen.addEventListener('click',()=>{
                            listOpenSlide.classList.toggle('active-list')
                        });


        //   for menu

          let menuOpen = document.getElementById('menu-open');
          let menuOpenSlide = document.querySelector('#menu-open-slide');
          let icon = document.querySelector('.fa-bars')
           menuOpen.addEventListener('click',()=>{
               menuOpenSlide.classList.add('active')
               
               if(icon.classList.contains('fa-bars'))
               {
                 icon.classList.replace("fa-bars","fa-xmark")
               }
               else
               {
                  icon.classList.replace("fa-xmark","fa-bars")
               }

               menuOpen.addEventListener('click',()=>{
                   if(icon.classList.contains('fa-bars'))
                   {
                      menuOpenSlide.classList.remove('active')
                   }
               })
           })


        //   for notification

          let notiTab = document.querySelector('.noti-tab')
          let notiItem = document.querySelector('.noti-item')
             
              notiTab.addEventListener('click',()=>{
                notiItem.classList.toggle('active')
              })

        // for sm device menu
          let dropTab = document.querySelectorAll('.phone-drop-tab')
            
          dropTab.forEach(tab =>{
              tab.addEventListener('click',()=>{
                  tab.classList.toggle('activetab')

                  let items = tab.nextElementSibling
                  if(tab.classList.contains('activetab'))
                  {
                    items.classList.add('active')
                  }
                  else
                  {
                    items.classList.remove('active')
                  }
              })
          })
          
         let dropdownMain = document.querySelectorAll('.dropdown-main')

                dropdownMain.forEach(main =>{
                   
                    main.addEventListener('click',()=>{
                        
                        if(main.classList.contains('active-tab'))
                        {
                            main.classList.remove('active-tab')                          
                        }
                        else
                        {
                            dropdownMain.forEach(drop =>{
                                 drop.classList.remove('active-tab')
                            })
                        main.classList.toggle('active-tab')
                        }
                    })
                })
            let dropdownMainTwo = document.querySelectorAll('.dropdown-main-two')
                
                 dropdownMainTwo.forEach(maintwo =>{
                     
                     maintwo.addEventListener('click',()=>{
                        if(maintwo.classList.contains('active')){
                            maintwo.classList.remove('active')
                        }
                        else
                        {
                        
                         let mainitem = maintwo.nextElementSibling
                         mainitem.classList.toggle('active')
                        }
                     })
                 })
            
            let mainThree = document.querySelectorAll('.main-three')
               mainThree.forEach(three =>{
                three.addEventListener('click',()=>{
                  three.classList.toggle('activetab')

                  let items = three.nextElementSibling
                  if(three.classList.contains('activetab'))
                  {
                    items.classList.toggle('active')
                  }
              })
               })


            // for location

            let optBtn = document.querySelector('.opt-btn');
            let options = document.querySelector('.options')
            let inputBtn = document.getElementById('inputBtn')
            let optDiv = document.querySelector('.opt-div')

            let optLists = ["Select Location","San Jacinto, USA","North Dakota, Canada","West Virginia, Paris"];


            function list() {
                optLists.forEach(opt =>{
                     let div = `<div class=" px-3 text-slate-800 dark:text-slate-200" onclick="updatedName(this)">${opt}</div>`
                    optDiv.insertAdjacentHTML('beforeend',div)
                    
                });
            }
            list()

            

            function updatedName(selectdiv){
                options.classList.remove('active')
                optBtn.firstElementChild.innerText = selectdiv.innerText
            }

            inputBtn.addEventListener('keyup',()=>{
                 let arr = [];
                 searchValue = inputBtn.value.toLocaleLowerCase();

                 arr = optLists.filter(data =>{
                    return data.toLocaleLowerCase().startsWith(searchValue)
                 }).map(data => `<div class=" px-3 text-slate-800 dark:text-slate-100"onclick="updatedName(this)">${data}</div>`).join("");
                 optDiv.innerHTML = arr ? arr : `<span class="px-3 text-slate-800 font-normal dark:text-slate-200">No results Found</span>`
                 
            })
            optBtn.addEventListener('click',()=>{
                options.classList.toggle('active')
            })

            // for tour
            
            let tourLists = ["Select Type","Adventure","Beach","Desert","History"];

            let tourListDiv = document.querySelector('.tour-list-div');
            let tourBtn = document.querySelector('.tour-btn')
            let tourOptions = document.querySelector('.tour-options')
            let inputTourBtn = document.querySelector('#input-tour-btn')
            function tourlist(){
                tourLists.forEach(tour =>{
                    
                  let tourdiv = `<div class=" px-3 text-slate-800 dark:text-slate-200" onclick="updatedTour(this)">${tour}</div>`
                    
                  tourListDiv.insertAdjacentHTML('beforeend',tourdiv)
                   
                //   console.log(tourdiv)
                });
               
            }
            tourlist()

            function updatedTour(selecttour)
            {
                tourBtn.firstElementChild.innerHTML = selecttour.innerText;
                tourOptions.classList.remove('active')
            }

            inputTourBtn.addEventListener('keyup',()=>{
                
                let a = [];

                searchInputVal = inputTourBtn.value.toLocaleLowerCase()

                 a = tourLists.filter(data =>{
                    return data.toLocaleLowerCase().startsWith(searchInputVal)
                }).map(data =>`<div class=" px-3 text-slate-800 dark:text-slate-200" onclick="updatedTour(this)">${data}</div>`).join('')

                tourListDiv.innerHTML = a ? a : `<span class="px-3 text-slate-800 font-normal dark:text-slate-100">No results Found</span>`
                // console.log(a)

            })
            

            tourBtn.addEventListener('click',()=>{
                tourOptions.classList.toggle('active')
            })

            
            let delIcon = document.querySelectorAll('.del-icon');
                // console.dir(delIcon)

                delIcon.forEach(icon =>{
                    // console.log(icon)
                    icon.addEventListener('click',()=>{
                        icon.parentElement.classList.add('hidden')
                    })
                })
            let clearAll = document.querySelector('#clear-all')

                    clearAll.addEventListener('click',()=>{
                        clearAll.parentElement.parentElement.classList.add('hidden')
                    })



            