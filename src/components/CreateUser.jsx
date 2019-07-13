import React, {Component} from 'react'

class CreateUser extends Component{
    constructor(props){
        super(props)
        this.state={
            username:''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault()
        console.log(this.state.username)
        this.setState({username:''})
    }
    render(){
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" type="text" required value={this.state.username} 
                        onChange={e=>{e.target.value && this.setState({username:e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary"/>
                    </div> 
                </form>
            </div>
        )
    }
}

export default CreateUser