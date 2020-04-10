const fetch = require("node-fetch");
const getData = async () => {
  const API = "https://server-1.now.sh/company";
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
