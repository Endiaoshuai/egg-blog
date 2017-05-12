var request = require('request');

module.exports = function( origin_options ){
	var options = {
		    url: `https://api.douban.com/v2/${origin_options.url}`
		};
	Object.assign(origin_options, options);	
	return new Promise( (resolve, reject) => {
		request(origin_options, (eror, res, data) => {
			if (res.statusCode == 200) {
		      resolve(data);
	  		}
		});
	});
}