angular.module("todoListApp", [])



// http provider handles all http request
// dependency injection
.service('dataService', function($http){

  this.helloWorld = function(){
    console.log("This is a hello console service!");
  };

  this.getTodos = function(callback){
    $http.get('mock/todos.json')
  .then(callback);
};
  
  this.deleteTodo = function(todo) {
  
    console.log("The " + todo.name + " todo has been deleted!");
//    other logic
  };
  
  this.saveTodo = function(todo) {
       console.log("The " + todo.name + " todo has been saved!");
//    other logic
  };
});









