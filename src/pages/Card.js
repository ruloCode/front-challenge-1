const Card = ({ title, image, content }) => {
  const view = `
    <div class="card-container">
    <a href="#">
    <div class="img-container">
    <img
    src="${image}"
    alt="${title}"
    />
    </div>
    <div class="description-container">
            <h4>${title}</h4>
            <p>
            ${content}
            </p>
            </div>
            </a>
    </div>
  
  `;
  return view;
};
export default Card;
