/*
import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
*/
//=======================================================
//----------Components inside JS File--------------------
/*
import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
  render(){
    return <h2> This Msg is displayed using Components inside JS files concept.</h2>
  }
}
export default Car;
*/
//===============================================================
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mystyle.module.css'; 

class Car extends React.Component {
  render() {
    return <h1 className={styles.bigblue}>Hello Car!</h1>;
  }
}

export default Car;


