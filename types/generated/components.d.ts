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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article-components.collections': ArticleComponentsCollections;
      'article-components.image-description-component': ArticleComponentsImageDescriptionComponent;
      'article-components.image-descriptions': ArticleComponentsImageDescriptions;
      'article-components.quote-banner': ArticleComponentsQuoteBanner;
      'article-components.rich-text-json': ArticleComponentsRichTextJson;
      'article-components.video-url': ArticleComponentsVideoUrl;
      'health-track.add-document-card': HealthTrackAddDocumentCard;
      'health-track.details-required': HealthTrackDetailsRequired;
      'health-track.error-encountered': HealthTrackErrorEncountered;
      'health-track.no-claim-found': HealthTrackNoClaimFound;
      'health-track.query-text': HealthTrackQueryText;
      'health-track.show-documents-card': HealthTrackShowDocumentsCard;
      'health-track.supplementary-card': HealthTrackSupplementaryCard;
      'health-track.track-a-claim': HealthTrackTrackAClaim;
      'health-track.track-card-object': HealthTrackTrackCardObject;
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
      'shared.title-description': SharedTitleDescription;
    }
  }
}
