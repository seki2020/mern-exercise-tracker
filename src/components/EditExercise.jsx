import React, { Component } from 'react'
import Axios from 'axios';

class EditExercise extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            description: '',
            duration: '',
            date: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    async componentDidMount() {
        try {
            const res = await Axios.get(process.env.REACT_APP_ENDPOINT + '/exercise/' + this.props.match.params.id)
            if (res.data) {
                this.setState(Object.assign({}, this.state, res.data))
            } else {
                // alert(`Can't find this exercise.`)
                // toHome()
            }
        } catch (err) {
            alert(err)
        }

    }

    async onSubmit(e) {
        e.preventDefault()
        try {
            const res = await Axios.post(process.env.REACT_APP_ENDPOINT + '/exercise/update/' + this.props.match.params.id, this.state)
            if (res.data !== null) {
                alert('Exercise Updated!')
                this.setState(res.data)
            }


        } catch (err) {
            alert(err)
            toHome()
        }

    }

    async onDelete() {
        try {
            const res = await Axios.delete(process.env.REACT_APP_ENDPOINT + '/exercise/' + this.props.match.params.id)
            alert('Exercise Deleted!')
            toHome()
        } catch (err) {
            alert(err)
            toHome()
        }

    }

    render() {
        return (
            <div>
                <h3>{this.state.username}</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control"
                            value={this.state.username}
                            onChange={e => { this.setState({ username: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <input type="text" className="form-control"
                            value={this.state.description}
                            onChange={e => { this.setState({ description: e.target.value }) }} ></input>
                    </div>
                    <div className="form-group">
                        <label >Duration</label>
                        <input type="text" className="form-control"
                            value={this.state.duration}
                            onChange={e => { this.setState({ duration: e.target.value }) }} ></input>
                    </div>
                    <div className="form-group">
                        <label >Date</label>
                        <input type="text" className="form-control"
                            value={this.state.date}
                            onChange={e => { this.setState({ date: e.target.value }) }} ></input>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary " value="Update" />

                        <input type="button" className="btn btn-danger" value="Delete" onClick={this.onDelete} />
                    </div>
                </form>
            </div>

        )
    }
}

const toHome = (url = '/') => {
    window.location.href = url
}

export default EditExercise