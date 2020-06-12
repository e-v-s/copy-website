import React from 'react';
import burgerIcon from '/home/enotabsjob/dev/copy-website/src/assets/icons/burgerMenuIcon.png';
import './style.css';

const Topbar = (props) => {	
	return (
		<div className="Topbar" style={{marginBottom: '40px'}}>
			<div className="Topbar-content" style={props.topbar}>
				<div style={props.topbarContentStyle}>
					<p className="Topbar-logo hvr-wobble-vertical" style={props.logo}>{'<Evs />'}</p>
					<button onClick={props.onClick} style={props.btnShow}>
						<img src={burgerIcon} alt="Íconde do menu para mobile" style={{width: '30px'}} />
					</button>
				</div>
				<ul className="Topbar-menu" style={props.topbarMenuStyle}>
					<li className="Topbar-menu-item" style={{fontWeight:'100', marginBottom: '10px', color: '#420212', cursor: 'pointer'}} onClick={() => props.onClick}>Work</li>
					<li className="Topbar-menu-item" style={{fontWeight:'100', marginBottom: '10px', color: '#420212', cursor: 'pointer'}}>About</li>
					<li className="Topbar-menu-item" style={{fontWeight:'100', marginBottom: '10px', color: '#420212', cursor: 'pointer'}}>Services</li>
					<li className="Topbar-menu-item" style={{fontWeight:'100', marginBottom: '10px', color: '#420212', cursor: 'pointer'}}>Projects</li>
				</ul>
			</div>
		</div>
	)
};

export default Topbar;
