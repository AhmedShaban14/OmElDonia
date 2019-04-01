$(document).ready(function() {

    $("#f4").click(function(){
    $(".s1").fadeToggle();
    $(".s2").hide();
    $(".s3").hide();
    $(".s4").hide();

});
    
    $("#f3").click(function(){
    $(".s2").fadeToggle();
    $(".s1").hide();
    $(".s3").hide();
    $(".s4").hide();
    

});
    
        $("#f2").click(function(){
    $(".s3").fadeToggle();
    $(".s2").hide();
    $(".s1").hide();
    $(".s4").hide();

});
    
        $("#f1").click(function(){
    $(".s4").fadeToggle();
    $(".s2").hide();
    $(".s3").hide();
    $(".s1").hide();

});
    
});
