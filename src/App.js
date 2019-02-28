import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Kravatka',
        num_comments: 1,
        points: 1,
        objectID: 0,
    },
    {
        title: 'React 2',
        url: 'https://reactjs.org/',
        author: 'Kravatka 2',
        num_comments: 2,
        points: 3,
        objectID: 1,
    },
    {
        title: 'React 3',
        url: 'https://reactjs.org/',
        author: 'Kravatka 3',
        num_comments: 3,
        points: 4,
        objectID: 2,
    }
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: list,
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss(id) {
        const isNotId = item => item.objectID !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({ list: updatedList });
    }

    render() {
        return (
            <div className="App">
                {this.state.list.map(item =>
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}>{item.title} </a>
                            </span>
                            <span>{item.author} </span>
                            <span>{item.num_comments} </span>
                            <span>{item.points} </span>
                            <span>
                                <button className="btn btn-primary btn-sm" onClick={() => this.onDismiss(item.objectID)} type="button">
                                Отбросить
                                </button>
                            </span>
                        </div>
                )}
            </div>
        );
    }
}

export default App;
