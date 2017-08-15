require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Index from './Index';
import Destination from './Destination';
import Plan from './Plan'
import Detail from './Detail'



const Basic=()=>(
<Router>
  <div>
    <div>
      <ul>
        <li><Link to="/">master</Link></li>
        <li><Link to="/about">购物车</Link></li>
        <li><Link to="/detail">详情</Link></li>
      </ul>
    </div>
    <Route exact path='/' component={Index} />
    <Route path='/about' component={Destination} />
    <Route path='/detail' component={Detail} />
  </div>
</Router>

)



export default connect()(Basic)




// let yeomanImage = require('../images/yeoman.png');
// class AppComponent extends React.Component {
//   render() {
//     return (
//       <div className="index">
//         <img src={yeomanImage} alt="Yeoman Generator" />
//         <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
//       </div>
//     );
//   }
// }

// AppComponent.defaultProps = {
// };

// export default AppComponent;
