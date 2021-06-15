import React from 'react';
import { Link } from 'react-router-dom';

 function Footer() {
     return(
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2 text-white">
                    <h6>Useful Links</h6>
                    <ul className="list-unstyled">
                        <li><Link className="styling text-decoration-none" to="/history">History</Link></li>
                        <li><Link className="styling text-decoration-none" to="/user">User</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                <h6 className="text-white">KEEP IN TOUCH</h6>
                <ul className="list-unstyled d-flex text-white">
                   <li className="m-2"><i class="fa fa-youtube-play" aria-hidden="true"></i></li>
                   <li className="m-2"><i class="fa fa-instagram" aria-hidden="true"></i></li>
                   <li className="m-2"><i class="fa fa-facebook-official" aria-hidden="true"></i></li>
                   <li className="m-2"><i class="fa fa-twitter" aria-hidden="true"></i></li>
                 </ul>
                   
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto text-white">
                    <p>© Copyright 2021 To-DOs</p>
                </div>
            </div>
        </div>
    </div>
     )
 }

 export default Footer;