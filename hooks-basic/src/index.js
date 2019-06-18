import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import * as serviceWorker from './serviceWorker';

const useClick = (onClick) => {
	const element = useRef();
	// ref 만듬
	useEffect(() => {
		if (typeof onClick !== 'function') {
			return;
		}

		// 마운트 완료, 업데이트시
		if (element.current) {
			//current 가 있는지 확인
			element.current.addEventListener('click', onClick);
			// 조건 만족하면 이벤트 부여, 함수연결
		}

		// 언마운트 할시
		// componentWillUnmount일때 제거해줘야한다
		// mount 아닌데도 이벤트 리스너 있는거 보기싫으니
		return () => {
			if (element.current) {
				element.current.removeEventListener('click', onClick);
			}
		};
	}, []);
	// [] 를 넣어줬기때문에 처음 딱 한번 마운트 완료될때 실행된다
	// 만약 안썼으면 업데이트 될때마다 이벤트 리스너 추가했을듯
	return element;
};

const App = () => {
	const sayHello = () => console.log('say hello');
	const title = useClick(sayHello);
	// title 에 ref 줌
	return (
		<div className="App">
			<h1 ref={title}>Hi</h1>
			{/* h1에 ref 연결해줌 */}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
