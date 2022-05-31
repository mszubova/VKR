export async function requestData(data){
console.log(data);
let response = await fetch("/mainController.php",{
    method: "POST",
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body:JSON.stringify(data)
}
);

if (response.ok) {
  let json = await response.json();
  console.log(json);
  return(json);
} else {
  console.log("Ошибка HTTP: " + response.status);
}
}

