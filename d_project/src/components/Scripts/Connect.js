export async function requestData(data){
let response = await fetch("/mainControllerPC.php",{
    method: "POST",
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: data
}
);

if (response.ok) {
  let json = await response.json();
  alert(json);
} else {
  alert("Ошибка HTTP: " + response.status);
}
}