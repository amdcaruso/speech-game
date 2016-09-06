(function () {
    'use strict';

    angular
        .module('TCC')
        .factory('myFactory', myFactory);

    myFactory.$inject = ['$http'];

    function myFactory($http) {
        console.log("Factory created.");

        var myService =
        {
            getData: getDataFromJson
        };
        return myService;

        function getDataFromJson() {
            console.log("Get Data From Json called.");
            return $http.get('locale-en.json');
        }
    }
})();