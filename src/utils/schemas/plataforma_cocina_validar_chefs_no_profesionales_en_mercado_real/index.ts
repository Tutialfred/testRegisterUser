import Parse from 'parse/node';

export const schemasPlataforma_de_tranzabilidad_de_espacios_esterilizados = async () => {
  // Define schema for "users"
  const userSchema = new Parse.Schema('User');
  userSchema
    .addString('user_interests')
    .addString('user_timestamp')
    .addString('user_pass_hash')
    .addString('user_session')
    .addString('user_phone')
    .addString('user_brithdate')
    .addString('user_type_user')
    .addObject('user_demographics');
  userSchema.save();

  // Define schema for "person"
  const personSchema = new Parse.Schema('Person');
  personSchema
    .addString('per_user_id')
    .addString('per_interests');
  personSchema.save();

  // Define schema for "chefs"
  const chefSchema = new Parse.Schema('Chef');
  chefSchema
    .addString('name')
    .addString('photo')
    .addString('culinary_experience')
    .addString('specialties')
    .addString('geographic_location')
    .addArray('social_networks');
  chefSchema.save();

  // Define schema for "recipes"
  const recipeSchema = new Parse.Schema('Recipe');
  recipeSchema
    .addString('name')
    .addString('ingredients')
    .addString('qualifications')
    .addPointer('chefId', 'Chef')
    .addString('instructions')
    .addString('photos');
  recipeSchema.save();

  // Define schema for "comments"
  const commentSchema = new Parse.Schema('Comment');
  commentSchema
    .addPointer('recipeId', 'Recipe')
    .addPointer('userId', 'User')
    .addString('content');
  commentSchema.save();

  // Define schema for "ratings"
  const ratingSchema = new Parse.Schema('Rating');
  ratingSchema
    .addPointer('recipeId', 'Recipe')
    .addPointer('chefId', 'Chef')
    .addString('rating')
    .addString('rating_details');
  ratingSchema.save();

  // Define schema for "advices"
  const adviceSchema = new Parse.Schema('Advice');
  adviceSchema
    .addString('adv_interaction_Id')
    .addString('adv_interaction_type')
    .addString('adv_person_id')
    .addString('adv_timestamp')
    .addString('adv_recommendations')
    .addString('adv_user_feedback');
  adviceSchema.save();
};
