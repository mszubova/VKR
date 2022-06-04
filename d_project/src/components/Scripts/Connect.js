import errorController from './errorController.js' //обработчик ошибок
import { emitter } from '@/main.js'; //сонтроллер событий
export async function requestData(data){
let response = await fetch("http://geetech.store/mainController.php",{ //Создание нового запроса
    method: "POST", //метод отправки запроса
    headers: {
        'Content-Type': 'application/json;charset=utf-8' //заголовок запроса
    },
    body:JSON.stringify(data) //тело запроса (обрабатываемый в JSON формат объект)
}
);

if (response.ok) { //условие при корректном ответе сервера
  let json = await response.json();
  requestView(json);
} else {
  errorController("Ошибка HTTP: " + response.status); //передача некорректного ответа в обработчик ошибок
}
}
//проверка ответа с сервера
function requestView(data){ 
  switch (data['authorization']){ //условие на ответ об авторизации
    case true:
      redirect(data);
      break;
    case false:
      errorController("Не удалось авторизоваться.", data);
      break;
  }
  if(data['registration']==true){ //условие удачной регистрации
    redirect(data);
  }
  else if(data['using']==true){
    emitter.emit("EmailIsUsing", data['email'])
  }
}
//сохранение необходимых данных и перенаправление на страницу личного кабинета
async function redirect(data){
  try{
    //запись в cookie
    document.cookie = encodeURIComponent('name') + '=' + encodeURIComponent(data['name']);
    document.cookie = encodeURIComponent('role') + '=' + encodeURIComponent(data['role']);
    document.cookie = encodeURIComponent('email') + '=' + encodeURIComponent(data['email']);
    window.location.href = '/person.html?&'+data['name'] //перенаправлние на person.html с сохранием имени в строке поиска
  }
  catch(e){
    console.log(e);
  }
}