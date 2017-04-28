import Ember from 'ember';
import layout from '../templates/components/select-year';

export default Ember.Component.extend({
  tagName: 'select',

  layout,

  init () {
    this._super (...arguments);

    const beginYear = new Date ().getFullYear ();

    this.set ('prompt', 'Select a year');
    this.set ('beginYear', beginYear);
  },

  years: Ember.computed ('beginYear', 'endYear', 'span', function () {
    const beginYear = this.get ('beginYear');
    const span = this.get ('span') || 50;
    let endYear = this.get ('endYear');

    if (!Ember.isPresent (endYear)) {
      endYear = beginYear + span;
    }

    let years = [];

    for (let i = beginYear; i <= endYear; ++ i) {
      years.push (i);
    }

    return years;
  })
});
