import React from 'react'

const NewApps = (props) =>{
   /* //used to reroute to another page after timeout
    setTimeout(() =>{ 
        props.history.push('/about')
    },2000);
    */
    return(
        <div className="container">{/*container centralise the page*/}
            <h4 className="center">Apps</h4>{/*center centralises the text*/}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex impedit officiis accusantium at tempore corrupti excepturi esse recusandae! Quae provident molestiae corporis repellat nihil enim labore ipsam? Magni, laborum asperiores.</p>
        </div>

    );
}

export default NewApps;