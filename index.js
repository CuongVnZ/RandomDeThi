let arr = ["TraoDuyen", "ChiKhiAnhHung", "ChucPhanSu"];
let temp = {};

start();
function start(){
  for(i = 1; i<=500; i++){
    setTimeout(rand, i*5);
  }

  setTimeout(()=>{
    console.log(temp)
    var vjp = 0
    var rs = "";
    for(value in temp){
      if(temp[value] > vjp) {
        rs = value;
        vjp = temp[value];
      }
    }
    console.log("Result >>>", rs)
    }, 3000);
}

function rand(){
  console.log("Rolling");
  var value = arr[Math.floor(Math.random() * arr.length)]
  if(temp[value] != null){
    temp[value]++;
  }else{
    temp[value] = 1;
    console.log(temp[value]);
  }
  return;
}
