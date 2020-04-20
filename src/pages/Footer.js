const { getState } = require("../utils/saveLocal");
const Footer = ({ news, services }) => {
  const view = `
    
    <div id="footer" class="footer-container">
      <div class="footer-target welcome">
        <h3 class="title">¡Bienvenido!</h3>
        <div>
            <p class="normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ratione ut
              vel! Debitis consequuntur dicta<span>consectetur</span> harum ducimus nulla quo.
            </p>
              <br/>
            <p class="normal">
            Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing elit. Voluptates ratione ut
            vel! Debitis consequuntur dicta reiciendis harum ducimus nulla quo.
            </p>
        </div>
        <button class="btn link-navbar footer-item">Leer más</button>

      </div>
      <div class="footer-target news">
        <h3 class="title">Noticias Recientes</h3>
        <div >
          
            ${news
              .map(
                (newPub) => `
                <div class="newPublication">
                  <h5>${newPub.publicated}</h5>
                  <p>
                    ${newPub.content}
                  </p>
                </div>
            `
              )
              .join("")}
        </div>
        <button class="btn link-navbar footer-item" >Más noticias</button>
      </div>
      <div class="footer-target services">
        <h3 class="title">Nuestros Servicios</h3>
        <div >
          <ol>
            ${services
              .map(
                (service) => `
                <li>
                  <a href="">${service}</a>
                </li>
            `
              )
              .join("")}
          </ol>
        </div>
        <button class="btn link-navbar footer-item" >Leer más</button>
      </div>
  </div>
  `;

  return view;
};
export default Footer;
