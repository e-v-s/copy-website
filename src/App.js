import React, { useState, useEffect } from 'react';
import Topbar from './components/topbar/Topbar';
import Body from './components/body/Body';
import './components/topbar/style.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [styleMenu, setStyleMenu] = useState('none');
  const [topbarContent, setTopbarContent] = useState({display: 'none'})
  const [showPage, setShowPage] = useState('block');
  const [btnShow, setBtnShow] = useState({border: 'none', backgroundColor: '#fff', outline: 'none', marginRight: '10px'});

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width > 720 ? setBtnShow({visibility: 'hidden'}) && setShowPage('block') : setBtnShow({border: 'none', backgroundColor: '#fff', outline: 'none', marginRight: '10px'});
  },[width]);

 
  function handleClick() {    
    if (styleMenu === 'flex') {
      setStyleMenu('none');
      setShowPage('block');
      setTopbarContent({display: 'none'});
    } else {
      setStyleMenu('flex');
      setShowPage('none');
      setTopbarContent({flexDirection: 'column', listStyle: 'none', fontSize: '40px', marginTop: '30%', justifyContent: 'center'})
    }
  }
 
  return (
    <div className="App">
    {
      width < 720 ? <Topbar onClick={() => handleClick()} btnShow={btnShow} topbarMenuStyle={{display: styleMenu} && topbarContent} topbarContentStyle={{display: 'flex', justifyContent: 'space-between',}} logo={{background: 'transparent', fontWeight: '300', marginLeft: '15px', fontSize: '40px', fontFamily: "'Hind Madurai', sans-serif", cursor: 'pointer'}} /> : <Topbar btnShow={btnShow} topbar={{display: 'flex', justifyContent: 'space-around', margin: '0 auto', maxWidth: '1020px', alignItems: 'center'}} topbarMenuStyle={{display: 'flex', listStyle: 'none', justifyContent: 'space-between', width: '50%'}} logo={{background: 'transparent', fontWeight: '300', fontSize: '40px', fontFamily: "'Hind Madurai', sans-serif", cursor: 'pointer'}} />
    }
      <div style={{display: showPage}}>
        {
          width < 720 ? <Body style={{marginTop: '30px'}} /> : <Body style={{maxWidth: '1020px', margin: '60px auto', textAlign: 'justify'}}/>  
        }
      </div>      
    </div>
  );
}

export default App;
