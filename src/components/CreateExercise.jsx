import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            users: ["Mike", "Jason"],
            username:"Mike"
        })
    }
    onSubmit(e) {
        debugger
        e.preventDefault()
        console.log(this.state)
    }




    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={e => { this.setState({ username: e.target.value }) }}>
                            {
                                this.state.users.map(user => {
                                    return (
                                        <option key={user} value={user}>{user}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={e => { this.setState({ "description": e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={e => { this.setState({ "duration": e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={e => { this.setState({ "date": e }) }} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Create Exercise Log"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Navbar