import './main.html';
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.js';

import { Template } from 'meteor/templating';
import './events.html';
import AddEvent from './AddEvent.js';
  import { Events } from '../api/events.js';
  import ListEvents from './ListEvents.js';

Template.events.helpers({
  AddEvent() {
    return AddEvent;
  },

  istEvents() {
    return ListEvents
  },

  events() {
    return Events.find({}).fetch();
  },

  onClick() {
    const instance = Template.instance();
    return () => {
      instance.hasBeenClicked.set(true)
    }
  }
})

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});

