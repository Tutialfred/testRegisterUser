import Parse from 'parse/node';

export const schemasLocalizacion_de_recursos_financieros = async () => {
  
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

  // Define schema for "documents"
  const documentsSchema = new Parse.Schema('Document');
  documentsSchema
    .addString('doc_title')
    .addString('doc_derscription')
    .addString('doc_publication_date')
    .addString('doc_original_language')
    .addString('doc_key_terms')
    .addString('doc_type');
  documentsSchema.save();

  // Define schema for "doc_translated"
  const docTranslatedSchema = new Parse.Schema('DocTranslated');
  docTranslatedSchema
    .addString('doct_id_documents')
    .addString('doct_translated_content')
    .addString('doct_destination_language');
  docTranslatedSchema.save();

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
