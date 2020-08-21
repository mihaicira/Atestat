var which = document.getElementById("A");
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(which.id == e.id){
    console.log("Same letter detected;")
    return;
   }
   e.classList.remove('out');
   e.classList.add('in');
   which.classList.remove('in');
   which.classList.add('out');
   e.style.display = 'block';
   which = e;
}
