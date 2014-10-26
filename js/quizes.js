//// String methods with Udacity

var s = "audacity";
var s2 = s.slice(1);

function toCapitalize(str){
  var firstLetter = str.substr(0,1).toUpperCase();
  return firstLetter.concat(str.substr(1));
}

toCapitalize(s2);

//// Array

var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
  var newArray = [];
  // Your code should make newArray equal to an array that has the same
  // values as _array, but the last number has increased by one.

  // For example:
  // _array = [1, 2, 3];
  // turn into:
  // newArray = [1, 2, 4];

  // Your code goes in here!
  for (var i = 0; i < _array.length; i++ ){
    if ( i === _array.length-1 ) {
      newArray.push( _array[i] + 1 );
    } else {
      newArray.push(_array[i]);
    }
  }

  // Don't delete this line!
  return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

////

var Aname = "AlbERt EINstEiN";

function nameChanger(oldName) {
  var finalName = oldName;
  // Your code goes here!

  var words = oldName.split(' ');
  console.log(words);

  var alb = words[0].toLowerCase();
  var ein = words[ (words.length-1) ].toUpperCase();
  console.log(alb);
  console.log(ein);

  finalName = alb + ' ' + ein;
  console.log(finalName);

  var firstLetter = finalName.substr(0,1).toUpperCase();
  finalName = firstLetter.concat(finalName.substr(1));

  // Don't delete this line!
  return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(Aname));


//// < > replacement

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
  var newHTML = _html;
  // How will you make sure that newHTML doesn't contain any < or > ?
  // Your code goes here!
  newHTML.toString();
  newHTML.replace('<', '');
  newHTML.replace('>', '');


    // Don't delete this line!
    return newHTML;
  };

// Did your code work? The line below will tell you!
  console.log(charEscape(html));
