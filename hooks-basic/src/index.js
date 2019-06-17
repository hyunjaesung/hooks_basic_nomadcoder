import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const useInput = (initialValue, validator) => {
	const [ value, setValue ] = useState(initialValue);
	const onChange = (event) => {
		const { target: { value } } = event;
		// setValue(value);
		// 조건 성립할때만 입력가능하게
		let willUpdate = true;
		if (typeof validator === 'function') {
			// 일단 함수 맞는지 확인하고
			willUpdate = validator(value);
			// 조건 부합한지 확인
		}
		if (willUpdate) {
			setValue(value);
		}
	};

	return { value, onChange };
};

const App = () => {
	const maxLen = (value) => value.length <= 10;
	// 조건함수 만들어준다, 10보다 적을때만 true
	const sharp = (value) => value.includes('#');
	// # 꼭필요 조건

	const name = useInput('Mr.', maxLen);
	const hashtag = useInput('', sharp);

	return (
		<div className="App">
			<h1>Hello</h1>
			<input placeholder="Name" value={name.value} onChange={name.onChange} />
			{/* 그냥 ...name 쓰면 value ={..} onChange ={..} 대체가능  */}
			<input placeholder="Hashtag" {...hashtag} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
