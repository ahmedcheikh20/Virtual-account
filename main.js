const signin = $('#enter')
const longin = $('#login')
const incomes = $('#incomes')
const expences = $('#expences')
const save = $('#save')
const cordination = $('#coordinate')
signin.click(enter)
longin.click(login)
incomes.click(income)
expences.click(expence)
save.click(showNewCordination)

function enter(){   
   $("#put").removeClass("hide")
   cordination.addClass('hide')
}


function login(){
   $('#put').addClass('hide')
   $('#principal').removeClass('hide')
}









function income(){
    $('incomes').animate({
      left: '500px',
      opacity: '21.5',
      height: '300px',
      width: '300px'
    });
    $('#balance').hide()
    $('#expences').hide()
    $('#incomeComptes').removeClass('hide')
    
}

function expence(){
      $('expences').animate({
      left: '500px',
      opacity: '21.5',
      height: '300px',
      width: '300px'
    });
    $('#balance').hide()
    $('#incomes').hide()
    $('#expencesComptes').removeClass('hide')
}


var usersArray = []
var nameArray = []
var passwordArray = []
function addcostumer(){
   var name = $('#usersnames').val()
   var password = $('password').val()
   var obj ={
      name : name,
      password : password
   }
   usersArray.push(obj)
   nameArray.push(name)
   passwordArray.push(password)
}



function checkUsers(){
   var name = $('#usersnames').val()
   var password = $('password').val()
   var indexOfUser = namesarray.findIndex((e)=> e===name)
   var indexpassword = passwordArray.findIndex((e)=> e===password)
   if(indexOfUser === -1 || indexpassword === -1 || indexpassword !== indexOfUser){
      console.log()
   } 
}


function showNewCordination(){
   cordination.removeClass('hide')
   $('#put').addClass('hide')
}






