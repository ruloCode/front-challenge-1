import router from "./routes/index";

const render = async () => {
  try {
    await window.addEventListener("load", router);

    await window.addEventListener("hashchange", router);
    
  } catch (error) {
    console.log(error);
  }
};


render();


setTimeout(() => {
  const $listado = document.querySelectorAll(".link-navbar");
  $listado.forEach((item) => {
    item.addEventListener('click', () => {
      console.log('Hablate te')
    })
  })
    
  console.log($listado)
}, 6000)
