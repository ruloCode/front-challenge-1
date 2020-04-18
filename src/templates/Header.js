const { setState , getState, toggleLocalStorage} = require('../utils/saveLocal')
const Header = () => {
  const view = `
    <div id="Header" class="Header-main">
      <div class="Header-logo">
        <h1>
          <a class="logo" href="/">
            Empresa<span>.com</span>
          </a>
        </h1>
      </div>
      <nav>
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />

        <menu class="Header-nav" >

            <li id="listado"><a class="active" href="#">Inicio</a></li>
            <li><a class="link-navbar" href="#">Acerca</a></li>
            <li><a class="link-navbar" href="#">Servicios</a></li>
            <li><a class="link-navbar" href="#">Productos</a></li>
            <li><a class="link-navbar" href="#">Contacto</a></li>
        </menu>
        
       
      </nav>
    </div>
  `;

  setTimeout(() => {
    const $NavLinks = document.getElementsByClassName("link-navbar");
    console.log($NavLinks);
    const id = 10;
    let count = 20;

    setState("color", true);
    for (let i = 0; i < $NavLinks.length; i++) {
      $NavLinks[i].addEventListener("click", async () => {
        const newStorage = await toggleLocalStorage('toggle');
        console.log(newStorage);
      });
    }
  }, 3000);
  return view;
};

export default Header;
