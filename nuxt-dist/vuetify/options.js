export default {"theme":{"dark":true,"options":{"minifyTheme":function (css) {
  return css.replace(/\n/g, '').replace(/\s\s+/g, ' ');
},"themeCache":{"get":function anonymous(key
) {
return localStorage.getItem(key)
},"set":(key, value) => localStorage.setItem(key, value)}},"themes":{"dark":{"primary":"#1976d2","accent":"#424242","secondary":"#ff8f00","info":"#26a69a","warning":"#ffc107","error":"#dd2c00","success":"#00e676"}}}}
