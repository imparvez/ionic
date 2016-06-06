angular.module('myBlog', ['ionic','ngRoute'])

//Configure our routes
.config(['$routeProvider',function($routeProvider){
  $routeProvider
  //route for the home page
  .when('/',{
    templateUrl:'index.html',
    controller: 'myBlogListController'
  })
  .when('/route/:param',{
    template:'Referred item is {{ctrl.id}}',
    controller: ['$routeParams', function($routeParams) {
        var self=this;
        self.id = $routeParams.id;
    }],
    controllerAs: 'ctrl'
  })
}])

.controller('myBlogListController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams){
  $http.get('js/blogList.json').then(function(response){
    $scope.blogList = response.data;
  })
}])

.controller('myBlogDetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams){
  $http.get('js/blogList.json').then(function(response){
    $scope.blogDetails = response.data;
  })
}])

