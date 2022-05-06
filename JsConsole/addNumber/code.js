function add7(x,y) { 
    y = 7;
    return x + y;
  }
 function doMatch(){
   var n1 = Number(document.getElementById('num').value);
   var n2 = Number(document.getElementById('num').value);
   var sum = add7 (n1,n2);

   console.log(sum);
}
document.getElementById('calcButton').addEventListener('click',doMatch);