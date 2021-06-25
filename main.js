








const signin = $('#enter')
signin.click(enter)

function enter(){   
   $("#put").removeClass("hide")
   cordination.addClass('hide')
   $('#mainpage').removeClass('hide')
}
const cordination = $('#coordinate')
const save = $('#save')
save.click(showNewCordination)
function showNewCordination(){
   cordination.removeClass('hide')
   $('#put').addClass('hide')
   $('#mainpage').removeClass('hide')
}

$('#dec').click(deconect)
 function deconect(){
    $('#mainpage').addClass('hide')
    $('#dec').addClass('hide')
    $('#enter').removeClass('hide')
    $('#save').removeClass('hide')
 }

$('#signup').click(addcostumer)
var usersArray = []
var nameArray = []
var passwordArray = []
var comptes = ['Investment','Food','Travelling','Tools','Clothes','Beauty','Maintains','salary']
function addcostumer(){
   var name = $('#newname').val()
   var newpassword = $('#newpassword').val()
   var email = $('#newmail').val()
   var obj={
      email: email,
      password : newpassword
   }
   
    localStorage.setItem(name, JSON.stringify(obj))
    for(var i=0; i<comptes.length;i++){
      var monney = name + ' ' + comptes[i]
      localStorage.setItem(monney,0)
    }
    cordination.addClass('hide')
    $('#put').removeClass('hide')
}
// var arra=[1,2,3]
// localStorage.setItem("hello", JSON.stringify(arra))
//    console.log(  JSON.parse(localStorage.getItem("hello")))

//    console.log(  localStorage.getItem("mytime"))













const longin = $('#login')
longin.click(checkUsers)
function login(name){
   $('#put').addClass('hide')
   $('#principal').removeClass('hide')
   $('#img').removeClass('image')
   $('#img').addClass('hide')
   $('#dec').removeClass('hide')
   $('#enter').addClass('hide')
   $('#save').addClass('hide')
   var nameBeauty = name + ' Beauty'
   var vBeauty = localStorage[nameBeauty]
   var nBeauty= JSON.parse(localStorage[nameBeauty])
   $('#Beauty').click(beautyval)
   function beautyval(){
      $('#beautyin').toggleClass('hide')
      $('#addbeauty').toggleClass('hide')
      $('#pbeauty').toggleClass('hide')

   }
   $('#addbeauty').click(addBeauty)
   function addBeauty(){
      var add = JSON.parse($('#beautyin').val())
      console.log(add+ 1)
      var rst = add + nBeauty
      console.log(rst)
      $('#pbeauty').text('you spend: ' + rst)
      localStorage.setItem(nameBeauty,JSON.stringify(rst))
   }

    //         console.log(nBeauty)
    //         console.log(y)
    //         console.log(z)
    // z+=1
    //    console.log(z)

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
      console.log(add+ 1)
      var rst = add + nfood
      console.log(rst)
      $('#pfood').text('you spend: ' + rst)
      localStorage.setItem(namefood,JSON.stringify(rst))
   }

    //         console.log(nBeauty)
    //         console.log(y)
    //         console.log(z)
    // z+=1
    //    console.log(z)

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
      console.log(add+ 1)
      var rst = add + nfood
      console.log(rst)
      $('#ptravelling').text('you spend: ' + rst)
      localStorage.setItem(namefood,JSON.stringify(rst))
   }

    //         console.log(nBeauty)
    //         console.log(y)
    //         console.log(z)
    // z+=1
    //    console.log(z)

    var nameclothes = name + ' Clothes'
   var vclothes = localStorage[nameclothes]
   var nclothes= JSON.parse(localStorage[nameclothes])
   $('#Travelling').click(clothesval)
   function clothesval(){
      $('#clothesin').toggleClass('hide')
      $('#addclothes').toggleClass('hide')
      $('#pclothes').toggleClass('hide')

   }
   $('#addclothes').click(addclothes)
   function addclothes(){
      var add = JSON.parse($('#clothesin').val())
      console.log(add+ 1)
      var rst = add + nfood
      console.log(rst)
      $('#pclothes').text('you spend: ' + rst)
      localStorage.setItem(namefood,JSON.stringify(rst))
   }

    //         console.log(nBeauty)
    //         console.log(y)
    //         console.log(z)
    // z+=1
    //    console.log(z)


    var namesalary = name + ' salary'
   var vsalary = localStorage[namesalary]
   var nsalary = JSON.parse(localStorage[namefood])
   $('#Salary').click(salaryval)
   function salaryval(){
      $('#salaryin').toggleClass('hide')
      $('#addsalary').toggleClass('hide')
      $('#psalary').toggleClass('hide')

   }
   $('#addsalary').click(addsalary)
   function addsalary(){
      var add = JSON.parse($('#salaryin').val())
      console.log(add+ 1)
      var rst = add + nsalary
      console.log(rst)
      $('#psalary').text('you spend: ' + rst)
      localStorage.setItem(namefood,JSON.stringify(rst))
   }

   //         console.log(nBeauty)
    //         console.log(y)
    //         console.log(z)
    // z+=1
    //    console.log(z)


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
      console.log(add+ 1)
      var rst = add + ninvestment
      console.log(rst)
      $('#pinvestment').text('you spend: ' + rst)
      localStorage.setItem(nameinvestment,JSON.stringify(rst))
   }
}

function checkUsers(){
   var name = $('#username').val()
   var password = $('#password').val()

   if(localStorage.hasOwnProperty(name)){
      var x = JSON.parse(localStorage.getItem(name))
     
      if(x.password === password){
         login(name)
      }
      else{
         console.log('no')
      }
   }
   else{
         console.log('noop')
   }
}





const incomes = $('#incomes')
incomes.click(income)
function income(){
    
    $('#balance').toggleClass('hide')
    $('#expences').toggleClass('hide')
    $('#incomeComptes').toggleClass('hide')
    
}







const expences = $('#expences')
expences.click(expence)
function expence(){
     ;
    $('#balance').toggleClass('hide')
    $('#incomes').toggleClass('hide')
    $('#expencesComptes').toggleClass('hide')
}

















