module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  for (let i = 0; i < bracketsConfig.length; i++) {
      let beg = bracketsConfig[i][0];
      let end = bracketsConfig[i][1];
          for (let j=0; j < str.length; j++) {
              if (str[j] == beg && str[j+1] ==  end) {
                  str.splice(j, 2);
                  i = -1;
                  j = -1;
              }
          }
  }
  return !(str.length);
}