import "./header.css";
import React, {useState, useEffect, useRef} from 'react';

import { dataPage } from "../dataPage";

function Header() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="header">
      <div className="haeder-top">
        <div className="menu-icon">
        <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <i className="ri-menu-line"></i>
        </div>

        <div className={` dropdown-menu  ${open? 'active' : 'inactive'}`} >
        <button className="close-btn"  onClick={()=>{setOpen(!open)}}>
            <i className="ri-close-line"></i>
          </button>
          <h3 className="">شركة  سندوش  <br/><span>بنل وغرف جاهزه </span></h3>
          <ul>
            {
              dataPage.map((item, index) => (
                
             
            <DropdownItem href = {item.href} icon= {item.icon}  text = {item.text} alt = {item.alt}  key = {index}/>
          )) }
          </ul>
        </div>
      </div>
        </div>

        <div className="logo">
        <a href="/" title="شركة الرائدة في مجال السندويش بانل والغرف الجاهزة">
         <span className="main-color"> شركة</span>
         <span> سندوش بنل وغرف جاهزه  </span>
          </a>
        </div>

      </div>
      <div className="header-bottom">
        <div className="search">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input className="input" type="search" placeholder="بحث : الكلمات الدلالية #الهاش_تاج" />
        </div>
        <div className="social-icons">
          <i className="ri-facebook-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-telegram-line"></i>
          <i className="ri-youtube-line"></i>
        </div>
      </div>
      <div id="whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=966500513512"
            target="_blank"
            id="toggle1"
            rel="noopener noreferrer"
            className="wtsapp"
            title="تواصل معنا عبر الواتساب"
            alt="تواصل معنا عبر الواتساب"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
        </div>
    </div>
  );
}
function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
    
        <i className={props.icon}></i>
    
      <a href={props.href} alt={props.alt} >  {props.text} </a>
    </li>
  );
}


export default Header;
