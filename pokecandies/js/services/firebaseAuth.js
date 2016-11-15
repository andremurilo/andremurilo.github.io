app.service("firebaseAuth", function($mdToast, localStorageService, $location){
	var vm = this
	
	var provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/spreadsheets.readonly');

	var token = "-";

	vm.login = login;
	vm.getToken = getToken;
	vm.logout = logout;

	function login(){
		firebase.auth().signInWithPopup(provider)
			.then(function(data){
				token = data.credential.accessToken;
				localStorageService.set('token', token);
			})
			.catch(function(error){
				$mdToast.show(
            		$mdToast.simple()
            		.textContent(error.message)
            		.position("bottom right")
            		.hideDelay(2000)
            		);
			});
	}

	function getToken(){
		return token;
	}

	function logout(){
		firebase.auth().signOut()
			.then(function(){
				localStorageService.remove('token');
				$location.path("/#/");
			})
			.catch(function(error){
				$mdToast.show(
                    $mdToast.simple()
                    .textContent(error.message)
                    .position("bottom right")
                    .hideDelay(2000)
                    );
			})
	}
})