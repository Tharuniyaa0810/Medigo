import React, { Component } from 'react'

 class FullLife extends Component {
   constructor(props) {
    super(props)
   
    this.state = {
         show:true,
         count:0
    }
   }

   delHeader = () =>{
    this.setState({
          show:false
        })
   }
   
   componentDidMount(){
    console.log("component did mount after render once")
   }

   componentDidUpdate(){
    console.log("component did update method")
   }


  render() {

    let myheader;

    if(this.state.show){
myheader = <Child/>;
    };
    return (
      <div>
         <center>
          {myheader}
             <button type="button" onClick={this.delHeader}>Delete Header</button> <hr></hr>

             <h3>Count is {this.state.count}</h3>
             <button type="button" onClick={()=>this.setState({count:this.state.count+5})}>Click me</button>
         </center>
      </div>
    )
  }
}


class Child extends Component{

    componentWillUnmount(){
console.log('i am component will unmount method')
    }

    render(){
        return(
            <h1>Hello Sathya</h1>
        );
    }
}

export default FullLife;