








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
   var nameBeauty = name + ' Beauty'
   var vBeauty = localStorage[nameBeauty]
   var nBeauty= JSON.parse(localStorage[nameBeauty])
   $('#Beauty').click(beautyval)
   function beautyval(){
      $('#beautyin').removeClass('hide')
      $('#addbeauty').removeClass('hide')
      $('#pbeauty').removeClass('hide')

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
      $('#foodin').removeClass('hide')
      $('#addfood').removeClass('hide')
      $('#pfood').removeClass('hide')

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
      $('#Travellingin').removeClass('hide')
      $('#addTravelling').removeClass('hide')
      $('#ptravelling').removeClass('hide')

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
      $('#clothesin').removeClass('hide')
      $('#addclothes').removeClass('hide')
      $('#pclothes').removeClass('hide')

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















