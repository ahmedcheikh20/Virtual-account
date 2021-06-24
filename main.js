const signin = $('#enter')
const longin = $('#login')
const incomes = $('#incomes')
const expences = $('#expences')
const save = $('#save')

signin.click(entesr)
longin.click(login)
incomes.click(income)
expences.click(expence)
save.click(addcostumer)

function enter(){   
   $("#put").removeClass("hide")
}


function login(){
   $('#put').hide()
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


var usersarray = []
var namearray = []
var passwordarray = []
function addcostumer(){
   var name = $('#usersnames').val()
   var password = $('password').val()
   var obj ={
      name : name,
      password : password
   }
   usersarray.push(obj)
   namearray.push(name)
   passwordarray.push(password)
}






