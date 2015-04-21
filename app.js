var app = angular.module('TestApplication', ['youtube-embed']);

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);

app.controller('MainCtrl', [
'$scope', 'posts',
function($scope,posts){
  $scope.posts = [
  {title: 'Test Post', upvotes: 0},
];
  $scope.posts = posts.posts;
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { 
      window.alert("Post title cannot be empty!");
      return; 
    }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0});
    $scope.title = '';
    $scope.link = '';
  };
  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);


