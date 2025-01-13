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

export interface ClaimsStaticAwardCont extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_award_conts';
  info: {
    displayName: 'award-cont';
  };
  attributes: {
    heading: Schema.Attribute.Component<'claims-static.heading', false>;
    subheading: Schema.Attribute.String;
  };
}

export interface ClaimsStaticBulletPointsClaim extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_bullet_points_claims';
  info: {
    displayName: 'bulletPointsClaim';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface ClaimsStaticButton extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface ClaimsStaticCarInsurance extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_car_insurances';
  info: {
    displayName: 'carInsurance';
  };
  attributes: {
    cashlessBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
    claimSectionHeading: Schema.Attribute.Component<
      'claims-static.section-heading',
      false
    >;
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
    reimbursmentBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
  };
}

export interface ClaimsStaticCattleInsuranceDump
  extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_cattle_insurance_dumps';
  info: {
    description: '';
    displayName: 'cattleInsuranceDump';
  };
  attributes: {
    cattleInsuranceBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
  };
}

export interface ClaimsStaticClaimSteps extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_claim_steps';
  info: {
    displayName: 'claimSteps';
  };
  attributes: {
    button: Schema.Attribute.Component<'claims-static.button', false>;
    headerLabel: Schema.Attribute.String;
    infoCont: Schema.Attribute.Component<'claims-static.info-cont', false>;
    labelCont: Schema.Attribute.Component<'claims-static.label-cont', false>;
    step: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface ClaimsStaticClaimTabs extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_claim_tabs';
  info: {
    displayName: 'claim-tabs';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tabId: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface ClaimsStaticCriticalIlnessInsurance
  extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_critical_ilness_insurances';
  info: {
    description: '';
    displayName: 'criticalIlnessInsurance';
  };
  attributes: {
    criticalIlnessBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
  };
}

export interface ClaimsStaticDocumentChecklist extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_document_checklists';
  info: {
    description: '';
    displayName: 'bulletPointsContClaims';
  };
  attributes: {
    bullet: Schema.Attribute.Component<
      'claims-static.bullet-points-claim',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ClaimsStaticGroupMedicalInsurance
  extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_group_medical_insurances';
  info: {
    displayName: 'groupMedicalInsurance';
  };
  attributes: {
    groupMedicalInsuranceBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      false
    >;
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
  };
}

export interface ClaimsStaticGroupPersonalInsurance
  extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_group_personal_insurances';
  info: {
    description: '';
    displayName: 'groupPersonalInsurance';
  };
  attributes: {
    groupPersonalInsuranceBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
  };
}

export interface ClaimsStaticGroupTravelInsurance
  extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_group_travel_insurances';
  info: {
    description: '';
    displayName: 'groupTravelInsurance';
  };
  attributes: {
    groupMedicalInsuranceBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
  };
}

export interface ClaimsStaticHeading extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    label1: Schema.Attribute.String;
    label2: Schema.Attribute.String;
  };
}

export interface ClaimsStaticHeadingClaim extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_heading_claims';
  info: {
    displayName: 'headingClaim';
  };
  attributes: {
    claim: Schema.Attribute.String;
    process: Schema.Attribute.String;
  };
}

export interface ClaimsStaticHealthInsurance extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_health_insurances';
  info: {
    description: '';
    displayName: 'healthInsurance';
  };
  attributes: {
    bulletPoints: Schema.Attribute.Component<
      'claims-static.bullet-points-claim',
      true
    >;
    claimSteps: Schema.Attribute.Component<'claims-static.claim-steps', true>;
    documentChecklist: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
    headingClaim: Schema.Attribute.Component<
      'claims-static.heading-claim',
      false
    >;
    pointsCont: Schema.Attribute.Component<
      'claims-static.points-container',
      false
    >;
    reimbursementSteps: Schema.Attribute.Component<
      'claims-static.reimbursement-steps',
      true
    >;
    sectionHeading: Schema.Attribute.Component<
      'claims-static.section-heading',
      false
    >;
    subheading: Schema.Attribute.String;
  };
}

export interface ClaimsStaticInfoCont extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_info_conts';
  info: {
    displayName: 'infoCont';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface ClaimsStaticKidnapExtortionInsuranceDump
  extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_kidnap_extortion_insurance_dumps';
  info: {
    displayName: 'kidnapExtortionInsuranceDump';
  };
  attributes: {
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
    kidnapExtortionBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
  };
}

export interface ClaimsStaticLabelCont extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_label_conts';
  info: {
    displayName: 'labelCont';
  };
  attributes: {
    icon: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ClaimsStaticMarineHullInsuranceDump
  extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_marine_hull_insurance_dumps';
  info: {
    displayName: 'marineHullInsuranceDump';
  };
  attributes: {
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
    marineHullBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
  };
}

export interface ClaimsStaticPersonalAccidentInsurance
  extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_personal_accident_insurances';
  info: {
    description: '';
    displayName: 'personalAccidentInsurance';
  };
  attributes: {
    cashlessBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
    claimSectionHeading: Schema.Attribute.Component<
      'claims-static.section-heading',
      false
    >;
    claimSteps: Schema.Attribute.Component<'claims-static.claim-steps', true>;
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
    reimbursmentBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
  };
}

export interface ClaimsStaticPointsContainer extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_points_containers';
  info: {
    displayName: 'pointsContainer';
  };
  attributes: {
    heading: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface ClaimsStaticRainfallIndexInsuranceDump
  extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_rainfall_index_insurance_dumps';
  info: {
    displayName: 'rainfallIndexInsuranceDump';
  };
  attributes: {
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
    rainfallInsuranceBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
  };
}

export interface ClaimsStaticReimbursementSteps extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_reimbursement_steps';
  info: {
    displayName: 'reimbursementSteps';
  };
  attributes: {
    infoCont: Schema.Attribute.Component<'claims-static.info-cont', true>;
    type: Schema.Attribute.String;
  };
}

export interface ClaimsStaticSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_section_headings';
  info: {
    description: '';
    displayName: 'sectionHeading';
  };
  attributes: {
    section: Schema.Attribute.Component<'claims-static.sections', true>;
    title: Schema.Attribute.String;
  };
}

export interface ClaimsStaticSections extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_sections';
  info: {
    description: '';
    displayName: 'sections';
  };
  attributes: {
    section: Schema.Attribute.String;
  };
}

export interface ClaimsStaticTabs extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_tabs';
  info: {
    displayName: 'tabs';
  };
  attributes: {
    claimTabs: Schema.Attribute.Component<'claims-static.claim-tabs', true>;
  };
}

export interface ClaimsStaticTabsCont extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_tabs_conts';
  info: {
    description: '';
    displayName: 'TabsCont';
  };
  attributes: {
    awardCont: Schema.Attribute.Component<'claims-static.award-cont', false>;
    tabsClaimPage: Schema.Attribute.Component<'claims.tabs-claim-page', false>;
  };
}

export interface ClaimsStaticTravelInsurance extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_travel_insurances';
  info: {
    displayName: 'travelInsurance';
  };
  attributes: {
    cashlessBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
    claimSectionHeading: Schema.Attribute.Component<
      'claims-static.section-heading',
      false
    >;
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
    reimbursmentBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
  };
}

export interface ClaimsStaticTwoWheelerInsurance
  extends Struct.ComponentSchema {
  collectionName: 'components_claims_static_two_wheeler_insurances';
  info: {
    description: '';
    displayName: 'twoWheelerInsurance';
  };
  attributes: {
    cashlessBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      true
    >;
    heading: Schema.Attribute.Component<'claims-static.heading-claim', false>;
    reimbursmentBulletPoints: Schema.Attribute.Component<
      'claims-static.document-checklist',
      false
    >;
    sectionHeading: Schema.Attribute.Component<
      'claims-static.section-heading',
      false
    >;
  };
}

export interface ClaimsBanner extends Struct.ComponentSchema {
  collectionName: 'components_claims_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ClaimsClaimBanner extends Struct.ComponentSchema {
  collectionName: 'components_claims_claim_banners';
  info: {
    displayName: 'Claim Banner';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ClaimsTabsClaimPage extends Struct.ComponentSchema {
  collectionName: 'components_claims_tabs_claim_pages';
  info: {
    description: '';
    displayName: 'tabsClaimPage';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'claims-static.tabs', true>;
    title: Schema.Attribute.String;
  };
}

export interface CustomerDueDiligenceAnnualIncome
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_annual_incomes';
  info: {
    displayName: 'annualIncome';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    optionsKey: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface CustomerDueDiligenceCustomerDueDiligence
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_customer_due_diligences';
  info: {
    displayName: 'customerDueDiligence';
  };
  attributes: {
    backButton: Schema.Attribute.String;
    dashboardButtonText: Schema.Attribute.String;
    submitText: Schema.Attribute.String;
  };
}

export interface CustomerDueDiligenceEkycDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_ekyc_details';
  info: {
    displayName: 'ekycDetails';
  };
  attributes: {
    cKycTile: Schema.Attribute.String;
    ekycIdTitle: Schema.Attribute.String;
    nameTitle: Schema.Attribute.String;
    panTitle: Schema.Attribute.String;
  };
}

export interface CustomerDueDiligenceIndian extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_indians';
  info: {
    displayName: 'Indian';
  };
  attributes: {
    Indian: Schema.Attribute.Component<'customer-due-diligence.title', false>;
  };
}

export interface CustomerDueDiligenceIsPoliticallyExposed
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_is_politically_exposeds';
  info: {
    displayName: 'isPoliticallyExposed';
  };
  attributes: {
    isPoliticallyExposed: Schema.Attribute.Component<
      'customer-due-diligence.nationality',
      false
    >;
  };
}

export interface CustomerDueDiligenceMaritalStatus
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_marital_statuses';
  info: {
    displayName: 'maritalStatus';
  };
  attributes: {
    maritalStatus: Schema.Attribute.Component<
      'customer-due-diligence.annual-income',
      false
    >;
  };
}

export interface CustomerDueDiligenceMothersName
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_mothers_names';
  info: {
    displayName: 'mothersName';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface CustomerDueDiligenceNationality
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_nationalities';
  info: {
    displayName: 'nationality';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface CustomerDueDiligenceNo extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_nos';
  info: {
    displayName: 'No';
  };
  attributes: {
    No: Schema.Attribute.Component<'customer-due-diligence.title', false>;
  };
}

export interface CustomerDueDiligenceOccupation extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_occupations';
  info: {
    displayName: 'occupation';
  };
  attributes: {
    occupation: Schema.Attribute.Component<
      'customer-due-diligence.annual-income',
      false
    >;
  };
}

export interface CustomerDueDiligenceOrganizationType
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_organization_types';
  info: {
    displayName: 'organizationType';
  };
  attributes: {
    organizationType: Schema.Attribute.Component<
      'customer-due-diligence.annual-income',
      false
    >;
  };
}

export interface CustomerDueDiligenceQueryWidget
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_query_widgets';
  info: {
    description: '';
    displayName: 'queryWidget';
  };
  attributes: {
    contactMail: Schema.Attribute.Email;
    contactText: Schema.Attribute.String;
  };
}

export interface CustomerDueDiligenceServerError
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_server_errors';
  info: {
    description: '';
    displayName: 'serverError';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    queryWidget: Schema.Attribute.Component<
      'customer-due-diligence.query-widget',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface CustomerDueDiligenceSubmitSuccess
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_submit_successes';
  info: {
    description: '';
    displayName: 'submitSuccess';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CustomerDueDiligenceTipInfo extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_tip_infos';
  info: {
    displayName: 'tipInfo';
  };
  attributes: {
    description: Schema.Attribute.String;
  };
}

export interface CustomerDueDiligenceTitle extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_titles';
  info: {
    description: '';
    displayName: 'nri';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface CustomerDueDiligenceYes extends Struct.ComponentSchema {
  collectionName: 'components_customer_due_diligence_yeses';
  info: {
    displayName: 'Yes';
  };
  attributes: {
    Yes: Schema.Attribute.Component<'customer-due-diligence.title', false>;
  };
}

export interface DashboardBuyInsuranceCard extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    bannerText: Schema.Attribute.String;
    img: Schema.Attribute.String;
    isNew: Schema.Attribute.Boolean;
    showCard: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface DashboardBuyInsuranceCommercial
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_commercials';
  info: {
    displayName: 'commercial';
  };
  attributes: {
    commercial: Schema.Attribute.Component<
      'dashboard-buy-insurance.card',
      false
    >;
  };
}

export interface DashboardBuyInsuranceCorporate extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_corporates';
  info: {
    displayName: 'corporate';
  };
  attributes: {
    corporate: Schema.Attribute.Component<
      'dashboard-buy-insurance.card',
      false
    >;
  };
}

export interface DashboardBuyInsuranceCyber extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_cybers';
  info: {
    displayName: 'cyber';
  };
  attributes: {
    cyber: Schema.Attribute.Component<'dashboard-buy-insurance.card', false>;
  };
}

export interface DashboardBuyInsuranceFourWheeler
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_four_wheelers';
  info: {
    displayName: 'fourWheeler';
  };
  attributes: {
    fourWheeler: Schema.Attribute.Component<
      'dashboard-buy-insurance.card',
      false
    >;
  };
}

export interface DashboardBuyInsuranceHealth extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_health';
  info: {
    displayName: 'health';
  };
  attributes: {
    health: Schema.Attribute.Component<'dashboard-buy-insurance.card', false>;
  };
}

export interface DashboardBuyInsuranceHome extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_homes';
  info: {
    displayName: 'home';
  };
  attributes: {
    home: Schema.Attribute.Component<'dashboard-buy-insurance.card', false>;
  };
}

