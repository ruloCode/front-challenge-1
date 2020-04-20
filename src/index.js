import router from "./routes/index";

const render = () => {

  return new Promise( (resolve, reject) => {

    const addListeners = () => {
      window.addEventListener("load", router);
      window.addEventListener("hashchange", router);
      return 'rendered'
    }
    (true)
    ? resolve(addListeners())
    
    : reject(new Error('Error'))
  })

};

const doRender = async () => {
  try {
    const rendering = await render() 
    console.log(rendering)
    if (rendering) {
      setTimeout( () => {
        let count = 0
        const id = 17

        const $ListOfItems = document.getElementsByClassName('link-navbar')
        const $ListOfItemsFooter = document.getElementsByClassName('footer-item')
        const $ListOfItemsHeader = document.getElementsByClassName('header-item')
        const $Footer = document.getElementById('footer')
        console.log($ListOfItemsFooter)


        
      for( let i = 0; i < $ListOfItems.length; i++) {
        $ListOfItems[i].addEventListener('click', () => {
          count++
          console.log(`Id: ${id} count: ${count}`)

        })
      }
      for( let i = 0; i < $ListOfItemsFooter.length; i++) {
          const Element = $ListOfItemsFooter[i]
          $ListOfItemsFooter[i].addEventListener('click', () => {
            Element.classList.toggle('toggle')
            for (let i = 0; i < $ListOfItemsHeader.length; i++) {
              $ListOfItemsHeader[i].classList.toggle('toggle')
            }
          })
      }
        
      }, 1000)
      
    }
  } catch (error) {
     console.log(error) 
   }
}

doRender()

