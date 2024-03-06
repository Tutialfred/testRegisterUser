import Parse from 'parse/node';

export const schemaConsultor_virtual_de_belleza = async () => {
  // Define schema for "users"
  const userSchema = new Parse.Schema('User');
  userSchema
    .addObject('user_interests')
    .addString('user_timestamp')
    .addString('user_pass_hash')
    .addString('user_session')
    .addString('user_phone')
    .addString('user_brithdate')
    .addString('user_type_user')
    .addObject('user_demographics');
  userSchema.save();

  // Define schema for "cosmetics"
  const cosmeticSchema = new Parse.Schema('Cosmetic');
  cosmeticSchema
    .addString('cos_label')
    .addString('cos_brand')
    .addString('cos_name')
    .addString('cos_price')
    .addString('cos_rank_Id')
    .addString('cos_ingredients')
    .addObject('cos_skin_tipe');
  cosmeticSchema.save();

  // Define schema for "ranks"
  const rankSchema = new Parse.Schema('Rank');
  rankSchema
    .addString('ran_rank')
    .addString('ran_user_id')
    .addString('ran_cosmetic_id');
  rankSchema.save();

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

  // Define schema for "educational_content"
  const educationalContentSchema = new Parse.Schema('EducationalContent');
  educationalContentSchema
    .addString('con_article_id')
    .addString('con_category')
    .addString('con_title')
    .addString('con_content')
    .addString('con_author')
    .addString('con_timestamp');
  educationalContentSchema.save();

  // Define schema for "beauty_trends"
  const beautyTrendSchema = new Parse.Schema('BeautyTrend');
  beautyTrendSchema
    .addString('tre_trend_id')
    .addString('tre_category_id')
    .addString('tre_description')
    .addString('tre_timestamp');
  beautyTrendSchema.save();

  // Define schema for "category"
  const categorySchema = new Parse.Schema('Category');
  categorySchema
    .addString('cat_name')
    .addString('cat_description');
  categorySchema.save();
};
