import React, { Component } from 'react'

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
    }
    onSubmit(e) {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        const { match } = this.props
        return (
            <div>
                <h3>{match.params.id}</h3>
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
                        <input type="submit" className="btn btn-primary" value="Update" />
                    </div>
                </form>
            </div>

        )
    }
}

export default EditExercise