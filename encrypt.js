function encrypt(forward) {
    // target input (either decryption or encryption)
    if (forward) {
      var input = document.getElementById("encryptionInput").value;
    } else {
      var input = document.getElementById("decryptionInput").value;
    }
    var output = '';
    var sentence = input.split(' ');

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    // for each word in the sentence
    for (var i = 0; i < sentence.length; i++) {
      var word = sentence[i];
      // this is the amount by which each letter is shifted
      var n = word.length;
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
      document.getElementById("encryptionOutput").innerHTML = output;
    } else {
      document.getElementById("decryptionOutput").innerHTML = output;
      // alert(output);
      // console.log(word.length);
      // document.getElementById(decryptionOutput).size = word.length;
    }
}
