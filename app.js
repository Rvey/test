// burger menu 
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})



// var modal = 1
//  function pop() {
//    if(modal === 1) {
//      document.querySelector("box").style.display = "block";
//      modal = true
//    } else {
//      document.querySelector("#box").style.display = "none";
//      modal = 1
//    }
//  }


// function test(){

//     let firstname = document.querySelector('#fname').value
//     let lastname = document.querySelector('#lname').value
//     let ex = document.querySelector('#email').value
//     let subj = document.querySelector('#subj').value
//   //  document.querySelector("info").innerHTML = "thanks + " + firstname
//     // console.log("hello " + firstname  + " " + lastname)
//     var fullName = firstname + " " + lastname 
//     var doc = document.querySelector
//     document.querySelector("#info").value = fullName
//     document.querySelector("#em").value = ex
//     document.querySelector("#em").value = ex
//     doc("#sbj").value = subj

    
   
//     }
    // burger menu 
// const menuToggle = document.querySelector('.toggle');
// const showcase = document.querySelector('.showcase');

// menuToggle.addEventListener('click', () => {
//   menuToggle.classList.toggle('active');
//   showcase.classList.toggle('active');
// })

const displayModal = () => {

  const user = {
    name: document.querySelector('#fname').value , 
  
    email: document.querySelector('#email').value

  }

  name = document.querySelector('#nameDisp')
 
  email = document.querySelector('#emailDisp')

  name.textContent = user.name
 

  document.querySelector('#modal').style.display = 'flex'
  document.querySelector('#nameDisp').textContent = user.name 
  
  document.querySelector('#emailDisp').textContent = user.email
}

document.querySelector('#close').addEventListener('click', () => {
  document.querySelector('#modal').style.display = 'none'
})



  