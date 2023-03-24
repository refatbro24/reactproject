import React, { Component } from 'react';
import Button from './button.component';
class TodoHeader extends Component {

    render() {
        return (
            <>
                <div className='card-header text-center'>
                    <h1>todo app</h1>
                </div>
                <div className='card-body text-center'>
                    <Button
                        className="btn btn-danger"
                        text="add todo"
                    />
                </div>
                <br />
            </>
        );
    }
}

export default TodoHeader;