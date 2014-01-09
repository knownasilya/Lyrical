'use strict';

var App = window.App = Ember.Application.create({
  LOG_TRANSITIONS: true, 
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GENERATION: true,

});


Ember.RSVP.configure('onerror', function (error) {
  Ember.Logger.assert(false, error);
});
