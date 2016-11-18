var history = require('history')


var History = {
  getHistoryInstance: function () {
    return window.__Weex_Router_History
  },
  createHistory: function (forceRefresh) {
    if (!window.__Weex_Router_History) {
      window.__Weex_Router_History = history.createHashHistory({
        basename: '',
        forceRefresh: false
      })
    }
    return window.__Weex_Router_History
  }
}

module.exports = History
