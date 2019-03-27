function encrypt() {
  var name = document.getElementById("name").value;
  var nameArray = name.split(" ");

  var valz = "Aa";
  var valueOfA = valz.charCodeAt(0);
  var valueOfa = valz.charCodeAt(1);

  var newArr = [];
  var finalArr = [];
  var newString = "";
  for (var j = 0; j < nameArray.length; j++) {
    var str = nameArray[j];
    var n = str.length;

    for (var i = 0; i < n; i++) {
      var charNeeded = str.charAt(i);
      var charNeededUpper = charNeeded.toUpperCase();

      if (charNeeded == charNeededUpper) {
        var codeNum = ((str.charCodeAt(i) - valueOfA) + n) % 26;
        var newCodeNum = codeNum + valueOfA;
        var res = String.fromCharCode(newCodeNum);
        newArr[i] = res;

      } else {
        var codeNum = ((str.charCodeAt(i) - valueOfa) + n) % 26;
        var newCodeNum = codeNum + valueOfa;
        var res = String.fromCharCode(newCodeNum);
        newArr[i] = res;
      }
      newString = newArr.join("")
      finalArr[j] = newString;
    }
  }

  finalString = finalArr.join(" ");
  // console.log(newArr);
  // console.log(finalString);
  document.getElementById("output").value = finalString;
}
