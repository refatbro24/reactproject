import React, { Component } from 'react';
import Button from './button.component';
class Counter extends Component {
    
    render() {
        return (
            <div>
                <Button
                    text="reset"
                    event={()=>this.props.onReset(this.props.index)}
                    className="btn btn-danger mx-3"
                />
                <Button
                    text="-"
                    event={()=>this.props.onDecrement(this.props.index)}
                    className="btn btn-info mx-3"
                />
                {
                    this.props.number
                }
                <Button
                    text="+"
                    event={()=>this.props.onIncrement(this.props.index)}
                    className="btn btn-success mx-3"
                />
                <Button
                    text="delete"
                    event={()=>this.props.onDelete(this.props.index)}
                    className="btn btn-danger mx-3"
                />
            </div>
        );
    }
}

export default Counter;