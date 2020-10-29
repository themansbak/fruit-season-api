export const getData = (route, key, updateDataArr, updateData) => {
  console.log(route);
  fetch(route)
    .then((res) => res.json())
    .then((data) => {
      updateDataArr(data.map((obj) => obj[key]));
      updateData(data[0][key]);
    })
    .catch((e) => console.log(e));
};

export const getRes = (route, key, updateData) => {
  console.log(route);
  fetch(route)
    .then((res) => res.json())
    .then((data) => {
      updateData(data[key]);
    });
};

export async function getAllData(endpoint) {
  if (arguments.length > 1) {
    endpoint = `${arguments[0]}/${arguments[1]}/${arguments[2]}`;
    console.log(endpoint);
  }
  let data;
  try {
    const response = await fetch(endpoint);
    data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    return Promise.reject(error.message ? error.message : data);
  }
}
