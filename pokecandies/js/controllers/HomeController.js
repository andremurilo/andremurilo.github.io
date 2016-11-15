app.controller('homeCtrl', function($scope, $mdToast, localStorageService, firebaseAuth){
	var vm = this;

	vm.title = "PokeCandies";
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            vm.logged = true;
            vm.photoURL = user.photoURL;
            $mdToast.show(
                $mdToast.simple()
                    .textContent("Logado com sucesso")
                    .position("bottom right")
                    .hideDelay(2000)
                    );
        }else{
            vm.logged = false;
            localStorageService.remove('token');
            $mdToast.show(
                $mdToast.simple()
                    .textContent("Deslogado com sucesso")
                    .position("bottom right")
                    .hideDelay(2000)
                    );
            console.log('usuario deslogado')
        }
    })

    vm.googleSignIn = function(){
        firebaseAuth.login();
    }

    vm.googleSignOut = function(){
        firebaseAuth.logout();
    }

    

})