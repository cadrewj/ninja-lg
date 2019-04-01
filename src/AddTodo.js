import React,  {Component} from 'react'

class AddTodo extends Component {
    state = {
        content:''
    }
    handleChange = (e) =>{ // grabs the value in the input box
        this.setState({
            content: e.target.value
            
        });
       // console.log(this.state);

    }
    handleSubmit = (e) =>{//to deal with the info when the user hits enter
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
       // e.target.reset();
        console.log(this.state);
    }
    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Add new Todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        );
    }
}
export default AddTodo;