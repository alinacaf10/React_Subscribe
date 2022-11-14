import React,{Component} from "react"
import { render } from "react-dom"
import "./subbutton.css"

class SubButton extends Component{
   state={
   message:"Click Me!",
   click:false
  }
  clickHandler=()=>{
    this.setState({message:"Clicked",click:true}) }  
  render(){
    
    let clas=" ";
    if(!this.state.click){
clas="red"
    }
    else{
      clas="blue"
    }
      return(
<button className={clas} type="button" onClick={this.clickHandler}>
  {this.state.message}
</button>
)
  }
}
export default SubButton