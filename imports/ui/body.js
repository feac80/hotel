import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Members from '../members';
import Rooms from '../rooms';

import './body.html';
import './members.html';
import './rooms.html';

window.Members = Members;
$(document).ready(function() {
  $('#modal').modal();
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMM Do YYYY');
});

Template.body.onCreated(function() {
  Meteor.subscribe('members.allMembers');
  Meteor.subscribe('rooms.allRooms');
});

Template.members.helpers({
  members: function() {
    return Members.find();
  }
});
Template.rooms.helpers({
  rooms: function() {
    return Rooms.find();
  }
});

// Template.members.(function() {

// });
