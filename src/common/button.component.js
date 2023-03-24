import React, { Component } from 'react';
class Button extends Component {
    state = {  } 
    render() { 
        const {text,event,className,disabled}=this.props;
        return (
            <button 
            type="button" 
            className={className}
            onClick={event}
            disabled={disabled}
            >
                {text}
            </button>
        );
    }
}
 
export default Button;