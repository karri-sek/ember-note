import Ember from 'ember';

export default Ember.Component.extend({
	tagName: "span",
	actions: {
		saveNote: function(){
			this.get('note').save();
		},
		closeNote: function(){
			this.sendAction('close');
		}
	}
});
