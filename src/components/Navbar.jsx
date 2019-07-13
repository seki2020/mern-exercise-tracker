import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.hamburger = React.createRef()
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                    <button className="navbar-toggler"
                        type="button"
                        onClick={()=>{this.hamburger.current.classList.toggle('show')}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse"
                        id="navbarSupportedContent" ref={this.hamburger} >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Exercises</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/create" className="nav-link">Create Exercise log</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/user" className="nav-link">Create User</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar