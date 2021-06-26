








const signin = $('#enter')       // to define the signin button in the corner
signin.click(enter)              // relate the button the function enter 

function enter(){   
   $("#put").removeClass("hide")    //show the div of inputs the acces to the account
   cordination.addClass('hide')
   $('#mainpage').removeClass('hide')

}
const cordination = $('#coordinate') 
const save = $('#save')                 // to define the signup button in the corner
save.click(showNewCordination)          // relate the button the function showNewCordination
function showNewCordination(){          //show the div of inputs that make you create new account
   cordination.removeClass('hide')       
   $('#put').addClass('hide')
   $('#mainpage').removeClass('hide')
}

$('#dec').click(deconect)
 function deconect(){                   // to hide all the div mainpage when we deconect
    $('#mainpage').addClass('hide')     // and all the other id to start from the beginning 
    $('#dec').addClass('hide')         
    $('#enter').removeClass('hide')
    $('#save').removeClass('hide')
    $('#incomeComptes').addClass('hide')
    $('#expencesComptes').addClass('hide')
    $('#principal').addClass('hide')

 }

$('#signup').click(addcostumer)         
var comptes = ['Investment','Food','Travelling','Tools','Clothes','Beauty','Maintains','salary']
// define account in an array to use it the local storage
function addcostumer(){
   var name = $('#newname').val()      // to access to the variable of the new user and his 
   var newpassword = $('#newpassword').val() //password and mail to put them in an object that
   var email = $('#newmail').val()           // we will put it like a value of the key newname 
   var obj={                                 //inside the local storage
      email: email,
      password : newpassword
   }
   
    localStorage.setItem(name, JSON.stringify(obj))  //put the name as key and the obj as
                                                      // his value
    for(var i=0; i<comptes.length;i++){                //loop throught the array comptes and
      var monney = name + ' ' + comptes[i]             //concatinate the name with each compte
      localStorage.setItem(monney,0)                   //and put it lie a key with start value "0"
    }
    cordination.addClass('hide')                        //hide the cordination div 
    $('#put').removeClass('hide')                       // and show the div put
    $('#newname').val('')
    $('#newmail').val('') 
    $('newpassword').html('')


}
// var arra=[1,2,3]
// localStorage.setItem("hello", JSON.stringify(arra))
//    console.log(  JSON.parse(localStorage.getItem("hello")))

//    console.log(  localStorage.getItem("mytime"))













