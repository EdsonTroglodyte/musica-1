const likes = document.querySelectorAll('.like')

likes.forEach((like) => {
      like.addEventListener('click', (e) => {
            let style = e.currentTarget.classList
            if(style.contains('desativado')){
                  like.setAttribute('src', 'assets/vector.png')
                  like.classList = 'like ativado'
            }
            else{
                  like.setAttribute('src', 'assets/vector (1).png')
                  like.classList = 'like desativado'
            }
      })
})