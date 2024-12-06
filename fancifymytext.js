
function increaseTextSize() {
    document.getElementById("textArea").style.fontSize = "24pt";
  }
  

  function applyStyles() {
    var textArea = document.getElementById("textArea");
    var fancyButton = document.getElementById("fancy");
    var boringButton = document.getElementById("boring");
  
   
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  
   
    if (fancyButton.checked) {
      alert("FancyShmancy selected!");
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else if (boringButton.checked) {
      alert("BoringBetty selected!");
    }
  }
  
  
  function makeTextMoo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
  
    
    var upperCaseText = text.toUpperCase();
  
    
    var sentences = upperCaseText.split(". ");
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].split(" ");
      var lastWord = words[words.length - 1];
      words[words.length - 1] = lastWord + "-Moo";
      sentences[i] = words.join(" ");
    }
  
    
    textArea.value = sentences.join(". ");
  }
  