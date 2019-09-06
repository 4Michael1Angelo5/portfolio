import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer"
    //style = {{position:"absolute", height:document.body.clientHeight, width:"100%"}}
    >
        <div className="container">
            <div className="row d-flex ">             
                <div className="col-3 col-lg-6">
                    <ul className="list-unstyled">
                    <li><Link to='/'>Home</Link></li>
                   

                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <div className="col-9 col-lg-6 text-right">
                    <address>		              
		              <i className="fa fa-envelope-o fa-lg"></i>: <a href="mailto:4michael1angelo5@gmail.com">
                         4michael1angelo5@gmail.com</a>
                    </address>
                </div>
              
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© ChrisChun 2019</p>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;