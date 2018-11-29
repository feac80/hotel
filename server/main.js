import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import faker from 'faker';
import Rooms from '../imports/rooms';

import Members from '../imports/members';

Meteor.startup(() => {
  Meteor.publish('members.allMembers', () => {
    return Members.find();
  });

  Meteor.publish('rooms.availableRooms', () => {
    return Rooms.find({ available: true });
  });

  Meteor.publish('rooms.allRooms', () => {
    return Rooms.find();
  });

  if (Rooms.find().count() === 0) {
    _.times(25, roomNumber => {
      roomNumber++;
      const CheckIn = faker.date.past();
      const CheckOut = faker.date.future();
      const tenantId = faker.random.number(40);

      Rooms.insert({
        roomNumber,
        CheckIn,
        CheckOut,
        tenantId,
        available: true,
        needCleaning: true,
        createdAt: new Date()
      });
      return roomNumber;
    });
  }
  console.log(Members.find().count());

  if (Members.find().count() === 0) {
    _.times(20, () => {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const member = faker.internet.userName();
      const street = faker.address.streetAddress();
      const city = faker.address.city();
      const state = faker.address.state();
      const zip = faker.address.zipCode();
      const lastCheckOut = faker.date.past();
      const numberOfNights = faker.random.number(40);
      const preferences = faker.random.words();

      Members.insert({
        firstName,
        lastName,
        member,
        street,
        city,
        state,
        zip,
        lastCheckOut,
        numberOfNights,
        preferences,
        createdAt: new Date()
      });
    });
  }
  // code to run on server at startup
});
