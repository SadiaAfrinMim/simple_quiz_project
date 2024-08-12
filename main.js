var q1 = document.getElementById('q1').checked;
var q2 = document.getElementById('q2').checked;
var q3 = document.getElementById('q3').checked;
var q4 = document.getElementById('q4').checked;
document.getElementById('form').style.display ='block';
var submit = document.getElementById('submit').addEventListener('click',function(){
    var q1 = document.getElementById('q1').checked;
var q2 = document.getElementById('q2').checked;
var q3 = document.getElementById('q3').checked;
var q4 = document.getElementById('q4').checked;
var count = 0;
if(q1){
    count++;
}
if(q2){
    count++;
}
if(q3){
    count++;
}
if(q4){
    count++;
}
alert(`your count is ${count}`);


})
var cross = document.getElementById('cross').addEventListener('click',function(){
    document.getElementById('form').style.display ='none';
    document.getElementById('cross').style.display ='none';
})
