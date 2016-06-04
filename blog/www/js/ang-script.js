angular.module('myBlog', ['ionic','ngRoute'])

//Configure our routes
.config(function($routeProvider){
  $routeProvider
  //route for the home page
  .when('/',{
    templateUrl:'index.html',
    controller: 'myBlogListController'
  })
})

.controller('myBlogListController', function($scope){
  $scope.items = [
    { 
      id: 1,
      blogName: 'blog-one',
      album: 'Gotta Be Somebody', 
      artist: 'Nickelback', 
      image: 'http://lorempixel.com/200/200/' 
    },
    { 
      id: 2,
      blogName: 'blog-two',
      album: 'Dark Horse', 
      artist: 'Nickelback', 
      image: 'http://lorempixel.com/200/200/' 
    }
  ];
})

