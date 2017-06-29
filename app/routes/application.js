import Ember from 'ember';
import get from 'ember-metal/get';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin,{
session: Ember.inject.service(),
beforeModel: function() {
	const session = get(this,'session');
	if(get(session, 'isAuthenticated')){
		return get(this, 'session').getCurrentUser();
	}
},
	actions: {
		login(){
			let {username, password} = this.getProperties('username', 'passsword');
			this.store.query('user',{
				name: this.controller.get('name')
			}).then((users)=>{
				if(users.get('length') === 1){
					var user = users.objectAt(0);
					this.controllerFor('application').set('user',user);
					this.transitionTo('notebooks', user.get('id'));
				}else{
					console.log('unexpected query result');
				}
			});
		}
	},
	invalidateSession() {
      this.get('session').invalidate();
    }
});