const longin = $('#login')        //define the login 
longin.click(checkUsers)          //link the button login to chek user function
function login(name){
   $('#put').addClass('hide')     // hide the put id 
   $('#principal').removeClass('hide') // show the principal div
   $('#img').removeClass('image')       
   $('#img').addClass('hide')          // hide the image
   $('#dec').removeClass('hide')       //show the button dec insteade of the two button 
   $('#enter').addClass('hide')        // save and enter
   $('#save').addClass('hide')
   $('#username').val('')
   $('#password').val('')
 
   


   var nameBeauty = name + ' Beauty'        // created to get access into the local storage
   var vBeauty = localStorage[nameBeauty]    // the value of the compte body
   var nBeauty= JSON.parse(localStorage[nameBeauty])  // convert the value into number
   $('#Beauty').click(beautyval)                // link the button beauty to the function beatyval
   function beautyval(){
      $('#beautyin').toggleClass('hide') //show and hide the three inputs
      $('#addbeauty').toggleClass('hide')
      $('#pbeauty').toggleClass('hide')

   }
   $('#Beauty').click(addBeauty)
   function addBeauty(){
      var add = JSON.parse($('#beautyin').val()) // to converte the string to a number
      var rst = add + nBeauty                    // some of the value beauty key
      $('#pbeauty').text('you spend: ' + rst)    // to converte the some to a text
      localStorage.setItem(nameBeauty,JSON.stringify(rst)) // to converte the number to a string
      $('#addBeauty').addClass('hide')
      $('#beautyin').val('')
      $('#beautyin').addClass('hide')
      $('#pbeauty').html(nBeauty + 'D')
      $('#pbeauty').removeClass('hide')
      $('#incomes').html('Incomes: ' + totalIncomes )
      $('#expences').html('Expences: ' + totalExpences)
      $('#balance').html('Balance: ' + Balance)
   }

                 // same steps for all others comptes

    var namefood = name + ' Food'
   var vfood = localStorage[namefood]
   var nfood= JSON.parse(localStorage[namefood])
   $('#Food').click(foodval)
   function foodval(){
      $('#foodin').toggleClass('hide')
      $('#addfood').toggleClass('hide')
      $('#pfood').toggleClass('hide')

   }
   $('#addfood').click(addfood)
   function addfood(){
      var add = JSON.parse($('#foodin').val())
      
      var rst = add + nfood
      
      
      localStorage.setItem(namefood,JSON.stringify(rst))
      $('#addfood').addClass('hide')
      $('#foodin').val('')
      $('#foodin').addClass('hide')
      $('#pfood').html(nfood + 'D')
      $('#pfood').removeClass('hide')
      $('#incomes').html('Incomes: ' + totalIncomes )
      $('#expences').html('Expences: ' + totalExpences)
      $('#balance').html('Balance: ' + Balance)
   }

    

   var nametraveling = name + ' Travelling'
   var vtravelling = localStorage[nametraveling]
   var ntravelling= JSON.parse(localStorage[nametraveling])
   $('#Travelling').click(travelval)
   function travelval(){
      $('#Travellingin').toggleClass('hide')
      $('#addTravelling').toggleClass('hide')
      $('#ptravelling').toggleClass('hide')

   }
   $('#addTravelling').click(addTravelling)
   function addTravelling(){
      var add = JSON.parse($('#Travellingin').val())
      
      var rst = add + ntravelling
      
      
      localStorage.setItem(nametraveling,JSON.stringify(rst))
      $('#addTravelling').addClass('hide')
      $('#Travellingin').val('')
      $('#Travellingin').addClass('hide')
      $('#ptravelling').html(ntravelling + 'D')
      $('#ptravelling').removeClass('hide')
      $('#incomes').html('Incomes: ' + totalIncomes )
      $('#expences').html('Expences: ' + totalExpences)
      $('#balance').html('Balance: ' + Balance)
   }

    

    var nameclothes = name + ' Clothes'
   var vclothes = localStorage[nameclothes]
   var nclothes= JSON.parse(localStorage[nameclothes])
   $('#Clothes').click(clothesval)
   function clothesval(){
      $('#clothesin').toggleClass('hide')
      $('#addclothes').toggleClass('hide')
      $('#pclothes').toggleClass('hide')

   }
   $('#addclothes').click(addclothes)
   function addclothes(){
      var add = JSON.parse($('#clothesin').val())
     
      var rst = add + nclothes
      
      
      localStorage.setItem(nameclothes,JSON.stringify(rst))
      $('#addclothes').addClass('hide')
      $('#clothesin').val('')
      $('#clothesin').addClass('hide')
      $('#pclothes').html(nclothes + 'D')
      $('#pclothes').removeClass('hide')
      $('#incomes').html('Incomes: ' + totalIncomes )
      $('#expences').html('Expences: ' + totalExpences)
      $('#balance').html('Balance: ' + Balance)
   }

  


    var namesalary = name + ' salary'
   var vsalary = localStorage[namesalary]
   var nsalary = JSON.parse(localStorage[namesalary])
   $('#Salary').click(salaryval)
   function salaryval(){
      $('#salaryin').toggleClass('hide')
      $('#addsalary').toggleClass('hide')
      $('#psalary').toggleClass('hide')

   }
   $('#addsalary').click(addsalary)
   function addsalary(){
      var add = JSON.parse($('#salaryin').val())
      
      var rst = add + nsalary
      
      
      localStorage.setItem(namesalary,JSON.stringify(rst))
       $('#addsalary').addClass('hide')
      $('#salaryin').val('')
      $('#salaryin').addClass('hide')
      $('#psalary').html(nsalary + 'D')
      $('#psalary').removeClass('hide')
      $('#incomes').html('Incomes: ' + totalIncomes )
      $('#expences').html('Expences: ' + totalExpences)
      $('#balance').html('Balance: ' + Balance)
   }

  


    var nameinvestment = name + ' Investment'
   var vinvestment = localStorage[nameinvestment]
   var ninvestment = JSON.parse(localStorage[nameinvestment])
   $('#Investment').click(investval)
   function investval(){
      $('#investmentin').toggleClass('hide')
      $('#addinvestment').toggleClass('hide')

      $('#pinvestment').toggleClass('hide')

   }
   $('#addinvestment').click(addinvest)
   function addinvest(){
      var add = JSON.parse($('#investmentin').val())
     
      var rst = add + ninvestment
   
      localStorage.setItem(nameinvestment,JSON.stringify(rst))
      $('#addinvestment').addClass('hide')
      $('#investmentin').val('')
      $('#investmentin').addClass('hide')
      $('#pinvestment').html(ninvestment + 'D')
      $('#pinvestment').removeClass('hide')
      $('#incomes').html('Incomes: ' + totalIncomes )
      $('#expences').html('Expences: ' + totalExpences)
      $('#balance').html('Balance: ' + Balance)
   }
   var totalExpences =  nBeauty + nfood + ntravelling + nclothes
   var totalIncomes = nsalary + ninvestment
   var Balance = totalIncomes - totalExpences
   $('#incomes').html('Incomes: ' + totalIncomes )
   $('#expences').html('Expences: ' + totalExpences)
   $('#balance').html('Balance: ' + Balance)
   $('#pbeauty').html(nBeauty + 'D')
   $('#pfood').html(nfood + 'D')
   $('#pinvestment').html(nfood + 'D')
   $('#ptravelling').html(ntravelling + 'D')
   $('#pclothes').html(nclothes + 'D')
   $('#psalary').html(nsalary + 'D')

}

function checkUsers(){                     //when you click on login the fun check
   var name = $('#username').val()
   var password = $('#password').val()     // if you name existe you can login if your password

   if(localStorage.hasOwnProperty(name)){   // it will give no if doesn't existe will give noop
      var x = JSON.parse(localStorage.getItem(name))
     
      if(x.password === password){
         login(name)
      }
      else{
         alert('wrong password')
      }
   }
   else{
         alert('username not found')
   }
}





const incomes = $('#incomes')
incomes.click(income)
function income(){
    
    
    
    $('#incomeComptes').toggleClass('hide')
    
}







const expences = $('#expences')
expences.click(expence)
function expence(){
         
    $('#expencesComptes').toggleClass('hide')
}

















