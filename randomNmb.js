class App extends React.Component {
    state = {
        text: ``,
        number: 0
    }

    handleClick = () => {
        const { text, number} = this.state //destructuring
        let active = 0
        const nmb = ++active
        const random = Math.floor(Math.random() * 9) + `, `
        this.setState({
            text: text + random,
            number: number + nmb
        })
    }

    render() {
        return (
            <>
            <button onClick={this.handleClick} className="btn">Random number</button>
            <PanelResult text={this.state.text} number={this.state.number}>cyfra</PanelResult>
            </>
        )
    }
}

const PanelResult = (props) => {
    return (
        <h1>{props.text}:{props.children} {props.number}</h1>
    )
}

ReactDOM.render(<App />, document.getElementById(`root`));
