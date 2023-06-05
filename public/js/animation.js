

    function upHeader(headers){    
        window.addEventListener("scroll", ()=>{
            if(window.pageYOffset > headers.offsetTop){
                headers.classList.add('activeHeader');
            }else{
                headers.classList.remove('activeHeader');
            }
        })
    }

    function handleClick(event){
      event.preventDefault();
      const attribute = event.currentTarget.getAttribute("class");
      const logo = document.getElementsByClassName(attribute)[0];
      window.scrollTo({
        top: logo.offsetTop, 
        behavior: 'smooth'
      })
    }

    function clickEvent(array){
        array.forEach(array => {
            array.addEventListener("click", this.handleClick)
        });
    
    }

    function animeOnScroll(target){
        window.addEventListener("scroll", () =>{
            const windowTop = window.pageYOffset + ((window.innerHeight * 3) /4)
            target.forEach((element)=>{
                 if( windowTop > element.offsetTop){
                    element.classList.add('animate');
                 }else{
                    element.classList.remove('animate');
                 }
            })
        })
    }


const header = document.querySelector('header');
upHeader(header);
const dataAnime = document.querySelectorAll('[data-anime]')
animeOnScroll(dataAnime)
