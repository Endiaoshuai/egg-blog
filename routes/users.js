module.exports = function( router ){
	router.get('/users', function(req, res){
		res.render('users', {
			data: '所有用户'
		});
	});
}