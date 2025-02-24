let Sistem = setInterval(function() {
  let IsLoading = document.getElementById("isWebLoading")
  if (IsLoading) {
    let alertGrounp = document.getElementById("body_grounp")
    if (localStorage['alert_no_go_visible'] == 'true') {
      alertGrounp.style.display = 'none';
      console.log('Nao aparecer o convite para grupo novamente')
    }
    let search = document.getElementById("search")
    if (alertGrounp) {
      let btns = document.getElementsByClassName("btns_alert_grounp")
      let checkboxGrounpAlert = document.getElementById("checkbox_grounp_alert")
      checkboxGrounpAlert.addEventListener('change', (event) => {
        if (checkboxGrounpAlert.checked == true) {
          localStorage['alert_no_go_visible'] = 'true';
          console.log('Nao aparecer novamente ativado')
        } else {
          if (localStorage['alert_no_go_visible'] == 'true') {
            localStorage.removeItem('alert_no_go_visible')
            console.log('Nao aparecer novamente desativado')
          }
        }
      })
      btns[0].addEventListener('click',
        function() {
          alertGrounp.style.display = 'none';
        })
      btns[1].addEventListener('click',
        function() {
          alertGrounp.style.display = 'none';
          localStorage.setItem('alert_no_go_visible', 'true')
          window.open('https://chat.whatsapp.com/HhhmLJClqWNLLFZifLeR6h')
        })
    }
    if (search) {
      let slots = document.getElementsByClassName("box-slot")
      let nameSlot = document.getElementsByClassName("title-slot")
      search.addEventListener('keyup', (event) => {
        let searchVal = search.value.toLowerCase()
        if (searchVal !== '') {
          for (i = 0; i < slots.length; i++) {
            if (!nameSlot[i].textContent.toLowerCase().includes(searchVal)) {
              slots[i].style.display = 'none';
            } else {
              slots[i].style.display = '';
            }
          }
        } else {
          for (i = 0; i < slots.length; i++) {
            slots[i].style.display = '';
          }
        }
      })
    }
    clearInterval(Sistem)
  }
}, 1)