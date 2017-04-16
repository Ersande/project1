Vue.component('coupon',{ 
	template : `
		<input type="text" placeholder="eneter your coupon code" @blur="onCouponApplied">	 
	`,    
	methods :{
		onCouponApplied(){
			this.$emit('applied');
		}
	}
});

 
new Vue({
	el : '#root',
	data :{
		showModal : false,
		couponApplied :false
	},
	methods :{
		onCouponApplied(){
			 this.couponApplied = true;
		}
	}
});