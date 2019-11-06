import React from 'react';
const Footer = ({links}) => (
<footer className="page-footer light-blue darken-4">
    <div className="container">
        <div className="row">
            <div className="col 16 s12">
                <h5 className="white-text">
                    {links}
                </h5>
                <p className="grey-text text-lighten-4">
                    The climate app via API
                </p>
                <ul>
                <li><a href="#!" className="grey-text text-lighten-3">Link1</a></li>
               <li><a href="#!" className="grey-text text-lighten-3">Link2</a></li>
               <li><a href="#!" className="grey-text text-lighten-3">Link3</a></li>
                </ul>

            
            </div>
        </div>
    </div>
    <div className="footer-copyright">
        <div className="container">
            &copy; 2019 Andhis.com
        </div>
    </div>
</footer>
)
export default Footer;