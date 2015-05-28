angular.module('demo', []);
angular.module('demo').controller('DemoController', function($scope) {
    $scope.airportsFrom = [
        { name : 'Ljubljana', id : 1, price : 100 },
        { name : 'Maribor', id : 2, price : 200 },
        { name : 'Gradec', id : 3, price : 300 }
    ];

    $scope.airportsTo = [
        { name : 'London Gatwick', id : 1, price : 100 },
        { name : 'London Heathrow', id : 2, price : 200 }
    ];

    $scope.$watch('departureItem', function(value) {
        if (value) {
            $scope.departurePrice = value.price; 
        }
    });

    $scope.$watch('arrivalItem', function(value) {
        if (value) {
            $scope.arrivalPrice = value.price; 
        }
    });

    $scope.calculation = function(arrivalPrice, departurePrice) {
        if (arrivalPrice == null) { arrivalPrice = 0; }
        if (departurePrice == null) { departurePrice = 0; }

        return arrivalPrice + departurePrice;
    }
});