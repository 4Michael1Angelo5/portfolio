import React, {Component} from 'react';
import {  HashRouter,Route, Switch } from 'react-router-dom';
import {CONTENT} from './assets/content1';
import Cubes from './components/cubeComponent1';
import About from './components/aboutComponent' ;
import Footer from './components/footerComponent';
import Header  from './components/headerComponent2'
import './App.css';

class App extends Component {
  constructor(props){
    super(props) ;             
    this.state = {
      content :CONTENT,
      category :"all"
    };
  

  }
  render() {
    return (
      
      <HashRouter basename='/'>
      <div className="App">
        <Header content = {CONTENT} setCategory ={(category)=>this.setState({category})} filterContent ={(content)=>this.setState({content})}/>
        <Switch>
       <Route exact path='/about' component={()=> <About/>} />
       <Cubes content = {this.state.content} category={this.state.category}/> 
       </Switch>
       <Footer/>
      </div>

    </HashRouter>
      
     
      
    );
  }
}
export default App;
