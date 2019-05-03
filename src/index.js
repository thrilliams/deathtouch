import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: this.props.init || 20
		}
	}

    handleChange(change) {
        this.setState({count: this.state.count + change})
    }

	render() {
		return (<div className="item">
			<div className="counter-holder">
				<button onClick={_ => this.handleChange(1)} className="plus">
                    + 1
                </button>
				<button onClick={_ => this.handleChange(5)} className="plus-five">
                    + 5
                </button>
				<input
                    value={this.state.count}
                    onChange={e => this.handleChange(e.target.value - this.state.count)}
                    type="number"
                    className="display" />
				<button onClick={_ => this.handleChange(-1)} className="minus">
                    - 1
                </button>
				<button onClick={_ => this.handleChange(-5)} className="minus-five">
                    - 5
                </button>
			</div>
		</div>)
	}
}

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			counters: [<Counter key={0}/>, <Counter key={1}/>],
            target: 20
		}
	}

    handleChange(change) {
        var state = {...this.state}
        state.target += change
        this.setState(state)
    }

    add() {
        var state = {...this.state}
        state.counters.push(<Counter key={this.state.counters.length} init={this.state.target}/>)
        this.setState(state)
    }

    remove() {
        var state = {...this.state}
        state.counters = state.counters.slice(0, -1)
        this.setState(state)
    }

	render() {
        console.log(this.state.counters)
		return (<div className="root">
            <div className="item">
                <div className="button-container">
                    <button className="add" onClick={_ => this.add()}>Add Counter</button>
                    <button className="remove" onClick={_ => this.remove()}>Remove Counter</button>
                </div>
            </div>
            {[...this.state.counters]}
        </div>)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))