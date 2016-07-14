var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  componentDidMount: function() {
       $(document).foundation();
   },
  render: function() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
         <ul className="menu dropdown" data-dropdown-menu>
          <li>
            <IndexLink to="#" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
              <ul className="menu">
                <li><a href="#">Dispatch</a></li>
                <li><a href="#">Companies</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Bank Info</a></li>
                <li><a href="#">Tracks Info</a></li>
                <li><a href="#">Trailer Info</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Drivers</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">Documents</a></li>
                <li><a href="#">Archives</a></li>
                <li><a href="#">App Defiencies</a></li>
                <li><a href="#">Log Out</a></li>
              </ul>
          </li>
          <li>
             <Link to="/iG" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>IG</Link>
          </li>
          <li>
            <Link to="/lC" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>LC</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
          <ul className="menu">
            <li className= "menu-text">DISPATCHER</li>
            <li className= "menu-text">Dummy Text</li>
          </ul>
    </div>
  </div>
    );
  }
});

module.exports = Nav;
