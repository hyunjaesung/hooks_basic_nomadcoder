import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import * as serviceWorker from './serviceWorker';

const useTitle = (initialTitle) => {
	const [ title, setTitle ] = useState(initialTitle);
	const updateTitle = () => {
		const htmlTitle = document.querySelector('title');
		htmlTitle.innerText = title;
	};
	useEffect(updateTitle, [ title ]);
	// title 이 마운트완료 되거나 업데이트되면 함수실행
	return setTitle;
};

const App = () => {
	const titleUpdater = useTitle('Loading...');
	setTimeout(() => titleUpdater('Home'), 5000);
	return (
		<div className="App">
			<div>Hi</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
