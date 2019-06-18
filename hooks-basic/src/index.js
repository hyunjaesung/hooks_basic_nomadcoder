import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const usePreventLeave = () => {
	const listener = (event) => {
		event.preventDefault();
		event.returnValue = ''; // 애가있어야지 크롬에서 작동이됨
	};
	const enablePrevent = () => window.addEventListener('beforeunload', listener);
	//beforeunload 이벤트는 윈도우가 닫히기 전에 함수실행시킨다
	const disablePrevent = () => window.removeEventListener('beforeunload', listener);
	return { enablePrevent, disablePrevent };
};
const App = () => {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div className="App">
			<h1>Hi</h1>
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}>Unprotect</button>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
