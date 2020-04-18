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





