import React from 'react'

function Navbar(props) {
    return (
        <ul style = {{listStyleType: 'none'}} className='styles'>
            { /* {
                props.data.map(el => (
                    <li><a href={el.link}>
                        {el.title}
                        </a>
                        
                        {el.subMenu && <ul> {el.subMenu.map(el => <li>{el}</li>)}</ul>}
                        
                    </li>
                ))
            } OR the other solution*/}
            {props.data.map(el =>(
                el.subMenu ? 
                <div className='hovMenu'>
                    <div className='hovSubMenu'>
                    <a href={el.link}>
                        {el.title} 
                        </a>
                    </div>
                    <ul style = {{listStyleType: 'none'}} className='hovSubMenuItems'>
                        {el.subMenu.map(el => <li>{el}</li>)}
                    </ul>
                </div>
                : <li>
                      <div>
                    <a href={el.link}>
                        {el.title} 
                        </a>
                    </div>
                </li>
                ))}   
        </ul>
    )
}

export default Navbar
