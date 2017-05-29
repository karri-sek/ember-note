import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('notebooks', { path: "notebooks/:user_id"}, function() {
    this.route('notes', { path: "notes/:notebook_id"}, function(){
      this.route('note', { path: "note/:note_id"}, function(){});
    });
  });
  this.route('register');
});

export default Router;
