import React from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import About from './components/pages/About';
import './App.css';
import Summoners from './components/Summoners';
import AddSummoner from './components/AddSummoner';
import Header from './components/layout/Header';
import uuid from 'uuid';
import DisplaySummoner from './components/DisplaySummoner';
//import axios from 'axios';
class App extends React.Component {
  state = {
      summoners: [],
      redirect: false
  }

  componentDidMount(){
      this.setState({summoners: JSON.parse(localStorage.getItem("List"))});
      
  }

  componentDidUpdate() {
    if(this.state.redirect){
      this.setState({redirect: false})
    }
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
      if ((title !=="") && (this.state.summoners === null)){
        this.setState({summoners: [newsummoner],redirect: true});
        localStorage.setItem("List",JSON.stringify([newsummoner]));
        return

      }     
      else if ((title !== "") && (this.state.summoners.filter(summoner => (summoner.title === title)).length === 0)) {
        this.setState({summoners: [newsummoner,...this.state.summoners],redirect: true});
        localStorage.setItem("List",JSON.stringify([newsummoner,...this.state.summoners]));
        return
        
      }
      else if ((title !== "") && (this.state.summoners.filter(summoner => (summoner.title === title)).length !== 0)){
        this.setState({summoners: [newsummoner,...this.state.summoners.filter(summoner => 
          summoner.title !== title)], redirect: true});
        localStorage.setItem("List",JSON.stringify([newsummoner,...this.state.summoners.filter(summoner => 
          summoner.title !== title)]));
          return
         
      } 
      else{
          alert("Enter a Summoner name!");
      }    
      
  }

  redirect = () => {
    if(this.state.redirect){

      return <Redirect push to = "/player"></Redirect>
    }
  }

  
  
  render() {
    
    
    
    return (  
        <Router>
            {this.redirect()}
            <div className="App">
              <Header></Header>

                <div className="container">
                  
                    <div className="Contents">
                    
                    
                      
                        <Route exact path = "/" render = {props => (
                            <React.Fragment>
                              <img src ="https://i.pinimg.com/originals/98/36/1a/98361a85e6540a6c511aa24389f6a5ee.jpg"  alt = "test" width = "25%" height = "25%" className = "center" ></img>
                        
                                <AddSummoner addSummoner = {this.addSummoner}></AddSummoner>
                                
                                <Summoners summoners = {this.state.summoners} isDeleted = {this.isDeleted} addSummoner = {this.addSummoner}/>  
                            </React.Fragment>
                        )}>
                        </Route>

                        <Route path = "/about" component = {About}></Route>
                        
                    </div>
                    <Route path = "/player" render = {props => (
                          <React.Fragment>
                            <DisplaySummoner></DisplaySummoner>
                          </React.Fragment>
                        )}></Route>
                </div>
            </div> 
        </Router>
        
    );
  }
}

export default App;




