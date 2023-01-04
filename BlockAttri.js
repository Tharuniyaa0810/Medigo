class BlockAttri extends Component{

    render(){
const my=<ul>
            <li>java</li>
            <li>python</li>
            <li>.Net</li>
        </ul>
    
const myStyle={

    color:'red'
}
        return(
                 <div>
            <h2 style={myStyle}>block of large code by using variable</h2>
            <h3>{my}</h3>
           
            </div>
        );
    }

}

export default BlockAttri;