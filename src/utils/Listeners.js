export const addListener = () => {
  let count = 0;
  const id = 17;

  const $ListOfItems = document.getElementsByClassName("link-navbar");
  const $ListOfItemsFooter = document.getElementsByClassName("footer-item");
  const $ListOfItemsHeader = document.getElementsByClassName("header-item");

  for (let i = 0; i < $ListOfItems.length; i++) {
    $ListOfItems[i].addEventListener("click", () => {
      count++;
      console.log(`Id: ${id} count: ${count}`);
    });
  }
  for (let i = 0; i < $ListOfItemsHeader.length; i++) {
    $ListOfItemsHeader[i].addEventListener("click", () => {
      for (let i = 0; i < $ListOfItemsFooter.length; i++) {
        $ListOfItemsFooter[i].classList.toggle("toggle-footer");
      }
    });
  }
  console.log($ListOfItemsFooter);
  for (let i = 0; i < $ListOfItemsFooter.length; i++) {
    $ListOfItemsFooter[i].addEventListener("click", () => {
      for (let i = 0; i < $ListOfItemsHeader.length; i++) {
        $ListOfItemsHeader[i].classList.toggle("toggle-header");
      }
    });
  }
};
