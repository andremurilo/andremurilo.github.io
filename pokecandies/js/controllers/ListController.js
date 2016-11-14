app.controller('ListController', function($http, localStorageService){
	var vm = this;
	var sheetId = "15KIJjO9BAczTlV51Z5US-IOoEl0aLuA5XGFk3owZxwY";
	var sheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/"+sheetId+"/values/A1:C55?access_token="+localStorageService.get('token');
	vm.getPokemons = function(){
		$http.get(sheetUrl)
		.then(function(data){
			vm.pokemons = data.data.values.map(function(a) {
                    return {
                        "id": a[0],
                        "name": a[1],
                        "candy": a[2]
                    }
                });
			vm.pokemons.splice(0, 1);
		})
	}

	vm.getPokemons();
})