import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction"
import "./Counter.css"


function Counter(props) {
  console.log(props)

  useEffect(() => {
    getNumbers();
  }, [])

  return (
    <div className="toTheRight">
      
          
      
      <strong>Cart:<span> {props.basketProps.basketNumbers}</span></strong>
     
    </div>
  )
}
const mapStateToProps = state => ({
  basketProps: state.basketState
})
export default connect(mapStateToProps, { getNumbers })(Counter);