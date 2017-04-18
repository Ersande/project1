let store = {
	user:{
		name :'Don Joe'
	}
}

new Vue({
	el : '#one',
	data :{
		shared: store
	}
});

new Vue({
	el : '#two',
	data :{
		shared: store	
	}
});