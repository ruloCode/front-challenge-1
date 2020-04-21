import router from "./routes/index";
import { addListener } from "./utils/Listeners";
const render = () => {
  return new Promise((resolve, reject) => {
    const addListeners = () => {
      window.addEventListener("load", router);
      return "rendered";
    };
    true ? resolve(addListeners()) : reject(new Error("Error"));
  });
};

const doRender = async () => {
  try {
    const rendering = await render();
    console.log(rendering);
    if (rendering) {
      setTimeout(() => {
        addListener();
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

doRender();
