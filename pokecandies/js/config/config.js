app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: "views/list.html",
		controller: "ListController",
		controllerAs: "list"
	})
})