const createBtn = document.getElementById('btn');
const createText = document.getElementById('text');

  createBtn.addEventListener('click', ()=>{
    setTimeout(function(){ 
     createText.innerHTML = 'ボタンをクリックしました';
    }, 2000);
  });
