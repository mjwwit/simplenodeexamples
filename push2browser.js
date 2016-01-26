var http = require('http');

var quoteReader = function () {

    var city = 'Sydney';
    //var getURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric';

    var getURL = 'http://finance.yahoo.com/webservice/v1/symbols/INGA.AS/quote?format=json';

    http.get(getURL, function (res) {

        res.setEncoding('utf8');

        res.on('data', function (txt) {

            var Pusher = require('pusher');
            var pusher = new Pusher({
                appId: '132881',
                key: '6192ee2882ff600b0489',
                secret: 'f4eb366557f0c9997a2d',
                encrypted: true
            });

            pusher.port = 443;


            var obj = JSON.parse(txt);
            var quote = obj.list.resources[0].resource.fields;

            //console.log(txt)
            var txtStr = quote.name + ' Price ' + parseFloat(quote.price) + ' USD Volume ' + quote.volume;

            //var txtStr = city + " " + obj.main.temp + " deg Celcius Humidity " + obj.main.humidity + " %"

            console.log(txtStr);

            pusher.trigger('test_channel', 'my_event', {
                message: txtStr
            });
        });
    });
};

setInterval(quoteReader, 2000);