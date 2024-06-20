document.addEventListener('deviceready', pushNotification, false);
function pushNotification() {
	const push = window.PushNotification.init({
		android: {
			senderID: '350708747450', // Replace with your Firebase Sender ID
			alert: true,
			badge: true,
			sound: true,
			voip: true,
		},
		ios: { voip: true },
	});
	
	push.on('registration', (data) => {
		console.log('Registration ID:', data.registrationId);
		// Send the registration ID to your server
	});
	
	push.on('notification', (data) => {
		console.log('Notification received:', data);
		// Handle the notification
		// alert(data.message); // For example, display an alert
		handleIncomingCall();
	});
	
	push.on('error', (e) => {
		console.error('Push notification error:', e.message);
	});
	
}

function handleIncomingCall () {
	// callData contains the data from the incoming call notification
	var cordovaCall = window.cordova.plugins.CordovaCall;
	console.log(`Incoming call from`);

	cordovaCall.receiveCall('John Doe'); 
	// Adding Event Listeners for the call
	cordovaCall.on('answer', function() {
	  console.log('Call answered');
	  // trigger further actions like establishing a connection to your VOIP server
	});
  
	cordovaCall.on('reject', function() {
	  console.log('Call rejected');
	  // handle call rejection
	});
  
	cordovaCall.on('hangup', function() {
	  console.log('Call ended');
	  // handle call hangup
	});
}