console.log("jscripting...")

$( document ).ready(function() {
  $(".dropdown-trigger").dropdown();
  $('.modal').modal();
  console.log( "ready!" );

  let vars = [];
  let keyValue = null;
  let q = document.URL.split('?')[1];
  if (q != undefined){
    let qs = q.split('&');
    for (let i = 0; i < qs.length; i++){
      keyValue = qs[i].split('=');
      vars.push(keyValue[1]);
      vars[keyValue[0]] = keyValue[1];
    }
    if (vars.toast) {
      M.toast({html: 'You must be logged in to view that page.'});
    }
  }

});
