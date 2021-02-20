function solve(){
   const createBtn = document.getElementsByClassName('btn create')[0]
   const author = document.getElementById('creator')
   const title = document.getElementById('title')
   const category = document.getElementById('category')
   const content = document.getElementById('content')
   const posts = document.querySelectorAll('section')[1]
   const archive = document.getElementsByClassName('archive-section')[0]
   const ol = archive.children[1]

   //suzdavane na post
   createBtn.addEventListener('click' , (e)=>{
      e.preventDefault();
      
      //h1 i sudurjanie
      const article = document.createElement('article')
      const h1 = document.createElement('h1')
      h1.textContent = title.value
      article.appendChild(h1)

      //kateogoriq
      const p = document.createElement('p')
      p.textContent = `Category:`
      const strong1 = document.createElement('strong')
      strong1.textContent = category.value
      p.appendChild(strong1)
      article.appendChild(p)

      //creator 
      const p2 = document.createElement('p')
      p2.textContent = 'Creator:'
      const strong2 = document.createElement('strong')
      strong2.textContent = author.value
      p2.appendChild(strong2)
      article.appendChild(p2)

      //sudurjanie
      const contentP = document.createElement('p')
      contentP.textContent = content.value
      article.appendChild(contentP)

      //butoni
      const btnDiv = document.createElement('div')
      btnDiv.classList.add('buttons')
      const delBtn = document.createElement('button')
      delBtn.classList.add('btn', 'delete')
      delBtn.textContent = 'Delete'
      const archBtn = document.createElement('button')
      archBtn.classList.add('btn', 'archive')
      archBtn.textContent = 'Archive'
      btnDiv.appendChild(delBtn)
      btnDiv.appendChild(archBtn)
      article.appendChild(btnDiv)
      
      posts.appendChild(article)
      //iztrivane na input poleta

      author.value = ''
      title.value = ''
      category.value = ''
      content.value = ''
   })
   //delete button
   posts.addEventListener('click' , (e) =>{
      const currBtn = e.target
      const currPost = e.target.parentNode.parentNode
      if(currBtn.classList.contains('delete')){
         currPost.remove()
         //archive button
      }else if(currBtn.classList.contains('archive')){
         const currTitle = currPost.children[0]
         const currArchive = document.createElement('li')
         currArchive.textContent = currTitle.textContent
         ol.appendChild(currArchive)
         currPost.remove()
         let olArray = Array.from(ol.children)
         
         olArray.sort(function(a, b) {
            return a.innerHTML == b.innerHTML
                    ? 0
                    : (a.innerHTML > b.innerHTML ? 1 : -1);
          });
          for (i = 0; i < olArray.length; ++i) {
            ol.appendChild(olArray[i]);
          }
      }
      
   })

  }
