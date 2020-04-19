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

        
      for( let i = 0; i < $ListOfItems.length; i++) {
        $ListOfItems[i].addEventListener('click', () => {
          count++
          console.log(`Id: ${id} count: ${count}`)
        })
      }
        
      }, 1000)
      
    }
  } catch (error) {
     console.log(error) 
   }
}

doRender()

