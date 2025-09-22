import React from 'react'
import { Link } from 'react-router-dom'
const Adminheader = () => {
  return (
    <div>
       <header class="elementskit-header main-header">

<div class="header-top">
    <div class="container ">
        <div class="top-outer clearfix">
          
            <ul class="top-left">
                <li><a href="tel:+1-(212)-305-2500"><span class="icon flaticon-phone-receiver"></span>Phone: +1 (212) 305-2500</a></li>
                <li><span class="icon flaticon-clock-1"></span>Mon-Fri (8am - 6pm)</li>
                <li><a href="https://html.xpeedstudio.com/cdn-cgi/l/email-protection#c0a9aea6af80a5b8a1adb0aca5eea3afad"><span class="icon flaticon-letter"></span><span class="__cf_email__" data-cfemail="c4adaaa2ab84a1bca5a9b4a8a1eaa7aba9">[email&#160;protected]</span></a></li>
            </ul>

          
            <div class="top-right clearfix">

                
                <div class="cart-btn">
                    <a href="#" class="flaticon-cart offset-side-bar cart-icon"><span class="total-cart">3</span></a>
                </div>

              
                <div class="nav-box">
                    <div class="nav-btn nav-toggler navSidebar-button"><span class="icon flaticon-menu-3"></span></div>
                </div>

            </div>

        </div>
    </div>
</div>

<div class="header-upper xs-sticky-header">
    <div class="container">
        <div class="xs-navbar clearfix">

            <div class="logo-outer">
                <div class="logo"><img src="images/image.png" width="170px" height="300px" /></div>
            </div>

            <nav class="elementskit-navbar">

                
                <div class="xs-mobile-search">
                    <a href="#modal-popup-2" class="xs-modal-popup"><i class="icon icon-search"></i></a>
                </div>

               
                <button class=" elementskit-menu-toggler xs-bold-menu">

                    <div class="xs-gradient-group">
                            <span></span>
                            <span></span>
                            <span></span>
                    </div>
                    <span>
                        Menu
                    </span>
                </button>
                
                <div class="elementskit-menu-container elementskit-menu-offcanvas-elements">

                   
                    <ul class="elementskit-navbar-nav nav-alignment-dynamic">
                       
                        <li><Link to="/doc_add">Doctor Add</Link></li>
                        <li><Link to="/addservice">Services Add</Link></li>
                        <li><Link to="accept">Appointment Request</Link></li>
                        <li><Link to="/addsymptom">Add Symptom</Link></li>
                        <li><Link to="/addmedicine">Add Medicine</Link></li>
                      

                       
                       

                    </ul> 
                    <div class="elementskit-nav-identity-panel">
                        <h1 class="elementskit-site-title">
                            <a href="#" class="elementskit-nav-logo">Megamenu</a>
                        </h1>
                        <button class="elementskit-menu-close elementskit-menu-toggler" type="button"><i class="icon icon-cross"></i></button>
                    </div>
                   

                </div>
               
                <div class="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler">
                </div>
               
            </nav>
            {/* <ul class="xs-menu-tools">
                <li>
                    <a href="#modal-popup-2" class="navsearch-button xs-modal-popup"><i class="icon icon-search"></i></a>
                </li>
            </ul> */}
        </div>
    </div>
</div>

</header>
    </div>
  )
}

export default Adminheader
