var history = require('history')


var History = {
  getHistoryInstance: function () {
    return global.__Weex_Router_History.history
  },

  getBasename: function () {
    return global.__Weex_Router_History.basename
  },

  getNavigator: function () {
    return global.__Weex_Router_History.navigator
  },

  createHistory: function (basename ,navigator) {
    if (!global.__Weex_Router_History) {
      var historyInstance = history.createMemoryHistory({
        basename: basename||'',
        forceRefresh: false
      })

      global.__Weex_Router_History = {
        history:historyInstance,
        basename:basename,
        navigator:navigator
      }
    }
    return global.__Weex_Router_History.history
  }
}

module.exports = History
