import Parse from 'parse/node';

export const schemasCreacion_de_contenidos_con_IA = async () => {

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

  // Define schema for "content"
  const contentSchema = new Parse.Schema('Content');
  contentSchema
    .addString('cont_person_id')
    .addString('cont_type_content')
    .addString('cont_content')
    .addString('cont_creation_date');
  contentSchema.save();

  // Define schema for "customizations"
  const customizationsSchema = new Parse.Schema('Customizations');
  customizationsSchema
    .addString('cus_person_id')
    .addString('cus_content_id')
    .addString('cus_configurations');
  customizationsSchema.save();

  // Define schema for "analisis_sentimientos"
  const analisisSentimientosSchema = new Parse.Schema('AnalisisSentimientos');
  analisisSentimientosSchema
    .addString('as_person_id')
    .addString('as_content_id')
    .addString('as_tone')
    .addString('as_emotion')
    .addString('as_analysis_date');
  analisisSentimientosSchema.save();

  // Define schema for "trends_keyword"
  const trendsKeywordSchema = new Parse.Schema('TrendsKeyword');
  trendsKeywordSchema
    .addString('trend_keyword')
    .addBoolean('trend_trends')
    .addString('trend_day_id');
  trendsKeywordSchema.save();

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
