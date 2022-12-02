import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><i>{props.title}</i></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>{props.aboutus}</Link>
                            </li>

                        </ul>
                        <button type="button" onClick={()=>props.changeColor('primary')} style={{cursor:'pointer'}} className="btn btn-primary mx=8"></button>

                        <button type="button" onClick={()=>props.changeColor('success')} style={{cursor:'pointer'}} className="btn btn-success mx=8"></button>

                        <button type="button" onClick={()=>props.changeColor('danger')} style={{cursor:'pointer'}} className="btn btn-danger mx=8"></button>

                        <button type="button" onClick={()=>props.changeColor('warning')} style={{cursor:'pointer'}} className="btn btn-warning mx=8"></button>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggelmode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" style={{ color: props.mode === 'light' ? 'black' : 'white' }} htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                        {/*<form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>*/}
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutus: PropTypes.string.isRequired
}


/*
Navbar.defaultProps={
    title: "set title",
    aboutus: "set about us"
}
*/

