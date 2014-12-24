angular.module("sportsStoreAdmin")
.constant("authUrl", "https://api.parse.com/1/login")
.run(function ($http) {
    $http.defaults.headers.common["X-Parse-Application-Id"] = "DTRfVWS6peQI8XzYTiYihJwsNf3XAKfB5uPSVz8D";
    $http.defaults.headers.common["X-Parse-REST-API-Key"] = "yQv7NI23DFf4ZAJ9rhRGuUUtSd4QYTTm69WcgKKh";
})
.controller("authCtrl", function ($scope, $http, $location, authUrl) {
    
    $scope.authenticate = function (user, pass) {
        $http.get(authUrl, {
            username: user,
            password: pass
        }).success(function () {
            $scope.$broadcast("sessionToken", data.sessionToken);
            $http.defaults.headers.common["X-Parse-Session-Token"] = data.sessionToken;
            $location.path("/main");
        }).error(function (response) {
            $scope.authenticationError = response.error || response; 
        });
    }

});