import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('select-year', 'Integration | Component | select year', {
  integration: true
});

test ('it renders using default properties', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{select-year}}`);
  assert.equal(this.$().text().trim(), '');
});
