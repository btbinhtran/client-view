var view = 'undefined' == typeof window ? require('..') : require('tower-view')
  , assert = require('component-assert');

describe('client view', function(){
  it('should render', function(){
    view('body').on('click', function(context){
      console.log('clicked body!');
    });
    view.init();
    assert('rendered' === view('body')[0]);
  });
});
