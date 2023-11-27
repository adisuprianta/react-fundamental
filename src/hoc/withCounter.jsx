import { Component } from "react";

const withCounter = (WrappedComponent)=>{
    class NewComponent extends Component{
        state={
            count: 0
        }
        handelIncrement = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        render(){
            return(
                <WrappedComponent count={this.state.count} increment={this.handelIncrement} {...this.props}/>
            )
        }
    }
    return NewComponent
}

export default withCounter