var profanityList = ["profanity1", "profanity2", "profanity3"]; // You can replace this with your own list of profanity
var regex = new RegExp("\\b(" + profanityList.join("|") + ")\\b", "gi");

function filterProfanity() {
  var elements = document.getElementsByTagName("*");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
      var oldValue = element.value;
      var newValue = oldValue.replace(regex, "***");

      if (newValue !== oldValue) {
        element.value = newValue;
      }
    } else {
      var children = element.childNodes;

      for (var j = 0; j < children.length; j++) {
        var child = children[j];

        if (child.nodeType === 3) {
          var oldValue = child.nodeValue;
          var newValue = oldValue.replace(regex, "***");

          if (newValue !== oldValue) {
            element.replaceChild(document.createTextNode(newValue), child);
          }
        }
      }
    }
  }
}

filterProfanity();