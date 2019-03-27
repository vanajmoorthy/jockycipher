function mencrypt() {
  var nameInput = document.getElementById("dec").value;
  var name = nameInput.split(" ");

  var newArr = [];
  var finalArr = [];
  var vals = "Aa";
  var valueOfUpper = vals.charCodeAt(0);
  var valueOfLower = vals.charCodeAt(1);
  // var newString;

  for (var i = 0; i < name.length; i++)
    for (var j = 0; j < name[i].length; j++) {

      var word = name[i];
      var charNeed = word.charAt(j);
      var charNeedUpper = charNeed.toUpperCase();

      if (charNeed == charNeedUpper) {
        var codeNum = ((name[i].charCodeAt(j) - valueOfUpper) - name[i].length) % 26;
        var newCodeNum = codeNum + valueOfUpper;
        var res = String.fromCharCode(newCodeNum);
        newArr[i] = res;
      } else {
        var codeNum = ((name[i].charCodeAt(j) - valueOfLower) - name[i].length) % 26;
        // console.log(name[i].charCodeAt(j) - valueOfLower);
        // console.log(codeNum);
        // console.log(name.length);
        var newCodeNum = codeNum + valueOfLower;
        var res = String.fromCharCode(newCodeNum);
        var newString = "";
        newString += res;
      }
      finalArr[j] = newString;
      console.log(finalArr[j]);
    }
  finalString = finalArr.join("");
        console.log(finalString);
  // console.log(finalString);
  // console.log(newArr);
  // console.log(finalString);
  document.getElementById("gOutput").value = finalString;
}
