import Ember from 'ember';

export default Ember.Route.extend({
	model(){
			return this.store.createRecord('user');
	},
	actions:{
		addNew: function(){
			var user = this.store.createRecord('user',{
				username: this.controller.get('username'),
				password: this.controller.get('password'),
				firstname: this.controller.get('firstname'),
				lastname: this.controller.get('lastname'),
			});
			user.save().then(()=>{
				console.log('save successfull');
				this.controller.set('message','A new user with name '+this.controller.get('name')+' was added');
				this.controller.set('name', null);
			},function(){
				console.log('save failed');
			});
		},
		clean: function(){
			this.controller.set('username', '');
		}
	}
});
