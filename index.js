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
const MathToKhmer =document.querySelector("#mToKh");
const HisToEth =document.querySelector("#HisToEth");
const KhmerToMath = document.querySelector('#khTom');
const PhyToHis = document.querySelector('#PhyToHis');
const ChemToGeo = document.querySelector('#ChemToGeo');
const BioToRe = document.querySelector('#BioToRe');
changetext.addEventListener("click",function() {
  
  MathToKhmer.textContent='ភាសាខ្មែរ';
  KhmerToMath.textContent='គណិតវិទ្យា';
  PhyToHis.textContent='ប្រវត្តិវិទ្យា';
  ChemToGeo.textContent='ភូមិវិទ្យា';
  BioToRe.textContent='សីលធម៌-ពលរដ្ឋ';
  HisToEth.textContent='ផែនដី';
});
changetext2.addEventListener("click",function() {
  MathToKhmer.textContent='គណិតវិទ្យា';
  KhmerToMath.textContent='ភាសាខ្មែរ'
  PhyToHis.textContent='រូបវិទ្យា';
  ChemToGeo.textContent='គីមីវិទ្យា';
  BioToRe.textContent='ជីវៈវិទ្យា';
  HisToEth.textContent='ប្រវត្តិវិទ្យា';
});
