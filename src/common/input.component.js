import React, { Component } from 'react';
class Input extends Component {
    state = {  } 
    render() { 
        const {event,type,id,value,}=this.props;
        return (
            <input 
            onChange={event}
            value={value}
            type={type}
            className="form-control" 
            id={id}
            />
        );
    }
}
 
export default Input;