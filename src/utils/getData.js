const API = "https://server-1.now.sh/company";
const getData = async (id) => {
  const apiURL = id ? "${API}${id}" : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
