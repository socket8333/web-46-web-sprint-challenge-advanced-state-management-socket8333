import React, { Component, useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import {connect} from 'react-redux'

//Actions
import { fetchSmurfs } from "./actions";

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props) => {
  useEffect(()=> {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

// class App extends Component {
//   componentDidMount() {
//     console.log("test")
//     this.props.fetchSmurfs();
//     // axios.get('http://localhost:3333/smurfs')
//     // .then(res => console.log(res))
//     // .catch(err => console.log('Axios Error', err));
//   }

//   render() {
//     return (
//       <div className="App">
//         <Header />

//         <main>
//           <SmurfList/>
//           <AddForm/>
//         </main>
//       </div>
//     );
//   }
// }

const mapStateToProps = state => {
}

export default connect(mapStateToProps, {fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.