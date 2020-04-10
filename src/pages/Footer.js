import { data } from "../utils/data";

const Footer = ({ welcome, news, services }) => {
  console.log(data);
  const view = `
    
    <div class="footer">
      <div class="footer-target welcome">
        <h3 class="title">¡Bienvenido!</h3>
        <div>
            <p class="normal">
              ${welcome}
            </p>
              <br/>
            <p class="normal">
              ${welcome}
            </p>
        </div>
        <a class="btn" href="#">Leer más</a>
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
        <a class="btn" href="#">Más noticias</a>
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
        <a class="btn" href="#">Leer más</a>
      </div>
  </div>
  `;
  return view;
};
export default Footer;
