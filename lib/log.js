// Generated by CoffeeScript 1.4.0
(function() {
  var Log;

  Log = (function() {

    function Log(verbose, logger) {
      this.verbose = verbose != null ? verbose : false;
    }

    Log.prototype.may = function(msg) {
      if (this.verbose) {
        return this.log(msg);
      }
    };

    Log.prototype.must = function(msg) {
      return this.log(msg);
    };

    Log.prototype.log = function(msg) {
      if (typeof logger !== "undefined" && logger !== null) {
        return logger.log(msg);
      } else {
        return console.log(msg);
      }
    };

    return Log;

  })();

  module.exports = Log;

}).call(this);
