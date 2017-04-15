Vue.component('task-list',{
	
	template : `
		<div>
			<task v-for="task in tasks" :key="task.task"> {{task.task}}</task>
		</div>
	`,

	data(){
		return {
			tasks : [
				{ task: 'go to the store' , complete : true },
				{ task: 'go to the market' , complete : true },
				{ task: 'go to the toilet' , complete : true },
				{ task: 'go to the bathroom' , complete : true },
			]
		};
	}
});

Vue.component('task',{
	
	template : '<li><slot></slot></li>',
 
});

new Vue({
	el : '#root'
});