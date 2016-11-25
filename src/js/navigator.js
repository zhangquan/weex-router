
const history = require('./history')

module.exports = {
  push: function(url, options){
    options = options? options :{}
    const Navigator = history.getNavigator()
    console.log(url)
    Navigator.push({
      url:url,
      animated : true
    }, function(){})
  },

  pop: function(options){
    options = options? options :{}
    const Navigator = history.getNavigator()
    var params = {
      animated : true
    }
    Navigator.pop(params, function(){})
  }
}