import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class ExercisesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }


    }

    async componentDidMount() {
        try{
            const res = await axios.get(process.env.REACT_APP_ENDPOINT+'/exercise/')
            this.setState({ list: res.data })
        }catch(err){
            console.log(err)
        }
    }

    render() {
        const { list } = this.state
        return (
            <div>
                <h3>Exercise List</h3>
                <table className="table">
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
                                    <tr key={doc._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td><Link to={'/edit/' + doc._id} >{doc.username}</Link></td>
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