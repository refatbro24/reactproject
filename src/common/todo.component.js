import React, { Component } from 'react';
import Button from './button.component';
class Todo extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex my-2 card-body'>
                <h4>{this.props.todo}</h4>
                <Button
                text="Edit"
                className="btn btn-info mx-2"
                />
                <Button
                className="btn btn-warning"
                text="delete"
                />
            </div>
        );
    }
}
 
export default Todo;