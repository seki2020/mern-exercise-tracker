import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ExercisesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        let list = []
        for (let i = 0; i < 10; i++) {
            const seed = () => {
                return Math.random().toFixed(0)
            }
            list.push({
                "id": seed(),
                "username": "Sun-" + seed(),
                "description": "jump-" + seed(),
                "duration": i,
                "date": new Date().toISOString(),
            })
        }

        this.setState({ list: list })
    }
    render() {
        const { list } = this.state
        return (
            <div>
                <h3>Exercise List</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Description</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((doc, index) => {
                                return (
                                    <tr key={doc.id}>
                                        <th scope="row"><Link to={'/edit/' + doc.username} >{index + 1}</Link></th>
                                        <td><Link to={'/edit/' + doc.username} >{doc.username}</Link></td>
                                        <td>{doc.description}</td>
                                        <td>{doc.duration}</td>
                                        <td>{doc.date}</td>
                                    </tr>
                                )
                            })
                        }




                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExercisesList