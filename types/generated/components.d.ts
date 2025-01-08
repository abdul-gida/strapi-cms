import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleComponentsCollections extends Struct.ComponentSchema {
  collectionName: 'components_article_components_collections';
  info: {
    displayName: 'Collections';
  };
  attributes: {
    categoryName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ArticleComponentsImageDescriptionComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_article_components_image_description_components';
  info: {
    description: '';
    displayName: 'Image Description Component';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    imageUrl: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ArticleComponentsImageDescriptions
  extends Struct.ComponentSchema {
  collectionName: 'components_article_components_image_descriptions';
  info: {
    description: '';
    displayName: 'Image Descriptions';
  };
  attributes: {
    content: Schema.Attribute.Component<
      'article-components.image-description-component',
      true
    > &
      Schema.Attribute.Required;
    sectionDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    sectionHeader: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.DefaultTo<'article-grid'>;
  };
}

export interface ArticleComponentsInfoRequired extends Struct.ComponentSchema {
  collectionName: 'components_article_components_info_requireds';
  info: {
    displayName: 'infoRequired';
  };
  attributes: {
    points: Schema.Attribute.Component<'car-insurance.points-two', true>;
    pointsTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ArticleComponentsQuoteBanner extends Struct.ComponentSchema {
  collectionName: 'components_article_components_quote_banners';
  info: {
    description: '';
    displayName: 'quoteBanner';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    quoteBannerImage: Schema.Attribute.Media<'images'>;
    subDescription: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ArticleComponentsRichTextJson extends Struct.ComponentSchema {
  collectionName: 'components_article_components_rich_text_jsons';
  info: {
    description: '';
    displayName: 'richTextJson';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.DefaultTo<'article-block'>;
  };
}

export interface ArticleComponentsVideoUrl extends Struct.ComponentSchema {
  collectionName: 'components_article_components_video_urls';
  info: {
    description: '';
    displayName: 'videoUrl';
  };
  attributes: {
    type: Schema.Attribute.String & Schema.Attribute.DefaultTo<'article-video'>;
    videoUrl: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface BikeInsuranceBanner extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    image: Schema.Attribute.String;
    mobileImage: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BikeInsuranceBenefitsOfCalculating
  extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_benefits_of_calculatings';
  info: {
    displayName: 'benefitsOfCalculating';
  };
  attributes: {
    cards: Schema.Attribute.Component<'bike-insurance.cards-one', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BikeInsuranceBikeInsurance extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_bike_insurances';
  info: {
    displayName: 'Bike Insurance';
  };
  attributes: {};
}

export interface BikeInsuranceBrands extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_brands';
  info: {
    displayName: 'brands';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface BikeInsuranceCards extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    desc: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BikeInsuranceCardsOne extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_cards_ones';
  info: {
    displayName: 'cardsOne';
  };
  attributes: {
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BikeInsuranceCardsThree extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_cards_threes';
  info: {
    displayName: 'cardsThree';
  };
  attributes: {
    highlight: Schema.Attribute.String;
    points: Schema.Attribute.Component<'bike-insurance.points-three', true>;
    titleEnd: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
  };
}

export interface BikeInsuranceCardsTwo extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_cards_twos';
  info: {
    displayName: 'cardsTwo';
  };
  attributes: {
    desc: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BikeInsuranceFactorThatAffect extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_factor_that_affects';
  info: {
    displayName: 'factorThatAffect';
  };
  attributes: {
    banner: Schema.Attribute.Component<'bike-insurance.banner', false>;
    cards: Schema.Attribute.Component<'bike-insurance.cards-two', true>;
  };
}

export interface BikeInsuranceForm extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    description: Schema.Attribute.String;
    getQuoteCtaLabel: Schema.Attribute.String;
    mobileNumberInputLabels: Schema.Attribute.Component<
      'bike-insurance.mobile-number-input-labels',
      false
    >;
    termsAndConditions: Schema.Attribute.String;
    title: Schema.Attribute.Component<'bmi-calculator.title', true>;
    vehicleRegistrationInputLabels: Schema.Attribute.Component<
      'bike-insurance.vehicle-registration-input-labels',
      false
    >;
  };
}

export interface BikeInsuranceIdv extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_idvs';
  info: {
    displayName: 'idv';
  };
  attributes: {
    label: Schema.Attribute.String;
    maxIdvLabel: Schema.Attribute.String;
    minIdvLabel: Schema.Attribute.String;
    recommendedLabel: Schema.Attribute.String;
  };
}

export interface BikeInsuranceMobileNumberInputLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_mobile_number_input_labels';
  info: {
    displayName: 'mobileNumberInputLabels';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    verifyLabel: Schema.Attribute.String;
  };
}

export interface BikeInsuranceModels extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_models';
  info: {
    displayName: 'models';
  };
  attributes: {
    bikeLogo: Schema.Attribute.String;
    bikeModel: Schema.Attribute.String;
  };
}

export interface BikeInsurancePlanType extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_plan_types';
  info: {
    displayName: 'planType';
  };
  attributes: {
    comprehensiveLabel: Schema.Attribute.String;
    label: Schema.Attribute.String;
    thirdPartyLabel: Schema.Attribute.String;
  };
}

export interface BikeInsurancePoints extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_points';
  info: {
    displayName: 'points';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface BikeInsurancePointsThree extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_points_threes';
  info: {
    displayName: 'pointsThree';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface BikeInsurancePolicyDetails extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_policy_details';
  info: {
    displayName: 'policyDetails';
  };
  attributes: {
    idv: Schema.Attribute.Component<'bike-insurance.idv', false>;
    planType: Schema.Attribute.Component<'bike-insurance.plan-type', false>;
    proceedToBuyCtaLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
    totalPremiumLabel: Schema.Attribute.String;
    vehicleDetails: Schema.Attribute.Component<
      'bike-insurance.vehicle-details',
      false
    >;
  };
}

export interface BikeInsurancePopularBrands extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_popular_brands';
  info: {
    displayName: 'popularBrands';
  };
  attributes: {
    brands: Schema.Attribute.Component<'bike-insurance.brands', true>;
    titleEnd: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
  };
}

export interface BikeInsurancePopularModels extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_popular_models';
  info: {
    displayName: 'popularModels';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String;
    mobileBackgroundImage: Schema.Attribute.String;
    models: Schema.Attribute.Component<'bike-insurance.models', true>;
    titleEnd: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
  };
}

export interface BikeInsuranceTipsAndTricks extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_tips_and_tricks';
  info: {
    displayName: 'tipsAndTricks';
  };
  attributes: {
    cards: Schema.Attribute.Component<'bike-insurance.cards-three', true>;
    title: Schema.Attribute.String;
  };
}

export interface BikeInsuranceVehicleDetails extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_vehicle_details';
  info: {
    displayName: 'vehicleDetails';
  };
  attributes: {
    bikeUrl: Schema.Attribute.String;
    electricVehicleImageUrl: Schema.Attribute.String;
    normalVehicleImageUrl: Schema.Attribute.String;
  };
}

export interface BikeInsuranceVehicleRegistrationInputLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_vehicle_registration_input_labels';
  info: {
    displayName: 'vehicleRegistrationInputLabels';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface BikeInsuranceWhatIsBikeInsurance
  extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_what_is_bike_insurances';
  info: {
    displayName: 'whatIsBikeInsurance';
  };
  attributes: {
    image: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BikeInsuranceWhyIsItImportant extends Struct.ComponentSchema {
  collectionName: 'components_bike_insurance_why_is_it_importants';
  info: {
    displayName: 'whyIsItImportant';
  };
  attributes: {
    cards: Schema.Attribute.Component<'bike-insurance.cards', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorBanner extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    bgImage: Schema.Attribute.String;
    mobileBgImage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorBmiCalculator extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_bmi_calculators';
  info: {
    displayName: 'Bmi Calculator';
  };
  attributes: {};
}

export interface BmiCalculatorBmiClassificationCardLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_bmi_classification_card_labels';
  info: {
    displayName: 'bmiClassificationCardLabels';
  };
  attributes: {
    description: Schema.Attribute.String;
    logo: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorBmiContent extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_bmi_contents';
  info: {
    description: '';
    displayName: 'bmiContent';
  };
  attributes: {
    formula: Schema.Attribute.Component<'bmi-calculator.formula', false>;
    kids: Schema.Attribute.Component<'bmi-calculator.formula', true>;
  };
}

export interface BmiCalculatorBmiDistribution extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_bmi_distributions';
  info: {
    displayName: 'bmiDistribution';
  };
  attributes: {
    color: Schema.Attribute.String;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface BmiCalculatorBmiForWomen extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_bmi_for_women';
  info: {
    displayName: 'bmiForWomen';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorBmiValues extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_bmi_values';
  info: {
    description: '';
    displayName: 'bmiValues';
  };
  attributes: {
    bmiContent: Schema.Attribute.Component<'bmi-calculator.bmi-content', false>;
    bmiFormula: Schema.Attribute.String;
    bmiFormulaMobile: Schema.Attribute.String;
    bmiScale: Schema.Attribute.String;
    descImage: Schema.Attribute.String;
    kidImage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorBodyMassCardLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_body_mass_card_labels';
  info: {
    displayName: 'bodyMassCardLabels';
  };
  attributes: {
    healthBmiLabel: Schema.Attribute.String;
    name: Schema.Attribute.String;
    unit: Schema.Attribute.String;
  };
}

export interface BmiCalculatorCalcCalorie extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_calc_calories';
  info: {
    displayName: 'calcCalorie';
  };
  attributes: {
    bgGradient: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorCalcCards extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_calc_cards';
  info: {
    displayName: 'calcCards';
  };
  attributes: {
    calcBodyFat: Schema.Attribute.Component<
      'bmi-calculator.calc-calorie',
      true
    >;
    calcCalorie: Schema.Attribute.Component<
      'bmi-calculator.calc-calorie',
      false
    >;
  };
}

export interface BmiCalculatorCalculateBmi extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_calculate_bmis';
  info: {
    displayName: 'calculateBmi';
  };
  attributes: {
    desc: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorCards extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    desc: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorCardsTwo extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_cards_twos';
  info: {
    displayName: 'cardsTwo';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    points: Schema.Attribute.Component<'bmi-calculator.points-three', true>;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorDesc extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_descs';
  info: {
    displayName: 'desc';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface BmiCalculatorDividerOne extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_divider_ones';
  info: {
    displayName: 'dividerOne';
  };
  attributes: {};
}

export interface BmiCalculatorForm extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    calculatorCtaLabel: Schema.Attribute.String;
    heightLabel: Schema.Attribute.Component<
      'bmi-calculator.height-label',
      false
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    weightLabel: Schema.Attribute.Component<
      'bmi-calculator.weight-label',
      false
    >;
  };
}

export interface BmiCalculatorFormula extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_formulas';
  info: {
    displayName: 'formula';
  };
  attributes: {
    bmiDistribution: Schema.Attribute.Component<
      'bmi-calculator.bmi-distribution',
      true
    >;
    desc: Schema.Attribute.Component<'bmi-calculator.desc', true>;
    interpretationDesc: Schema.Attribute.String;
    interpretationTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorHeartRisk extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_heart_risks';
  info: {
    displayName: 'heartRisk';
  };
  attributes: {
    icon: Schema.Attribute.String;
    overWeight: Schema.Attribute.Component<'bmi-calculator.over-weight', false>;
    title: Schema.Attribute.String;
    underWeight: Schema.Attribute.Component<
      'bmi-calculator.over-weight',
      false
    >;
  };
}

export interface BmiCalculatorHeightLabel extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_height_labels';
  info: {
    displayName: 'heightLabel';
  };
  attributes: {
    placeHolder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorHowReliableIsBmi extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_how_reliable_is_bmis';
  info: {
    description: '';
    displayName: 'howReliableIsBmi';
  };
  attributes: {
    banner: Schema.Attribute.Component<'bmi-calculator.banner', false>;
    bottomCta: Schema.Attribute.String;
    bottomCtaLink: Schema.Attribute.String;
    desc: Schema.Attribute.Component<'bmi-calculator.desc', true>;
    icon: Schema.Attribute.String;
  };
}

export interface BmiCalculatorIdealBmi extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_ideal_bmis';
  info: {
    displayName: 'idealBmi';
  };
  attributes: {
    bmiForMen: Schema.Attribute.Component<'bmi-calculator.bmi-for-women', true>;
    bmiForWomen: Schema.Attribute.Component<
      'bmi-calculator.bmi-for-women',
      false
    >;
    titleEnd: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
  };
}

export interface BmiCalculatorIsYourHomeProtected
  extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_is_your_home_protecteds';
  info: {
    displayName: 'isYourHomeProtected';
  };
  attributes: {
    cta: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorLimitationOfBmi extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_limitation_of_bmis';
  info: {
    displayName: 'limitationOfBmi';
  };
  attributes: {
    cards: Schema.Attribute.Component<'bmi-calculator.cards-two', true>;
    desc: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorOptimaSecurePlanCardLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_optima_secure_plan_card_labels';
  info: {
    description: '';
    displayName: 'optimaSecurePlanCardLabels';
  };
  attributes: {
    calculateCtaLabel: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorOverWeight extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_over_weights';
  info: {
    displayName: 'overWeight';
  };
  attributes: {
    desc: Schema.Attribute.String;
    image: Schema.Attribute.String;
    points: Schema.Attribute.Component<'bmi-calculator.points', true>;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorOverviewOfBmi extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_overview_of_bmis';
  info: {
    displayName: 'overviewOfBmi';
  };
  attributes: {
    cards: Schema.Attribute.Component<'bmi-calculator.cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorPoints extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_points';
  info: {
    displayName: 'points';
  };
  attributes: {};
}

export interface BmiCalculatorPointsThree extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_points_threes';
  info: {
    displayName: 'pointsThree';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface BmiCalculatorRelationBwBmiAndInsurance
  extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_relation_bw_bmi_and_insurances';
  info: {
    displayName: 'relationBwBmiAndInsurance';
  };
  attributes: {
    cards: Schema.Attribute.Component<'bmi-calculator.cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface BmiCalculatorReportLabels extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_report_labels';
  info: {
    description: '';
    displayName: 'reportLabels';
  };
  attributes: {
    bmiClassificationCardLabels: Schema.Attribute.Component<
      'bmi-calculator.bmi-classification-card-labels',
      false
    >;
    bodyMassCardLabels: Schema.Attribute.Component<
      'bmi-calculator.body-mass-card-labels',
      false
    >;
    optimaSecurePlanCardLabels: Schema.Attribute.Component<
      'bmi-calculator.optima-secure-plan-card-labels',
      false
    >;
  };
}

export interface BmiCalculatorTalkToExpert extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_talk_to_experts';
  info: {
    displayName: 'talkToExpert';
  };
  attributes: {
    label: Schema.Attribute.String;
    mobileNo: Schema.Attribute.String;
  };
}

export interface BmiCalculatorTitle extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    t1: Schema.Attribute.String;
    t2: Schema.Attribute.String;
  };
}

export interface BmiCalculatorWeightLabel extends Struct.ComponentSchema {
  collectionName: 'components_bmi_calculator_weight_labels';
  info: {
    displayName: 'weightLabel';
  };
  attributes: {
    placeHolder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceBrands extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_brands';
  info: {
    displayName: 'brands';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface CarInsuranceBreadCrumbs extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_bread_crumbs';
  info: {
    displayName: 'breadCrumbs';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface CarInsuranceBulletPoints extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_bullet_points';
  info: {
    description: '';
    displayName: 'bulletPoints';
  };
  attributes: {
    points: Schema.Attribute.Component<'car-insurance.single-points', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceBuyRenewSection extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_buy_renew_sections';
  info: {
    displayName: 'buyRenewSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'car-insurance.cards-four', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceCarInsurance extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_car_insurances';
  info: {
    displayName: 'Car Insurance';
  };
  attributes: {};
}

export interface CarInsuranceCarInsuranceCalc extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_car_insurance_calcs';
  info: {
    displayName: 'carInsuranceCalc';
  };
  attributes: {
    infoSection: Schema.Attribute.Component<
      'car-insurance.info-section',
      false
    >;
    noteSection: Schema.Attribute.Component<
      'car-insurance.note-section-one',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceCarInsuranceDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_car_insurance_details';
  info: {
    displayName: 'carInsuranceDetails';
  };
  attributes: {
    descriptions: Schema.Attribute.String;
    title: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface CarInsuranceCarInsuranceNote extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_car_insurance_notes';
  info: {
    displayName: 'carInsuranceNote';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.String;
  };
}

export interface CarInsuranceCarInsurancePremiumDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_car_insurance_premium_details';
  info: {
    displayName: 'carInsurancePremiumDetails';
  };
  attributes: {
    premiumCalculatorDetails: Schema.Attribute.Component<
      'car-insurance.premium-calculator-details',
      false
    >;
    premiumDetailCardData: Schema.Attribute.Component<
      'car-insurance.premium-detail-card-data',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceCarInsuranceRates extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_car_insurance_rates';
  info: {
    displayName: 'carInsuranceRates';
  };
  attributes: {
    infoSection: Schema.Attribute.Component<
      'car-insurance.info-section-three',
      false
    >;
    noteSection: Schema.Attribute.Component<
      'car-insurance.note-section-three',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceCards extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    desc: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceCardsFour extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_cards_fours';
  info: {
    displayName: 'cardsFour';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceCardsOne extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_cards_ones';
  info: {
    displayName: 'cardsOne';
  };
  attributes: {
    desc: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceCardsTwo extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_cards_twos';
  info: {
    displayName: 'cardsTwo';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceCityLabel extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_city_labels';
  info: {
    displayName: 'cityLabel';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface CarInsuranceComparePolicySection
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_compare_policy_sections';
  info: {
    displayName: 'comparePolicySection';
  };
  attributes: {
    tableData: Schema.Attribute.Component<'car-insurance.table-data', false>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceDividerOne extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_divider_ones';
  info: {
    displayName: 'dividerOne';
  };
  attributes: {
    cta: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceDividerOneOne extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_divider_one_ones';
  info: {
    displayName: 'dividerOneOne';
  };
  attributes: {
    cta: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceDividerThree extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_divider_threes';
  info: {
    displayName: 'dividerThree';
  };
  attributes: {
    cta: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceDividerTwo extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_divider_twos';
  info: {
    displayName: 'dividerTwo';
  };
  attributes: {
    cta: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceFactors extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_factors';
  info: {
    displayName: 'factors';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceFactorsBuyingCarInsuranceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_factors_buying_car_insurance_sections';
  info: {
    description: '';
    displayName: 'factorsBuyingCarInsuranceSection';
  };
  attributes: {
    desc1: Schema.Attribute.String;
    desc2: Schema.Attribute.String;
    noteSection: Schema.Attribute.Component<
      'car-insurance.note-section',
      false
    >;
    points: Schema.Attribute.Component<'car-insurance.points-three', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceFactorsEffectingCarInsuranceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_factors_effecting_car_insurance_sections';
  info: {
    displayName: 'factorsEffectingCarInsuranceSection';
  };
  attributes: {
    factors: Schema.Attribute.Component<'car-insurance.factors', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceForm extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_forms';
  info: {
    description: '';
    displayName: 'form';
  };
  attributes: {
    badgeLabel: Schema.Attribute.String;
    cityLabel: Schema.Attribute.Component<'car-insurance.city-label', false>;
    description: Schema.Attribute.String;
    getAQuoteCtaLabel: Schema.Attribute.String;
    mobileNoLabels: Schema.Attribute.Component<
      'car-insurance.mobile-no-labels',
      false
    >;
    termsAndConditions: Schema.Attribute.Component<
      'car-insurance.terms-and-conditions',
      false
    >;
    title: Schema.Attribute.String;
    vehicleRegistrationNoLabels: Schema.Attribute.Component<
      'car-insurance.city-label',
      true
    >;
  };
}

export interface CarInsuranceHeaders extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_headers';
  info: {
    displayName: 'headers';
  };
  attributes: {
    string: Schema.Attribute.String;
  };
}

export interface CarInsuranceHeadersOne extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_headers_ones';
  info: {
    displayName: 'headersOne';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface CarInsuranceHowToCalculateInsuranceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_how_to_calculate_insurance_sections';
  info: {
    displayName: 'howToCalculateInsuranceSection';
  };
  attributes: {
    description: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'car-insurance.steps', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceHowToFileClaimSection
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_how_to_file_claim_sections';
  info: {
    displayName: 'howToFileClaimSection';
  };
  attributes: {
    points: Schema.Attribute.Component<'car-insurance.points-four', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceIdv extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_idvs';
  info: {
    displayName: 'idv';
  };
  attributes: {
    label: Schema.Attribute.String;
    maxIdvLabel: Schema.Attribute.String;
    minIdvLabel: Schema.Attribute.String;
    recommendedLabel: Schema.Attribute.String;
  };
}

export interface CarInsuranceInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_info_sections';
  info: {
    description: '';
    displayName: 'infoSection';
  };
  attributes: {
    NewCars: Schema.Attribute.Component<'car-insurance.new-cars', false>;
    OldCars: Schema.Attribute.Component<'car-insurance.old-cars', false>;
    SecondhandCars: Schema.Attribute.Component<'car-insurance.old-cars', true>;
  };
}

export interface CarInsuranceInfoSectionThree extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_info_section_threes';
  info: {
    description: '';
    displayName: 'infoSectionThree';
  };
  attributes: {
    longTerm: Schema.Attribute.Component<'car-insurance.third-party', false>;
    thirdParty: Schema.Attribute.Component<'car-insurance.third-party', false>;
    thirdPartyElectric: Schema.Attribute.Component<
      'car-insurance.third-party',
      false
    >;
  };
}

export interface CarInsuranceInsuranceAddOns extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_insurance_add_ons';
  info: {
    displayName: 'insuranceAddOns';
  };
  attributes: {
    cards: Schema.Attribute.Component<'car-insurance.cards-one', true>;
    rightIcon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceKeyFeatures extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_key_features';
  info: {
    displayName: 'keyFeatures';
  };
  attributes: {
    points: Schema.Attribute.Component<'car-insurance.points-one', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceMobileNoLabels extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_mobile_no_labels';
  info: {
    displayName: 'mobileNoLabels';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    verifyCtaLabel: Schema.Attribute.String;
  };
}

export interface CarInsuranceModels extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_models';
  info: {
    displayName: 'models';
  };
  attributes: {
    logo: Schema.Attribute.String;
    model: Schema.Attribute.String;
  };
}

export interface CarInsuranceNewCars extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_new_cars';
  info: {
    description: '';
    displayName: 'New Cars';
  };
  attributes: {
    desc: Schema.Attribute.String;
    points: Schema.Attribute.Component<'car-insurance.points-six', true>;
  };
}

export interface CarInsuranceNoteSection extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_note_sections';
  info: {
    displayName: 'noteSection';
  };
  attributes: {
    cta: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceNoteSectionOne extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_note_section_ones';
  info: {
    displayName: 'noteSectionOne';
  };
  attributes: {
    points: Schema.Attribute.Component<'car-insurance.points-five', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceNoteSectionThree extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_note_section_threes';
  info: {
    displayName: 'noteSectionThree';
  };
  attributes: {
    desc: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceOldCars extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_old_cars';
  info: {
    displayName: 'Old Cars';
  };
  attributes: {
    desc: Schema.Attribute.String;
    points: Schema.Attribute.Component<'car-insurance.points', true>;
  };
}

export interface CarInsurancePlanType extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_plan_types';
  info: {
    displayName: 'planType';
  };
  attributes: {
    comprehensiveLabel: Schema.Attribute.String;
    label: Schema.Attribute.String;
    thirdPartyLabel: Schema.Attribute.String;
  };
}

export interface CarInsurancePoints extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_points';
  info: {
    description: '';
    displayName: 'points';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface CarInsurancePointsFive extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_points_fives';
  info: {
    displayName: 'pointsFive';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface CarInsurancePointsFour extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_points_fours';
  info: {
    displayName: 'pointsFour';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface CarInsurancePointsOne extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_points_ones';
  info: {
    displayName: 'pointsOne';
  };
  attributes: {
    desc: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsurancePointsSeven extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_points_sevens';
  info: {
    displayName: 'pointsSeven';
  };
  attributes: {
    desc: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsurancePointsSix extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_points_sixes';
  info: {
    displayName: 'pointsSix';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface CarInsurancePointsThree extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_points_threes';
  info: {
    displayName: 'pointsThree';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface CarInsurancePointsTwo extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_points_twos';
  info: {
    displayName: 'pointsTwo';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface CarInsurancePolicyDetails extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_policy_details';
  info: {
    description: '';
    displayName: 'policyDetails';
  };
  attributes: {
    idv: Schema.Attribute.Component<'car-insurance.idv', false>;
    planType: Schema.Attribute.Component<'car-insurance.plan-type', false>;
    proceedToBuyCtaLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
    totalPremiumLabel: Schema.Attribute.String;
    vehicleDetails: Schema.Attribute.Component<
      'car-insurance.vehicle-details',
      false
    >;
  };
}

export interface CarInsurancePopularBrands extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_popular_brands';
  info: {
    displayName: 'popularBrands';
  };
  attributes: {
    brands: Schema.Attribute.Component<'car-insurance.brands', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsurancePopularModels extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_popular_models';
  info: {
    displayName: 'popularModels';
  };
  attributes: {
    bgImage: Schema.Attribute.String;
    mobileBgImage: Schema.Attribute.String;
    models: Schema.Attribute.Component<'car-insurance.models', true>;
    titleEnd: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
  };
}

export interface CarInsurancePremiumCalculatorDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_premium_calculator_details';
  info: {
    displayName: 'premiumCalculatorDetails';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsurancePremiumDetailCardData
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_premium_detail_card_data';
  info: {
    displayName: 'premiumDetailCardData';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceReducePremiumSection
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_reduce_premium_sections';
  info: {
    description: '';
    displayName: 'reducePremiumSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'car-insurance.cards-two', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceRows extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_rows';
  info: {
    displayName: 'rows';
  };
  attributes: {
    comparisonCover: Schema.Attribute.String;
    thirdPartyCover: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceRowsOne extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_rows_ones';
  info: {
    displayName: 'rowsOne';
  };
  attributes: {
    policyTerm: Schema.Attribute.String;
    premiumAmount: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceSinglePoints extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_single_points';
  info: {
    displayName: 'singlePoints';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface CarInsuranceSteps extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface CarInsuranceTableData extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_table_data';
  info: {
    displayName: 'tableData';
  };
  attributes: {
    headers: Schema.Attribute.Component<'car-insurance.headers', true>;
    rows: Schema.Attribute.Component<'car-insurance.rows', true>;
  };
}

export interface CarInsuranceTalkToExpert extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_talk_to_experts';
  info: {
    displayName: 'talkToExpert';
  };
  attributes: {
    label: Schema.Attribute.String;
    mobileNo: Schema.Attribute.String;
  };
}

export interface CarInsuranceTermsAndConditions extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_terms_and_conditions';
  info: {
    displayName: 'termsAndConditions';
  };
  attributes: {
    condition1: Schema.Attribute.String;
    condition2: Schema.Attribute.String;
  };
}

export interface CarInsuranceThirdParty extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_third_parties';
  info: {
    displayName: 'thirdParty';
  };
  attributes: {
    headers: Schema.Attribute.Component<'car-insurance.headers-one', true>;
    rows: Schema.Attribute.Component<'car-insurance.rows-one', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceTitle extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    t1: Schema.Attribute.String;
    t2: Schema.Attribute.String;
  };
}

export interface CarInsuranceTrustMarkers extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_trust_markers';
  info: {
    displayName: 'trustMarkers';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceTypesOfCarInsurance
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_types_of_car_insurances';
  info: {
    displayName: 'typesOfCarInsurance';
  };
  attributes: {
    points: Schema.Attribute.Component<'car-insurance.points-seven', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarInsuranceVehicleDetails extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_vehicle_details';
  info: {
    displayName: 'vehicleDetails';
  };
  attributes: {
    carUrl: Schema.Attribute.String;
    electricVehicleImageUrl: Schema.Attribute.String;
    normalVehicleImageUrl: Schema.Attribute.String;
  };
}

export interface CarInsuranceVehicleRegistrationNoLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_vehicle_registration_no_labels';
  info: {
    displayName: 'vehicleRegistrationNoLabels';
  };
  attributes: {};
}

export interface CarInsuranceWhyPremiumCalculatorSection
  extends Struct.ComponentSchema {
  collectionName: 'components_car_insurance_why_premium_calculator_sections';
  info: {
    description: '';
    displayName: 'whyPremiumCalculatorSection';
  };
  attributes: {
    backgroundImageUrl: Schema.Attribute.String;
    bulletPoints: Schema.Attribute.Component<
      'car-insurance.bullet-points',
      false
    >;
    cards: Schema.Attribute.Component<'car-insurance.cards', true>;
    infoRequired: Schema.Attribute.Component<
      'article-components.info-required',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface HealthInsuranceAgeLabels extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_age_labels';
  info: {
    displayName: 'ageLabels';
  };
  attributes: {
    placeholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthInsuranceBreadCrumbs extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_bread_crumbs';
  info: {
    displayName: 'breadCrumbs';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface HealthInsuranceContent extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_contents';
  info: {
    description: '';
    displayName: 'content';
  };
  attributes: {
    breadCrumbs: Schema.Attribute.Component<
      'health-insurance.bread-crumbs',
      true
    >;
    generalInsuranceStepperDetails: Schema.Attribute.Component<
      'health-insurance.general-insurance-stepper-details',
      false
    >;
    healthCalculatorPremiumDetails: Schema.Attribute.Component<
      'health-insurance.health-calculator-premium-details',
      false
    >;
    medicalInsurancePremiumDetails: Schema.Attribute.Component<
      'health-insurance.medical-insurance-premium-details',
      false
    >;
    relatedArticles: Schema.Attribute.Component<
      'health-insurance.related-articles',
      false
    >;
    relatedVideos: Schema.Attribute.Component<
      'health-insurance.related-videos',
      false
    >;
  };
}

export interface HealthInsuranceCoverageLabel extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_coverage_labels';
  info: {
    displayName: 'coverageLabel';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface HealthInsuranceDeductibleLabel extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_deductible_labels';
  info: {
    displayName: 'deductibleLabel';
  };
  attributes: {};
}

export interface HealthInsuranceForm extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    ageLabels: Schema.Attribute.Component<'health-insurance.age-labels', false>;
    badgeLabel: Schema.Attribute.String;
    description: Schema.Attribute.String;
    mobileNumberLabel: Schema.Attribute.Component<
      'health-insurance.mobile-number-label',
      false
    >;
    pinCodeLabels: Schema.Attribute.Component<
      'health-insurance.pin-code-labels',
      false
    >;
    termsAndConditions: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewPlansCtaLabel: Schema.Attribute.String;
  };
}

export interface HealthInsuranceGeneralInsuranceStepperDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_general_insurance_stepper_details';
  info: {
    description: '';
    displayName: 'generalInsuranceStepperDetails';
  };
  attributes: {
    stepperData: Schema.Attribute.Component<
      'health-insurance.stepper-data',
      true
    >;
    titleEnd: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
  };
}

export interface HealthInsuranceHealthCalculatorPremiumDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_health_calculator_premium_details';
  info: {
    displayName: 'healthCalculatorPremiumDetails';
  };
  attributes: {
    description: Schema.Attribute.String;
    titleEnd: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
  };
}

export interface HealthInsuranceHealthCoverage extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_health_coverages';
  info: {
    description: '';
    displayName: 'healthCoverage';
  };
  attributes: {
    coverageLabel: Schema.Attribute.Component<
      'health-insurance.coverage-label',
      false
    >;
    label: Schema.Attribute.String;
    preferredLabel: Schema.Attribute.String;
    viewBenefits: Schema.Attribute.String;
  };
}

export interface HealthInsuranceHealthInsurance extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_health_insurances';
  info: {
    displayName: 'healthInsurance';
  };
  attributes: {};
}

export interface HealthInsuranceMedicalInsurancePremiumDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_medical_insurance_premium_details';
  info: {
    displayName: 'medicalInsurancePremiumDetails';
  };
  attributes: {
    description: Schema.Attribute.Text;
    premiumCtaLabel: Schema.Attribute.String;
    titleEnd: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
  };
}

export interface HealthInsuranceMobileNumberLabel
  extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_mobile_number_labels';
  info: {
    displayName: 'mobileNumberLabel';
  };
  attributes: {
    placeholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
    verifyCtaLabel: Schema.Attribute.String;
  };
}

export interface HealthInsurancePinCodeLabels extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_pin_code_labels';
  info: {
    displayName: 'pinCodeLabels';
  };
  attributes: {
    placeholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthInsurancePoints extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_points';
  info: {
    displayName: 'points';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HealthInsurancePolicyDetails extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_policy_details';
  info: {
    description: '';
    displayName: 'policyDetails';
  };
  attributes: {
    deductibleLabel: Schema.Attribute.String;
    healthCoverage: Schema.Attribute.Component<
      'health-insurance.health-coverage',
      false
    >;
    proceedToBuyCtaLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
    totalPremiumLabel: Schema.Attribute.String;
  };
}

export interface HealthInsuranceRelatedArticles extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_related_articles';
  info: {
    displayName: 'relatedArticles';
  };
  attributes: {
    title: Schema.Attribute.String;
    viewAll: Schema.Attribute.String;
  };
}

export interface HealthInsuranceRelatedVideos extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_related_videos';
  info: {
    displayName: 'relatedVideos';
  };
  attributes: {
    titleEnd: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
    videos: Schema.Attribute.Component<'health-insurance.videos', true>;
  };
}

export interface HealthInsuranceStepperCardData extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_stepper_card_data';
  info: {
    displayName: 'stepperCardData';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthInsuranceStepperData extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_stepper_data';
  info: {
    displayName: 'stepperData';
  };
  attributes: {
    stepperCardData: Schema.Attribute.Component<
      'health-insurance.stepper-card-data',
      false
    >;
    stepperLogo: Schema.Attribute.String;
  };
}

export interface HealthInsuranceTalkToExpert extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_talk_to_experts';
  info: {
    displayName: 'talkToExpert';
  };
  attributes: {
    label: Schema.Attribute.String;
    mobileNo: Schema.Attribute.String;
  };
}

export interface HealthInsuranceTitle extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    t1: Schema.Attribute.String;
    t2: Schema.Attribute.String;
  };
}

export interface HealthInsuranceVideos extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_videos';
  info: {
    displayName: 'videos';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ImageDescriptionsBanner extends Struct.ComponentSchema {
  collectionName: 'components_image_descriptions_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    image: Schema.Attribute.Component<'shared.image', true>;
    mobileImage: Schema.Attribute.Component<'shared.mobile-image', true>;
    title: Schema.Attribute.Component<'shared.title', true>;
  };
}

export interface ImageDescriptionsContent extends Struct.ComponentSchema {
  collectionName: 'components_image_descriptions_contents';
  info: {
    description: '';
    displayName: 'content';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    imageUrl: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tittle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImageDescriptionsImageDescriptions
  extends Struct.ComponentSchema {
  collectionName: 'components_image_descriptions_image_descriptions';
  info: {
    description: '';
    displayName: 'imageDescriptions';
  };
  attributes: {
    content: Schema.Attribute.Component<'image-descriptions.content', true>;
    sectionDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    sectionHeader: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LoginClaimList extends Struct.ComponentSchema {
  collectionName: 'components_login_claim_lists';
  info: {
    displayName: 'claimList';
  };
  attributes: {
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetaFieldsMetaFields extends Struct.ComponentSchema {
  collectionName: 'components_meta_fields_meta_fields';
  info: {
    description: '';
    displayName: 'Meta Fields';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    ogSiteName: Schema.Attribute.String;
    ogTitle: Schema.Attribute.String;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedBottom extends Struct.ComponentSchema {
  collectionName: 'components_shared_bottoms';
  info: {
    displayName: 'bottom';
  };
  attributes: {
    bottomCards: Schema.Attribute.Component<'shared.bottom-cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBottomCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_bottom_cards';
  info: {
    displayName: 'bottomCards';
  };
  attributes: {
    cta: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.steps', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedContents extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    displayName: 'contents';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedMobileImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_mobile_images';
  info: {
    displayName: 'mobileImage';
  };
  attributes: {
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedRichTextJson extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_text_json_s';
  info: {
    description: '';
    displayName: 'Rich text (json)';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    media: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface SharedSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    step: Schema.Attribute.String;
  };
}

export interface SharedTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    center: Schema.Attribute.String;
    left: Schema.Attribute.String;
    right: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article-components.collections': ArticleComponentsCollections;
      'article-components.image-description-component': ArticleComponentsImageDescriptionComponent;
      'article-components.image-descriptions': ArticleComponentsImageDescriptions;
      'article-components.info-required': ArticleComponentsInfoRequired;
      'article-components.quote-banner': ArticleComponentsQuoteBanner;
      'article-components.rich-text-json': ArticleComponentsRichTextJson;
      'article-components.video-url': ArticleComponentsVideoUrl;
      'bike-insurance.banner': BikeInsuranceBanner;
      'bike-insurance.benefits-of-calculating': BikeInsuranceBenefitsOfCalculating;
      'bike-insurance.bike-insurance': BikeInsuranceBikeInsurance;
      'bike-insurance.brands': BikeInsuranceBrands;
      'bike-insurance.cards': BikeInsuranceCards;
      'bike-insurance.cards-one': BikeInsuranceCardsOne;
      'bike-insurance.cards-three': BikeInsuranceCardsThree;
      'bike-insurance.cards-two': BikeInsuranceCardsTwo;
      'bike-insurance.factor-that-affect': BikeInsuranceFactorThatAffect;
      'bike-insurance.form': BikeInsuranceForm;
      'bike-insurance.idv': BikeInsuranceIdv;
      'bike-insurance.mobile-number-input-labels': BikeInsuranceMobileNumberInputLabels;
      'bike-insurance.models': BikeInsuranceModels;
      'bike-insurance.plan-type': BikeInsurancePlanType;
      'bike-insurance.points': BikeInsurancePoints;
      'bike-insurance.points-three': BikeInsurancePointsThree;
      'bike-insurance.policy-details': BikeInsurancePolicyDetails;
      'bike-insurance.popular-brands': BikeInsurancePopularBrands;
      'bike-insurance.popular-models': BikeInsurancePopularModels;
      'bike-insurance.tips-and-tricks': BikeInsuranceTipsAndTricks;
      'bike-insurance.vehicle-details': BikeInsuranceVehicleDetails;
      'bike-insurance.vehicle-registration-input-labels': BikeInsuranceVehicleRegistrationInputLabels;
      'bike-insurance.what-is-bike-insurance': BikeInsuranceWhatIsBikeInsurance;
      'bike-insurance.why-is-it-important': BikeInsuranceWhyIsItImportant;
      'bmi-calculator.banner': BmiCalculatorBanner;
      'bmi-calculator.bmi-calculator': BmiCalculatorBmiCalculator;
      'bmi-calculator.bmi-classification-card-labels': BmiCalculatorBmiClassificationCardLabels;
      'bmi-calculator.bmi-content': BmiCalculatorBmiContent;
      'bmi-calculator.bmi-distribution': BmiCalculatorBmiDistribution;
      'bmi-calculator.bmi-for-women': BmiCalculatorBmiForWomen;
      'bmi-calculator.bmi-values': BmiCalculatorBmiValues;
      'bmi-calculator.body-mass-card-labels': BmiCalculatorBodyMassCardLabels;
      'bmi-calculator.calc-calorie': BmiCalculatorCalcCalorie;
      'bmi-calculator.calc-cards': BmiCalculatorCalcCards;
      'bmi-calculator.calculate-bmi': BmiCalculatorCalculateBmi;
      'bmi-calculator.cards': BmiCalculatorCards;
      'bmi-calculator.cards-two': BmiCalculatorCardsTwo;
      'bmi-calculator.desc': BmiCalculatorDesc;
      'bmi-calculator.divider-one': BmiCalculatorDividerOne;
      'bmi-calculator.form': BmiCalculatorForm;
      'bmi-calculator.formula': BmiCalculatorFormula;
      'bmi-calculator.heart-risk': BmiCalculatorHeartRisk;
      'bmi-calculator.height-label': BmiCalculatorHeightLabel;
      'bmi-calculator.how-reliable-is-bmi': BmiCalculatorHowReliableIsBmi;
      'bmi-calculator.ideal-bmi': BmiCalculatorIdealBmi;
      'bmi-calculator.is-your-home-protected': BmiCalculatorIsYourHomeProtected;
      'bmi-calculator.limitation-of-bmi': BmiCalculatorLimitationOfBmi;
      'bmi-calculator.optima-secure-plan-card-labels': BmiCalculatorOptimaSecurePlanCardLabels;
      'bmi-calculator.over-weight': BmiCalculatorOverWeight;
      'bmi-calculator.overview-of-bmi': BmiCalculatorOverviewOfBmi;
      'bmi-calculator.points': BmiCalculatorPoints;
      'bmi-calculator.points-three': BmiCalculatorPointsThree;
      'bmi-calculator.relation-bw-bmi-and-insurance': BmiCalculatorRelationBwBmiAndInsurance;
      'bmi-calculator.report-labels': BmiCalculatorReportLabels;
      'bmi-calculator.talk-to-expert': BmiCalculatorTalkToExpert;
      'bmi-calculator.title': BmiCalculatorTitle;
      'bmi-calculator.weight-label': BmiCalculatorWeightLabel;
      'car-insurance.brands': CarInsuranceBrands;
      'car-insurance.bread-crumbs': CarInsuranceBreadCrumbs;
      'car-insurance.bullet-points': CarInsuranceBulletPoints;
      'car-insurance.buy-renew-section': CarInsuranceBuyRenewSection;
      'car-insurance.car-insurance': CarInsuranceCarInsurance;
      'car-insurance.car-insurance-calc': CarInsuranceCarInsuranceCalc;
      'car-insurance.car-insurance-details': CarInsuranceCarInsuranceDetails;
      'car-insurance.car-insurance-note': CarInsuranceCarInsuranceNote;
      'car-insurance.car-insurance-premium-details': CarInsuranceCarInsurancePremiumDetails;
      'car-insurance.car-insurance-rates': CarInsuranceCarInsuranceRates;
      'car-insurance.cards': CarInsuranceCards;
      'car-insurance.cards-four': CarInsuranceCardsFour;
      'car-insurance.cards-one': CarInsuranceCardsOne;
      'car-insurance.cards-two': CarInsuranceCardsTwo;
      'car-insurance.city-label': CarInsuranceCityLabel;
      'car-insurance.compare-policy-section': CarInsuranceComparePolicySection;
      'car-insurance.divider-one': CarInsuranceDividerOne;
      'car-insurance.divider-one-one': CarInsuranceDividerOneOne;
      'car-insurance.divider-three': CarInsuranceDividerThree;
      'car-insurance.divider-two': CarInsuranceDividerTwo;
      'car-insurance.factors': CarInsuranceFactors;
      'car-insurance.factors-buying-car-insurance-section': CarInsuranceFactorsBuyingCarInsuranceSection;
      'car-insurance.factors-effecting-car-insurance-section': CarInsuranceFactorsEffectingCarInsuranceSection;
      'car-insurance.form': CarInsuranceForm;
      'car-insurance.headers': CarInsuranceHeaders;
      'car-insurance.headers-one': CarInsuranceHeadersOne;
      'car-insurance.how-to-calculate-insurance-section': CarInsuranceHowToCalculateInsuranceSection;
      'car-insurance.how-to-file-claim-section': CarInsuranceHowToFileClaimSection;
      'car-insurance.idv': CarInsuranceIdv;
      'car-insurance.info-section': CarInsuranceInfoSection;
      'car-insurance.info-section-three': CarInsuranceInfoSectionThree;
      'car-insurance.insurance-add-ons': CarInsuranceInsuranceAddOns;
      'car-insurance.key-features': CarInsuranceKeyFeatures;
      'car-insurance.mobile-no-labels': CarInsuranceMobileNoLabels;
      'car-insurance.models': CarInsuranceModels;
      'car-insurance.new-cars': CarInsuranceNewCars;
      'car-insurance.note-section': CarInsuranceNoteSection;
      'car-insurance.note-section-one': CarInsuranceNoteSectionOne;
      'car-insurance.note-section-three': CarInsuranceNoteSectionThree;
      'car-insurance.old-cars': CarInsuranceOldCars;
      'car-insurance.plan-type': CarInsurancePlanType;
      'car-insurance.points': CarInsurancePoints;
      'car-insurance.points-five': CarInsurancePointsFive;
      'car-insurance.points-four': CarInsurancePointsFour;
      'car-insurance.points-one': CarInsurancePointsOne;
      'car-insurance.points-seven': CarInsurancePointsSeven;
      'car-insurance.points-six': CarInsurancePointsSix;
      'car-insurance.points-three': CarInsurancePointsThree;
      'car-insurance.points-two': CarInsurancePointsTwo;
      'car-insurance.policy-details': CarInsurancePolicyDetails;
      'car-insurance.popular-brands': CarInsurancePopularBrands;
      'car-insurance.popular-models': CarInsurancePopularModels;
      'car-insurance.premium-calculator-details': CarInsurancePremiumCalculatorDetails;
      'car-insurance.premium-detail-card-data': CarInsurancePremiumDetailCardData;
      'car-insurance.reduce-premium-section': CarInsuranceReducePremiumSection;
      'car-insurance.rows': CarInsuranceRows;
      'car-insurance.rows-one': CarInsuranceRowsOne;
      'car-insurance.single-points': CarInsuranceSinglePoints;
      'car-insurance.steps': CarInsuranceSteps;
      'car-insurance.table-data': CarInsuranceTableData;
      'car-insurance.talk-to-expert': CarInsuranceTalkToExpert;
      'car-insurance.terms-and-conditions': CarInsuranceTermsAndConditions;
      'car-insurance.third-party': CarInsuranceThirdParty;
      'car-insurance.title': CarInsuranceTitle;
      'car-insurance.trust-markers': CarInsuranceTrustMarkers;
      'car-insurance.types-of-car-insurance': CarInsuranceTypesOfCarInsurance;
      'car-insurance.vehicle-details': CarInsuranceVehicleDetails;
      'car-insurance.vehicle-registration-no-labels': CarInsuranceVehicleRegistrationNoLabels;
      'car-insurance.why-premium-calculator-section': CarInsuranceWhyPremiumCalculatorSection;
      'health-insurance.age-labels': HealthInsuranceAgeLabels;
      'health-insurance.bread-crumbs': HealthInsuranceBreadCrumbs;
      'health-insurance.content': HealthInsuranceContent;
      'health-insurance.coverage-label': HealthInsuranceCoverageLabel;
      'health-insurance.deductible-label': HealthInsuranceDeductibleLabel;
      'health-insurance.form': HealthInsuranceForm;
      'health-insurance.general-insurance-stepper-details': HealthInsuranceGeneralInsuranceStepperDetails;
      'health-insurance.health-calculator-premium-details': HealthInsuranceHealthCalculatorPremiumDetails;
      'health-insurance.health-coverage': HealthInsuranceHealthCoverage;
      'health-insurance.health-insurance': HealthInsuranceHealthInsurance;
      'health-insurance.medical-insurance-premium-details': HealthInsuranceMedicalInsurancePremiumDetails;
      'health-insurance.mobile-number-label': HealthInsuranceMobileNumberLabel;
      'health-insurance.pin-code-labels': HealthInsurancePinCodeLabels;
      'health-insurance.points': HealthInsurancePoints;
      'health-insurance.policy-details': HealthInsurancePolicyDetails;
      'health-insurance.related-articles': HealthInsuranceRelatedArticles;
      'health-insurance.related-videos': HealthInsuranceRelatedVideos;
      'health-insurance.stepper-card-data': HealthInsuranceStepperCardData;
      'health-insurance.stepper-data': HealthInsuranceStepperData;
      'health-insurance.talk-to-expert': HealthInsuranceTalkToExpert;
      'health-insurance.title': HealthInsuranceTitle;
      'health-insurance.videos': HealthInsuranceVideos;
      'image-descriptions.banner': ImageDescriptionsBanner;
      'image-descriptions.content': ImageDescriptionsContent;
      'image-descriptions.image-descriptions': ImageDescriptionsImageDescriptions;
      'login.claim-list': LoginClaimList;
      'meta-fields.meta-fields': MetaFieldsMetaFields;
      'shared.bottom': SharedBottom;
      'shared.bottom-cards': SharedBottomCards;
      'shared.cards': SharedCards;
      'shared.contents': SharedContents;
      'shared.image': SharedImage;
      'shared.media': SharedMedia;
      'shared.mobile-image': SharedMobileImage;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.rich-text-json': SharedRichTextJson;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.steps': SharedSteps;
      'shared.title': SharedTitle;
    }
  }
}
