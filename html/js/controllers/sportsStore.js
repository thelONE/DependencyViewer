angular.module("sportsStore")
.constant("dataUrl", "https://api.parse.com/1/classes/Products/")
.run(function ($http) {
    $http.defaults.headers.common["X-Parse-Application-Id"] = "DTRfVWS6peQI8XzYTiYihJwsNf3XAKfB5uPSVz8D";
    $http.defaults.headers.common["X-Parse-REST-API-Key"] = "yQv7NI23DFf4ZAJ9rhRGuUUtSd4QYTTm69WcgKKh";
})
.controller("sportsStoreCtrl", function($scope, $http, dataUrl){
    $scope.data = {};
    $http.get(dataUrl)
    .success(function (data) {
        $scope.data.products = data.results;
    })
    .error(function (error) {
        $scope.data.error = error;
    });
});

// Test link
// https://DTRfVWS6peQI8XzYTiYihJwsNf3XAKfB5uPSVz8D:javascript-key=wOn3WPeLk0YNiojNgTLgncLcOlNL4GTodpVXz7UG@api.parse.com/1/classes/Products/