import React, {Component}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import logo2 from '../logo2.png'
//functional components cant use lifecycle hoc so you need to use a class component
class Home extends Component{
    state = { // create an empy state to store the info
        posts:[]
    }
    componentDidMount(){ //used to get info from component
        axios.get('http://jsonplaceholder.typicode.com/posts') //used to grab the data
        .then(res =>{ //.then tell react what to do after u git that data
            console.log(res);
            this.setState({
                posts: res.data.slice(0,10) //used slice to limit the grabbed content
            });
        });
    }
    render(){
        const {posts} = this.state; //this is used to see if the info exist already before trying to 
        const postList = posts.length ? (
        posts.map(post =>{
                return(
                    <div className="post card" key= {post.id}>
                        <img src={logo2} alt="logo2"/>
                        <div className="card-content">
                            <Link to= {'/' +post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                );
            })
        ) :
        (
            <div className="center">no posts yet</div>
        );
        return(
            <div className="home">{/*container centralise the page*/}
                <h4 className="center">Home</h4>{/*center centralises the text*/}
                {postList}
            </div>

        );
    }
}

export default Home;