import React, { Component } from 'react';
import PropTypes from 'prop-types';


     //install propTypes : npm install prop-types
class PropValid extends Component {

render(){
    PropValid.propTypes = {  
        propArray: PropTypes.array.isRequired,  
        propBool: PropTypes.bool.isRequired,  
        propFunc: PropTypes.func,  
        propNumber: PropTypes.number,  
        propString: PropTypes.string,   
    }  
    PropValid.defaultProps = {  
        propArray: [12,20,31,42,55],
propBool: true,  
        propFunc: function(x){return x+5},  
        propNumber: 7416,  
        propString: "sathya",  
    }  
    return(

         <div>
         <h1>Validating Props in React js</h1>

         <center>
         <table>
            <tr>
                <th>Type  </th>
                <th>Value</th>
                <th>Valid</th>
            </tr>

         <tr>
         <td>Array</td>
         <td>{this.props.propArray}</td>
         <td>{this.props.propArray ?
"true":"false"}</td>
         </tr>

         <tr>
             <td>Boolean</td>
             <td>{this.props.propBool ? "true":"false"}</td>
             <td>{this.props.propBool ? "true":"false"}</td>
         </tr>

         <tr>  
         <td>Function</td>  
         <td>{this.props.propFunc(20)}</td>  
         <td>{this.props.propFunc(20) ? "true" : "False"}</td>  
     </tr>  

     <tr>  
     <td>String</td>  
     <td>{this.props.propString}</td>  
     <td>{this.props.propString ? "true" : "False"}</td>  
 </tr>

 <tr>  
 <td>Number</td>  
 <td>{this.props.propNumber}</td>  
 <td>{this.props.propNumber ? "true" : "False"}</td>  
</tr>  
         </table>
         </center>
         </div>

    )
}

}
export default PropValid;
