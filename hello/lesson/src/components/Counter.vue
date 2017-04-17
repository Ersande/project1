<template>
	<div>
		<h2>
			The cou is {{counter }}
		</h2>
		<p>
			<input type="button" @click="counter+=50" value="Increment value" name="">
		</p>
	</div>
</template>
<script>
	export default{
		data(){
			return {counter : 0};
		}
	}
</script>