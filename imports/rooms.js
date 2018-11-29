import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

const Rooms = new Mongo.Collection('rooms');

const RoomSchema = new SimpleSchema({
  roomNumber: { type: Number },
  CheckIn: { type: Date },
  CheckOut: { type: Date },
  tenantId: { type: Number },
  available: { type: Boolean },
  needCleaning: { type: Boolean },
  createdAt: {
    type: Date,
    autoform: {
      type: 'hidden',
      label: false
    },
    defaultValue: new Date()
  }
});
Rooms.attachSchema(RoomSchema);

export default Rooms;
