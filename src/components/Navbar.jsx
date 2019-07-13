import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.hamburger = React.createRef()
    }


    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                    <button class="navbar-toggler"
                        type="button"
                        onClick={()=>{this.hamburger.current.classList.toggle('show')}}>
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse"
                        id="navbarSupportedContent" ref={this.hamburger} >
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                <Link to="/" className="nav-link">Exercises</Link>
                            </li>
                            <li class="nav-item ">
                                <Link to="/create" className="nav-link">Create Exercise log</Link>
                            </li>
                            <li class="nav-item ">
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