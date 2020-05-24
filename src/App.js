import React, { useState, useEffect } from 'react';
import Topbar from './components/topbar/Topbar';

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
    width > 600 ? setBtnShow({visibility: 'hidden'}) && setShowPage('block') : setBtnShow({border: 'none', backgroundColor: '#fff', outline: 'none', marginRight: '10px'});
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
      width < 620 ? <Topbar onClick={() => handleClick()} btnShow={btnShow} topbarMenuStyle={{display: styleMenu} && topbarContent} topbarContentStyle={{display: 'flex', justifyContent: 'space-between',}} logo={{background: 'transparent', fontWeight: '500', marginLeft: '15px', fontSize: '25px',}} /> : <Topbar btnShow={btnShow} topbar={{display: 'flex', justifyContent: 'space-between'}} topbarMenuStyle={{display: 'flex', listStyle: 'none', justifyContent: 'space-between', width: '50%'}} />
    }
    <p style={{display: showPage}}>oi</p>
      
    </div>
  );
}

export default App;
