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
