import Parse from 'parse/node';

// Define schema for "users"
export const schemaConserge_Inteligente = async () => {
  // UserInterests Schema
  const userInterestsSchema = new Parse.Schema('UserInterests');
  userInterestsSchema
    .addString('category')
    .addString('subcategory')
    .addString('additionalField1')
    .addString('additionalField2');
  await userInterestsSchema.save();

  // UserLocation Schema
  const userLocationSchema = new Parse.Schema('UserLocation');
  userLocationSchema.addString('country').addString('province');
  await userLocationSchema.save();

  // UserDemographics Schema
  const userDemographicsSchema = new Parse.Schema('UserDemographics');
  userDemographicsSchema.addNumber('age').addString('gender').addPointer('location', 'UserLocation');
  await userDemographicsSchema.save();

  // User Schema
  const userSchema = new Parse.Schema('User');
  userSchema
    .addString('username')
    .addString('password')
    .addString('email')
    .addString('phone')
    .addArray('user_interests')
    .addDate('user_birthdate')
    .addPointer('user_demographics', 'UserDemographics');
  await userSchema.save();

  // Define schema for "comidas"
  const foodSchema = new Parse.Schema('Food');
  foodSchema
    .addString('plate_name')
    .addString('plate_description')
    .addString('plate_img')
    .addString('plate_type')
    .addString('plate_state');
  foodSchema.save();

  // Define schema for "bebidas"
  const drinkSchema = new Parse.Schema('Drink');
  drinkSchema.addString('drink_name').addString('drink_description').addString('drink_img').addString('drink_state');
  drinkSchema.save();

  // Define schema for "cocteles"
  const cocktailSchema = new Parse.Schema('Cocktail');
  cocktailSchema
    .addString('cocktail_name')
    .addString('cocktail_description')
    .addString('cocktail_img')
    .addString('cocktail_state');
  cocktailSchema.save();

  // Define schema for "reservaciones"
  const reservationSchema = new Parse.Schema('Reservation');
  reservationSchema
    .addString('userId')
    .addString('res_type')
    .addString('res_room')
    .addString('res_img')
    .addString('res_date')
    .addNumber('res_adults')
    .addNumber('res_teenagers')
    .addNumber('res_children');
  reservationSchema.save();

  // Define schema for "servicios"
  const serviceSchema = new Parse.Schema('Service');
  serviceSchema
    .addString('service_name')
    .addString('service_type')
    .addString('service_souvenir_name')
    .addString('service_souvenir_descript')
    .addString('service_state');
  serviceSchema.save();

  // Define schema for "eventos"
  const eventSchema = new Parse.Schema('Event');
  eventSchema
    .addString('event_name')
    .addString('event_state')
    .addString('event_activity_name')
    .addString('event_activity_duration')
    .addString('event_activity_descrip')
    .addString('event_space_name')
    .addString('event_space_descrip')
    .addString('event_space_schedule')
    .addString('event_entertainment_name')
    .addString('event_entertainment_descrip')
    .addString('event_entertainment_schedule');
  eventSchema.save();

  const personSchema = new Parse.Schema('Person');
  personSchema.addString('per_user_id').addArray('per_interests');
  personSchema.save();
};
