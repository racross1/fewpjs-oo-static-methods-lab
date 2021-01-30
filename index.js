class Formatter {

  static capitalize(str) {
    return str[0].toUpperCase() + str.substring(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(str) {
    let exceptions = ["the","a","an","but","of","and","for","at","by","from",
    ]
    let arr = str.split(" ")
    arr.forEach((word, index) => {
      if (!exceptions.includes(word) || index == 0) {
        arr[index] = word[0].toUpperCase() + word.substring(1)
      }
    });
    return arr.join(" ")
  }
  
}