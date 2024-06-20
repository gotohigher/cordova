import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import './push';
// import { message } from './firebase';
// import { getToken, onMessage } from 'firebase/messaging';

function App() {
	useEffect(() => {
		document.addEventListener(
			'deviceready',
			() => {
				var permissions = window.cordova.plugins.permissions;
				window.cordova.plugins.backgroundMode.wakeUp();
				permissions.checkPermission(permissions.CALL_PHONE, function (status) {
					if (status.hasPermission) {
						console.log('Yes :D ');
					} else {
						console.warn('No :( ');

						permissions.requestPermission(
							permissions.CALL_PHONE,
							success,
							error
						);

						function error() {
							console.warn('Call permission is not turned on');
						}

						function success(status) {
							if (!status.hasPermission)
								console.warn('Call permission is not turned on');
						}
					}
				});
				console.log('Cordova is ready');
			},
			false
		);
	}, []);

	const clickButton = () => {
		callFunction();
	};

	const clickButtonReceive = () => {
		var cordovaCall = window.cordova.plugins.CordovaCall;
		cordovaCall.receiveCall('David Marcus');
		cordovaCall.on('receiveCall', onSuccess);
	};

	const callFunction = () => {
		var options = {
			from: 'John Doe', // Caller's name
			to: 'Bye', // Callee's name
			video: false, // Enable video call
		};
		var cordovaCall = window.cordova.plugins.CordovaCall;

		cordovaCall.sendCall(options.to, options.video);
		cordovaCall.setSpeakerphoneOn(true);
		cordovaCall.on('sendCall', onSuccess); // Listen on the 'sendCall' event
		setTimeout(function () {
			cordovaCall.endCall();
		}, 30000);
		cordovaCall.on('sendCall', function (info) {
			//info now contains the user id of the person you're trying to call
			setTimeout(function () {
				cordovaCall.connectCall();
			}, 5000);
		});
		cordovaCall.on('sendCallFailed', onError); // Listen on the 'sendCallFailed' event

		// cordovaCall.on('receiveCall', function (data) {
		// 	console.log('Receive call', data);
		// });
	};

	function onSuccess(data) {
		console.log('Send call successful', data);
	}

	function onError(data) {
		console.error('Send call failed', data);
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<button
					title='click'
					onClick={clickButton}>
					Call
				</button>
				<button
					title='click'
					onClick={clickButtonReceive}>
					Receive
				</button>
			</header>
		</div>
	);
}

export default App;
