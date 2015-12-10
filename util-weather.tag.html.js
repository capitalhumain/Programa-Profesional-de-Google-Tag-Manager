<script>
 (function() {
    
      try {
        // Get latitude and longitude of the visitor
        var latitude = geoplugin_latitude();
        var longitude = geoplugin_longitude();
 
        // Set up variables for the API call
        var weather = 'Undefined';
        var temperature = 'N/A';
        var endpoint = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=1c823d16a451ed55409ca8765e0db462';
 
        // Build a simple temperature parser
        var parseTemp = function(temp) {            
          var roundTemp;
          roundTemp = 5 * Math.round(temp/5);
          if (temp < 0) {
            return roundTemp + '°C - ' + (roundTemp - 5) + '°C';
          } else if (temp > 0) {
            return roundTemp + '°C - ' + (roundTemp + 5) + '°C';
          } else if (temp === 0) {
            return '0°C';
          }
          return 'N/A';
        };
 
        // Make the API call
        jQuery.ajax({
          type : 'POST',
          dataType : 'jsonp',
          url : endpoint + '&units=metric&callback=?',
          async : true,
          success : function(data) {
            weather = data['weather'][0]['main'];
            temperature = parseTemp(data['main']['temp']);
          },
          error : function(xhr, textStatus, errorThrown) {
            console.log('Error while fetching weather data :: ' + errorThrown);
          },
          complete : function() {
            dataLayer.push({
              'event' : 'weatherDone',
              'weather' : weather,
              'temperature' : temperature
            });
          }
        });
      } catch(e) {
        dataLayer.push({
          'event' : 'APIError',
          'APIErrorMSG' : e.message
        });
      
    }    
     

  })();
</script>
