const clickBtn =  document.getElementById('btn');

clickBtn.addEventListener('click', ()=>{
  const createText = document.getElementById('text');
  createText.innerHTML = 'ボタンをクリックしました';
});