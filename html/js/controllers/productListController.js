angular.module("sportsStore")
    .controller("productListCtrl", function ($scope, $filter) {
        
        var selectedCategoroy = null;

        $scope.selectCategory = function (newCategory) { 
        selectedCategory = newCategory;
        }
        
        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null || product.category == selectedCategory; 
        } 
    });