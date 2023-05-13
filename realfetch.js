



async function MJapi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const jsonData = await response.json();
  console.log(jsonData);
  //return jsonData;
}

var result = MJapi();
console.log(result);