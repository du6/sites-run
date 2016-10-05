import angular from 'angular';

import App from 'src/app';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'starter-app-bootstrap', [ App.name ] )
      .run(()=>{
        console.log(`Running the 'starter-app-bootstrap' ES6 Material-Start Tutorial`);
      });

    let body = document.getElementsByTagName("body")[0];
    gapi.client.load('sitesRunApi', 'v1', null, '//' + window.location.host + '/_ah/api');
    gapi.client.load('oauth2', 'v2', function () {
        angular.bootstrap( body, [ 'starter-app-bootstrap' ]);
    });
  });
