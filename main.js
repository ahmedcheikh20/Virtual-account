








const signin = $('#enter')
signin.click(enter)

function enter(){   
   $("#put").removeClass("hide")
   cordination.addClass('hide')
}
const cordination = $('#coordinate')
const save = $('#save')
save.click(showNewCordination)
function showNewCordination(){
   cordination.removeClass('hide')
   $('#put').addClass('hide')
}

$('#signup').click(addcostumer)
var usersArray = []
var nameArray = []
var passwordArray = []
function addcostumer(){
   var name = $('#newname').val()
   var newpassword = $('#newpassword').val()
   var email = $('#newmail').val()
   var obj={
      email: email,
      password : newpassword
   }
   console.log(email)
   console.log(newpassword)
   console.log(name)
   console.log(obj)
   // localStorage.setItem(name, JSON.stringify(obj))
   // cordination.addClass('hide')
   // $('#put').removeClass('hide')
}
// var arra=[1,2,3]
// localStorage.setItem("hello", JSON.stringify(arra))
//    console.log(  JSON.parse(localStorage.getItem("hello")))

//    console.log(  localStorage.getItem("mytime"))













const longin = $('#login')
longin.click(login)
function login(){
   $('#put').addClass('hide')
   $('#principal').removeClass('hide')
   $(userpassword).addClass('hide')          //just trying
}
function checkUsers(){
   var name = $('#usersnames').val()
   var password = $('password').val()
   var indexOfUser = nameArray.findIndex((e)=> e===name)
   var indexpassword = passwordArray.findIndex((e)=> e===password)
   if(indexOfUser === -1 || indexpassword === -1 || indexpassword !== indexOfUser){
      console.log()
   } 
   else {
      login()
      $(userpassword).addClass('hide')
   }
}





const incomes = $('#incomes')
incomes.click(income)
function income(){
    incomes.animate({
      left: '250px',
      opacity: '21.5',
      height: '300px',
      width: '300px'
    });
    $('#balance').addClass('hide')
    $('#expences').addClass('hide')
    $('#incomeComptes').removeClass('hide')
    
}
const retur = $('#forC')
retur.click(returToMain)
function returToMain(){
    incomes.animate({
      left: '0px',
      opacity: '0.5',
      height: '100px',
      width: '100px'
    });
     $('#balance').removeClass('hide')
     $('#expences').removeClass('hide')
     $('#incomeComptes').addClass('hide')

  }






const expences = $('#expences')
expences.click(expence)
function expence(){
      $('expences').animate({
      left: '500px',
      opacity: '21.5',
      height: '300px',
      width: '300px'
    });
    $('#balance').addClass('hide')
    $('#incomes').addClass('hide')
    $('#expencesComptes').removeClass('hide')
}

const retur2 = $('#forCc')
retur2.click(returToMain2)
function returToMain2(){
    expences.animate({
      left: '700px',
      opacity: '0.5',
      height: '100px',
      width: '100px'
    });
     $('#balance').removeClass('hide')
    $('#incomes').removeClass('hide')
    $('#expencesComptes').addClass('hide')

  }















