async function getCombindData() {
  const [data1, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
      response.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
      response.json()
    ),
  ]);
  const combineData = {
    todo: data1,
    post: data2,
  };
  return combineData;
}

getCombindData().then((data) => console.log(data));
