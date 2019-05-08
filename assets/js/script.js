$(()=> {
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav();
    
    var options = [
      {
        selector: '#projects',
        offset: 100,
        callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '#skills',
        offset: 100,
        callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      }
    ];
      
      Materialize.scrollFire(options);
});