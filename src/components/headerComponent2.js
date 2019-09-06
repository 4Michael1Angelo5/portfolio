import React, { Component } from 'react';
import {Jumbotron,Dropdown,DropdownItem, 
       Button,Collapse, 
       Card, CardBody} from 'reactstrap' ; 
import { slide as Menu } from 'react-burger-menu';
import {CONTENT} from '../assets/content1';
import { Link } from "react-router-dom";

class HamburgerSlider extends React.Component {
  constructor(props){
    super(props) ; 
    this.filter_content =this.filter_content.bind(this)
    this.toggle = this.toggle.bind(this);               
    this.state = {
      open : "open",
      content :CONTENT,
      collapse: false,
      dropdownOpen: false
    };
  }
   
  showSettings (event) {
      event.preventDefault();
    }
    
    filter_content(ref){            
      if (ref ==="all"){
          
          this.props.filterContent(this.props.content)
          this.props.setCategory(ref)
          console.log(this.props)
         


      }
      else{
      const FILTER_CATEGORY = this.props.content.filter(({category}) => category === ref) 
      
 
      this.props.filterContent(FILTER_CATEGORY) ; 
      this.props.setCategory(ref)
      console.log(this.props)
      this.setState({content:FILTER_CATEGORY})
    }
}
toggle() {
  this.setState(state=>({ collapse: !state.collapse,dropdownOpen: !state.dropdownOpen}));
}


  
    render () {
      // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
      return (
        <Menu disableAutoFocus noOverlay = {true} right>
          <div className= "dropdown-item menu-item" id="home" ><Link className="nav-link" to='/'>Home</Link></div>
          <div className= "dropdown-item menue-item" id="about" ><Link className="nav-link" to='/about'>About</Link></div>
          
          <Button     onClick = {this.toggle}> Work </Button>

          <Collapse isOpen ={this.state.collapse} >
              <Card className = "filter-tab">
                <CardBody>
                
               <Dropdown isOpen ={this.state.dropdownOpen}  toggle={this.toggle}>

                  <DropdownItem  header className = "dropdown-filter-header">Apply Filter</DropdownItem>
                  <DropdownItem  onClick={()=>this.filter_content("all")}   >All </DropdownItem>
                  <DropdownItem  onClick={()=>this.filter_content("code")}  >Code</DropdownItem>
                  <DropdownItem  onClick={()=>this.filter_content("math")}  >Mathmagician</DropdownItem>
                  <DropdownItem  onClick={()=>this.filter_content("art")}   >Art</DropdownItem>
                  <DropdownItem  onClick={()=>this.filter_content("food")}  >Food</DropdownItem>
                  <DropdownItem  onClick={()=>this.filter_content("skateboarding")}  >Skateboarding</DropdownItem>
                
                </Dropdown>

                </CardBody>
              </Card>
            </Collapse>
          
                
        </Menu>
      );
    }
    
    
  }
       


class Header extends Component{
        constructor(props){
                super(props) ;                
                this.state = {
                  open : "open",
                  content :CONTENT
                };
              }
      


    render(){
        return(
            <React.Fragment>
                <Jumbotron>
               
                <div className = "container-fluid mr-sm-auto">

                <div className = "row  "> 
                        <div className = "col-8 col-lg-9">
                            <h1>Michael Angelo</h1>                      
                        </div>
                        <div className = "col-4 col-lg-3  ">
                    
                        <HamburgerSlider setCategory={ (props)=>this.props.setCategory(props)} content = {CONTENT} filterContent = {(props)=>this.props.filterContent(props)}/>
            
                        
                           
                            <h4 className = "pb-1 nopadding pt-lg-4"  > A <br className ="d-lg-none"/> New Renaissance </h4>
                         
                        
                        </div> 
                </div> 

                <div className = "row   d-flex flex-column ">
                
                <div className = "d-flex justify-content-center  " >
                    <p className=" pb-0 m-0 pt-2 text-right  ">  
                        Hi. I'm Michael Angelo 
                    </p>
                    <p className="  mt-5 text-left   ">
                    {/* <p className="d-none d-sm-block pt-5 text-center col-6   "> */}
                        Web Developer, Skater, Artist, Cook, Certified Mathmagician 
                       
                    </p> 
                    {/* <p className="d-none d-sm-block pt-5 mt-5 text-left ">
                        
                        Certified Mathmagician 
                    </p> */}
                </div>

             
                </div>
                </div>
                
                        
                    
                </Jumbotron>

            </React.Fragment> 
        );
    }
}



export default Header;