import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('application/auth-onboarding', 'Integration | Component | application/auth onboarding', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{application/auth-onboarding}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#application/auth-onboarding}}
      template block text
    {{/application/auth-onboarding}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
