import './Footer.css';
import React from 'react';
function Footer() {
  let fecha=new Date().getFullYear();
  return (
          <footer>
            <p>Por:  &copy; Gasgamdev {fecha}</p>
            <p> gasgamdev@gmail.com</p>
            <div className="repositorio">
                    <p>
                      <a rel="noreferrer" href="https://github.com/gasgam" target="_blank" >
                        <i className="fab fa-github"></i>
                      </a>
                    </p>
            </div>
          </footer>
  );
}
export default Footer;
