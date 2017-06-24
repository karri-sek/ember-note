import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addNew: function() {
      let username = this.controller.get('username');
      let password = this.controller.get('password');
      let confirmpassword = this.controller.get('confirmpassword');
      if (typeof username === "undefined" || Ember.isBlank(username)) {
        this.controller.set('message', 'username cannot be empty or null');
      }
			else if(password !== confirmpassword) {
        this.controller.set('message', 'Passwords are not matched!!');
      }
			else {
        var user = this.store.createRecord('user', {
          username: this.controller.get('username'),
          password: this.controller.get('password')
        });
        user.save().then(() => {
          console.log('save successfull');
          this.controller.set('message', 'A new user with name ' + this.controller.get('name') + ' was added');
          this.controller.set('name', null);
        }, function() {
          console.log('save failed');
        });
      }
    }
  }
});
