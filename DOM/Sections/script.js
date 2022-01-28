function create(words) {
   const body = document.getElementById('content');
   words.forEach(w =>{
      const div = createElement('div');
      const p = createElement('p' , w);
      p.style.display = 'none'
      div.appendChild(p);
      body.appendChild(div)
   });
   body.addEventListener('click' , (ev) =>{
      if(ev.target.children[0].style.display == 'none'){
         ev.target.children[0].style.display = 'block'
      }else{
         ev.target.children[0].style.display = 'none'
      }
   });
   function createElement (type , content){
      const element = document.createElement(type);
      element.textContent = content;
      return element;
  };
}