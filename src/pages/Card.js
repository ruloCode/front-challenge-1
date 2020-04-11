const Card = ({ title, image, content, id }) => {
  const switchColor = (id) => {
    const baseClase = "card-container";
    switch (id) {
      case "img1":
        return `${baseClase} color1`;
      case "img2":
        return `${baseClase} color2`;
      case "img3":
        return `${baseClase} color3`;
      case "img4":
        return `${baseClase} color4`;
      default:
        return baseClase;
    }
  };
  const view = `
    <div class="${switchColor(id)}">
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
