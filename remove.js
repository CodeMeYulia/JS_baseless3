let removes = document.querySelectorAll('.pane');
console.log(removes);
function close (){
    removes[0].innerHTML = '';
}
removes[0].addEventListener('click', close);
removes[1].addEventListener('click', close);
removes[2].addEventListener('click', close);

