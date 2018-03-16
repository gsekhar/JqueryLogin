
$(document).ready(function(){
    
  $("#assembly").hide();
  $('#machining').hide();
  $('#logistics').hide();
  $('#createAsset').hide();
  $('#creatediv').hide();
  });


$('.register').each(function(i){
  $(this).click(function(){
  $('.registerform').addClass('registerform-active');
  $('.login').css('background-color','#A9E2F3');
  $('.register').css('color','#A9E2F3');
   });
});
$('.login').each(function(i){
  $(this).click(function(){
  $('.registerform').removeClass('registerform-active');
   $('.register').css('background-color','#0B4C5F');
   });
});

$(function() {
$("#loginsubmit").click(function() {
  var regilist =[];
  var userid = $("#userid").val();
  var pass = $("#password").val();
  var isauthenticated = false;
    regilist = JSON.parse(localStorage.getItem('reglist'));

    for (var i in regilist) {
      var regobj = regilist[i];
      console.log(regobj.userid);
      if(regobj.userid === userid && regobj.pass === pass){
      isauthenticated = true;
      break;
      }
      }
      if(isauthenticated && regobj.role == 'Assembly'){
        $('#register').hide();
        $('#login').hide();
        $('#assembly').show();
        $('#machining').hide();
        $('#logistics').hide();
        $('#createAsset').hide();
        $('#creatediv').show();
        var regilist = [];
        regilist = JSON.parse(localStorage.getItem('reglist'));
        for (var i in regilist) {
          var regobj = regilist[i];
          $('#assemblytable tbody').append('<tr><td>'+regobj.userid+'<\/td><td>'+regobj.pass+'<\/td><td>'+regobj.role+'<\/td></tr>');
        }
        return false;
      }

      if(isauthenticated && regobj.role == 'Machining'){
        $('#register').hide();
        $('#login').hide();
        $('#assembly').hide();
        $('#machining').show();
        $('#logistics').hide();
        $('#createAsset').hide();
        $('#creatediv').show();
        var regilist = [];
        if(localStorage.getItem('reglist') != null || localStorage.getItem('reglist') != ''){
          regilist = JSON.parse(localStorage.getItem('reglist'));
        }        
        for (var i in regilist) {
          var regobj = regilist[i];
          $('#machiningtable tbody').append('<tr><td>'+regobj.userid+'<\/td><td>'+regobj.pass+'<\/td><td>'+regobj.role+'<\/td></tr>');
        }
        return false;
      }

      if(isauthenticated && regobj.role == 'Logistic'){
        $('#register').hide();
        $('#login').hide();
        $('#assembly').hide();
        $('#machining').hide();
        $('#logistics').show();
        $('#createAsset').hide();
        $('#creatediv').show();
        var regilist = [];
        if(localStorage.getItem('reglist') != null || localStorage.getItem('reglist') != ''){
          regilist = JSON.parse(localStorage.getItem('reglist'));
        }        
        for (var i in regilist) {
          var regobj = regilist[i];
          $('#logisticstable tbody').append('<tr><td>'+regobj.userid+'<\/td><td>'+regobj.pass+'<\/td><td>'+regobj.role+'<\/td></tr>');
        }
        return false;
      }

   });

   
$("#registersubmit").click(function() {
  var regilist = [];
   var userid = $("#reguserid").val();
  var pass = $("#regpassword").val();
  var role = $("#regrole").val();
  if(!(localStorage.getItem('reglist') == null || localStorage.getItem('reglist') == undefined)){
  regilist = JSON.parse(localStorage.getItem('reglist'));
  }
  var reg= {};

  reg['userid'] =userid;
  reg['pass'] = pass;
  reg['role'] = role;
  regilist.push(reg);
  localStorage.setItem("reglist",JSON.stringify(regilist));
});

$("#createassetbutton").click(function() {
  $("#assembly").hide();
  $('#machining').hide();
  $('#logistics').hide();
  $('#createAsset').show();
  $('#creatediv').show();
});

$("#createsubmit").click(function() {
  var regilist = [];
   var assertId = $("#assertId").val();
  var pass = $("#regpassword").val();
  var role = $("#regrole").val();
  
});

});