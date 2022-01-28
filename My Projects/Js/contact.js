
let crossBtn = document.getElementById('crossBtn');

let Anotherbtn = document.getElementById('Btn');
Anotherbtn.addEventListener('click' , function(){
document.getElementById('Navlist').style.left = "0";
Anotherbtn.style.display="none";
crossBtn.style.display="block";


})
cross.addEventListener('click' , function(){
    document.getElementById('Navlist').style.left = "100%";
    crossBtn.style.display="none";
    Anotherbtn.style.display="block";
})




let submit = document.querySelector('#Submit');
submit.addEventListener('click' , () => {
    alert('You submitted the form');
})





window.addEventListener('scroll', function(){
    let content = document.querySelector('main');
    let contentpositon =  content.getBoundingClientRect().top;
    let screenpostion = window.innerHeight;
    console.log(contentpositon);
    console.log(screenpostion);
    if(contentpositon<screenpostion){
        // alert('hey');
        content.classList.add('active');
        console.log('hey');
    }
})