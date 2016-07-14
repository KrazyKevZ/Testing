var React = require('react');
var Nav = require('Nav');
var Searchbar = require('Searchbar');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <Searchbar/>
        <div>
          <div>
            {props.children}
          </div>
        </div>
    </div>
  );
}

module.exports = Main;
