(function (global, $) {

  var Greetr = function(firstname, lastname, language) {
    // return new Object
    return new Greetr.init(firstname, lastname, language);

    }

    var supportedLanguages = ['en', 'es'];

    var greetings = {
      en: 'Hello',
      es: 'Hola'
    };

    var formalGreetings = {
      en: 'Greetings',
      es: 'Saludos'
    };

    var logMessages = {
      en: 'Logged in',
      es: 'Inicio sesion'
    };

    // set prototype on object
    Greetr.prototype = {};
    // set init function
    Greetr.init = function(firstname, lastname, language) {

      var self = this;
      self.firstName = firstname || "";
      self.lastName = lastname || "";
      self.language = language || "en";

    }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

})(window, jQuery);
