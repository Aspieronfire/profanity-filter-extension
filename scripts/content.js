const profanityRegex = new RegExp(
  '\\b(' + [
    'a*s{1,2}(?!umption)\\b', // matches 'ass', 'asses', but not 'assumption'
    'b[i!1]tch\\b', // matches 'bitch' or 'bit*h'
    'd[a@]mn\\b', // matches 'damn' or 'dam'
    'd[i!1]c?k\\b', // matches 'dick' or 'dic'
    'f[u*]ck\\b', // matches 'fuck' or 'f*ck'
    's[h*][i!1][t+e*]\\b', // matches 'shit', 'shite', 'shitty', 'shitey', etc.
    'p[i!1]ss\\b', // matches 'piss' or 'pis'
    'c[u*]nt\\b', // matches 'cunt' or 'c*nt'
    'w[h*][o0]re\\b', // matches 'whore', 'w0re', 'wh0re', etc.
    'b[a@4][s$5]t[a@4]rd\\b', // matches 'bastard', 'ba5tard', 'b@stard', etc.
    'd[o0]uche[b@]ag\\b', // matches 'douchebag', 'd0uchebag', 'doucheb@g', etc.
    'a[s$5][s$5]h[o0]le\\b', // matches 'asshole', 'a$$hole', 'ash0le', etc.
    'm[o0]th[e*]rf[u*]ck[e*]r\\b', // matches 'motherfucker', 'm0therfucker', etc.
    't[wu]at\\b', // matches 'twat' or 'twut'
    't[i!1]ts?\\b' // matches 'tits' or 'tit'
  ].join('|') + ')',
  'gi'
);

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