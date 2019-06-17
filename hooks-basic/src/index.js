import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const useInput = (initialValue) => {
	const [ value, setValue ] = useState(initialValue);
	const onChange = (event) => {
		const { target: { value } } = event;
		setValue(value);
	};

	return { value, onChange };
};

const App = () => {
	const name = useInput('Mr.');
	// 초기값을 이용한 첫번째 값과 두번째인 셋함수를 품고있는 onChange 함수를 name 안에 넣어줌
	return (
		<div className="App">
			<h1>Hello</h1>
			<input placeholder="Name" value={name.value} onChange={name.onChange} />

			{/* 그냥 ...name 쓰면 value ={..} onChange ={..} 대체가능  */}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
