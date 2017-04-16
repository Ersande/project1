window.Event = new Vue();
Vue.component('coupon',{ 
	template : `
		<input type="text" placeholder="eneter your coupon code" @blur="onCouponApplied">	 
	`,    
	methods :{
		onCouponApplied(){
			Event.$emit('applied');
		}
	}
});

 
new Vue({
	el : '#root',
	data :{
		showModal : false,
		couponApplied :false
	},
	created(){
		Event.$on('applied',()=> alert('coupon applied!'));
	}
});