import React, {Component } from 'react';
import axios from 'axios';

class Post extends Component{
    state ={
       post:null
    }
    componentDidMount(){
        console.log(this.props);
        let id= this.props.match.params.post_id;
        axios.get('http://jsonplaceholder.typicode.com/posts/'+id) //used to grab individual post by id
        .then(res =>{
            this.setState({
                post:res.data //pass the infomation to the state
            })
            console.log(res);
        })
    }
    render(){
        //used to display a post on the screen if the post is available
        const post = this.state.post ? 
        (
            <div className="post">
                <h4 className="title center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) 
        :
        (
            <div className="center">Loading Post.....</div>
        );
        return(//ouput the post
            <div className="container">
                {post} 
            </div>

        );
    }

}

export default Post;