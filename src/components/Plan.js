import React from 'react'
import {connect} from 'react-redux'
// import {Row Col} from 'antd'
import {Link} from 'react-router-dom'

const Plan = ({count,history})=>{
  const getLocalTime =(ns)=>{
    return new Date(parseInt(ns)).toLocaleString().replace(/:d{1,2}$/,' ')
  }
  const list =()=>{
    var list=[];
    for(let i in history){
      var mlis=[];
      for(let j in history[i]){
        var product = count.byId[j];
        mlis.push(
          <div id={product.id} className="cart-list-li" key={'a'+product.id}>
            <Row>
              <Col span={3}>
                <div className="img">
                  <img src="../images/yeoman.png" alt=""/>
                </div>
              </Col>>
            </Row>
          </div>
        )
      }
    }
  }
  return (
    <div className="plan f1">
      {list()}
    </div>
  )
}
const mapStateToProps=state=>({
  count:state.count,
  cart:state.cart,
  history:state.history
})
Plan.PropTypes=({
  count:React.PropTypes.object,
  cart:React.PropTypes.object,
  history:React.PropTypes.object
})

export default connect(
  mapStateToProps
)(Plan)
