var React = require('react');
var Nav = require('Nav');
var Searchbar = require('Searchbar');

var Main = (props) => {
  return (
    <div>
      <Nav/>
        <div>
          <div>
            <Searchbar/>
            {props.children}
          </div>
        </div>
    </div>
  );
}

module.exports = Main;
