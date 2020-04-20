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

            <li  class="link-navbar header-item"><a  href="#">Inicio</a></li>
            <li  class="link-navbar header-item"><a  href="#">Acerca</a></li>
            <li  class="link-navbar header-item"><a  href="#">Servicios</a></li>
            <li  class="link-navbar header-item"><a  href="#">Productos</a></li>
            <li  class="link-navbar header-item"><a  href="#">Contacto</a></li>
        </menu>
        
       
      </nav>
    </div>
  `;

  
  return view;
};

export default Header;
