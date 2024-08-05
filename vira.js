function kakronea() {
  var x = maths.valueAsNumber;
  var a = kh.valueAsNumber;
  var b = phy.valueAsNumber;
  var c = chem.valueAsNumber;
  var d = bio.valueAsNumber;
  var e = his.valueAsNumber;
  var f = en.valueAsNumber; 
  var answer = Math.floor(x+a+b+c+d+e+f/2);
  var text = "Congratulation you got « A »"+" "+"score:"+[answer];
  var text1 = "Congratulation you got « B »"+" "+"score:"+[answer];
  var text2 = "Congratulation you got « C »"+" "+"score:"+[answer];
  var text3 = "Congratulation you got « D »"+" "+"score:"+[answer];
  var text4 = "Congratulation you got « E »"+" "+"score:"+[answer];
  var text5 = "lg tae game hz rk jorb? « F »"+" "+"score:"+[answer];
  if (answer>=427) {
    alert(text);
  }else if (answer>=380) {
    alert(text1);
  }else if (answer>=332) {
    alert(text2);
  }else if(answer>=286) {
    alert(text3);
  }else if(answer>=237) {
    alert(text4);
  }else if(answer < 237) {
    alert(text5);
  }
};