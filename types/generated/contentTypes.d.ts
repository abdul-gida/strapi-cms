import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutAbout extends Struct.SingleTypeSchema {
  collectionName: 'abouts';
  info: {
    description: 'Write about yourself and the content you create';
    displayName: 'About';
    pluralName: 'abouts';
    singularName: 'about';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    blocks: Schema.Attribute.DynamicZone<
      ['shared.media', 'shared.quote', 'shared.rich-text', 'shared.slider']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::about.about'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAppBannerAppBanner extends Struct.SingleTypeSchema {
  collectionName: 'app_banners';
  info: {
    description: '';
    displayName: 'App Banner';
    pluralName: 'app-banners';
    singularName: 'app-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    appStoreImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hereAppLogo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    info: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::app-banner.app-banner'
    > &
      Schema.Attribute.Private;
    playStoreImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    subInfo: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: 'articles';
  info: {
    description: 'Create your blog content';
    displayName: 'Article';
    pluralName: 'articles';
    singularName: 'article';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleContent: Schema.Attribute.DynamicZone<
      [
        'article-components.rich-text-json',
        'article-components.image-descriptions',
        'article-components.video-url',
      ]
    > &
      Schema.Attribute.Required;
    articleImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    articleSummary: Schema.Attribute.Text;
    audio: Schema.Attribute.Media<'audios'>;
    author: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    conclusion: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    > &
      Schema.Attribute.Private;
    metaFields: Schema.Attribute.Component<'meta-fields.meta-fields', false>;
    postedOn: Schema.Attribute.Date & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    quoteBanner: Schema.Attribute.Component<
      'article-components.quote-banner',
      false
    >;
    relatedArticles: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    >;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    socialIcons: Schema.Attribute.Component<'shared.media', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    sources: Schema.Attribute.Blocks;
    timeToRead: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAuthorAuthor extends Struct.CollectionTypeSchema {
  collectionName: 'authors';
  info: {
    description: 'Create authors for your content';
    displayName: 'Author';
    pluralName: 'authors';
    singularName: 'author';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    avatar: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::author.author'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    description: 'Organize your content into categories';
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    old_articles: Schema.Attribute.Relation<
      'oneToMany',
      'api::old-article.old-article'
    >;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCustomerDueDiligenceCustomerDueDiligence
  extends Struct.SingleTypeSchema {
  collectionName: 'customer_due_diligences';
  info: {
    description: '';
    displayName: 'customer-due-diligence';
    pluralName: 'customer-due-diligences';
    singularName: 'customer-due-diligence';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    customerDueDiligence: Schema.Attribute.Component<
      'customer-due-diligence.customer-due-diligence',
      false
    >;
    diligenceFormField: Schema.Attribute.DynamicZone<
      [
        'customer-due-diligence.annual-income',
        'customer-due-diligence.occupation',
        'customer-due-diligence.marital-status',
        'customer-due-diligence.organization-type',
        'customer-due-diligence.mothers-name',
        'customer-due-diligence.nationality',
        'customer-due-diligence.is-politically-exposed',
      ]
    >;
    ekycDetails: Schema.Attribute.Component<
      'customer-due-diligence.ekyc-details',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::customer-due-diligence.customer-due-diligence'
    > &
      Schema.Attribute.Private;
    nationalityOptions: Schema.Attribute.DynamicZone<
      ['customer-due-diligence.title', 'customer-due-diligence.indian']
    >;
    politicallyExposedOptions: Schema.Attribute.DynamicZone<
      ['customer-due-diligence.yes', 'customer-due-diligence.no']
    >;
    publishedAt: Schema.Attribute.DateTime;
    serverError: Schema.Attribute.Component<
      'customer-due-diligence.server-error',
      false
    >;
    submitSuccess: Schema.Attribute.Component<
      'customer-due-diligence.submit-success',
      false
    >;
    tipInfo: Schema.Attribute.Component<
      'customer-due-diligence.tip-info',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDashboardBuyInsuranceDashboardBuyInsurance
  extends Struct.SingleTypeSchema {
  collectionName: 'dashboard_buy_insurances';
  info: {
    description: '';
    displayName: 'dashboard-buy-insurance';
    pluralName: 'dashboard-buy-insurances';
    singularName: 'dashboard-buy-insurance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alignment: Schema.Attribute.String;
    cards: Schema.Attribute.DynamicZone<
      [
        'dashboard-buy-insurance.health',
        'dashboard-buy-insurance.four-wheeler',
        'dashboard-buy-insurance.two-wheeler',
        'dashboard-buy-insurance.travel',
        'dashboard-buy-insurance.home',
        'dashboard-buy-insurance.pet',
        'dashboard-buy-insurance.corporate',
        'dashboard-buy-insurance.cyber',
        'dashboard-buy-insurance.pmsby',
        'dashboard-buy-insurance.commercial',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    initialCardsToShow: Schema.Attribute.String;
    linkPolicy: Schema.Attribute.Component<
      'dashboard-buy-insurance.link-policy',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dashboard-buy-insurance.dashboard-buy-insurance'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    viewall: Schema.Attribute.Component<'dashboard-buy-insurance.card', false>;
    viewmore: Schema.Attribute.String;
  };
}

export interface ApiDashboardEcosystemDashboardEcosystem
  extends Struct.SingleTypeSchema {
  collectionName: 'dashboard_ecosystems';
  info: {
    description: '';
    displayName: 'dashboard-ecosystem';
    pluralName: 'dashboard-ecosystems';
    singularName: 'dashboard-ecosystem';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alignment: Schema.Attribute.String;
    cards: Schema.Attribute.DynamicZone<
      [
        'dashboard-ecosystem.health',
        'dashboard-ecosystem.title',
        'dashboard-ecosystem.pets',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dashboard-ecosystem.dashboard-ecosystem'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDashboardExploreFourwheelerDashboardExploreFourwheeler
  extends Struct.SingleTypeSchema {
  collectionName: 'dashboard_explore_fourwheelers';
  info: {
    description: '';
    displayName: 'dashboard-explore-fourwheeler';
    pluralName: 'dashboard-explore-fourwheelers';
    singularName: 'dashboard-explore-fourwheeler';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alignment: Schema.Attribute.String;
    buttontext: Schema.Attribute.String;
    cards: Schema.Attribute.DynamicZone<
      [
        'dashboard-explore-fourwheeler.four-wheeler',
        'dashboard-explore-fourwheeler.two-wheeler',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dashboard-explore-fourwheeler.dashboard-explore-fourwheeler'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDashboardExploreMoreDashboardExploreMore
  extends Struct.SingleTypeSchema {
  collectionName: 'dashboard_explore_mores';
  info: {
    description: '';
    displayName: 'dashboard-explore-more';
    pluralName: 'dashboard-explore-mores';
    singularName: 'dashboard-explore-more';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alignment: Schema.Attribute.String;
    cards: Schema.Attribute.DynamicZone<
      [
        'dashboard-explore-more.card-one',
        'dashboard-explore-more.card-two',
        'dashboard-explore-more.card-three',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dashboard-explore-more.dashboard-explore-more'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDashboardLatestInHdfcDashboardLatestInHdfc
  extends Struct.SingleTypeSchema {
  collectionName: 'dashboard_latest_in_hdfcs';
  info: {
    description: '';
    displayName: 'dashboard-latestIn-hdfc';
    pluralName: 'dashboard-latest-in-hdfcs';
    singularName: 'dashboard-latest-in-hdfc';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alignment: Schema.Attribute.String;
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    buttontext: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dashboard-latest-in-hdfc.dashboard-latest-in-hdfc'
    > &
      Schema.Attribute.Private;
    old_articles: Schema.Attribute.Relation<
      'oneToMany',
      'api::old-article.old-article'
    >;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDashboardQuickActionDashboardQuickAction
  extends Struct.SingleTypeSchema {
  collectionName: 'dashboard_quick_actions';
  info: {
    description: '';
    displayName: 'dashboard-quickAction';
    pluralName: 'dashboard-quick-actions';
    singularName: 'dashboard-quick-action';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alignment: Schema.Attribute.String;
    buttontext: Schema.Attribute.String;
    cards: Schema.Attribute.DynamicZone<
      [
        'dashboard-quick-action.claim-registration',
        'dashboard-quick-action.renew-policy',
        'dashboard-quick-action.ekyc-procedure',
        'dashboard-quick-action.track-claim',
        'dashboard-quick-action.link-eia',
        'dashboard-quick-action.ekyc-registration',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dashboard-quick-action.dashboard-quick-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDashboardTrustedByCustomerDashboardTrustedByCustomer
  extends Struct.SingleTypeSchema {
  collectionName: 'dashboard_trusted_by_customers';
  info: {
    description: '';
    displayName: 'dashboard-trusted-by-customer';
    pluralName: 'dashboard-trusted-by-customers';
    singularName: 'dashboard-trusted-by-customer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alignment: Schema.Attribute.String;
    cards: Schema.Attribute.DynamicZone<
      [
        'dashboard-trusted-by-customer.happy-customers',
        'dashboard-trusted-by-customer.customer-support',
        'dashboard-trusted-by-customer.cashless-network',
        'dashboard-trusted-by-customer.dashboard-trusted-by-customer',
        'dashboard-trusted-by-customer.claim-settlement-rate',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    img: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dashboard-trusted-by-customer.dashboard-trusted-by-customer'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDashboardDashboard extends Struct.SingleTypeSchema {
  collectionName: 'dashboards';
  info: {
    description: '';
    displayName: 'Dashboard';
    pluralName: 'dashboards';
    singularName: 'dashboard';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dashboardCmsData: Schema.Attribute.Component<
      'dashboard.dashboard-cms-data',
      false
    >;
    dashboardConnectWithUsCms: Schema.Attribute.Component<
      'dashboard.dashboard-connect-with-us-cms',
      false
    >;
    dashboardNewsletter: Schema.Attribute.Component<
      'dashboard.dashboard-newsletter-cms',
      false
    >;
    ecosystemQrCms: Schema.Attribute.Component<
      'dashboard.ecosystem-qr-cms',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dashboard.dashboard'
    > &
      Schema.Attribute.Private;
    needsYourAttention: Schema.Attribute.Component<
      'dashboard-buy-insurance.needs-your-attention',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    resumeJourney: Schema.Attribute.Component<
      'dashboard-buy-insurance.resume-journey',
      false
    >;
    supportCms: Schema.Attribute.Component<'dashboard.support-cms', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEKycProcedureEKycProcedure extends Struct.SingleTypeSchema {
  collectionName: 'e_kyc_procedures';
  info: {
    description: '';
    displayName: 'e-KYC Procedure';
    pluralName: 'e-kyc-procedures';
    singularName: 'e-kyc-procedure';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'image-descriptions.banner', false>;
    bottom: Schema.Attribute.Component<'shared.bottom', false>;
    contents: Schema.Attribute.Component<'shared.contents', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::e-kyc-procedure.e-kyc-procedure'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEkycTrackEkycTrack extends Struct.SingleTypeSchema {
  collectionName: 'ekyc_tracks';
  info: {
    description: '';
    displayName: 'Ekyc-track';
    pluralName: 'ekyc-tracks';
    singularName: 'ekyc-track';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    kycTrackingApiDump: Schema.Attribute.Component<
      'ekyc-track.kyc-tracking-api-dump',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ekyc-track.ekyc-track'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    trackingKycDump: Schema.Attribute.Component<
      'ekyc-track.tracking-kyc-dump',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGenerateEkycGenerateEkyc extends Struct.SingleTypeSchema {
  collectionName: 'generate_ekycs';
  info: {
    description: '';
    displayName: 'Ekyc-generate';
    pluralName: 'generate-ekycs';
    singularName: 'generate-ekyc';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cmsErrorstatusModal: Schema.Attribute.Component<
      'generate-ekyc.cms-errorstatus-modal',
      false
    >;
    cmsFinalPage: Schema.Attribute.Component<
      'generate-ekyc.cms-final-page',
      false
    >;
    cmsGoback: Schema.Attribute.Component<'generate-ekyc.cms-goback', false>;
    cmsServerTimeout: Schema.Attribute.Component<
      'generate-ekyc.cms-server-timeout',
      false
    >;
    cmsSubFinalPage: Schema.Attribute.Component<
      'generate-ekyc.cms-sub-final-page',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ekycDetailCms: Schema.Attribute.Component<
      'generate-ekyc.ekyc-detail-cms',
      false
    >;
    ekycList: Schema.Attribute.Component<'generate-ekyc.ekyc-list', false>;
    ekycVerifyCms: Schema.Attribute.Component<
      'generate-ekyc.ekyc-verify-cms',
      false
    >;
    financialDetails: Schema.Attribute.Component<
      'generate-ekyc.financial-details-cms',
      false
    >;
    financialDetailsInput: Schema.Attribute.DynamicZone<
      [
        'generate-ekyc.politically-exposed',
        'generate-ekyc.organization-input',
        'generate-ekyc.occupation-input',
        'generate-ekyc.annual-income',
      ]
    >;
    hdfc: Schema.Attribute.Component<'generate-ekyc.proceed-to-hdfc', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::generate-ekyc.generate-ekyc'
    > &
      Schema.Attribute.Private;
    panOptionInfo: Schema.Attribute.Component<'generate-ekyc.pan-card', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Struct.SingleTypeSchema {
  collectionName: 'globals';
  info: {
    description: 'Define global settings';
    displayName: 'Global';
    pluralName: 'globals';
    singularName: 'global';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    defaultSeo: Schema.Attribute.Component<'shared.seo', false>;
    favicon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global.global'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    siteDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    siteName: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHealthClaimHealthClaim extends Struct.SingleTypeSchema {
  collectionName: 'health_claims';
  info: {
    description: '';
    displayName: 'health-claim';
    pluralName: 'health-claims';
    singularName: 'health-claim';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::health-claim.health-claim'
    > &
      Schema.Attribute.Private;
    modes: Schema.Attribute.Component<'shared.title-description', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHealthTrackHealthTrack extends Struct.SingleTypeSchema {
  collectionName: 'health_tracks';
  info: {
    description: '';
    displayName: 'health-track';
    pluralName: 'health-tracks';
    singularName: 'health-track';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    errorEncountered: Schema.Attribute.Component<
      'health-track.error-encountered',
      false
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::health-track.health-track'
    > &
      Schema.Attribute.Private;
    noClaimFound: Schema.Attribute.Component<
      'health-track.no-claim-found',
      false
    > &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    selectTrackClaim: Schema.Attribute.Component<
      'shared.title-description',
      false
    > &
      Schema.Attribute.Required;
    trackAClaim: Schema.Attribute.Component<
      'health-track.track-a-claim',
      false
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLoginLabelLoginLabel extends Struct.CollectionTypeSchema {
  collectionName: 'login_labels';
  info: {
    description: '';
    displayName: 'Login Labels';
    pluralName: 'login-labels';
    singularName: 'login-label';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    claimList: Schema.Attribute.Component<'login.claim-list', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageUrlDesktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imageUrlMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    label: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::login-label.login-label'
    > &
      Schema.Attribute.Private;
    placeholder: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID & Schema.Attribute.Required;
    subHeading: Schema.Attribute.String;
    termsAndConditionText: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMotorClaimMotorClaim extends Struct.SingleTypeSchema {
  collectionName: 'motor_claims';
  info: {
    description: '';
    displayName: 'motor-claim';
    pluralName: 'motor-claims';
    singularName: 'motor-claim';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    enterClaimDetails: Schema.Attribute.Component<
      'motor-claim.enter-claim-details',
      false
    >;
    enterLossIncur: Schema.Attribute.Component<
      'motor-claim.enter-loss-incur',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::motor-claim.motor-claim'
    > &
      Schema.Attribute.Private;
    progressiveStepBar: Schema.Attribute.Component<
      'motor-claim.progressive-step-bar',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    selectNature: Schema.Attribute.Component<
      'motor-claim.select-nature',
      false
    >;
    successfullyRegisteredCms: Schema.Attribute.Component<
      'motor-claim.successfully-registered-cms',
      false
    >;
    successfullySubmittedCms: Schema.Attribute.Component<
      'motor-claim.successfully-submitted-cms',
      false
    >;
    tellusAboutYourself: Schema.Attribute.Component<
      'motor-claim.tellus-about-yourself',
      false
    >;
    unavailableClaimCms: Schema.Attribute.Component<
      'motor-claim.wrong-claim-cms',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whoIsClaiming: Schema.Attribute.Component<
      'motor-claim.who-is-claiming',
      false
    >;
    wrongClaimCms: Schema.Attribute.Component<
      'motor-claim.wrong-claim-cms',
      false
    >;
  };
}

export interface ApiMotorRenewalMotorRenewal extends Struct.SingleTypeSchema {
  collectionName: 'motor_renewals';
  info: {
    displayName: 'Motor-renewal';
    pluralName: 'motor-renewals';
    singularName: 'motor-renewal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    addOnCardDump: Schema.Attribute.Component<
      'motor-renewal.add-on-card-dump',
      false
    >;
    addOnCheckboxInputDump: Schema.Attribute.Component<
      'motor-renewal.add-on-checkbox-input-dump',
      false
    >;
    alreadyRequestedDump: Schema.Attribute.Component<
      'motor-renewal.request-callback-bs-dump',
      false
    >;
    backButtonRequestCallbackDump: Schema.Attribute.Component<
      'motor-renewal.back-button-request-callback-dump',
      false
    >;
    consentDump: Schema.Attribute.Component<
      'motor-renewal.consent-dump',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    customIDVInputDump: Schema.Attribute.Component<
      'motor-renewal.custom-idv-input-dump',
      false
    >;
    detailsMismatchDump: Schema.Attribute.Component<
      'motor-renewal.details-mismatch-dump',
      false
    >;
    failedPaymentDump: Schema.Attribute.Component<
      'motor-renewal.failed-payment-dump',
      false
    >;
    insuredDeclaredValueCardDump: Schema.Attribute.Component<
      'motor-renewal.insured-declared-value-card-dump',
      false
    >;
    loadingScreenDump: Schema.Attribute.Component<
      'motor-renewal.loading-screen-dump',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::motor-renewal.motor-renewal'
    > &
      Schema.Attribute.Private;
    motoRenewalLanding: Schema.Attribute.Component<
      'motor-renewal.moto-renewal-landing',
      false
    >;
    motorRenewalLandingDump: Schema.Attribute.Component<
      'motor-renewal.motor-renewal-landing-dump',
      false
    >;
    noClaimBonusDump: Schema.Attribute.Component<
      'motor-renewal.no-claim-bonus-dump',
      false
    >;
    notRenewedDump: Schema.Attribute.Component<
      'motor-renewal.back-button-request-callback-dump',
      false
    >;
    paymentSuccessDump: Schema.Attribute.Component<
      'motor-renewal.payment-success-dump',
      false
    >;
    policyNumberDump: Schema.Attribute.Component<
      'motor-renewal.policy-number-dump',
      false
    >;
    premiumBreakupDump: Schema.Attribute.Component<
      'motor-renewal.premium-breakup-dump',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    renewNowModalDump: Schema.Attribute.Component<
      'motor-renewal.back-button-request-callback-dump',
      false
    >;
    requestCallback: Schema.Attribute.Component<
      'motor-renewal.request-callback',
      true
    >;
    requestCallbackBSDump: Schema.Attribute.Component<
      'motor-renewal.request-callback-bs-dump',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMotorTrackMotorTrack extends Struct.SingleTypeSchema {
  collectionName: 'motor_tracks';
  info: {
    description: '';
    displayName: 'Motor-track';
    pluralName: 'motor-tracks';
    singularName: 'motor-track';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    informationMismatch: Schema.Attribute.Component<
      'motor-track.information-mismatch',
      false
    >;
    invalidClaimNumber: Schema.Attribute.Component<
      'motor-track.information-mismatch',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::motor-track.motor-track'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    somethingWentWrong: Schema.Attribute.Component<
      'motor-track.something-went-wrong',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOldArticleOldArticle extends Struct.CollectionTypeSchema {
  collectionName: 'old_articles';
  info: {
    description: '';
    displayName: 'Old Article';
    pluralName: 'old-articles';
    singularName: 'old-article';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    author: Schema.Attribute.String;
    category: Schema.Attribute.Relation<'manyToOne', 'api::category.category'>;
    content: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::old-article.old-article'
    > &
      Schema.Attribute.Private;
    metaFields: Schema.Attribute.Component<'meta-fields.meta-fields', false>;
    postedOn: Schema.Attribute.Date &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'2024-10-30'>;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    timeToRead: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPolicyManualLinkingPolicyManualLinking
  extends Struct.SingleTypeSchema {
  collectionName: 'policy_manual_linkings';
  info: {
    description: '';
    displayName: 'Policy-manual-linking';
    pluralName: 'policy-manual-linkings';
    singularName: 'policy-manual-linking';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cancelledExpired: Schema.Attribute.Component<
      'policy-manual-linking.cancelled-expired',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    landingPage: Schema.Attribute.Component<
      'policy-manual-linking.landing-page',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::policy-manual-linking.policy-manual-linking'
    > &
      Schema.Attribute.Private;
    otpView: Schema.Attribute.Component<
      'policy-manual-linking.otp-view',
      false
    >;
    personalInfo: Schema.Attribute.Component<
      'policy-manual-linking.personal-info',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    selectVerificationType: Schema.Attribute.Component<
      'policy-manual-linking.select-verification-type',
      false
    >;
    thankYou: Schema.Attribute.Component<
      'policy-manual-linking.thank-you',
      false
    >;
    unableToFetch: Schema.Attribute.Component<
      'policy-manual-linking.unable-to-fetch',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPolicySelectionPolicySelection
  extends Struct.SingleTypeSchema {
  collectionName: 'policy_selections';
  info: {
    description: '';
    displayName: 'Policy-selection';
    pluralName: 'policy-selections';
    singularName: 'policy-selection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::policy-selection.policy-selection'
    > &
      Schema.Attribute.Private;
    policySelectionCmsData: Schema.Attribute.Component<
      'policy-selection.policy-selection-cms-data',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPreviousYearPolicyUploadPreviousYearPolicyUpload
  extends Struct.SingleTypeSchema {
  collectionName: 'previous_year_policy_uploads';
  info: {
    description: '';
    displayName: 'previous-year-policy-upload';
    pluralName: 'previous-year-policy-uploads';
    singularName: 'previous-year-policy-upload';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::previous-year-policy-upload.previous-year-policy-upload'
    > &
      Schema.Attribute.Private;
    previousYearPolicyDump: Schema.Attribute.Component<
      'previous-year-policy-upload.previous-year-policy-upload',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiQuickActionQuickAction extends Struct.SingleTypeSchema {
  collectionName: 'quick_actions';
  info: {
    description: '';
    displayName: 'Quick-action';
    pluralName: 'quick-actions';
    singularName: 'quick-action';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ClaimsCard: Schema.Attribute.DynamicZone<
      [
        'quick-action.claim-registration',
        'quick-action.track-claim',
        'quick-action.upload-health-docs',
        'quick-action.pre-filled-claim-form',
        'quick-action.kyc',
        'quick-action.claim-query',
      ]
    >;
    claimsTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    documentUploaderCard: Schema.Attribute.DynamicZone<
      [
        'quick-action.reverification-ncb-pyp',
        'quick-action.pre-policy-reports',
        'quick-action.odometer-reading-upload',
        'quick-action.disease-disclosure',
        'quick-action.prev-year-policy',
      ]
    >;
    documentUploaderTitle: Schema.Attribute.String;
    ekycCards: Schema.Attribute.DynamicZone<
      [
        'quick-action.ekyc-procedure',
        'quick-action.ekyc-registration',
        'quick-action.ekyc-tracking',
        'quick-action.ekyc-link',
        'quick-action.customer-due-diligence',
      ]
    >;
    ekycTitle: Schema.Attribute.String;
    installRelateServicesCard: Schema.Attribute.DynamicZone<
      [
        'quick-action.installment-payment',
        'quick-action.installment-tracker',
        'quick-action.update-card-details',
        'quick-action.track-premium-recovery',
      ]
    >;
    installRelateServicesTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::quick-action.quick-action'
    > &
      Schema.Attribute.Private;
    policyDocumentsCard: Schema.Attribute.DynamicZone<
      [
        'quick-action.email-policy-copy',
        'quick-action.tax-certificate',
        'quick-action.health-card',
        'quick-action.policy-dispatch',
        'quick-action.know-your-policy',
        'quick-action.link-eia',
        'quick-action.request-proposal-form',
      ]
    >;
    policyDocumentsTitle: Schema.Attribute.String;
    policyRenewalCard: Schema.Attribute.DynamicZone<
      ['quick-action.changes-in-policy-renewal']
    >;
    policyRenewalTitle: Schema.Attribute.String;
    policyServicingCard: Schema.Attribute.DynamicZone<
      [
        'quick-action.update-contact-details',
        'quick-action.transfer-of-insurance-motor',
        'quick-action.policy-alterations',
        'quick-action.checklist-for-change',
        'quick-action.policy-cancellation-request',
        'quick-action.track-cancellation-status',
        'quick-action.deactivate-auto-renewal',
        'quick-action.change-request-form',
        'quick-action.paws-and-claws',
        'quick-action.make-payments',
        'quick-action.add-account-details',
      ]
    >;
    policyServicingTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    queryRequestCard: Schema.Attribute.DynamicZone<
      ['quick-action.raise-query']
    >;
    queryRequestTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about.about': ApiAboutAbout;
      'api::app-banner.app-banner': ApiAppBannerAppBanner;
      'api::article.article': ApiArticleArticle;
      'api::author.author': ApiAuthorAuthor;
      'api::category.category': ApiCategoryCategory;
      'api::customer-due-diligence.customer-due-diligence': ApiCustomerDueDiligenceCustomerDueDiligence;
      'api::dashboard-buy-insurance.dashboard-buy-insurance': ApiDashboardBuyInsuranceDashboardBuyInsurance;
      'api::dashboard-ecosystem.dashboard-ecosystem': ApiDashboardEcosystemDashboardEcosystem;
      'api::dashboard-explore-fourwheeler.dashboard-explore-fourwheeler': ApiDashboardExploreFourwheelerDashboardExploreFourwheeler;
      'api::dashboard-explore-more.dashboard-explore-more': ApiDashboardExploreMoreDashboardExploreMore;
      'api::dashboard-latest-in-hdfc.dashboard-latest-in-hdfc': ApiDashboardLatestInHdfcDashboardLatestInHdfc;
      'api::dashboard-quick-action.dashboard-quick-action': ApiDashboardQuickActionDashboardQuickAction;
      'api::dashboard-trusted-by-customer.dashboard-trusted-by-customer': ApiDashboardTrustedByCustomerDashboardTrustedByCustomer;
      'api::dashboard.dashboard': ApiDashboardDashboard;
      'api::e-kyc-procedure.e-kyc-procedure': ApiEKycProcedureEKycProcedure;
      'api::ekyc-track.ekyc-track': ApiEkycTrackEkycTrack;
      'api::generate-ekyc.generate-ekyc': ApiGenerateEkycGenerateEkyc;
      'api::global.global': ApiGlobalGlobal;
      'api::health-claim.health-claim': ApiHealthClaimHealthClaim;
      'api::health-track.health-track': ApiHealthTrackHealthTrack;
      'api::login-label.login-label': ApiLoginLabelLoginLabel;
      'api::motor-claim.motor-claim': ApiMotorClaimMotorClaim;
      'api::motor-renewal.motor-renewal': ApiMotorRenewalMotorRenewal;
      'api::motor-track.motor-track': ApiMotorTrackMotorTrack;
      'api::old-article.old-article': ApiOldArticleOldArticle;
      'api::policy-manual-linking.policy-manual-linking': ApiPolicyManualLinkingPolicyManualLinking;
      'api::policy-selection.policy-selection': ApiPolicySelectionPolicySelection;
      'api::previous-year-policy-upload.previous-year-policy-upload': ApiPreviousYearPolicyUploadPreviousYearPolicyUpload;
      'api::quick-action.quick-action': ApiQuickActionQuickAction;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
