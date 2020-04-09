import getData from "../utils/getData";
import Footer from "./Footer";
import Card from "./Card";
const Home = async () => {
  const data = await getData();
  console.log(data);
  const view = `
    <div class="Home">
      <div class="titles-container">
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
