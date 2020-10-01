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
