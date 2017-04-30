var Alexa = require('alexa-sdk');

var handlers = {
  'HelloWorldIntent': function() {
    this.emit(':tell', 'Hello!');
  },
  'GetWeatherIntent': function() {
    var temp;
    var location = this.event.request.intent.slots.City.value;
    axios.get('URLHERE').then(function (res) {
      temp = response.data.temperature;
      this.emit(':tell', 'The temperature is ' + temp);
    });
  }
}

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
}
