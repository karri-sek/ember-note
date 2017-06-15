import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
   firstname: [
     validatePresence(true),
     validateLength({min: 4})
   ]
};
