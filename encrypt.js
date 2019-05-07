// var _0x4c51=["\x76\x61\x6C\x75\x65","\x65\x6E\x63\x72\x79\x70\x74\x69\x6F\x6E\x49\x6E\x70\x75\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x64\x65\x63\x72\x79\x70\x74\x69\x6F\x6E\x49\x6E\x70\x75\x74","","\x20","\x73\x70\x6C\x69\x74","\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A","\x6C\x65\x6E\x67\x74\x68","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x65\x6E\x63\x72\x79\x70\x74\x69\x6F\x6E\x4F\x75\x74\x70\x75\x74","\x64\x65\x63\x72\x79\x70\x74\x69\x6F\x6E\x4F\x75\x74\x70\x75\x74"];function encrypt(_0x12ccx2){if(_0x12ccx2){var _0x12ccx3=document[_0x4c51[2]](_0x4c51[1])[_0x4c51[0]]}else {var _0x12ccx3=document[_0x4c51[2]](_0x4c51[3])[_0x4c51[0]]};var _0x12ccx4=_0x4c51[4];var _0x12ccx5=_0x12ccx3[_0x4c51[6]](_0x4c51[5]);var _0x12ccx6=_0x4c51[7][_0x4c51[6]](_0x4c51[4]);for(var _0x12ccx7=0;_0x12ccx7< _0x12ccx5[_0x4c51[8]];_0x12ccx7++){var _0x12ccx8=_0x12ccx5[_0x12ccx7];var _0x12ccx9=_0x12ccx8[_0x4c51[8]];if(!_0x12ccx2){_0x12ccx9*=  -1};for(var _0x12ccxa=0;_0x12ccxa< _0x12ccx8[_0x4c51[8]];_0x12ccxa++){var _0x12ccxb=_0x12ccx8[_0x12ccxa];var _0x12ccxc=false;if(_0x12ccxb== _0x12ccxb[_0x4c51[9]]()){_0x12ccxc= true};_0x12ccxb= _0x12ccxb[_0x4c51[10]]();var _0x12ccxd=_0x12ccx6[_0x4c51[11]](_0x12ccxb);if(_0x12ccxd>= 0){_0x12ccxd= (_0x12ccxd+ _0x12ccx9+ 26)% 26;var _0x12ccxe=_0x12ccx6[_0x12ccxd];if(_0x12ccxc){_0x12ccxe= _0x12ccxe[_0x4c51[9]]()}}else {var _0x12ccxe=_0x12ccxb};_0x12ccx4= _0x12ccx4+ _0x12ccxe};_0x12ccx4= _0x12ccx4+ _0x4c51[5]};if(_0x12ccx2){document[_0x4c51[2]](_0x4c51[13])[_0x4c51[12]]= _0x12ccx4}else {document[_0x4c51[2]](_0x4c51[14])[_0x4c51[12]]= _0x12ccx4}}

function encrypt(forward) {
    // target input (either decryption or encryption)
    if (forward) {
      var input = document.getElementById("encryptionInput").value;
    } else {
      var input = document.getElementById("decryptionInput").value;
    }
    var output = '';
    var sentence = input.split(' ');

    var senLen = sentence.length;
    var key = 7;
    
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    // for each word in the sentence
    for (var i = 0; i < sentence.length; i++) {
      var word = sentence[i];
      // this is the amount by which each letter is shifted
      var n = word.length + senLen + key;
      // for decryption
      if (!forward) {
        n *= -1;
      }
      
      // for each letter in the word
      for (var j = 0; j < word.length; j++) {
        var letter = word[j];
        
        // check if letter is uppercase (this is preserved)
        var upper = false;
        if (letter == letter.toUpperCase()) {
          upper = true;
        }
        
        letter = letter.toLowerCase();
        var index = alphabet.indexOf(letter);
        // if index is negative, character is not a letter
        if (index >= 0) {
          // shift forward by n, mod 26 to create a loop (add 26 to prevent negative numbers)
          index = (index + n + 26) % 26;
          
          var outputChar = alphabet[index];
          if (upper) {
            outputChar = outputChar.toUpperCase();
          }
        } else {
          var outputChar = letter;
        }
        output = output + outputChar;
      }
      // end of word
      output = output + " ";
    }
    // target output (either decryption or encryption)
    if (forward) {
      document.getElementById("encryptionOutput").innerText = output;
    } else {
      document.getElementById("decryptionOutput").innerText = output;
    }
}