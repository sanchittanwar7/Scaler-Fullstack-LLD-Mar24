import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: ''
        };
        console.log('Constructor called');
    }

    componentDidMount() {
        console.log('ComponentDidMount called');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ComponentDidUpdate called');
        console.log('PrevProps:', prevProps);
        console.log('PrevState:', prevState);
        if(prevState.todos !== this.state.todos) {
            console.log('Todos updated');
        }
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount called');
    }

    render() {
        console.log('Render called');
        return (
            <>
                <input type="text" value={this.state.newTodo} onChange={(e) => {
                    this.setState({
                        newTodo: e.target.value
                    });
                }} />
                <button onClick={() => {
                    this.setState({
                        todos: [...this.state.todos, this.state.newTodo],
                        newTodo: ''
                    });
                }}>Add</button>
                <ul>
                    {this.state.todos.map((todo, index) => {
                        return <li key={index}>{todo}</li>
                    })}
                </ul>
            </>
        );      
    }
}