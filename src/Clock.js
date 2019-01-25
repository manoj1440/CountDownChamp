import React, {Component} from 'react'
import './App.css'


class Clock extends Component{

    constructor(props){
        super(props)
        this.state={
            days:0,
            hour:0,
            minute:0,
            second:0
        }
    }


    componentWillMount() {
        this.getTimeuntil(this.props.deadline)
    }


    componentDidMount() {

        setInterval(()=>this.getTimeuntil(this.props.deadline),1000)
    }


    leading0(num){
        return num < 10 ? '0'+ num : num
    }

    getTimeuntil(deadline){
         const  time = Date.parse(deadline) - Date.parse(new Date())
        const second=Math.floor((time/1000) % 60)
        const minute=Math.floor((time/1000/60) % 60)
        const hour=Math.floor((time/1000/3600) % 24)
        const days=Math.floor((time/(1000*60*60*24)))

        this.setState({
            days,
            hour,
            minute,
            second
        })
    }


    render() {
        return(
            <div>
                <div className="days"> {this.leading0(this.state.days)} days</div>
                <div className="hour"> {this.leading0(this.state.hour)} hours</div>
                <div className="minute"> {this.leading0(this.state.minute)} minutes</div>
                <div className="second"> {this.leading0(this.state.second)} seconds</div>
            </div>
        )
    }

}


export default Clock;