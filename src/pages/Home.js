import getData from "../utils/getData";
import Footer from "./Footer";
import Card from "./Card";
const Home = async () => {
  const API = "https://server-1.now.sh/company";

  const data = await getData(API);
  const view = `
    <div class="Home">
      <div id="titles2" class="titles-container">
        <h2 class="main-title">${data.title}</h2>
        <h3 class="main-subtitle">${data.subtitle}</h3>
      </div>
      
      <div class="cards-container">
        ${data.cards.map((card) => Card({ ...card })).join("")}
      </div>

     ${Footer({ ...data })} 
      
    </div> 
  `;
  return view;
};

export default Home;
