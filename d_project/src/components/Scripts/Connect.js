import errorController from './errorController.js'
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
  requestView(json);
} else {
  console.log("Ошибка HTTP: " + response.status);
}
}

function requestView(data){
  switch (data['authorization']){
    case 'true':
      redirect(data['login']);
      break;
    case 'false':
      errorController("Не удалось авторизоваться. Ты лох");
      break;
    case true:
      redirect(data['login']);
      break;
    case false:
      errorController("Не удалось авторизоваться. Ты лох");
      break;
    default:
      errorController("Неизвестный ответ сервера")
      break;
  }
}

async function redirect(data){
  try{
    window.location.href = '/person.html?&'+data
  }
  catch(e){
    console.log(e);
  }
}