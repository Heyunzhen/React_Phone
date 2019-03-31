import React from "react"
import Son from "./Son"
import {connect} from "react-redux"
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:"我们",
            data:['123','456']
        }
    }  
        componentDidMount(){
            console.log(this.props)
        }
    send(){
        this.setState({
            list:"爸爸给你的值"
        })
      this.props.dispatch({type:"my",payload:this.state.data})
    }
    callback(msg){
        console.log(msg)
    }
    render(){
        return <div className="info">  
        {
            this.props.state.name.length>0?this.props.state.name.map((item,index)=>{
                console.log(item)
                return <li key={index}>{item}</li>
            }):"123"
        }
         <button type="button" onClick={this.send.bind(this)}>何德强</button>
        <Son callback={this.callback} data={this.state.list}></Son>
        </div>
    }
}

const mapStateToProps = (state) => {
    return{
        state
    }
       
    
}


export default connect(mapStateToProps)(App)