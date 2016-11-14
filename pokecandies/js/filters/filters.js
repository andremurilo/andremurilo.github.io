app
	.filter('nidoran', function(){
		return function(text){
			if(text){
				if(text.toLowerCase() == 'nidoran-f') return "Nidoran (f)"
				else if(text.toLowerCase() == 'nidoran-m') return "Nidoran (m)"
				else return text
			}
		}
	})
	.filter("camelcase", function() {
        return function(input) {
            var listaDeNomes = input.split(" ");
            var listaDeNomesFormatada = listaDeNomes.map(function(nome) {
                if (/(da|de)/.test(nome)) return nome;
                return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
            });
            return listaDeNomesFormatada.join(" ");
        };
    })