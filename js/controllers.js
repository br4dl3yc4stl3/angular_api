angular.module('listApp', [])
    .controller('ListController', ['$http', function($http) {
        $http.get("https://www.eventbriteapi.com/v3/events/search/?token=53IOCM3XYDRTUADO5LY&location.address=london+uk")
        .then(function(data) {
            console.log(data);
        });
    }]);
