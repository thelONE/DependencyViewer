angular.module("sportsStoreAdmin")
.constant("productUrl", "https://api.parse.com/1/classes/Products/")
.run(function ($http) {
    $http.defaults.headers.common["X-Parse-Application-Id"] = "DTRfVWS6peQI8XzYTiYihJwsNf3XAKfB5uPSVz8D";
    $http.defaults.headers.common["X-Parse-REST-API-Key"] = "yQv7NI23DFf4ZAJ9rhRGuUUtSd4QYTTm69WcgKKh";
})
.controller("productCtrl", function ($scope, $http, $resource, productUrl) {
    
    
     
});