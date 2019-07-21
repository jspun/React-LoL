import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import './App.css';
import Summoners from './components/Summoners';
import AddSummoner from './components/AddSummoner';
import Header from './components/layout/Header';
import uuid from 'uuid';

class App extends React.Component {
  state = {
      summoners: [

          {
              id: uuid.v4(),
              title: "Take out the trash",
              
          },
          {
              id:uuid.v4(),
              title: "Who's this animal",
              
          },
          {
              id:uuid.v4(),
              title: "Report this idiot",
             
          }

      ]
  }
  //toggle delete
  isDeleted = (id) => {
      console.log();
      this.setState({summoners: [...this.state.summoners.filter(summoner => 
        summoner.id !== id)]});
  }

  addSummoner = (title) => {
      const newsummoner ={
        id: uuid.v4(),
        title: title,
      }
      this.setState({summoners: [...this.state.summoners,newsummoner]});
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
