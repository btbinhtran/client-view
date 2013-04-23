var view = 'undefined' == typeof window ? require('..') : require('tower-view')
  , assert = require('component-assert');

describe('client view', function(){
  it('should render', function(){
    view('body').on('click', function(event){
      console.log('clicked body!');
      event.context.remove();
    });
    view.init();
    assert('rendered' === view('body')[0]);
  });
});