export interface DashboardBuyInsuranceLinkPolicy
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_link_policies';
  info: {
    displayName: 'linkPolicy';
  };
  attributes: {
    buttontext: Schema.Attribute.String;
    img: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface DashboardBuyInsuranceNeedsYourAttention
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_needs_your_attentions';
  info: {
    displayName: 'needsYourAttention';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface DashboardBuyInsurancePet extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_pets';
  info: {
    displayName: 'pet';
  };
  attributes: {
    pet: Schema.Attribute.Component<'dashboard-buy-insurance.card', false>;
  };
}

export interface DashboardBuyInsurancePmsby extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_pmsbies';
  info: {
    displayName: 'pmsby';
  };
  attributes: {
    pmsby: Schema.Attribute.Component<'dashboard-buy-insurance.card', false>;
  };
}

export interface DashboardBuyInsuranceResumeJourney
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_resume_journeys';
  info: {
    displayName: 'resumeJourney';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface DashboardBuyInsuranceTravel extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_travels';
  info: {
    displayName: 'travel';
  };
  attributes: {
    travel: Schema.Attribute.Component<'dashboard-buy-insurance.card', false>;
  };
}

export interface DashboardBuyInsuranceTwoWheeler
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_buy_insurance_two_wheelers';
  info: {
    displayName: 'twoWheeler';
  };
  attributes: {
    twoWheeler: Schema.Attribute.Component<
      'dashboard-buy-insurance.card',
      false
    >;
  };
}

export interface DashboardEcosystemCard extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_ecosystem_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    img: Schema.Attribute.String;
    modalDescription: Schema.Attribute.String;
    modalTitle: Schema.Attribute.String;
    showCard: Schema.Attribute.Boolean;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardEcosystemDashboardEcosystem
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_ecosystem_dashboard_ecosystems';
  info: {
    description: '';
    displayName: 'dashboard-ecosystem';
  };
  attributes: {
    card: Schema.Attribute.Component<'dashboard-ecosystem.card', false>;
  };
}

export interface DashboardEcosystemHealth extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_ecosystem_health';
  info: {
    displayName: 'health';
  };
  attributes: {
    health: Schema.Attribute.Component<'dashboard-ecosystem.card', false>;
  };
}

export interface DashboardEcosystemPets extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_ecosystem_pets';
  info: {
    displayName: 'pets';
  };
  attributes: {
    pets: Schema.Attribute.Component<'dashboard-ecosystem.card', false>;
  };
}

export interface DashboardEcosystemTitle extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_ecosystem_titles';
  info: {
    description: '';
    displayName: 'auto';
  };
  attributes: {
    auto: Schema.Attribute.Component<'dashboard-ecosystem.card', false>;
  };
}

export interface DashboardExploreFourwheelerCard
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_explore_fourwheeler_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    buttontext: Schema.Attribute.String;
    category: Schema.Attribute.String;
    img: Schema.Attribute.String;
    showCard: Schema.Attribute.Boolean;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface DashboardExploreFourwheelerDashboardExploreFourwheeler
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_explore_fourwheeler_dashboard_explore_fourwheelers';
  info: {
    description: '';
    displayName: 'dashboard-explore-fourwheeler';
  };
  attributes: {
    card: Schema.Attribute.Component<
      'dashboard-explore-fourwheeler.card',
      false
    >;
  };
}

export interface DashboardExploreFourwheelerFourWheeler
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_explore_fourwheeler_four_wheelers';
  info: {
    displayName: 'fourWheeler';
  };
  attributes: {
    fourwheeler: Schema.Attribute.Component<
      'dashboard-explore-fourwheeler.card',
      false
    >;
  };
}

export interface DashboardExploreFourwheelerTwoWheeler
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_explore_fourwheeler_two_wheelers';
  info: {
    displayName: 'twoWheeler';
  };
  attributes: {
    twoWheeler: Schema.Attribute.Component<
      'dashboard-explore-fourwheeler.card',
      false
    >;
  };
}

export interface DashboardExploreMoreCard extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_explore_more_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    buttontext: Schema.Attribute.Blocks;
    img: Schema.Attribute.String;
    showCard: Schema.Attribute.Boolean;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardExploreMoreCardOne extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_explore_more_card_ones';
  info: {
    displayName: 'cardOne';
  };
  attributes: {
    cardOne: Schema.Attribute.Component<'dashboard-explore-more.card', false>;
  };
}

export interface DashboardExploreMoreCardThree extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_explore_more_card_threes';
  info: {
    displayName: 'cardThree';
  };
  attributes: {
    cardThree: Schema.Attribute.Component<'dashboard-explore-more.card', false>;
  };
}

export interface DashboardExploreMoreCardTwo extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_explore_more_card_twos';
  info: {
    displayName: 'cardTwo';
  };
  attributes: {
    cardTwo: Schema.Attribute.Component<'dashboard-explore-more.card', false>;
  };
}

export interface DashboardExploreMoreDashboardExploreMore
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_explore_more_dashboard_explore_mores';
  info: {
    displayName: 'dashboard-explore-more';
  };
  attributes: {
    card: Schema.Attribute.Component<'dashboard-explore-more.card', false>;
  };
}

export interface DashboardLatestInHdfcCard extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_latest_in_hdfc_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    img: Schema.Attribute.String;
    readTime: Schema.Attribute.String;
    showCard: Schema.Attribute.Boolean;
    subtitle: Schema.Attribute.String;
    tagName: Schema.Attribute.String;
    time: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardLatestInHdfcDashboardLatestInHdfc
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_latest_in_hdfc_dashboard_latest_in_hdfcs';
  info: {
    displayName: 'dashboard-latestIn-hdfc';
  };
  attributes: {
    card: Schema.Attribute.Component<'dashboard-latest-in-hdfc.card', false>;
  };
}

export interface DashboardQuickActionCard extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_quick_action_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    img: Schema.Attribute.String;
    key: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardQuickActionClaimRegistration
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_quick_action_claim_registrations';
  info: {
    displayName: 'claimRegistration';
  };
  attributes: {
    claimRegistration: Schema.Attribute.Component<
      'dashboard-quick-action.card',
      false
    >;
  };
}

export interface DashboardQuickActionDashboardQuickAction
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_quick_action_dashboard_quick_actions';
  info: {
    displayName: 'dashboard-quickAction';
  };
  attributes: {
    card: Schema.Attribute.Component<'dashboard-quick-action.card', false>;
  };
}

export interface DashboardQuickActionEkycProcedure
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_quick_action_ekyc_procedures';
  info: {
    displayName: 'ekycProcedure';
  };
  attributes: {
    ekycProcedure: Schema.Attribute.Component<
      'dashboard-quick-action.card',
      false
    >;
  };
}

export interface DashboardQuickActionEkycRegistration
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_quick_action_ekyc_registrations';
  info: {
    displayName: 'ekycRegistration';
  };
  attributes: {
    ekycRegistration: Schema.Attribute.Component<
      'dashboard-quick-action.card',
      false
    >;
  };
}

export interface DashboardQuickActionLinkEia extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_quick_action_link_eias';
  info: {
    displayName: 'linkEia';
  };
  attributes: {
    linkEia: Schema.Attribute.Component<'dashboard-quick-action.card', false>;
  };
}

export interface DashboardQuickActionRenewPolicy
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_quick_action_renew_policies';
  info: {
    displayName: 'renewPolicy';
  };
  attributes: {
    renewPolicy: Schema.Attribute.Component<
      'dashboard-quick-action.card',
      false
    >;
  };
}

export interface DashboardQuickActionTrackClaim extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_quick_action_track_claims';
  info: {
    displayName: 'trackClaim';
  };
  attributes: {
    trackClaim: Schema.Attribute.Component<
      'dashboard-quick-action.card',
      false
    >;
  };
}

export interface DashboardTrustedByCustomerCard extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_trusted_by_customer_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardTrustedByCustomerCashlessNetwork
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_trusted_by_customer_cashless_networks';
  info: {
    displayName: 'Cashless Network';
  };
  attributes: {
    CashlessNetwork: Schema.Attribute.Component<
      'dashboard-trusted-by-customer.card',
      false
    >;
  };
}

export interface DashboardTrustedByCustomerClaimSettlementRate
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_trusted_by_customer_claim_settlement_rates';
  info: {
    displayName: 'Claim Settlement Rate';
  };
  attributes: {
    ClaimSettlementRate: Schema.Attribute.Component<
      'dashboard-trusted-by-customer.card',
      false
    >;
  };
}

export interface DashboardTrustedByCustomerCustomerSupport
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_trusted_by_customer_customer_supports';
  info: {
    displayName: 'Customer Support';
  };
  attributes: {
    CustomerSupport: Schema.Attribute.Component<
      'dashboard-trusted-by-customer.card',
      false
    >;
  };
}

export interface DashboardTrustedByCustomerDashboardTrustedByCustomer
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_trusted_by_customer_dashboard_trusted_by_customers';
  info: {
    displayName: 'dashboard-trusted-by-customer';
  };
  attributes: {
    card: Schema.Attribute.Component<
      'dashboard-trusted-by-customer.card',
      false
    >;
  };
}

export interface DashboardTrustedByCustomerHappyCustomers
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_trusted_by_customer_happy_customers';
  info: {
    displayName: 'Happy Customers';
  };
  attributes: {
    HappyCustomers: Schema.Attribute.Component<
      'dashboard-trusted-by-customer.card',
      false
    >;
  };
}

export interface DashboardCardAlignment extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_card_alignments';
  info: {
    displayName: 'cardAlignment';
  };
  attributes: {
    desktopAlignment: Schema.Attribute.String;
    mobileAlignment: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface DashboardDashboardCmsData extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_dashboard_cms_data';
  info: {
    description: '';
    displayName: 'dashboardCmsData';
  };
  attributes: {
    bottomCount: Schema.Attribute.Component<'dashboard.card-alignment', false>;
    buyInsurance: Schema.Attribute.Component<'dashboard.card-alignment', false>;
    connect: Schema.Attribute.Component<'dashboard.card-alignment', false>;
    ecosystem: Schema.Attribute.Component<'dashboard.card-alignment', false>;
    explore: Schema.Attribute.Component<'dashboard.card-alignment', false>;
    fourwheeler: Schema.Attribute.Component<'dashboard.card-alignment', false>;
    latest: Schema.Attribute.Component<'dashboard.card-alignment', false>;
    needsYourAttention: Schema.Attribute.Component<
      'dashboard.card-alignment',
      false
    >;
    newsletter: Schema.Attribute.Component<'dashboard.card-alignment', false>;
    quickActions: Schema.Attribute.Component<'dashboard.card-alignment', false>;
    scan: Schema.Attribute.Component<'dashboard.card-alignment', false>;
    support: Schema.Attribute.Component<'dashboard.card-alignment', false>;
  };
}

