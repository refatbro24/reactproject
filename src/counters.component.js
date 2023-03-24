import React, { Component } from 'react';
import Button from './common/button.component';
import Counter from './common/counter.component';
class Counters extends Component {
  state = {
    numbers: [0, 0]
  }
  getNumbers = () => {
    this.setState({ numbers: [...this.state.numbers, 0] });
  }
  reset = (index) => {
    const coppiedNumber = [...this.state.numbers];
    coppiedNumber[index] = 0;

    this.setState({ numbers: coppiedNumber });
  }

  decrement = (index) => {
    const coppiedNumber = [...this.state.numbers];
    coppiedNumber[index]--;

    this.setState({ numbers: coppiedNumber });
  }

  increment = (index) => {
    const coppiedNumber = [...this.state.numbers];
    coppiedNumber[index]++;

    this.setState({ numbers: coppiedNumber });
  }

  delete = (index) => {
    const coppiedNumber = [...this.state.numbers];
    coppiedNumber.splice(index, 1);
    this.setState({ numbers: coppiedNumber });
  }

  render() {
    return (
      <div className="container">
        <div>
          <Button
            text="add"
            className="btn btn-warning my-3 mx-3"
            event={this.getNumbers}
          />
          
        </div>
        {
          this.state.numbers.map((number, index) => {
            return (
              <React.Fragment key={index}>
                <Counter
                  index={index}
                  number={this.state.numbers[index]}
                  onReset={this.reset}
                  onDecrement={this.decrement}
                  onIncrement={this.increment}
                  onDelete={this.delete}
                />
                <br></br>
              </React.Fragment>
            );
          })
        }

      </div>
    );
  }
}

export default Counters;