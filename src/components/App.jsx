import React, { Component } from 'react';

// const App = (props) => {
//     return (
//         <h1>{ props.someProp }</h1>
//     )
// }

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "some other string",
            hasLoaded: false,
            placeHolder: "Input something."
        }

        this.handleNewInput = this.handleNewInput.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleButtonClick2 = this.handleButtonClick2.bind(this);
    }

    handleNewInput(e) {
        console.log(this);
        this.setState(
            {
                text: e.target.value
            }
        )
    }

    handleButtonClick(e) {
        this.setState({
            hasLoaded: true
        })
    }

    handleButtonClick2() {
        this.setState({
            text: this.props.someProp
        })
    }

    render() {

        if (this.state.hasLoaded) {
            return (
                <React.Fragment>
                    <h1> This is from props: "{this.props.someProp}".  This is from state: "{this.state.text}"</h1>
                    <input placeholder={this.state.placeHolder} onChange={this.handleNewInput} />
                    <button onClick={this.handleButtonClick2}>Set state.text = props.someProp</button>
                </React.Fragment>
            )
        } else {
            return (
                <div className = "container">
                <h1>Loading...</h1>
                <button onClick={this.handleButtonClick}>Or just click me to load...</button>
                </div>
            )
        }
    }
}

export default App;