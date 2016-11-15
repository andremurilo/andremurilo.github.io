app
.config(function($routeProvider, $mdThemingProvider){
	$mdThemingProvider.enableBrowserColor({
      theme: 'default', // Default is 'default'
      palette: 'primary', // Default is 'primary', any basic material palette and extended palettes are available
      hue: '800' // Default is '800'
    });

	$routeProvider.when('/', {
		templateUrl: "views/list.html",
		controller: "ListController",
		controllerAs: "list"
	})
})