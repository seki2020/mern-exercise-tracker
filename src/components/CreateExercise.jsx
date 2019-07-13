import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Axios from 'axios';

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

    async componentDidMount() {
        const {data} = await Axios.get(process.env.REACT_APP_ENDPOINT + '/users')
        if (data !== null) {
            this.setState({
                users: data,
                username: data[0].username
            })
        }




    }
    async onSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        debugger
        const res = await Axios.post(process.env.REACT_APP_ENDPOINT + '/exercise/add', {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        })
        if (res.statusText === 'OK') {
            alert(res.data)
            this.setState({ username: '', description: '', duration: '', date: '' })
            // window.location.href = '/'
        }
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
                            onChange={e => { debugger;this.setState({ username: e.target.value }) }}>
                            {
                                this.state.users.map(user => {
                                    return (
                                        <option key={user._id} value={user.username}>{user.username}</option>
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