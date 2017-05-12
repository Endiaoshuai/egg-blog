var http = require('../public/js/common/http.js');

module.exports = function( router ){
	router.get('/', function(req, res){
		var method = req.method.toUpperCase();
		var proxy_url = 'book/search?q=python&fields=id,title';

		var options = {
		    url: proxy_url,
		    headers: {"Connection": "close"},
		    method: method,
		    json: true,
		    body: req.body
		};

		/*function callback(eror, response, data) {
		  	if (response.statusCode == 200) {
		      res.render('index', {
		      	title: '豆瓣图书',
		      	data: data
		      });
	  		}
		}
		request(options, callback);*/
		http(options)
			.then((data) => {
				    res.render('index', {
		      	    title: '豆瓣图书',
		      	    data: data
		        });
			});
	});
}
