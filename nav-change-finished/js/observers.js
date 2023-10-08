const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin : "-200px 0px 0px 0px"
};
const callback = (entries,sectionOneObserver) =>{
  entries.forEach((entry)=>{
    console.log(entry.isIntersecting)
    if(!entry.isIntersecting){
      header.classList.add('nav-scrolled')
    
    }else{
      header.classList.remove('nav-scrolled')
    }

  })
}
const sectionOneObserver = new IntersectionObserver(callback, sectionOneOptions)

sectionOneObserver.observe(sectionOne)