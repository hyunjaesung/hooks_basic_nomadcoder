import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = () => {
	const [ item, setItem ] = useState(1);

    const onIncrement = ()=>setItem(item+1);


    return (
        <>
        <div> {item}</div>
        <button onClick = {onIncrement}>+</button>
        </>
        );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
