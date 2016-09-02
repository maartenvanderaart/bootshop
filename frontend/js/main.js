var Bootshop = {


	api : 'https://awsapigateway',




	getHelloWorld : function() {

		// { text: "dit is tekst" }
		$.ajax({
	        url: Bootshop.api + '/helloworld'
	    }).then(function(data) {
	       $('.placeholdertje').append(data.text);
	    });
	},

	getProducts : function( searchTerms ) {

	}

}

$( document ).ready(function() {
    $.ajax({
        url: 'js/views/header.html'
    }).then(function(data) {
       $('#header').append(data);
    });
});