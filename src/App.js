import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import './App.css';
import Summoners from './components/Summoners';
import AddSummoner from './components/AddSummoner';
import Header from './components/layout/Header';
import uuid from 'uuid';
//import axios from 'axios';

class App extends React.Component {
  state = {
      summoners: []
  }

  componentDidMount(){
      this.setState({summoners: JSON.parse(localStorage.getItem("List"))});
  }

  //toggle delete
  isDeleted = (id) => {
      
      this.setState({summoners: [...this.state.summoners.filter(summoner => 
        summoner.id !== id)]});
      localStorage.setItem("List",JSON.stringify([...this.state.summoners.filter(summoner => 
        summoner.id !== id)]));  
      
  }

  addSummoner = (title) => {
      const newsummoner ={
        id: uuid.v4(),
        title: title,
      }
      console.log(this.state.summoners.filter(summoner => (summoner.title === title)));
      
      if ((title !== "") && (this.state.summoners.filter(summoner => (summoner.title === title)).length === 0)) {
        this.setState({summoners: [newsummoner,...this.state.summoners]});
        localStorage.setItem("List",JSON.stringify([newsummoner,...this.state.summoners]));  
      }
      else if ((title !== "") && (this.state.summoners.filter(summoner => (summoner.title === title)).length !== 0)){
        this.setState({summoners: [newsummoner,...this.state.summoners.filter(summoner => 
          summoner.title !== title)]});
        localStorage.setItem("List",JSON.stringify([newsummoner,...this.state.summoners.filter(summoner => 
          summoner.title !== title)]));  

      } 
      else{
          alert("Enter a Summoner name!");
      } 
  }
  render() {
    
    return (
        
        <Router>
            <div className="App">
                <div className="container">
                    <Header></Header>
                        <Route exact path = "/" render = {props => (
                            <React.Fragment>
                        
                                <AddSummoner addSummoner = {this.addSummoner}></AddSummoner>
                                <Summoners summoners = {this.state.summoners} isDeleted = {this.isDeleted}/>  
                            </React.Fragment>
                        )}>
                        </Route>

                        <Route path = "/about" component = {About}></Route>
                    
                </div>
            </div>
        </Router>
        
    );
  }
}

export default App;




