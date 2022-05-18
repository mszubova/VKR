export async function requestData(data){
let response = await fetch("/mainController.php",{
    method: "POST",
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: data
}
);

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  let json = await response.json();
  alert(json);
} else {
  alert("Ошибка HTTP: " + response.status);
}
}