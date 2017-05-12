module.exports = function( router ){
  require('./home')( router );
  require('./users')( router );
}