import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>{

  return (
    <footer className="page-footer bg-primary p-5" style={{fontFamily: 'Ubuntu, sans-serif'}}>
    
        <div className="container-fluid text-center text-md-left text-white">
    
          <div className="row">
    
            <div className="col-md-6 mt-md-0 mt-3">
    
              <h5 className="text-uppercase">Contact us</h5>
              <p className="mt-2" style={{fontFamily: 'Ubuntu, sans-serif'}}>701, 7th Floor, B wing, Mittal Towers, M G Road, Bengaluru, 560001.</p>
    
            </div>
    
            <hr className="clearfix w-100 d-md-none pb-3"/>
    
            <div className="col-md-3 mb-md-0 mb-3">
    
                <ul className="list-unstyled text-white">
                  <li className="m-2">
                    <Link className="text-white" to="/aboutus">Who we are</Link>
                  </li>
                  <li className="m-2">
                    <Link className="text-white" to="#!">Life at MedApp</Link>
                  </li>
                  <li className="m-2">
                    <Link className="text-white"  to="/ourblogs">Our Blog</Link>
                  </li>
                  <li className="m-2">
                    <Link className="text-white" to="/contacts">Contacts</Link>
                  </li>
                </ul>
    
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
    
                <ul className="list-unstyled text-white">
                <li className="m-2">
                    <Link className="text-white" to='/'><i className="fab fa-twitter"></i></Link>
                </li>
                <li className="m-2">
                    <Link className="text-white" to='/'><i className="fab fa-linkedin-in"></i></Link>
                </li>
                <li className="m-2">
                    <Link className="text-white" to='/'><i className="fab fa-instagram"></i></Link>
                </li>
                <li className="m-2">
                    <Link className="text-white" to='/'><i className="fab fa-facebook-f"></i></Link>
                </li>
                </ul>
            </div>
 
          </div>
        </div>
        
        <div className="footer-copyright text-start p-4 text-white">
            © 2018 MedApp - All Rights Reserved.
        </div>
      </footer>
  )
}

export default Footer;