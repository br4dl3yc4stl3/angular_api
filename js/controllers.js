angular.module('listApp', [])
    .controller('ListController', ['$http', function($http) {
        var vm = this;
        vm.events = [];
        $http.get("https://www.eventbriteapi.com/v3/events/search/?token=53IOCM3XYDRTUADO5LYE&location.address=london+uk")
        .success(function(data) {
            vm.events = data.events;
        });
    }]);
