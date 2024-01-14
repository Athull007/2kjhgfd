import React from 'react';
import './animations.css';
import './main.css';
import './index.css';
import './nav.css';

function Interface() {
  return (
    <div className="full-height">
      <center>
        <table border="0">
          <tbody>
            <tr>
              <td width="80%">
                <span className="edoc-logo">Docere </span>
                <span className="edoc-logo-sub">| companion</span>
              </td>
              {/* <td width="10%">
                <a href="Loginnav" className="non-style-link"><p className="nav-item">LOGIN</p></a>
              </td>
              <td width="10%">
                <a href="Signnav" className="non-style-link"><p className="nav-item" style={{ paddingRight: '10px' }}>REGISTER</p></a>
              </td>
            </tr> */}
                          <td width="10%">
          
                  <button>PATIENT VIEW</button>
                  
                  
              
              </td>
              <td width="10%">
              
                  <button>DOCTOR VIEW</button>
                 
              
                    
            
          
              </td>
            </tr>
            

            
            <tr>g
              <td colSpan="3">
              </td>
            </tr>
          </tbody>
        </table>
        <p className="sub-text2 footer-hashen">DEVELOPED BY ATHUL & JIBIN</p>
      </center>
    </div>
  );
}

export default Interface;