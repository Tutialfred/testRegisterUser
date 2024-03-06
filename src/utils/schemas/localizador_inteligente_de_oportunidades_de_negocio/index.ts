import Parse from 'parse/node';

export const schemaslocalizador_inteligente_de_oportunidades_de_negocio = async () => {
  // Define schema for "users"
  const userSchema = new Parse.Schema('User');
  userSchema
    .addString('user_timestamp')
    .addString('user_session')
    .addString('user_phone')
    .addString('user_brithdate')
    .addString('user_type_user')
    .addString('user_demographics');
  userSchema.save();

  // Define schema for "person"
  const personSchema = new Parse.Schema('Person');
  personSchema
    .addString('per_user_id')
    .addString('per_interests');
  personSchema.save();

  // Define schema for "subsidies"
  const subsidiesSchema = new Parse.Schema('Subsidy');
  subsidiesSchema
    .addString('sub_code_bdns')
    .addString('sub_administrative_entities')
    .addString('sub_registration_date')
    .addString('sub_title')
    .addString('sub_detail')
    .addString('sub_url');
  subsidiesSchema.save();

  // Define schema for "advices"
  const adviceSchema = new Parse.Schema('Advice');
  adviceSchema
    .addString('adv_interaction_Id')
    .addString('adv_interaction_type')
    .addString('adv_user_id')
    .addString('adv_timestamp')
    .addArray('adv_recommendations')
    .addString('adv_user_feedback');
  adviceSchema.save();
};
