var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var lC = require('lC');
var iG = require('iG');

//load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path= "/" component= {Main}>
      <Route path="IG" component= {iG}/>
      <Route path="LC" component= {lC}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
