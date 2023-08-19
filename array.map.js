function replaceBlank(element) {
    if (element === " ") {
      return "empty string";
    } else {
      return element;
    }
  }

  var array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
var newArray = array.map(replaceBlank);

  