export interface DashboardDashboardConnectWithUsCms
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_dashboard_connect_with_us_cms';
  info: {
    displayName: 'dashboardConnectWithUsCms';
  };
  attributes: {
    alignment: Schema.Attribute.String;
    img: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface DashboardDashboardNewsletterCms
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_dashboard_newsletter_cms';
  info: {
    description: '';
    displayName: 'dashboardNewsletterCms';
  };
  attributes: {
    alignment: Schema.Attribute.String;
    buttontext: Schema.Attribute.String;
    img: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface DashboardEcosystemQrCms extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_ecosystem_qr_cms';
  info: {
    displayName: 'ecosystemQrCms';
  };
  attributes: {
    appleStore: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    googleStore: Schema.Attribute.String;
    mobileButtonText: Schema.Attribute.String;
    mobileImage: Schema.Attribute.String;
    scanImage: Schema.Attribute.String;
    scanTitle: Schema.Attribute.String;
    scanUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardSupportCms extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_support_cms';
  info: {
    displayName: 'supportCms';
  };
  attributes: {
    alignment: Schema.Attribute.String;
    buttontext: Schema.Attribute.String;
    img: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface DocumentUploaderBottomNav extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_bottom_navs';
  info: {
    displayName: 'bottomNav';
  };
  attributes: {
    btnLabel: Schema.Attribute.String;
    secondaryText: Schema.Attribute.String;
  };
}

export interface DocumentUploaderCamera extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_cameras';
  info: {
    displayName: 'camera';
  };
  attributes: {
    retake: Schema.Attribute.String;
    submit: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DocumentUploaderClaimDocumentList
  extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_claim_document_lists';
  info: {
    displayName: 'claimDocumentList';
  };
  attributes: {
    description: Schema.Attribute.String;
    goBackSheet: Schema.Attribute.Component<
      'document-uploader.go-back-sheet',
      false
    >;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DocumentUploaderConfirmSubmit extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_confirm_submits';
  info: {
    displayName: 'confirmSubmit';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    primaryText: Schema.Attribute.String;
    secondaryText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DocumentUploaderDocumentModal extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_document_modals';
  info: {
    displayName: 'documentModal';
  };
  attributes: {
    cameraLabel: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    uploadFileLabel: Schema.Attribute.String;
  };
}

export interface DocumentUploaderDocumentProgressModal
  extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_document_progress_modals';
  info: {
    displayName: 'documentProgressModal';
  };
  attributes: {
    compressLabel: Schema.Attribute.String;
    selectFileLabel: Schema.Attribute.String;
    selectLabel: Schema.Attribute.String;
    skipLabel: Schema.Attribute.String;
    storageLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DocumentUploaderDocumentUploadModal
  extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_document_upload_modals';
  info: {
    displayName: 'documentUploadModal';
  };
  attributes: {
    description: Schema.Attribute.String;
    fileFormats: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    maxFileSize: Schema.Attribute.String;
    note: Schema.Attribute.String;
  };
}

export interface DocumentUploaderErrorModal extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_error_modals';
  info: {
    displayName: 'errorModal';
  };
  attributes: {
    description: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    homeLabel: Schema.Attribute.String;
    skipLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DocumentUploaderErrorScreen extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_error_screens';
  info: {
    description: '';
    displayName: 'errorScreen';
  };
  attributes: {
    bottomNav: Schema.Attribute.Component<
      'document-uploader.bottom-nav',
      false
    >;
    modal: Schema.Attribute.Component<'document-uploader.error-modal', false>;
  };
}

export interface DocumentUploaderErrorSuccess extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_error_successes';
  info: {
    description: '';
    displayName: 'errorSuccess';
  };
  attributes: {
    serverError: Schema.Attribute.Component<
      'document-uploader.error-success-json',
      false
    >;
    submitFailed: Schema.Attribute.Component<
      'document-uploader.error-success-json',
      false
    >;
  };
}

export interface DocumentUploaderErrorSuccessJson
  extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_error_success_jsons';
  info: {
    description: '';
    displayName: 'errorJson';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    queryWidget: Schema.Attribute.Component<
      'document-uploader.query-widget',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface DocumentUploaderFileBlank extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_file_blanks';
  info: {
    displayName: 'fileBlank';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DocumentUploaderFileNotContainDot
  extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_file_not_contain_dots';
  info: {
    displayName: 'fileNotContainDot';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DocumentUploaderGoBackSheet extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_go_back_sheets';
  info: {
    displayName: 'goBackSheet';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    primaryText: Schema.Attribute.String;
    secondaryText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DocumentUploaderModal extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_modals';
  info: {
    displayName: 'modal';
  };
  attributes: {
    claimLabel: Schema.Attribute.String;
    copyLabel: Schema.Attribute.String;
  };
}

export interface DocumentUploaderQueryWidget extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_query_widgets';
  info: {
    displayName: 'queryWidget';
  };
  attributes: {
    contactMail: Schema.Attribute.Email;
    contactText: Schema.Attribute.String;
  };
}

export interface DocumentUploaderQueryWidgetSuccess
  extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_query_widget_successes';
  info: {
    displayName: 'queryWidgetSuccess';
  };
  attributes: {
    contactMail: Schema.Attribute.Email;
    contactText: Schema.Attribute.String;
  };
}

export interface DocumentUploaderSpanText extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_span_texts';
  info: {
    displayName: 'spanText';
  };
  attributes: {
    descriptionLabel: Schema.Attribute.String;
    maxLabel: Schema.Attribute.String;
    sizeLabel: Schema.Attribute.String;
    textLabel: Schema.Attribute.String;
  };
}

export interface DocumentUploaderSubmissionError
  extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_submission_errors';
  info: {
    displayName: 'submissionError';
  };
  attributes: {
    cantUploadLabel: Schema.Attribute.String;
    claimLabel: Schema.Attribute.String;
    copyLabel: Schema.Attribute.String;
    submitErrorLabel: Schema.Attribute.String;
    submitLabel: Schema.Attribute.String;
  };
}

export interface DocumentUploaderSubmitDocumentDump
  extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_submit_document_dumps';
  info: {
    displayName: 'submitDocumentDump';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DocumentUploaderSuccess extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_successes';
  info: {
    displayName: 'success';
  };
  attributes: {
    copyPrefix: Schema.Attribute.String;
    description: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    queryWidget: Schema.Attribute.Component<
      'document-uploader.query-widget-success',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface DocumentUploaderUploadRequiredDocuments
  extends Struct.ComponentSchema {
  collectionName: 'components_document_uploader_upload_required_documents';
  info: {
    description: '';
    displayName: 'uploadRequiredDocuments';
  };
  attributes: {
    confirmSubmit: Schema.Attribute.Component<
      'document-uploader.confirm-submit',
      false
    >;
    fileBlank: Schema.Attribute.Component<
      'document-uploader.file-blank',
      false
    >;
    fileNotContainDot: Schema.Attribute.Component<
      'document-uploader.file-not-contain-dot',
      false
    >;
    imageUrl: Schema.Attribute.String;
    spanText: Schema.Attribute.Component<'document-uploader.span-text', false>;
    title: Schema.Attribute.String;
    uploadLabel: Schema.Attribute.String;
  };
}

export interface EkycTrackAadharInput extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_aadhar_inputs';
  info: {
    displayName: 'aadharInput';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    prefix: Schema.Attribute.String;
  };
}

export interface EkycTrackAadharVerification extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_aadhar_verifications';
  info: {
    description: '';
    displayName: 'aadharVerification';
  };
  attributes: {
    error: Schema.Attribute.Component<
      'ekyc-track.aadhar-verification-error',
      false
    >;
    header: Schema.Attribute.Component<
      'ekyc-track.title-and-description',
      false
    >;
    InputLabel: Schema.Attribute.Component<
      'ekyc-track.aadhar-verification-input-label',
      false
    >;
  };
}

export interface EkycTrackAadharVerificationError
  extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_aadhar_verification_errors';
  info: {
    description: '';
    displayName: 'aadharVerificationError';
  };
  attributes: {
    fetchError: Schema.Attribute.Component<'ekyc-track.fetch-error', false>;
    serverError: Schema.Attribute.Component<'ekyc-track.fetch-error', false>;
  };
}

export interface EkycTrackAadharVerificationInputLabel
  extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_aadhar_verification_input_labels';
  info: {
    description: '';
    displayName: 'aadharVerificationInputLabel';
  };
  attributes: {
    aadharInput: Schema.Attribute.Component<'ekyc-track.aadhar-input', false>;
    dobInput: Schema.Attribute.Component<'ekyc-track.dob-input', false>;
  };
}

export interface EkycTrackBottomSectin extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_bottom_sectins';
  info: {
    displayName: 'bottomSectin';
  };
  attributes: {
    subTitile: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EkycTrackBottomSection extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_bottom_sections';
  info: {
    description: '';
    displayName: 'bottomSection';
  };
  attributes: {
    Approved: Schema.Attribute.Component<'ekyc-track.statuses', false>;
    Pending: Schema.Attribute.Component<'ekyc-track.pending', false>;
    Rejected: Schema.Attribute.Component<'ekyc-track.statuses', false>;
  };
}

export interface EkycTrackCardsData extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_cards_data';
  info: {
    displayName: 'cardsData';
  };
  attributes: {
    cardInfo: Schema.Attribute.String;
  };
}

export interface EkycTrackClaimIdVerification extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_claim_id_verifications';
  info: {
    description: '';
    displayName: 'claimIdVerification';
  };
  attributes: {
    error: Schema.Attribute.Component<'ekyc-track.error', false>;
    header: Schema.Attribute.Component<
      'ekyc-track.title-and-description',
      false
    >;
    inputLabel: Schema.Attribute.Component<
      'ekyc-track.label-and-placeholder',
      false
    >;
  };
}

export interface EkycTrackCmsEkycMapper extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_cms_ekyc_mappers';
  info: {
    displayName: 'cmsEkycMapper';
  };
  attributes: {
    ckycNo: Schema.Attribute.String;
    ekycId: Schema.Attribute.String;
    name: Schema.Attribute.String;
    pan: Schema.Attribute.String;
    reason: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EkycTrackDobInput extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_dob_inputs';
  info: {
    description: '';
    displayName: 'dobInput';
  };
  attributes: {
    calendarSubtitle: Schema.Attribute.String;
    calenderTitle: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface EkycTrackError extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_errors';
  info: {
    description: '';
    displayName: 'error';
  };
  attributes: {
    fetchError: Schema.Attribute.Component<'ekyc-track.fetch-error', false>;
    serverError: Schema.Attribute.Component<'ekyc-track.server-error', false>;
  };
}

export interface EkycTrackErrorPopUp extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_error_pop_ups';
  info: {
    displayName: 'errorPopUp';
  };
  attributes: {
    fetch: Schema.Attribute.Component<'ekyc-track.fetch-error', false>;
    server: Schema.Attribute.Component<'ekyc-track.fetch-error', false>;
  };
}

export interface EkycTrackFetchError extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_fetch_errors';
  info: {
    displayName: 'fetchError';
  };
  attributes: {
    button1: Schema.Attribute.String;
    button2: Schema.Attribute.String;
    desctiption: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EkycTrackHeader extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    description: Schema.Attribute.String;
    info: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EkycTrackInputLabel extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_input_labels';
  info: {
    description: '';
    displayName: 'inputLabel';
  };
  attributes: {
    panInput: Schema.Attribute.Component<
      'ekyc-track.label-and-placeholder',
      false
    >;
  };
}

export interface EkycTrackKycTrackingApiDump extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_kyc_tracking_api_dumps';
  info: {
    description: '';
    displayName: 'kycTrackingApiDump';
  };
  attributes: {
    statusApprovedResponse: Schema.Attribute.Component<
      'ekyc-track.status-rejected-response',
      false
    >;
    statusPendingResponse: Schema.Attribute.Component<
      'ekyc-track.status-rejected-response',
      false
    >;
    statusRejectedResponse: Schema.Attribute.Component<
      'ekyc-track.status-rejected-response',
      false
    >;
  };
}

export interface EkycTrackLabelAndPlaceholder extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_label_and_placeholders';
  info: {
    displayName: 'labelAndPlaceholder';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
  };
}

export interface EkycTrackPanVerification extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_pan_verifications';
  info: {
    description: '';
    displayName: 'panVerification';
  };
  attributes: {
    error: Schema.Attribute.Component<'ekyc-track.pan-verification-err', false>;
    header: Schema.Attribute.Component<
      'ekyc-track.title-and-description',
      false
    >;
    inputLabel: Schema.Attribute.Component<
      'ekyc-track.pan-verification-input-label',
      false
    >;
  };
}

export interface EkycTrackPanVerificationErr extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_pan_verification_errs';
  info: {
    description: '';
    displayName: 'panVerificationErr';
  };
  attributes: {
    fetchError: Schema.Attribute.Component<'ekyc-track.fetch-error', false>;
    serverError: Schema.Attribute.Component<'ekyc-track.fetch-error', false>;
  };
}

export interface EkycTrackPanVerificationInputLabel
  extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_pan_verification_input_labels';
  info: {
    displayName: 'panVerificationInputLabel';
  };
  attributes: {
    dobInput: Schema.Attribute.Component<'ekyc-track.dob-input', false>;
    panInput: Schema.Attribute.Component<
      'ekyc-track.title-and-description',
      false
    >;
  };
}

export interface EkycTrackPending extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_pendings';
  info: {
    displayName: 'Pending';
  };
  attributes: {
    btnDisp: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EkycTrackServerError extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_server_errors';
  info: {
    displayName: 'serverError';
  };
  attributes: {
    button1: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EkycTrackStatic extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_statics';
  info: {
    description: '';
    displayName: 'static';
  };
  attributes: {
    cardsData: Schema.Attribute.Component<'ekyc-track.cards-data', true>;
    header: Schema.Attribute.Component<'ekyc-track.header', false>;
  };
}

export interface EkycTrackStatusPage extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_status_pages';
  info: {
    description: '';
    displayName: 'statusPage';
  };
  attributes: {
    bottomSectin: Schema.Attribute.Component<'ekyc-track.bottom-sectin', false>;
    bottomSection: Schema.Attribute.Component<
      'ekyc-track.bottom-section',
      false
    >;
  };
}

export interface EkycTrackStatusRejectedResponse
  extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_status_rejected_responses';
  info: {
    description: '';
    displayName: 'statusResponse';
  };
  attributes: {
    aadhar: Schema.Attribute.String;
    ckycNo: Schema.Attribute.String;
    ekycId: Schema.Attribute.String;
    kycStatus: Schema.Attribute.String;
    name: Schema.Attribute.String;
    pan: Schema.Attribute.String;
    rejectionReason: Schema.Attribute.String;
  };
}

