var g = G$('John', 'Doe');
g.greet().setLang('es').greet(true);

$('#login').click(function() {
  // create new Greetr Object
  var loginGrtr = G$('John', 'Doe');
  // hide login on screen
  $('#logindiv').hide();
  // fire off an HTML greeting, passing #greeting as selector and the chosen language
  // and log welcome as well
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})
