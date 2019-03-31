import React from 'react';


class Son extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            name:"何运正"
        }
    }

    callback(){
        this.props.callback('我的值')
    }

    render(){
        return <div className="son" onClick={this.callback.bind(this)}>{this.props.data}</div>
    }
}


export default Son
 