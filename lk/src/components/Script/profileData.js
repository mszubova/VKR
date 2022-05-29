export async function responsePersonalData(login){
  let response = await fetch("../mainControllerPC.php",{
      method: "POST",
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body:JSON.stringify(login)
  }
  );
  console.log ("send: "+ JSON.stringify(login))
  if (response.ok) {
    let json = await response.json();
    alert(json);
    console.log(json)
  } else {
    console.log("Ошибка HTTP: " + response.status);
  }
}