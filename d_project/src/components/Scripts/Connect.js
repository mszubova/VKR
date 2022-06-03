import errorController from './errorController.js'
import { emitter } from '@/main.js';
export async function requestData(data){
console.log(data);
let response = await fetch("http://geetech.store/mainController.php",{
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
    case true:
      redirect(data);
      break;
    case false:
      errorController("Не удалось авторизоваться.");
      break;
  }
  if(data['registration']==true){
    redirect(data);
  }
  else if(data['using']==true){
    emitter.emit("EmailIsUsing", data['email'])
  }
}

async function redirect(data){
  try{
    document.cookie = encodeURIComponent('name') + '=' + encodeURIComponent(data['name']);
    document.cookie = encodeURIComponent('role') + '=' + encodeURIComponent(data['role']);
    document.cookie = encodeURIComponent('email') + '=' + encodeURIComponent(data['email']);
    window.location.href = '/person.html?&'+data['name']
  }
  catch(e){
    console.log(e);
  }
}