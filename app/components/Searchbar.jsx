var React = require('react');
var {Link, IndexLink} = require('react-router');

var Searchbar = React.createClass({
  handleSearch: function () {
    var searchText = this.refs.searchText.value;

    this.props.onSearch(searchText);
  },
  render: function () {
    return (
      <div className="top-bar-left">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" className="search" ref="searchText" placeholder="Search Loads" onChange={this.handleSearch}/>
              </li>
              <li>
                <a className="button hollow" href="#">Add Load</a>
              </li>
              <li>
                <a className="button hollow" href="#">Copy</a>
              </li>
              <li>
                <a className="button hollow" href="#">Actions</a>
              </li>
              <li>
                <a className="button hollow" href="#">Dispatch to Driver</a>
              </li>
            </ul>
          </form>
      </div>
    );
  }
});

module.exports = Searchbar;
