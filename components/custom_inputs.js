Vue.component('coupon',{
	props :['code'],
	template : `
		<input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
	`,
	methods :{
		updateCode(code){
			if (code === 'FREE') {
				alert("this coupon is non longer available. Sorry!");
				this.$refs.input.value= code ='';	
			}
			this.$emit('input',code);
		}
	}
})

new Vue({
	el : '#root',
	data :{
		coupon : 'FREE'
	}
});