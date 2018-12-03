import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

const Members = new Mongo.Collection('members');
const MemberSchema = new SimpleSchema({
  firstName: {
    type: String,
    label: 'First Name'
  },
  lastName: { type: String },
  member: { type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  lastCheckOut: { type: Date },
  numberOfNights: { type: Number },
  preferences: { type: String },
  createdAt: {
    type: Date,
    autoform: {
      type: 'hidden',
      label: false
    },
    defaultValue: new Date()
  }
});
Members.attachSchema(MemberSchema);

export default Members;
