let Sistem = setInterval(function() {
  let search = document.getElementById("search")
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
      clearInterval(Sistem)
    }
 }, 1)
