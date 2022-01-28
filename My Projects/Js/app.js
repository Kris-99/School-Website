
  console.log("here we are ");
  let cross = document.getElementById('crossBtn');
  
  let btn = document.getElementById('Btn');
  btn.addEventListener('click' , function(){
  document.getElementById('Navlist').style.left = "0";
  btn.style.display="none";
  cross.style.display="block";
  
  
  })
  cross.addEventListener('click' , function(){
      document.getElementById('Navlist').style.left = "100%";
      cross.style.display="none";
      btn.style.display="block";
  })


// console.log("the endline");





window.addEventListener('scroll', function(){
    let content = document.querySelector('main');
    let contentpositon =  content.getBoundingClientRect().top;
    let screenpostion = window.innerHeight;
    console.log(contentpositon);
    console.log(screenpostion);
    if(contentpositon<screenpostion){
       
        content.classList.add('active');
        console.log('hey');
    }
    else if(contentpositon > screenpostion){
        content.classList.remove('active');
    }
})