export interface EkycTrackStatuses extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_statuses';
  info: {
    displayName: 'statuses';
  };
  attributes: {
    btnDisp: Schema.Attribute.String;
    btnLabel: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EkycTrackTitleAndDescription extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_title_and_descriptions';
  info: {
    displayName: 'titleAndDescription';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EkycTrackToast extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_toasts';
  info: {
    displayName: 'toast';
  };
  attributes: {
    delay: Schema.Attribute.Component<
      'ekyc-track.title-and-description',
      false
    >;
  };
}

export interface EkycTrackTrackingKycDump extends Struct.ComponentSchema {
  collectionName: 'components_ekyc_track_tracking_kyc_dumps';
  info: {
    description: '';
    displayName: 'trackingKycDump';
  };
  attributes: {
    aadharVerification: Schema.Attribute.Component<
      'ekyc-track.aadhar-verification',
      false
    >;
    claimIdVerification: Schema.Attribute.Component<
      'ekyc-track.claim-id-verification',
      false
    >;
    cmsEkycMapper: Schema.Attribute.Component<
      'ekyc-track.cms-ekyc-mapper',
      false
    >;
    errorPopUp: Schema.Attribute.Component<'ekyc-track.error-pop-up', false>;
    panVerification: Schema.Attribute.Component<
      'ekyc-track.pan-verification',
      false
    >;
    static: Schema.Attribute.Component<'ekyc-track.static', false>;
    statusPage: Schema.Attribute.Component<'ekyc-track.status-page', false>;
    toast: Schema.Attribute.Component<'ekyc-track.toast', false>;
  };
}

export interface GenerateEkycAnnualIncome extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_annual_incomes';
  info: {
    description: '';
    displayName: 'annualIncomeInput';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    Placeholder: Schema.Attribute.String;
    sheetTitle: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycCalendar extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_calendars';
  info: {
    displayName: 'calendar';
  };
  attributes: {
    calenderSubTitle: Schema.Attribute.String;
    calenderTitle: Schema.Attribute.String;
  };
}

export interface GenerateEkycCheckbox extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_checkboxes';
  info: {
    displayName: 'checkbox';
  };
  attributes: {
    label: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycCity extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_cities';
  info: {
    displayName: 'city';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    sheetTitle: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycCmsErrorstatusModal
  extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_cms_errorstatus_modals';
  info: {
    displayName: 'cmsErrorstatusModal';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GenerateEkycCmsFinalPage extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_cms_final_pages';
  info: {
    displayName: 'cmsFinalPage';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    ekycText: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    successImageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GenerateEkycCmsGoback extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_cms_gobacks';
  info: {
    displayName: 'cmsGoback';
  };
  attributes: {
    cancelButtonText: Schema.Attribute.String;
    gobackButtonText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GenerateEkycCmsServerTimeout extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_cms_server_timeouts';
  info: {
    displayName: 'cmsServerTimeout';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GenerateEkycCmsSubFinalPage extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_cms_sub_final_pages';
  info: {
    displayName: 'cmsSubFinalPage';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GenerateEkycCorrespondenceAddress
  extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_correspondence_addresses';
  info: {
    displayName: 'correspondenceAddress';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycEkycDetailCms extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_ekyc_detail_cms';
  info: {
    displayName: 'ekycDetailCms';
  };
  attributes: {
    calendar: Schema.Attribute.Component<'generate-ekyc.calendar', false>;
    clickHereText: Schema.Attribute.String;
    clickText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    dobLabel: Schema.Attribute.String;
    dobPlaceHolder: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    panLabel: Schema.Attribute.String;
    panPlaceHolder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GenerateEkycEkycList extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_ekyc_lists';
  info: {
    description: '';
    displayName: 'ekycList';
  };
  attributes: {
    checkbox: Schema.Attribute.Component<'generate-ekyc.checkbox', false>;
    city: Schema.Attribute.Component<'generate-ekyc.city', false>;
    correspondenceAddress: Schema.Attribute.Component<
      'generate-ekyc.correspondence-address',
      false
    >;
    fatherInput: Schema.Attribute.Component<
      'generate-ekyc.father-input',
      false
    >;
    motherInput: Schema.Attribute.Component<
      'generate-ekyc.mother-input',
      false
    >;
    permanentAddress: Schema.Attribute.Component<
      'generate-ekyc.permanent-address',
      false
    >;
    pincode: Schema.Attribute.Component<'generate-ekyc.pincode', false>;
    state: Schema.Attribute.Component<'generate-ekyc.state', false>;
  };
}

export interface GenerateEkycEkycVerifyCms extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_ekyc_verify_cms';
  info: {
    description: '';
    displayName: 'ekycVerifyCms';
  };
  attributes: {
    description: Schema.Attribute.String;
    gender: Schema.Attribute.Component<
      'generate-ekyc.marital-status-and-gender',
      false
    >;
    imageUrl: Schema.Attribute.String;
    maritalStatus: Schema.Attribute.Component<
      'generate-ekyc.marital-status-and-gender',
      false
    >;
    personNameLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GenerateEkycFatherInput extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_father_inputs';
  info: {
    displayName: 'fatherInput';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycFinancialDetails extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_financial_details';
  info: {
    displayName: 'financialDetails';
  };
  attributes: {};
}

export interface GenerateEkycFinancialDetailsCms
  extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_financial_details_cms';
  info: {
    description: '';
    displayName: 'financialDetailsCms';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GenerateEkycMaritalStatusAndGender
  extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_marital_status_and_genders';
  info: {
    displayName: 'maritalStatus-and-gender';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    sheetTitle: Schema.Attribute.String;
  };
}

export interface GenerateEkycMotherInput extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_mother_inputs';
  info: {
    displayName: 'motherInput';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycOccupationInput extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_occupation_inputs';
  info: {
    displayName: 'occupationInput';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    Placeholder: Schema.Attribute.String;
    sheetTitle: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycOrganizationInput extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_organization_inputs';
  info: {
    displayName: 'OrganizationInput';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    Placeholder: Schema.Attribute.String;
    sheetTitle: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycPanCard extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_pan_cards';
  info: {
    description: '';
    displayName: 'PanCard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    no: Schema.Attribute.Component<'generate-ekyc.yes-no-option', false>;
    yes: Schema.Attribute.Component<'generate-ekyc.yes-no-option', false>;
  };
}

export interface GenerateEkycPermanentAddress extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_permanent_addresses';
  info: {
    displayName: 'permanentAddress';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycPincode extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_pincodes';
  info: {
    displayName: 'pincode';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    sheetTitle: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycPoliticallyExposed extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_politically_exposeds';
  info: {
    displayName: 'politicallyExposed';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycProceedToHdfc extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_proceed_to_hdfcs';
  info: {
    displayName: 'proceedToHdfc';
  };
  attributes: {
    cancelButtonText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    proceedButtonText: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GenerateEkycState extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_states';
  info: {
    displayName: 'state';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    sheetTitle: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface GenerateEkycYesNoOption extends Struct.ComponentSchema {
  collectionName: 'components_generate_ekyc_yes_no_options';
  info: {
    displayName: 'yesNoOption';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimCity extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_cities';
  info: {
    displayName: 'city';
  };
  attributes: {
    emptyStateProps: Schema.Attribute.Component<
      'health-claim.empty-state-props',
      false
    >;
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    sheetTitle: Schema.Attribute.String;
  };
}

export interface HealthClaimClaimSuccess extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_claim_successes';
  info: {
    displayName: 'claimSuccess';
  };
  attributes: {
    copyPrefix: Schema.Attribute.String;
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimClaimUnableToProceed
  extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_claim_unable_to_proceeds';
  info: {
    displayName: 'claimUnableToProceed';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    queryWidget: Schema.Attribute.Component<'health-claim.query-widget', false>;
    retryLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimConfirmation extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_confirmations';
  info: {
    displayName: 'confirmation';
  };
  attributes: {
    cancel: Schema.Attribute.String;
    confirm: Schema.Attribute.String;
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_contact_details';
  info: {
    displayName: 'contactDetails';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
    validEmailLabel: Schema.Attribute.String;
    validNumberLabel: Schema.Attribute.String;
  };
}

export interface HealthClaimEmptyStateProps extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_empty_state_props';
  info: {
    displayName: 'emptyStateProps';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimEnterClaimDetails extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_enter_claim_details';
  info: {
    displayName: 'enterClaimDetails';
  };
  attributes: {
    admissionDateLabel: Schema.Attribute.String;
    approvedAmountLabel: Schema.Attribute.String;
    claimAmountLabel: Schema.Attribute.String;
    claimNoLabel: Schema.Attribute.String;
    copyLabel: Schema.Attribute.String;
    description: Schema.Attribute.String;
    dischargeDateLabel: Schema.Attribute.String;
    enterClaimDetailsLabel: Schema.Attribute.String;
    enterClaimDetailsPlaceholder: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    info: Schema.Attribute.String;
    intimatedOnInfo: Schema.Attribute.String;
    intimatedOnLabel: Schema.Attribute.String;
    intimidatedLabel: Schema.Attribute.String;
    parentClaimNo: Schema.Attribute.String;
    parentClaimNoLabel: Schema.Attribute.String;
    patientNameLabel: Schema.Attribute.String;
    previousSupplementaryClaims: Schema.Attribute.String;
    previousSupplementaryClaimsLabel: Schema.Attribute.String;
    supplementaryClaimInfo: Schema.Attribute.String;
    title: Schema.Attribute.String;
    trackLabel: Schema.Attribute.String;
    viewDetailLabel: Schema.Attribute.String;
    viewLess: Schema.Attribute.String;
  };
}

export interface HealthClaimErrorSuccessJson extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_error_success_jsons';
  info: {
    description: '';
    displayName: 'errorSuccessJson';
  };
  attributes: {
    claimSuccess: Schema.Attribute.Component<
      'health-claim.claim-success',
      false
    >;
    claimUnableToProceed: Schema.Attribute.Component<
      'health-claim.claim-unable-to-proceed',
      false
    >;
    confirmation: Schema.Attribute.Component<
      'health-claim.confirmation',
      false
    >;
    notActiveClaims: Schema.Attribute.Component<
      'health-claim.not-active-claims',
      false
    >;
    serverError: Schema.Attribute.Component<'health-claim.server-error', false>;
  };
}

export interface HealthClaimHealthFiling extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_health_filings';
  info: {
    displayName: 'healthFiling';
  };
  attributes: {
    description: Schema.Attribute.String;
    imaegUrl: Schema.Attribute.String;
    modes: Schema.Attribute.Component<'health-claim.modes', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimHospitalisation extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_hospitalisations';
  info: {
    displayName: 'hospitalisation';
  };
  attributes: {};
}

export interface HealthClaimModes extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_modes';
  info: {
    displayName: 'modes';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimNotActiveClaims extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_not_active_claims';
  info: {
    description: '';
    displayName: 'notActiveClaims';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    queryWidget: Schema.Attribute.Component<'health-claim.query-widget', false>;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimPinCode extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_pin_codes';
  info: {
    displayName: 'pinCode';
  };
  attributes: {
    label: Schema.Attribute.String;
    pinCodeCardLabel: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    searchLabel: Schema.Attribute.String;
    searchResultLabel: Schema.Attribute.String;
    sheetTitle: Schema.Attribute.String;
  };
}

export interface HealthClaimQueryWidget extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_query_widgets';
  info: {
    displayName: 'queryWidget';
  };
  attributes: {
    contactMail: Schema.Attribute.String;
    contactText: Schema.Attribute.String;
  };
}

export interface HealthClaimQueryWidgetDump extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_query_widget_dumps';
  info: {
    displayName: 'queryWidgetDump';
  };
  attributes: {};
}

export interface HealthClaimSelectClaim extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_select_claims';
  info: {
    displayName: 'selectClaim';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    intimatedLabel: Schema.Attribute.String;
    patientLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimSelectHsp extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_select_hsps';
  info: {
    description: '';
    displayName: 'selectHsp';
  };
  attributes: {
    enterHospitalLabel: Schema.Attribute.String;
    fillHspDetails: Schema.Attribute.Component<
      'health-claim.title-img-and-desc',
      false
    >;
    imageUrl: Schema.Attribute.String;
    questionLabel: Schema.Attribute.String;
    searcghNotFoundDesc: Schema.Attribute.String;
    searchImageUrl: Schema.Attribute.String;
    searchNotFoubdLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimServerError extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_server_errors';
  info: {
    displayName: 'serverError';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    okayLabel: Schema.Attribute.String;
    queryWidget: Schema.Attribute.Component<'health-claim.query-widget', false>;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimState extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_states';
  info: {
    description: '';
    displayName: 'state';
  };
  attributes: {
    emptyStateProps: Schema.Attribute.Component<
      'health-claim.empty-state-props',
      false
    >;
    label: Schema.Attribute.String;
    placeHolder: Schema.Attribute.String;
    sheetTitle: Schema.Attribute.String;
  };
}

export interface HealthClaimStateCitySelection extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_state_city_selections';
  info: {
    description: '';
    displayName: 'stateCitySelection';
  };
  attributes: {
    city: Schema.Attribute.Component<'health-claim.city', false>;
    pinCode: Schema.Attribute.Component<'health-claim.pin-code', false>;
    state: Schema.Attribute.Component<'health-claim.state', false>;
  };
}

export interface HealthClaimSupplementary extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_supplementaries';
  info: {
    description: '';
    displayName: 'supplementary';
  };
  attributes: {
    enterClaimDetails: Schema.Attribute.Component<
      'health-claim.enter-claim-details',
      false
    >;
    queryWidgetDump: Schema.Attribute.Component<
      'health-claim.query-widget',
      false
    >;
    selectClaim: Schema.Attribute.Component<'health-claim.select-claim', false>;
  };
}

export interface HealthClaimTitleImgAndDesc extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_title_img_and_descs';
  info: {
    displayName: 'titleImgAndDesc';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HealthClaimTrackCard extends Struct.ComponentSchema {
  collectionName: 'components_health_claim_track_cards';
  info: {
    displayName: 'trackCard';
  };
  attributes: {
    claimLabel: Schema.Attribute.String;
  };
}

export interface HealthTrackAddDocumentCard extends Struct.ComponentSchema {
  collectionName: 'components_health_track_add_document_cards';
  info: {
    description: '';
    displayName: 'addDocumentCard';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    imageUrl: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HealthTrackDetailsRequired extends Struct.ComponentSchema {
  collectionName: 'components_health_track_details_requireds';
  info: {
    description: '';
    displayName: 'detailsRequired';
  };
  attributes: {
    detailsDesc: Schema.Attribute.Text & Schema.Attribute.Required;
    detailsEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    detailsEmailDesc: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HealthTrackErrorEncountered extends Struct.ComponentSchema {
  collectionName: 'components_health_track_error_encountereds';
  info: {
    description: '';
    displayName: 'errorEncountered';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    queryText: Schema.Attribute.Component<'health-track.query-text', false> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HealthTrackNoClaimFound extends Struct.ComponentSchema {
  collectionName: 'components_health_track_no_claim_founds';
  info: {
    description: '';
    displayName: 'noClaimFound';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    description2: Schema.Attribute.Text & Schema.Attribute.Required;
    imageUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    queryText: Schema.Attribute.Component<'health-track.query-text', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HealthTrackQueryText extends Struct.ComponentSchema {
  collectionName: 'components_health_track_query_texts';
  info: {
    description: '';
    displayName: 'queryText';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HealthTrackShowDocumentsCard extends Struct.ComponentSchema {
  collectionName: 'components_health_track_show_documents_cards';
  info: {
    description: '';
    displayName: 'showDocumentsCard';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HealthTrackSupplementaryCard extends Struct.ComponentSchema {
  collectionName: 'components_health_track_supplementary_cards';
  info: {
    description: '';
    displayName: 'supplementaryCard';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    imageUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HealthTrackTrackAClaim extends Struct.ComponentSchema {
  collectionName: 'components_health_track_track_a_claims';
  info: {
    description: '';
    displayName: 'trackAClaim';
  };
  attributes: {
    addDocumentCard: Schema.Attribute.Component<
      'health-track.add-document-card',
      false
    > &
      Schema.Attribute.Required;
    copyLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    detailsRequired: Schema.Attribute.Component<
      'health-track.details-required',
      false
    > &
      Schema.Attribute.Required;
    queryText: Schema.Attribute.Component<'health-track.query-text', false> &
      Schema.Attribute.Required;
    showDocumentsCard: Schema.Attribute.Component<
      'health-track.show-documents-card',
      false
    > &
      Schema.Attribute.Required;
    supplementaryCard: Schema.Attribute.Component<
      'health-track.supplementary-card',
      false
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
    trackCardObject: Schema.Attribute.Component<
      'health-track.track-card-object',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface HealthTrackTrackCardObject extends Struct.ComponentSchema {
  collectionName: 'components_health_track_track_card_objects';
  info: {
    description: '';
    displayName: 'trackCardObject';
  };
  attributes: {
    admissionDt: Schema.Attribute.String & Schema.Attribute.Required;
    approvedAmount: Schema.Attribute.String & Schema.Attribute.Required;
    claimedAmount: Schema.Attribute.String & Schema.Attribute.Required;
    claimNo: Schema.Attribute.String;
    claimType: Schema.Attribute.String & Schema.Attribute.Required;
    dischargeDt: Schema.Attribute.String & Schema.Attribute.Required;
    hegicCardNo: Schema.Attribute.String & Schema.Attribute.Required;
    hospitalName: Schema.Attribute.String & Schema.Attribute.Required;
    intimationDt: Schema.Attribute.String & Schema.Attribute.Required;
    patientName: Schema.Attribute.String & Schema.Attribute.Required;
    policyNo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HelloHello extends Struct.ComponentSchema {
  collectionName: 'components_hello_hellos';
  info: {
    displayName: 'Hello';
  };
  attributes: {};
}

export interface HelloRandom extends Struct.ComponentSchema {
  collectionName: 'components_hello_randoms';
  info: {
    displayName: 'random';
  };
  attributes: {
    kycStatus: Schema.Attribute.String;
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

export interface MotorClaimClaimList extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_claim_lists';
  info: {
    description: '';
    displayName: 'claimList';
  };
  attributes: {
    backendId: Schema.Attribute.Enumeration<['I', 'R']>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface MotorClaimEnterClaimDetails extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_enter_claim_details';
  info: {
    displayName: 'enterClaimDetails';
  };
  attributes: {
    accidentDateLabel: Schema.Attribute.String;
    accidentDatePlaceholder: Schema.Attribute.String;
    accidentPlaceLabel: Schema.Attribute.String;
    accidentPlacePlaceholder: Schema.Attribute.String;
    accidentTimeLabel: Schema.Attribute.String;
    accidentTimePlaceholder: Schema.Attribute.String;
    description: Schema.Attribute.String;
    pincodeLabel: Schema.Attribute.String;
    pincodePlaceholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MotorClaimEnterLossIncur extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_enter_loss_incurs';
  info: {
    displayName: 'enterLossIncur';
  };
  attributes: {
    description: Schema.Attribute.String;
    input: Schema.Attribute.Component<'motor-claim.input', false>;
    textArea: Schema.Attribute.Component<'motor-claim.text-area', false>;
    title: Schema.Attribute.String;
  };
}

export interface MotorClaimInput extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface MotorClaimNatureOfLoss extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_nature_of_losses';
  info: {
    displayName: 'natureOfLoss';
  };
  attributes: {
    backendValue: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MotorClaimProgressiveStepBar extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_progressive_step_bars';
  info: {
    description: '';
    displayName: 'progressiveStepBar';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface MotorClaimSelectNature extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_select_natures';
  info: {
    displayName: 'selectNature';
  };
  attributes: {
    description: Schema.Attribute.String;
    natureOfLoss: Schema.Attribute.Component<
      'motor-claim.nature-of-loss',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface MotorClaimSuccessfullyRegisteredCms
  extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_successfully_registered_cms';
  info: {
    displayName: 'successfullyRegisteredCms';
  };
  attributes: {
    copyPrefix: Schema.Attribute.String;
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MotorClaimSuccessfullySubmittedCms
  extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_successfully_submitted_cms';
  info: {
    displayName: 'successfullySubmittedCms';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MotorClaimTellusAboutYourself extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_tellus_about_yourselves';
  info: {
    displayName: 'tellusAboutYourself';
  };
  attributes: {
    checkboxText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    intimaterDetails: Schema.Attribute.String;
    intimaterName: Schema.Attribute.String;
    intimaterNamePlaceholder: Schema.Attribute.String;
    intimaterPhone: Schema.Attribute.String;
    intimaterPhonePlaceholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whosMakingClaim: Schema.Attribute.String;
  };
}

export interface MotorClaimTextArea extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_text_areas';
  info: {
    displayName: 'textArea';
  };
  attributes: {
    description: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface MotorClaimUnavailableClaimCms extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_unavailable_claim_cms';
  info: {
    displayName: 'unavailableClaimCms';
  };
  attributes: {};
}

export interface MotorClaimWhoIsClaiming extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_who_is_claimings';
  info: {
    displayName: 'whoIsClaiming';
  };
  attributes: {
    claimList: Schema.Attribute.Component<'motor-claim.claim-list', true>;
  };
}

export interface MotorClaimWrongClaimCms extends Struct.ComponentSchema {
  collectionName: 'components_motor_claim_wrong_claim_cms';
  info: {
    displayName: 'wrongClaimCms';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButtonText: Schema.Attribute.String;
    queryWidget: Schema.Attribute.Component<'health-track.query-text', false>;
    title: Schema.Attribute.String;
  };
}

export interface MotorRenewalAddOnCardDump extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_add_on_card_dumps';
  info: {
    displayName: 'addOnCardDump';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    editText: Schema.Attribute.String;
    gstText: Schema.Attribute.String;
    modalTitle: Schema.Attribute.String;
    premiumText: Schema.Attribute.String;
    selectText: Schema.Attribute.String;
  };
}

export interface MotorRenewalAddOnCheckboxInputDump
  extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_add_on_checkbox_input_dumps';
  info: {
    displayName: 'addOnCheckboxInputDump';
  };
  attributes: {
    coverDisplayName: Schema.Attribute.String;
    coverName: Schema.Attribute.String;
    coverPremium: Schema.Attribute.String;
    info: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean;
  };
}

export interface MotorRenewalBackButtonRequestCallbackDump
  extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_back_button_request_callback_dumps';
  info: {
    displayName: 'backButtonRequestCallbackDump';
  };
  attributes: {
    imgUrl: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MotorRenewalConsent extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_consents';
  info: {
    displayName: 'consent';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface MotorRenewalConsentDump extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_consent_dumps';
  info: {
    description: '';
    displayName: 'consentDump';
  };
  attributes: {
    consent: Schema.Attribute.Component<'motor-renewal.consent', false>;
    knowPolicy: Schema.Attribute.Component<'terms.terms', true>;
    terms: Schema.Attribute.Component<'terms.terms', false>;
  };
}

export interface MotorRenewalCustomIdvInputDump extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_custom_idv_input_dumps';
  info: {
    displayName: 'customIDVInputDump';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    editText: Schema.Attribute.String;
    enterCustomIDVButtonText: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface MotorRenewalDetailsMismatchDump
  extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_details_mismatch_dumps';
  info: {
    displayName: 'detailsMismatchDump';
  };
  attributes: {
    beneficiaryName: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    SecondaryButtonText: Schema.Attribute.String;
    textOne: Schema.Attribute.String;
    textTwo: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MotorRenewalFailedPaymentDump extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_failed_payment_dumps';
  info: {
    displayName: 'failedPaymentDump';
  };
  attributes: {
    imgUrl: Schema.Attribute.String;
    retryPayment: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    transactionId: Schema.Attribute.String;
  };
}

export interface MotorRenewalInsuredDeclaredValueCardDump
  extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_insured_declared_value_card_dumps';
  info: {
    displayName: 'insuredDeclaredValueCardDump';
  };
  attributes: {
    customIDVText: Schema.Attribute.String;
    headerPretext: Schema.Attribute.String;
    iDVMaxText: Schema.Attribute.String;
    iDVMinText: Schema.Attribute.String;
    labelForTooltip: Schema.Attribute.String;
    modalIDVSubTitle: Schema.Attribute.String;
    modalIDVTitle: Schema.Attribute.String;
    proceedText: Schema.Attribute.String;
    recommendedText: Schema.Attribute.String;
    selectedIDV: Schema.Attribute.String;
  };
}

export interface MotorRenewalLoadingScreenDump extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_loading_screen_dumps';
  info: {
    displayName: 'loadingScreenDump';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MotorRenewalMotoRenewalLanding extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_moto_renewal_landings';
  info: {
    description: '';
    displayName: 'motoRenewalLanding';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    greatSaving: Schema.Attribute.String;
    gstMobile: Schema.Attribute.String;
    gstWeb: Schema.Attribute.String;
    inThisPolicy: Schema.Attribute.String;
    premiumBreakup: Schema.Attribute.String;
    totalPremium: Schema.Attribute.String;
    viewDetails: Schema.Attribute.String;
  };
}

export interface MotorRenewalMotorRenewalLandingDump
  extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_motor_renewal_landing_dumps';
  info: {
    displayName: 'motorRenewalLandingDump';
  };
  attributes: {
    PlanTypeTitle: Schema.Attribute.String;
    planTypeTooltip: Schema.Attribute.String;
    viewBenefits: Schema.Attribute.String;
  };
}

export interface MotorRenewalNoClaimBonusDump extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_no_claim_bonus_dumps';
  info: {
    displayName: 'noClaimBonusDump';
  };
  attributes: {
    discountImage: Schema.Attribute.String;
    discountText: Schema.Attribute.String;
    ncbDiscountAmount: Schema.Attribute.Integer;
    ncbDiscountPercentage: Schema.Attribute.Integer;
    noClaimTitle: Schema.Attribute.String;
    noClaimTooltip: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MotorRenewalPaymentSuccessDump extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_payment_success_dumps';
  info: {
    displayName: 'paymentSuccessDump';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    copySentText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    paymentTimeNote: Schema.Attribute.String;
    paymentTimerScreen: Schema.Attribute.String;
    preText: Schema.Attribute.String;
    thankyouText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MotorRenewalPolicyNumberDump extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_policy_number_dumps';
  info: {
    displayName: 'policyNumberDump';
  };
  attributes: {
    logo: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MotorRenewalPremiumBreakupDump extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_premium_breakup_dumps';
  info: {
    displayName: 'premiumBreakupDump';
  };
  attributes: {
    basePremium: Schema.Attribute.String;
    gstText: Schema.Attribute.String;
    ncbDiscount: Schema.Attribute.String;
    title: Schema.Attribute.String;
    tpPremium: Schema.Attribute.String;
  };
}

export interface MotorRenewalRequestCallback extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_request_callbacks';
  info: {
    displayName: 'requestCallback';
  };
  attributes: {
    anyConcerns: Schema.Attribute.String;
    fromOurExecutive: Schema.Attribute.String;
    requestCallback: Schema.Attribute.String;
  };
}

export interface MotorRenewalRequestCallbackBsDump
  extends Struct.ComponentSchema {
  collectionName: 'components_motor_renewal_request_callback_bs_dumps';
  info: {
    displayName: 'requestCallbackBSDump';
  };
  attributes: {
    imgUrl: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MotorTrackInformationMismatch extends Struct.ComponentSchema {
  collectionName: 'components_motor_track_information_mismatches';
  info: {
    displayName: 'informationMismatch';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    queryText: Schema.Attribute.Component<'motor-track.query-text', false>;
    title: Schema.Attribute.String;
  };
}

export interface MotorTrackOrganizationInput extends Struct.ComponentSchema {
  collectionName: 'components_motor_track_organization_inputs';
  info: {
    displayName: 'OrganizationInput';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    Placeholder: Schema.Attribute.String;
    sheetTitle: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface MotorTrackQueryText extends Struct.ComponentSchema {
  collectionName: 'components_motor_track_query_texts';
  info: {
    displayName: 'queryText';
  };
  attributes: {
    contactMail: Schema.Attribute.String;
    contactNumber: Schema.Attribute.String;
    contactText: Schema.Attribute.String;
  };
}

export interface MotorTrackQueryWidget extends Struct.ComponentSchema {
  collectionName: 'components_motor_track_query_widgets';
  info: {
    displayName: 'queryWidget';
  };
  attributes: {
    contactMail: Schema.Attribute.String;
    contactText: Schema.Attribute.String;
  };
}

export interface MotorTrackSomethingWentWrong extends Struct.ComponentSchema {
  collectionName: 'components_motor_track_something_went_wrongs';
  info: {
    displayName: 'somethingWentWrong';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    queryWidget: Schema.Attribute.Component<'motor-track.query-widget', false>;
    title: Schema.Attribute.String;
  };
}

export interface PolicyManualLinkingCancelledExpired
  extends Struct.ComponentSchema {
  collectionName: 'components_policy_manual_linking_cancelled_expireds';
  info: {
    displayName: 'cancelledExpired';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    cancelledDesc: Schema.Attribute.String;
    cancelledTitle: Schema.Attribute.String;
    expiredDesc: Schema.Attribute.String;
    expiredTitle: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
  };
}

export interface PolicyManualLinkingCard extends Struct.ComponentSchema {
  collectionName: 'components_policy_manual_linking_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    desc: Schema.Attribute.String;
    key: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PolicyManualLinkingLandingPage extends Struct.ComponentSchema {
  collectionName: 'components_policy_manual_linking_landing_pages';
  info: {
    description: '';
    displayName: 'landingPage';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    description: Schema.Attribute.String;
    enterPolicyNumber: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    inputHint: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whenCanContent: Schema.Attribute.Component<
      'policy-manual-linking.when-can-content',
      true
    >;
    whenCanTitle: Schema.Attribute.String;
  };
}

export interface PolicyManualLinkingOtpView extends Struct.ComponentSchema {
  collectionName: 'components_policy_manual_linking_otp_views';
  info: {
    displayName: 'otpView';
  };
  attributes: {
    incorrectOtp: Schema.Attribute.String;
    resendCode: Schema.Attribute.String;
    resendIn: Schema.Attribute.String;
    resendThrough: Schema.Attribute.String;
    sent: Schema.Attribute.String;
    sms: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

export interface PolicyManualLinkingPersonalInfo
  extends Struct.ComponentSchema {
  collectionName: 'components_policy_manual_linking_personal_infos';
  info: {
    displayName: 'personalInfo';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PolicyManualLinkingSelectVerificationType
  extends Struct.ComponentSchema {
  collectionName: 'components_policy_manual_linking_select_verification_types';
  info: {
    description: '';
    displayName: 'selectVerificationType';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    types: Schema.Attribute.Component<'policy-manual-linking.types', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface PolicyManualLinkingThankYou extends Struct.ComponentSchema {
  collectionName: 'components_policy_manual_linking_thank_yous';
  info: {
    displayName: 'thankYou';
  };
  attributes: {
    alreadySubmittedTitle: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    submittingDesc: Schema.Attribute.String;
    submittingTitle: Schema.Attribute.String;
    ticketNo: Schema.Attribute.String;
  };
}

export interface PolicyManualLinkingTypes extends Struct.ComponentSchema {
  collectionName: 'components_policy_manual_linking_types';
  info: {
    description: '';
    displayName: 'types';
  };
  attributes: {
    desc: Schema.Attribute.String;
    key: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PolicyManualLinkingUnableToFetch
  extends Struct.ComponentSchema {
  collectionName: 'components_policy_manual_linking_unable_to_fetches';
  info: {
    displayName: 'unableToFetch';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PolicyManualLinkingWhenCanContent
  extends Struct.ComponentSchema {
  collectionName: 'components_policy_manual_linking_when_can_contents';
  info: {
    displayName: 'whenCanContent';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface PolicySelectionDownloadPolicyRequest
  extends Struct.ComponentSchema {
  collectionName: 'components_policy_selection_download_policy_requests';
  info: {
    displayName: 'downloadPolicyRequest';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PolicySelectionImages extends Struct.ComponentSchema {
  collectionName: 'components_policy_selection_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    default: Schema.Attribute.String;
    health: Schema.Attribute.String;
    motor: Schema.Attribute.String;
    pet: Schema.Attribute.String;
  };
}

export interface PolicySelectionNoPolicy extends Struct.ComponentSchema {
  collectionName: 'components_policy_selection_no_policies';
  info: {
    description: '';
    displayName: 'noPolicy';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PolicySelectionPolicySelectionCmsData
  extends Struct.ComponentSchema {
  collectionName: 'components_policy_selection_policy_selection_cms_data';
  info: {
    description: '';
    displayName: 'policySelectionCmsData';
  };
  attributes: {
    cannotSeePolicy: Schema.Attribute.String;
    downloadPolicyRequest: Schema.Attribute.Component<
      'policy-selection.download-policy-request',
      false
    >;
    images: Schema.Attribute.Component<'policy-selection.images', false>;
    noPolicy: Schema.Attribute.Component<'policy-selection.no-policy', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PreviousYearPolicyUploadFailure
  extends Struct.ComponentSchema {
  collectionName: 'components_previous_year_policy_upload_failures';
  info: {
    description: '';
    displayName: 'failure';
  };
  attributes: {
    btnText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    queryWidget: Schema.Attribute.Component<
      'previous-year-policy-upload.query-widget',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface PreviousYearPolicyUploadHeader extends Struct.ComponentSchema {
  collectionName: 'components_previous_year_policy_upload_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    sectionTopHEader: Schema.Attribute.Component<
      'previous-year-policy-upload.section-top-h-eader',
      false
    >;
  };
}

export interface PreviousYearPolicyUploadPreviousYearPolicyUpload
  extends Struct.ComponentSchema {
  collectionName: 'components_previous_year_policy_upload_previous_year_policy_uploads';
  info: {
    description: '';
    displayName: 'previous-year-policy-upload';
  };
  attributes: {
    header: Schema.Attribute.Component<
      'previous-year-policy-upload.header',
      false
    >;
    remarks: Schema.Attribute.Component<
      'previous-year-policy-upload.remarks',
      false
    >;
    statuses: Schema.Attribute.Component<
      'previous-year-policy-upload.status',
      false
    >;
    uploadSection: Schema.Attribute.Component<
      'previous-year-policy-upload.upload-section',
      false
    >;
  };
}

export interface PreviousYearPolicyUploadQueryWidget
  extends Struct.ComponentSchema {
  collectionName: 'components_previous_year_policy_upload_query_widgets';
  info: {
    displayName: 'queryWidget';
  };
  attributes: {
    contactText: Schema.Attribute.String;
    mail: Schema.Attribute.String;
  };
}

export interface PreviousYearPolicyUploadRemarks
  extends Struct.ComponentSchema {
  collectionName: 'components_previous_year_policy_upload_remarks';
  info: {
    displayName: 'remarks';
  };
  attributes: {
    placeholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PreviousYearPolicyUploadSectionTopHEader
  extends Struct.ComponentSchema {
  collectionName: 'components_previous_year_policy_upload_section_top_h_eaders';
  info: {
    displayName: 'sectionTopHEader';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PreviousYearPolicyUploadStatus extends Struct.ComponentSchema {
  collectionName: 'components_previous_year_policy_upload_statuses';
  info: {
    description: '';
    displayName: 'status';
  };
  attributes: {
    failure: Schema.Attribute.Component<
      'previous-year-policy-upload.failure',
      false
    >;
    success: Schema.Attribute.Component<
      'previous-year-policy-upload.success',
      false
    >;
  };
}

export interface PreviousYearPolicyUploadSuccess
  extends Struct.ComponentSchema {
  collectionName: 'components_previous_year_policy_upload_successes';
  info: {
    displayName: 'success';
  };
  attributes: {
    btnText: Schema.Attribute.String;
    copyPrefix: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PreviousYearPolicyUploadUploadSection
  extends Struct.ComponentSchema {
  collectionName: 'components_previous_year_policy_upload_upload_sections';
  info: {
    displayName: 'uploadSection';
  };
  attributes: {
    btn: Schema.Attribute.String;
    header: Schema.Attribute.String;
  };
}

export interface QuickActionAddAccountDetails extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_add_account_details';
  info: {
    displayName: 'addAccountDetails';
  };
  attributes: {
    addAccountDetails: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionCard extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    key: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface QuickActionChangeRequestForm extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_change_request_forms';
  info: {
    displayName: 'changeRequestForm';
  };
  attributes: {
    changeRequestForm: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionChangesInPolicyRenewal
  extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_changes_in_policy_renewals';
  info: {
    displayName: 'changesInPolicyRenewal';
  };
  attributes: {
    changesInPolicyRenewal: Schema.Attribute.Component<
      'quick-action.card',
      false
    >;
  };
}

export interface QuickActionChecklistForChange extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_checklist_for_changes';
  info: {
    displayName: 'checklistForChange';
  };
  attributes: {
    checklistForChange: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionClaimQuery extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_claim_queries';
  info: {
    displayName: 'claimQuery';
  };
  attributes: {
    claimQuery: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionClaimRegistration extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_claim_registrations';
  info: {
    displayName: 'claimRegistration';
  };
  attributes: {
    claimRegistration: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionCustomerDueDiligence
  extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_customer_due_diligences';
  info: {
    displayName: 'customerDueDiligence';
  };
  attributes: {
    customerDueDiligence: Schema.Attribute.Component<
      'quick-action.card',
      false
    >;
  };
}

export interface QuickActionDeactivateAutoRenewal
  extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_deactivate_auto_renewals';
  info: {
    displayName: 'deactivateAutoRenewal';
  };
  attributes: {
    deactivateAutoRenewal: Schema.Attribute.Component<
      'quick-action.card',
      false
    >;
  };
}

export interface QuickActionDiseaseDisclosure extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_disease_disclosures';
  info: {
    displayName: 'diseaseDisclosure';
  };
  attributes: {
    diseaseDisclosure: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionEkycLink extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_ekyc_links';
  info: {
    displayName: 'ekycLink';
  };
  attributes: {
    ekycLink: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionEkycProcedure extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_ekyc_procedures';
  info: {
    displayName: 'ekycProcedure';
  };
  attributes: {
    ekycProcedure: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionEkycRegistration extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_ekyc_registrations';
  info: {
    displayName: 'ekycRegistration';
  };
  attributes: {
    ekycRegistration: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionEkycTracking extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_ekyc_trackings';
  info: {
    displayName: 'ekycTracking';
  };
  attributes: {
    ekycTracking: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionEmailPolicyCopy extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_email_policy_copies';
  info: {
    displayName: 'emailPolicyCopy';
  };
  attributes: {
    emailPolicyCopy: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionHealthCard extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_health_cards';
  info: {
    displayName: 'healthCard';
  };
  attributes: {
    healthCard: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionInstallmentPayment extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_installment_payments';
  info: {
    displayName: 'installmentPayment';
  };
  attributes: {
    installmentPayment: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionInstallmentTracker extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_installment_trackers';
  info: {
    displayName: 'installmentTracker';
  };
  attributes: {
    installmentTracker: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionKnowYourPolicy extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_know_your_policies';
  info: {
    displayName: 'knowYourPolicy';
  };
  attributes: {
    knowYourPolicy: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionKyc extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_kycs';
  info: {
    displayName: 'kyc';
  };
  attributes: {
    kyc: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionLinkEia extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_link_eias';
  info: {
    displayName: 'linkEia';
  };
  attributes: {
    linkEia: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionMakePayments extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_make_payments';
  info: {
    displayName: 'makePayments';
  };
  attributes: {
    makePayments: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionOdometerReadingUpload
  extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_odometer_reading_uploads';
  info: {
    displayName: 'odometerReadingUpload';
  };
  attributes: {
    odometerReadingUpload: Schema.Attribute.Component<
      'quick-action.card',
      false
    >;
  };
}

export interface QuickActionPawsAndClaws extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_paws_and_claws';
  info: {
    displayName: 'paws&Claws';
  };
  attributes: {
    pawsAndClaws: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionPolicyAlterations extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_policy_alterations';
  info: {
    displayName: 'policyAlterations';
  };
  attributes: {
    policyAlterations: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionPolicyCancellationRequest
  extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_policy_cancellation_requests';
  info: {
    displayName: 'policyCancellationRequest';
  };
  attributes: {
    policyCancellationRequest: Schema.Attribute.Component<
      'quick-action.card',
      false
    >;
  };
}

export interface QuickActionPolicyDispatch extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_policy_dispatches';
  info: {
    displayName: 'policyDispatch';
  };
  attributes: {
    policyDispatch: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionPreFilledClaimForm extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_pre_filled_claim_forms';
  info: {
    displayName: 'preFilledClaimForm';
  };
  attributes: {
    preFilledClaimForm: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionPrePolicyReports extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_pre_policy_reports';
  info: {
    displayName: 'prePolicyReports';
  };
  attributes: {
    prePolicyReports: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionPrevYearPolicy extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_prev_year_policies';
  info: {
    displayName: 'prevYearPolicy';
  };
  attributes: {
    prevYearPolicy: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionQuickActionsDump extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_quick_actions_dumps';
  info: {
    displayName: 'quickActionsDump';
  };
  attributes: {};
}

export interface QuickActionRaiseQuery extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_raise_queries';
  info: {
    displayName: 'raiseQuery';
  };
  attributes: {
    raiseQuery: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionRequestProposalForm extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_request_proposal_forms';
  info: {
    displayName: 'requestProposalForm';
  };
  attributes: {
    requestProposalForm: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionReverificationNcbPyp
  extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_reverification_ncb_pyps';
  info: {
    displayName: 'reverificationNcbPyp';
  };
  attributes: {
    reverificationNcbPyp: Schema.Attribute.Component<
      'quick-action.card',
      false
    >;
  };
}

export interface QuickActionTaxCertificate extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_tax_certificates';
  info: {
    displayName: 'taxCertificate';
  };
  attributes: {
    taxCertificate: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionTrackCancellationStatus
  extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_track_cancellation_statuses';
  info: {
    displayName: 'trackCancellationStatus';
  };
  attributes: {
    trackCancellationStatus: Schema.Attribute.Component<
      'quick-action.card',
      false
    >;
  };
}

export interface QuickActionTrackClaim extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_track_claims';
  info: {
    displayName: 'trackClaim';
  };
  attributes: {
    trackClaim: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionTrackPremiumRecovery
  extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_track_premium_recoveries';
  info: {
    displayName: 'trackPremiumRecovery';
  };
  attributes: {
    trackPremiumRecovery: Schema.Attribute.Component<
      'quick-action.card',
      false
    >;
  };
}

export interface QuickActionTransferOfInsuranceMotor
  extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_transfer_of_insurance_motors';
  info: {
    displayName: 'transferOfInsuranceMotor';
  };
  attributes: {
    transferOfInsuranceMotor: Schema.Attribute.Component<
      'quick-action.card',
      false
    >;
  };
}

export interface QuickActionUpdateCardDetails extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_update_card_details';
  info: {
    displayName: 'UpdateCardDetails';
  };
  attributes: {
    UpdateCardDetails: Schema.Attribute.Component<'quick-action.card', false>;
  };
}

export interface QuickActionUpdateContactDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_update_contact_details';
  info: {
    displayName: 'updateContactDetails';
  };
  attributes: {
    updateContactDetails: Schema.Attribute.Component<
      'quick-action.card',
      false
    >;
  };
}

export interface QuickActionUploadHealthDocs extends Struct.ComponentSchema {
  collectionName: 'components_quick_action_upload_health_docs';
  info: {
    displayName: 'uploadHealthDocs';
  };
  attributes: {
    uploadHealthDocs: Schema.Attribute.Component<'quick-action.card', false>;
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

export interface SharedTitleDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_descriptions';
  info: {
    description: '';
    displayName: 'title-description';
  };
  attributes: {
    claimLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TermsTerms extends Struct.ComponentSchema {
  collectionName: 'components_terms_terms';
  info: {
    description: '';
    displayName: 'terms';
  };
  attributes: {
    highlight: Schema.Attribute.String;
    prefix: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article-components.collections': ArticleComponentsCollections;
      'article-components.image-description-component': ArticleComponentsImageDescriptionComponent;
      'article-components.image-descriptions': ArticleComponentsImageDescriptions;
      'article-components.quote-banner': ArticleComponentsQuoteBanner;
      'article-components.rich-text-json': ArticleComponentsRichTextJson;
      'article-components.video-url': ArticleComponentsVideoUrl;
      'claims-static.award-cont': ClaimsStaticAwardCont;
      'claims-static.bullet-points-claim': ClaimsStaticBulletPointsClaim;
      'claims-static.button': ClaimsStaticButton;
      'claims-static.car-insurance': ClaimsStaticCarInsurance;
      'claims-static.cattle-insurance-dump': ClaimsStaticCattleInsuranceDump;
      'claims-static.claim-steps': ClaimsStaticClaimSteps;
      'claims-static.claim-tabs': ClaimsStaticClaimTabs;
      'claims-static.critical-ilness-insurance': ClaimsStaticCriticalIlnessInsurance;
      'claims-static.document-checklist': ClaimsStaticDocumentChecklist;
      'claims-static.group-medical-insurance': ClaimsStaticGroupMedicalInsurance;
      'claims-static.group-personal-insurance': ClaimsStaticGroupPersonalInsurance;
      'claims-static.group-travel-insurance': ClaimsStaticGroupTravelInsurance;
      'claims-static.heading': ClaimsStaticHeading;
      'claims-static.heading-claim': ClaimsStaticHeadingClaim;
      'claims-static.health-insurance': ClaimsStaticHealthInsurance;
      'claims-static.info-cont': ClaimsStaticInfoCont;
      'claims-static.kidnap-extortion-insurance-dump': ClaimsStaticKidnapExtortionInsuranceDump;
      'claims-static.label-cont': ClaimsStaticLabelCont;
      'claims-static.marine-hull-insurance-dump': ClaimsStaticMarineHullInsuranceDump;
      'claims-static.personal-accident-insurance': ClaimsStaticPersonalAccidentInsurance;
      'claims-static.points-container': ClaimsStaticPointsContainer;
      'claims-static.rainfall-index-insurance-dump': ClaimsStaticRainfallIndexInsuranceDump;
      'claims-static.reimbursement-steps': ClaimsStaticReimbursementSteps;
      'claims-static.section-heading': ClaimsStaticSectionHeading;
      'claims-static.sections': ClaimsStaticSections;
      'claims-static.tabs': ClaimsStaticTabs;
      'claims-static.tabs-cont': ClaimsStaticTabsCont;
      'claims-static.travel-insurance': ClaimsStaticTravelInsurance;
      'claims-static.two-wheeler-insurance': ClaimsStaticTwoWheelerInsurance;
      'claims.banner': ClaimsBanner;
      'claims.claim-banner': ClaimsClaimBanner;
      'claims.tabs-claim-page': ClaimsTabsClaimPage;
      'customer-due-diligence.annual-income': CustomerDueDiligenceAnnualIncome;
      'customer-due-diligence.customer-due-diligence': CustomerDueDiligenceCustomerDueDiligence;
      'customer-due-diligence.ekyc-details': CustomerDueDiligenceEkycDetails;
      'customer-due-diligence.indian': CustomerDueDiligenceIndian;
      'customer-due-diligence.is-politically-exposed': CustomerDueDiligenceIsPoliticallyExposed;
      'customer-due-diligence.marital-status': CustomerDueDiligenceMaritalStatus;
      'customer-due-diligence.mothers-name': CustomerDueDiligenceMothersName;
      'customer-due-diligence.nationality': CustomerDueDiligenceNationality;
      'customer-due-diligence.no': CustomerDueDiligenceNo;
      'customer-due-diligence.occupation': CustomerDueDiligenceOccupation;
      'customer-due-diligence.organization-type': CustomerDueDiligenceOrganizationType;
      'customer-due-diligence.query-widget': CustomerDueDiligenceQueryWidget;
      'customer-due-diligence.server-error': CustomerDueDiligenceServerError;
      'customer-due-diligence.submit-success': CustomerDueDiligenceSubmitSuccess;
      'customer-due-diligence.tip-info': CustomerDueDiligenceTipInfo;
      'customer-due-diligence.title': CustomerDueDiligenceTitle;
      'customer-due-diligence.yes': CustomerDueDiligenceYes;
      'dashboard-buy-insurance.card': DashboardBuyInsuranceCard;
      'dashboard-buy-insurance.commercial': DashboardBuyInsuranceCommercial;
      'dashboard-buy-insurance.corporate': DashboardBuyInsuranceCorporate;
      'dashboard-buy-insurance.cyber': DashboardBuyInsuranceCyber;
      'dashboard-buy-insurance.four-wheeler': DashboardBuyInsuranceFourWheeler;
      'dashboard-buy-insurance.health': DashboardBuyInsuranceHealth;
      'dashboard-buy-insurance.home': DashboardBuyInsuranceHome;
      'dashboard-buy-insurance.link-policy': DashboardBuyInsuranceLinkPolicy;
      'dashboard-buy-insurance.needs-your-attention': DashboardBuyInsuranceNeedsYourAttention;
      'dashboard-buy-insurance.pet': DashboardBuyInsurancePet;
      'dashboard-buy-insurance.pmsby': DashboardBuyInsurancePmsby;
      'dashboard-buy-insurance.resume-journey': DashboardBuyInsuranceResumeJourney;
      'dashboard-buy-insurance.travel': DashboardBuyInsuranceTravel;
      'dashboard-buy-insurance.two-wheeler': DashboardBuyInsuranceTwoWheeler;
      'dashboard-ecosystem.card': DashboardEcosystemCard;
      'dashboard-ecosystem.dashboard-ecosystem': DashboardEcosystemDashboardEcosystem;
      'dashboard-ecosystem.health': DashboardEcosystemHealth;
      'dashboard-ecosystem.pets': DashboardEcosystemPets;
      'dashboard-ecosystem.title': DashboardEcosystemTitle;
      'dashboard-explore-fourwheeler.card': DashboardExploreFourwheelerCard;
      'dashboard-explore-fourwheeler.dashboard-explore-fourwheeler': DashboardExploreFourwheelerDashboardExploreFourwheeler;
      'dashboard-explore-fourwheeler.four-wheeler': DashboardExploreFourwheelerFourWheeler;
      'dashboard-explore-fourwheeler.two-wheeler': DashboardExploreFourwheelerTwoWheeler;
      'dashboard-explore-more.card': DashboardExploreMoreCard;
      'dashboard-explore-more.card-one': DashboardExploreMoreCardOne;
      'dashboard-explore-more.card-three': DashboardExploreMoreCardThree;
      'dashboard-explore-more.card-two': DashboardExploreMoreCardTwo;
      'dashboard-explore-more.dashboard-explore-more': DashboardExploreMoreDashboardExploreMore;
      'dashboard-latest-in-hdfc.card': DashboardLatestInHdfcCard;
      'dashboard-latest-in-hdfc.dashboard-latest-in-hdfc': DashboardLatestInHdfcDashboardLatestInHdfc;
      'dashboard-quick-action.card': DashboardQuickActionCard;
      'dashboard-quick-action.claim-registration': DashboardQuickActionClaimRegistration;
      'dashboard-quick-action.dashboard-quick-action': DashboardQuickActionDashboardQuickAction;
      'dashboard-quick-action.ekyc-procedure': DashboardQuickActionEkycProcedure;
      'dashboard-quick-action.ekyc-registration': DashboardQuickActionEkycRegistration;
      'dashboard-quick-action.link-eia': DashboardQuickActionLinkEia;
      'dashboard-quick-action.renew-policy': DashboardQuickActionRenewPolicy;
      'dashboard-quick-action.track-claim': DashboardQuickActionTrackClaim;
      'dashboard-trusted-by-customer.card': DashboardTrustedByCustomerCard;
      'dashboard-trusted-by-customer.cashless-network': DashboardTrustedByCustomerCashlessNetwork;
      'dashboard-trusted-by-customer.claim-settlement-rate': DashboardTrustedByCustomerClaimSettlementRate;
      'dashboard-trusted-by-customer.customer-support': DashboardTrustedByCustomerCustomerSupport;
      'dashboard-trusted-by-customer.dashboard-trusted-by-customer': DashboardTrustedByCustomerDashboardTrustedByCustomer;
      'dashboard-trusted-by-customer.happy-customers': DashboardTrustedByCustomerHappyCustomers;
      'dashboard.card-alignment': DashboardCardAlignment;
      'dashboard.dashboard-cms-data': DashboardDashboardCmsData;
      'dashboard.dashboard-connect-with-us-cms': DashboardDashboardConnectWithUsCms;
      'dashboard.dashboard-newsletter-cms': DashboardDashboardNewsletterCms;
      'dashboard.ecosystem-qr-cms': DashboardEcosystemQrCms;
      'dashboard.support-cms': DashboardSupportCms;
      'document-uploader.bottom-nav': DocumentUploaderBottomNav;
      'document-uploader.camera': DocumentUploaderCamera;
      'document-uploader.claim-document-list': DocumentUploaderClaimDocumentList;
      'document-uploader.confirm-submit': DocumentUploaderConfirmSubmit;
      'document-uploader.document-modal': DocumentUploaderDocumentModal;
      'document-uploader.document-progress-modal': DocumentUploaderDocumentProgressModal;
      'document-uploader.document-upload-modal': DocumentUploaderDocumentUploadModal;
      'document-uploader.error-modal': DocumentUploaderErrorModal;
      'document-uploader.error-screen': DocumentUploaderErrorScreen;
      'document-uploader.error-success': DocumentUploaderErrorSuccess;
      'document-uploader.error-success-json': DocumentUploaderErrorSuccessJson;
      'document-uploader.file-blank': DocumentUploaderFileBlank;
      'document-uploader.file-not-contain-dot': DocumentUploaderFileNotContainDot;
      'document-uploader.go-back-sheet': DocumentUploaderGoBackSheet;
      'document-uploader.modal': DocumentUploaderModal;
      'document-uploader.query-widget': DocumentUploaderQueryWidget;
      'document-uploader.query-widget-success': DocumentUploaderQueryWidgetSuccess;
      'document-uploader.span-text': DocumentUploaderSpanText;
      'document-uploader.submission-error': DocumentUploaderSubmissionError;
      'document-uploader.submit-document-dump': DocumentUploaderSubmitDocumentDump;
      'document-uploader.success': DocumentUploaderSuccess;
      'document-uploader.upload-required-documents': DocumentUploaderUploadRequiredDocuments;
      'ekyc-track.aadhar-input': EkycTrackAadharInput;
      'ekyc-track.aadhar-verification': EkycTrackAadharVerification;
      'ekyc-track.aadhar-verification-error': EkycTrackAadharVerificationError;
      'ekyc-track.aadhar-verification-input-label': EkycTrackAadharVerificationInputLabel;
      'ekyc-track.bottom-sectin': EkycTrackBottomSectin;
      'ekyc-track.bottom-section': EkycTrackBottomSection;
      'ekyc-track.cards-data': EkycTrackCardsData;
      'ekyc-track.claim-id-verification': EkycTrackClaimIdVerification;
      'ekyc-track.cms-ekyc-mapper': EkycTrackCmsEkycMapper;
      'ekyc-track.dob-input': EkycTrackDobInput;
      'ekyc-track.error': EkycTrackError;
      'ekyc-track.error-pop-up': EkycTrackErrorPopUp;
      'ekyc-track.fetch-error': EkycTrackFetchError;
      'ekyc-track.header': EkycTrackHeader;
      'ekyc-track.input-label': EkycTrackInputLabel;
      'ekyc-track.kyc-tracking-api-dump': EkycTrackKycTrackingApiDump;
      'ekyc-track.label-and-placeholder': EkycTrackLabelAndPlaceholder;
      'ekyc-track.pan-verification': EkycTrackPanVerification;
      'ekyc-track.pan-verification-err': EkycTrackPanVerificationErr;
      'ekyc-track.pan-verification-input-label': EkycTrackPanVerificationInputLabel;
      'ekyc-track.pending': EkycTrackPending;
      'ekyc-track.server-error': EkycTrackServerError;
      'ekyc-track.static': EkycTrackStatic;
      'ekyc-track.status-page': EkycTrackStatusPage;
      'ekyc-track.status-rejected-response': EkycTrackStatusRejectedResponse;
      'ekyc-track.statuses': EkycTrackStatuses;
      'ekyc-track.title-and-description': EkycTrackTitleAndDescription;
      'ekyc-track.toast': EkycTrackToast;
      'ekyc-track.tracking-kyc-dump': EkycTrackTrackingKycDump;
      'generate-ekyc.annual-income': GenerateEkycAnnualIncome;
      'generate-ekyc.calendar': GenerateEkycCalendar;
      'generate-ekyc.checkbox': GenerateEkycCheckbox;
      'generate-ekyc.city': GenerateEkycCity;
      'generate-ekyc.cms-errorstatus-modal': GenerateEkycCmsErrorstatusModal;
      'generate-ekyc.cms-final-page': GenerateEkycCmsFinalPage;
      'generate-ekyc.cms-goback': GenerateEkycCmsGoback;
      'generate-ekyc.cms-server-timeout': GenerateEkycCmsServerTimeout;
      'generate-ekyc.cms-sub-final-page': GenerateEkycCmsSubFinalPage;
      'generate-ekyc.correspondence-address': GenerateEkycCorrespondenceAddress;
      'generate-ekyc.ekyc-detail-cms': GenerateEkycEkycDetailCms;
      'generate-ekyc.ekyc-list': GenerateEkycEkycList;
      'generate-ekyc.ekyc-verify-cms': GenerateEkycEkycVerifyCms;
      'generate-ekyc.father-input': GenerateEkycFatherInput;
      'generate-ekyc.financial-details': GenerateEkycFinancialDetails;
      'generate-ekyc.financial-details-cms': GenerateEkycFinancialDetailsCms;
      'generate-ekyc.marital-status-and-gender': GenerateEkycMaritalStatusAndGender;
      'generate-ekyc.mother-input': GenerateEkycMotherInput;
      'generate-ekyc.occupation-input': GenerateEkycOccupationInput;
      'generate-ekyc.organization-input': GenerateEkycOrganizationInput;
      'generate-ekyc.pan-card': GenerateEkycPanCard;
      'generate-ekyc.permanent-address': GenerateEkycPermanentAddress;
      'generate-ekyc.pincode': GenerateEkycPincode;
      'generate-ekyc.politically-exposed': GenerateEkycPoliticallyExposed;
      'generate-ekyc.proceed-to-hdfc': GenerateEkycProceedToHdfc;
      'generate-ekyc.state': GenerateEkycState;
      'generate-ekyc.yes-no-option': GenerateEkycYesNoOption;
      'health-claim.city': HealthClaimCity;
      'health-claim.claim-success': HealthClaimClaimSuccess;
      'health-claim.claim-unable-to-proceed': HealthClaimClaimUnableToProceed;
      'health-claim.confirmation': HealthClaimConfirmation;
      'health-claim.contact-details': HealthClaimContactDetails;
      'health-claim.empty-state-props': HealthClaimEmptyStateProps;
      'health-claim.enter-claim-details': HealthClaimEnterClaimDetails;
      'health-claim.error-success-json': HealthClaimErrorSuccessJson;
      'health-claim.health-filing': HealthClaimHealthFiling;
      'health-claim.hospitalisation': HealthClaimHospitalisation;
      'health-claim.modes': HealthClaimModes;
      'health-claim.not-active-claims': HealthClaimNotActiveClaims;
      'health-claim.pin-code': HealthClaimPinCode;
      'health-claim.query-widget': HealthClaimQueryWidget;
      'health-claim.query-widget-dump': HealthClaimQueryWidgetDump;
      'health-claim.select-claim': HealthClaimSelectClaim;
      'health-claim.select-hsp': HealthClaimSelectHsp;
      'health-claim.server-error': HealthClaimServerError;
      'health-claim.state': HealthClaimState;
      'health-claim.state-city-selection': HealthClaimStateCitySelection;
      'health-claim.supplementary': HealthClaimSupplementary;
      'health-claim.title-img-and-desc': HealthClaimTitleImgAndDesc;
      'health-claim.track-card': HealthClaimTrackCard;
      'health-track.add-document-card': HealthTrackAddDocumentCard;
      'health-track.details-required': HealthTrackDetailsRequired;
      'health-track.error-encountered': HealthTrackErrorEncountered;
      'health-track.no-claim-found': HealthTrackNoClaimFound;
      'health-track.query-text': HealthTrackQueryText;
      'health-track.show-documents-card': HealthTrackShowDocumentsCard;
      'health-track.supplementary-card': HealthTrackSupplementaryCard;
      'health-track.track-a-claim': HealthTrackTrackAClaim;
      'health-track.track-card-object': HealthTrackTrackCardObject;
      'hello.hello': HelloHello;
      'hello.random': HelloRandom;
      'image-descriptions.banner': ImageDescriptionsBanner;
      'image-descriptions.content': ImageDescriptionsContent;
      'image-descriptions.image-descriptions': ImageDescriptionsImageDescriptions;
      'login.claim-list': LoginClaimList;
      'meta-fields.meta-fields': MetaFieldsMetaFields;
      'motor-claim.claim-list': MotorClaimClaimList;
      'motor-claim.enter-claim-details': MotorClaimEnterClaimDetails;
      'motor-claim.enter-loss-incur': MotorClaimEnterLossIncur;
      'motor-claim.input': MotorClaimInput;
      'motor-claim.nature-of-loss': MotorClaimNatureOfLoss;
      'motor-claim.progressive-step-bar': MotorClaimProgressiveStepBar;
      'motor-claim.select-nature': MotorClaimSelectNature;
      'motor-claim.successfully-registered-cms': MotorClaimSuccessfullyRegisteredCms;
      'motor-claim.successfully-submitted-cms': MotorClaimSuccessfullySubmittedCms;
      'motor-claim.tellus-about-yourself': MotorClaimTellusAboutYourself;
      'motor-claim.text-area': MotorClaimTextArea;
      'motor-claim.unavailable-claim-cms': MotorClaimUnavailableClaimCms;
      'motor-claim.who-is-claiming': MotorClaimWhoIsClaiming;
      'motor-claim.wrong-claim-cms': MotorClaimWrongClaimCms;
      'motor-renewal.add-on-card-dump': MotorRenewalAddOnCardDump;
      'motor-renewal.add-on-checkbox-input-dump': MotorRenewalAddOnCheckboxInputDump;
      'motor-renewal.back-button-request-callback-dump': MotorRenewalBackButtonRequestCallbackDump;
      'motor-renewal.consent': MotorRenewalConsent;
      'motor-renewal.consent-dump': MotorRenewalConsentDump;
      'motor-renewal.custom-idv-input-dump': MotorRenewalCustomIdvInputDump;
      'motor-renewal.details-mismatch-dump': MotorRenewalDetailsMismatchDump;
      'motor-renewal.failed-payment-dump': MotorRenewalFailedPaymentDump;
      'motor-renewal.insured-declared-value-card-dump': MotorRenewalInsuredDeclaredValueCardDump;
      'motor-renewal.loading-screen-dump': MotorRenewalLoadingScreenDump;
      'motor-renewal.moto-renewal-landing': MotorRenewalMotoRenewalLanding;
      'motor-renewal.motor-renewal-landing-dump': MotorRenewalMotorRenewalLandingDump;
      'motor-renewal.no-claim-bonus-dump': MotorRenewalNoClaimBonusDump;
      'motor-renewal.payment-success-dump': MotorRenewalPaymentSuccessDump;
      'motor-renewal.policy-number-dump': MotorRenewalPolicyNumberDump;
      'motor-renewal.premium-breakup-dump': MotorRenewalPremiumBreakupDump;
      'motor-renewal.request-callback': MotorRenewalRequestCallback;
      'motor-renewal.request-callback-bs-dump': MotorRenewalRequestCallbackBsDump;
      'motor-track.information-mismatch': MotorTrackInformationMismatch;
      'motor-track.organization-input': MotorTrackOrganizationInput;
      'motor-track.query-text': MotorTrackQueryText;
      'motor-track.query-widget': MotorTrackQueryWidget;
      'motor-track.something-went-wrong': MotorTrackSomethingWentWrong;
      'policy-manual-linking.cancelled-expired': PolicyManualLinkingCancelledExpired;
      'policy-manual-linking.card': PolicyManualLinkingCard;
      'policy-manual-linking.landing-page': PolicyManualLinkingLandingPage;
      'policy-manual-linking.otp-view': PolicyManualLinkingOtpView;
      'policy-manual-linking.personal-info': PolicyManualLinkingPersonalInfo;
      'policy-manual-linking.select-verification-type': PolicyManualLinkingSelectVerificationType;
      'policy-manual-linking.thank-you': PolicyManualLinkingThankYou;
      'policy-manual-linking.types': PolicyManualLinkingTypes;
      'policy-manual-linking.unable-to-fetch': PolicyManualLinkingUnableToFetch;
      'policy-manual-linking.when-can-content': PolicyManualLinkingWhenCanContent;
      'policy-selection.download-policy-request': PolicySelectionDownloadPolicyRequest;
      'policy-selection.images': PolicySelectionImages;
      'policy-selection.no-policy': PolicySelectionNoPolicy;
      'policy-selection.policy-selection-cms-data': PolicySelectionPolicySelectionCmsData;
      'previous-year-policy-upload.failure': PreviousYearPolicyUploadFailure;
      'previous-year-policy-upload.header': PreviousYearPolicyUploadHeader;
      'previous-year-policy-upload.previous-year-policy-upload': PreviousYearPolicyUploadPreviousYearPolicyUpload;
      'previous-year-policy-upload.query-widget': PreviousYearPolicyUploadQueryWidget;
      'previous-year-policy-upload.remarks': PreviousYearPolicyUploadRemarks;
      'previous-year-policy-upload.section-top-h-eader': PreviousYearPolicyUploadSectionTopHEader;
      'previous-year-policy-upload.status': PreviousYearPolicyUploadStatus;
      'previous-year-policy-upload.success': PreviousYearPolicyUploadSuccess;
      'previous-year-policy-upload.upload-section': PreviousYearPolicyUploadUploadSection;
      'quick-action.add-account-details': QuickActionAddAccountDetails;
      'quick-action.card': QuickActionCard;
      'quick-action.change-request-form': QuickActionChangeRequestForm;
      'quick-action.changes-in-policy-renewal': QuickActionChangesInPolicyRenewal;
      'quick-action.checklist-for-change': QuickActionChecklistForChange;
      'quick-action.claim-query': QuickActionClaimQuery;
      'quick-action.claim-registration': QuickActionClaimRegistration;
      'quick-action.customer-due-diligence': QuickActionCustomerDueDiligence;
      'quick-action.deactivate-auto-renewal': QuickActionDeactivateAutoRenewal;
      'quick-action.disease-disclosure': QuickActionDiseaseDisclosure;
      'quick-action.ekyc-link': QuickActionEkycLink;
      'quick-action.ekyc-procedure': QuickActionEkycProcedure;
      'quick-action.ekyc-registration': QuickActionEkycRegistration;
      'quick-action.ekyc-tracking': QuickActionEkycTracking;
      'quick-action.email-policy-copy': QuickActionEmailPolicyCopy;
      'quick-action.health-card': QuickActionHealthCard;
      'quick-action.installment-payment': QuickActionInstallmentPayment;
      'quick-action.installment-tracker': QuickActionInstallmentTracker;
      'quick-action.know-your-policy': QuickActionKnowYourPolicy;
      'quick-action.kyc': QuickActionKyc;
      'quick-action.link-eia': QuickActionLinkEia;
      'quick-action.make-payments': QuickActionMakePayments;
      'quick-action.odometer-reading-upload': QuickActionOdometerReadingUpload;
      'quick-action.paws-and-claws': QuickActionPawsAndClaws;
      'quick-action.policy-alterations': QuickActionPolicyAlterations;
      'quick-action.policy-cancellation-request': QuickActionPolicyCancellationRequest;
      'quick-action.policy-dispatch': QuickActionPolicyDispatch;
      'quick-action.pre-filled-claim-form': QuickActionPreFilledClaimForm;
      'quick-action.pre-policy-reports': QuickActionPrePolicyReports;
      'quick-action.prev-year-policy': QuickActionPrevYearPolicy;
      'quick-action.quick-actions-dump': QuickActionQuickActionsDump;
      'quick-action.raise-query': QuickActionRaiseQuery;
      'quick-action.request-proposal-form': QuickActionRequestProposalForm;
      'quick-action.reverification-ncb-pyp': QuickActionReverificationNcbPyp;
      'quick-action.tax-certificate': QuickActionTaxCertificate;
      'quick-action.track-cancellation-status': QuickActionTrackCancellationStatus;
      'quick-action.track-claim': QuickActionTrackClaim;
      'quick-action.track-premium-recovery': QuickActionTrackPremiumRecovery;
      'quick-action.transfer-of-insurance-motor': QuickActionTransferOfInsuranceMotor;
      'quick-action.update-card-details': QuickActionUpdateCardDetails;
      'quick-action.update-contact-details': QuickActionUpdateContactDetails;
      'quick-action.upload-health-docs': QuickActionUploadHealthDocs;
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
      'shared.title-description': SharedTitleDescription;
      'terms.terms': TermsTerms;
    }
  }
}
