const app = new Vue({
	el: "#root",
	data: {
		todos: [
			{
				name: "Fare i compiti",
				done: true
			},
			{
				name: "Fare la spesa",
				done: false
			},
			{
				name: "Fare il bucato",
				done: true
			}
		],
		newTodo: ''
	},
	methods: {
		addTodo: function() {
			if ( this.newTodo != "" ) {

				this.todos.push({
					name: this.newTodo,
					done: false
				});
				this.newTodo = '';
			}
		},
		removeTodo: function(todoIndex) {
			this.todos.splice(todoIndex, 1);
		}
	}
});

