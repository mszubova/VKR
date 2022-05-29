export default function(name){
  try{
    let matches = document.cookie.match(new RegExp(
      // eslint-disable-next-line no-useless-escape
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
  }
catch(e){
  console.error("read cookie", e);
}
}