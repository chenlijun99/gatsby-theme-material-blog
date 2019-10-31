export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BlogPost = {
  id: Scalars['ID'],
  title: Scalars['String'],
  featuredImage?: Maybe<File>,
  body: Scalars['String'],
  slug: Scalars['String'],
  date: Scalars['Date'],
  tags: Array<Maybe<Scalars['String']>>,
  keywords: Array<Maybe<Scalars['String']>>,
  excerpt: Scalars['String'],
};


export type BlogPostDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type BlogPostExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
};

export type BlogPostCategory = Node & {
   __typename?: 'BlogPostCategory',
  id: Scalars['ID'],
  slug: Scalars['String'],
  name: Scalars['String'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type BlogPostCategoryConnection = {
   __typename?: 'BlogPostCategoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<BlogPostCategoryEdge>,
  nodes: Array<BlogPostCategory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<BlogPostCategoryGroupConnection>,
};


export type BlogPostCategoryConnectionDistinctArgs = {
  field: BlogPostCategoryFieldsEnum
};


export type BlogPostCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: BlogPostCategoryFieldsEnum
};

export type BlogPostCategoryEdge = {
   __typename?: 'BlogPostCategoryEdge',
  next?: Maybe<BlogPostCategory>,
  node: BlogPostCategory,
  previous?: Maybe<BlogPostCategory>,
};

export enum BlogPostCategoryFieldsEnum {
  Id = 'id',
  Slug = 'slug',
  Name = 'name',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type BlogPostCategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type BlogPostCategoryGroupConnection = {
   __typename?: 'BlogPostCategoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<BlogPostCategoryEdge>,
  nodes: Array<BlogPostCategory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type BlogPostCategorySortInput = {
  fields?: Maybe<Array<Maybe<BlogPostCategoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type BlogPostConnection = {
   __typename?: 'BlogPostConnection',
  totalCount: Scalars['Int'],
  edges: Array<BlogPostEdge>,
  nodes: Array<BlogPost>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<BlogPostGroupConnection>,
};


export type BlogPostConnectionDistinctArgs = {
  field: BlogPostFieldsEnum
};


export type BlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: BlogPostFieldsEnum
};

export type BlogPostEdge = {
   __typename?: 'BlogPostEdge',
  next?: Maybe<BlogPost>,
  node: BlogPost,
  previous?: Maybe<BlogPost>,
};

export enum BlogPostFieldsEnum {
  Id = 'id',
  Title = 'title',
  FeaturedImageBirthtime = 'featuredImage___birthtime',
  FeaturedImageBirthtimeMs = 'featuredImage___birthtimeMs',
  FeaturedImageSourceInstanceName = 'featuredImage___sourceInstanceName',
  FeaturedImageAbsolutePath = 'featuredImage___absolutePath',
  FeaturedImageRelativePath = 'featuredImage___relativePath',
  FeaturedImageExtension = 'featuredImage___extension',
  FeaturedImageSize = 'featuredImage___size',
  FeaturedImagePrettySize = 'featuredImage___prettySize',
  FeaturedImageModifiedTime = 'featuredImage___modifiedTime',
  FeaturedImageAccessTime = 'featuredImage___accessTime',
  FeaturedImageChangeTime = 'featuredImage___changeTime',
  FeaturedImageBirthTime = 'featuredImage___birthTime',
  FeaturedImageRoot = 'featuredImage___root',
  FeaturedImageDir = 'featuredImage___dir',
  FeaturedImageBase = 'featuredImage___base',
  FeaturedImageExt = 'featuredImage___ext',
  FeaturedImageName = 'featuredImage___name',
  FeaturedImageRelativeDirectory = 'featuredImage___relativeDirectory',
  FeaturedImageDev = 'featuredImage___dev',
  FeaturedImageMode = 'featuredImage___mode',
  FeaturedImageNlink = 'featuredImage___nlink',
  FeaturedImageUid = 'featuredImage___uid',
  FeaturedImageGid = 'featuredImage___gid',
  FeaturedImageRdev = 'featuredImage___rdev',
  FeaturedImageBlksize = 'featuredImage___blksize',
  FeaturedImageIno = 'featuredImage___ino',
  FeaturedImageBlocks = 'featuredImage___blocks',
  FeaturedImageAtimeMs = 'featuredImage___atimeMs',
  FeaturedImageMtimeMs = 'featuredImage___mtimeMs',
  FeaturedImageCtimeMs = 'featuredImage___ctimeMs',
  FeaturedImageAtime = 'featuredImage___atime',
  FeaturedImageMtime = 'featuredImage___mtime',
  FeaturedImageCtime = 'featuredImage___ctime',
  FeaturedImagePublicUrl = 'featuredImage___publicURL',
  FeaturedImageChildImageSharpFixedBase64 = 'featuredImage___childImageSharp___fixed___base64',
  FeaturedImageChildImageSharpFixedTracedSvg = 'featuredImage___childImageSharp___fixed___tracedSVG',
  FeaturedImageChildImageSharpFixedAspectRatio = 'featuredImage___childImageSharp___fixed___aspectRatio',
  FeaturedImageChildImageSharpFixedWidth = 'featuredImage___childImageSharp___fixed___width',
  FeaturedImageChildImageSharpFixedHeight = 'featuredImage___childImageSharp___fixed___height',
  FeaturedImageChildImageSharpFixedSrc = 'featuredImage___childImageSharp___fixed___src',
  FeaturedImageChildImageSharpFixedSrcSet = 'featuredImage___childImageSharp___fixed___srcSet',
  FeaturedImageChildImageSharpFixedSrcWebp = 'featuredImage___childImageSharp___fixed___srcWebp',
  FeaturedImageChildImageSharpFixedSrcSetWebp = 'featuredImage___childImageSharp___fixed___srcSetWebp',
  FeaturedImageChildImageSharpFixedOriginalName = 'featuredImage___childImageSharp___fixed___originalName',
  FeaturedImageChildImageSharpResolutionsBase64 = 'featuredImage___childImageSharp___resolutions___base64',
  FeaturedImageChildImageSharpResolutionsTracedSvg = 'featuredImage___childImageSharp___resolutions___tracedSVG',
  FeaturedImageChildImageSharpResolutionsAspectRatio = 'featuredImage___childImageSharp___resolutions___aspectRatio',
  FeaturedImageChildImageSharpResolutionsWidth = 'featuredImage___childImageSharp___resolutions___width',
  FeaturedImageChildImageSharpResolutionsHeight = 'featuredImage___childImageSharp___resolutions___height',
  FeaturedImageChildImageSharpResolutionsSrc = 'featuredImage___childImageSharp___resolutions___src',
  FeaturedImageChildImageSharpResolutionsSrcSet = 'featuredImage___childImageSharp___resolutions___srcSet',
  FeaturedImageChildImageSharpResolutionsSrcWebp = 'featuredImage___childImageSharp___resolutions___srcWebp',
  FeaturedImageChildImageSharpResolutionsSrcSetWebp = 'featuredImage___childImageSharp___resolutions___srcSetWebp',
  FeaturedImageChildImageSharpResolutionsOriginalName = 'featuredImage___childImageSharp___resolutions___originalName',
  FeaturedImageChildImageSharpFluidBase64 = 'featuredImage___childImageSharp___fluid___base64',
  FeaturedImageChildImageSharpFluidTracedSvg = 'featuredImage___childImageSharp___fluid___tracedSVG',
  FeaturedImageChildImageSharpFluidAspectRatio = 'featuredImage___childImageSharp___fluid___aspectRatio',
  FeaturedImageChildImageSharpFluidSrc = 'featuredImage___childImageSharp___fluid___src',
  FeaturedImageChildImageSharpFluidSrcSet = 'featuredImage___childImageSharp___fluid___srcSet',
  FeaturedImageChildImageSharpFluidSrcWebp = 'featuredImage___childImageSharp___fluid___srcWebp',
  FeaturedImageChildImageSharpFluidSrcSetWebp = 'featuredImage___childImageSharp___fluid___srcSetWebp',
  FeaturedImageChildImageSharpFluidSizes = 'featuredImage___childImageSharp___fluid___sizes',
  FeaturedImageChildImageSharpFluidOriginalImg = 'featuredImage___childImageSharp___fluid___originalImg',
  FeaturedImageChildImageSharpFluidOriginalName = 'featuredImage___childImageSharp___fluid___originalName',
  FeaturedImageChildImageSharpFluidPresentationWidth = 'featuredImage___childImageSharp___fluid___presentationWidth',
  FeaturedImageChildImageSharpFluidPresentationHeight = 'featuredImage___childImageSharp___fluid___presentationHeight',
  FeaturedImageChildImageSharpSizesBase64 = 'featuredImage___childImageSharp___sizes___base64',
  FeaturedImageChildImageSharpSizesTracedSvg = 'featuredImage___childImageSharp___sizes___tracedSVG',
  FeaturedImageChildImageSharpSizesAspectRatio = 'featuredImage___childImageSharp___sizes___aspectRatio',
  FeaturedImageChildImageSharpSizesSrc = 'featuredImage___childImageSharp___sizes___src',
  FeaturedImageChildImageSharpSizesSrcSet = 'featuredImage___childImageSharp___sizes___srcSet',
  FeaturedImageChildImageSharpSizesSrcWebp = 'featuredImage___childImageSharp___sizes___srcWebp',
  FeaturedImageChildImageSharpSizesSrcSetWebp = 'featuredImage___childImageSharp___sizes___srcSetWebp',
  FeaturedImageChildImageSharpSizesSizes = 'featuredImage___childImageSharp___sizes___sizes',
  FeaturedImageChildImageSharpSizesOriginalImg = 'featuredImage___childImageSharp___sizes___originalImg',
  FeaturedImageChildImageSharpSizesOriginalName = 'featuredImage___childImageSharp___sizes___originalName',
  FeaturedImageChildImageSharpSizesPresentationWidth = 'featuredImage___childImageSharp___sizes___presentationWidth',
  FeaturedImageChildImageSharpSizesPresentationHeight = 'featuredImage___childImageSharp___sizes___presentationHeight',
  FeaturedImageChildImageSharpOriginalWidth = 'featuredImage___childImageSharp___original___width',
  FeaturedImageChildImageSharpOriginalHeight = 'featuredImage___childImageSharp___original___height',
  FeaturedImageChildImageSharpOriginalSrc = 'featuredImage___childImageSharp___original___src',
  FeaturedImageChildImageSharpResizeSrc = 'featuredImage___childImageSharp___resize___src',
  FeaturedImageChildImageSharpResizeTracedSvg = 'featuredImage___childImageSharp___resize___tracedSVG',
  FeaturedImageChildImageSharpResizeWidth = 'featuredImage___childImageSharp___resize___width',
  FeaturedImageChildImageSharpResizeHeight = 'featuredImage___childImageSharp___resize___height',
  FeaturedImageChildImageSharpResizeAspectRatio = 'featuredImage___childImageSharp___resize___aspectRatio',
  FeaturedImageChildImageSharpResizeOriginalName = 'featuredImage___childImageSharp___resize___originalName',
  FeaturedImageChildImageSharpId = 'featuredImage___childImageSharp___id',
  FeaturedImageChildImageSharpParentId = 'featuredImage___childImageSharp___parent___id',
  FeaturedImageChildImageSharpParentChildren = 'featuredImage___childImageSharp___parent___children',
  FeaturedImageChildImageSharpChildren = 'featuredImage___childImageSharp___children',
  FeaturedImageChildImageSharpChildrenId = 'featuredImage___childImageSharp___children___id',
  FeaturedImageChildImageSharpChildrenChildren = 'featuredImage___childImageSharp___children___children',
  FeaturedImageChildImageSharpInternalContent = 'featuredImage___childImageSharp___internal___content',
  FeaturedImageChildImageSharpInternalContentDigest = 'featuredImage___childImageSharp___internal___contentDigest',
  FeaturedImageChildImageSharpInternalDescription = 'featuredImage___childImageSharp___internal___description',
  FeaturedImageChildImageSharpInternalFieldOwners = 'featuredImage___childImageSharp___internal___fieldOwners',
  FeaturedImageChildImageSharpInternalIgnoreType = 'featuredImage___childImageSharp___internal___ignoreType',
  FeaturedImageChildImageSharpInternalMediaType = 'featuredImage___childImageSharp___internal___mediaType',
  FeaturedImageChildImageSharpInternalOwner = 'featuredImage___childImageSharp___internal___owner',
  FeaturedImageChildImageSharpInternalType = 'featuredImage___childImageSharp___internal___type',
  FeaturedImageId = 'featuredImage___id',
  FeaturedImageParentId = 'featuredImage___parent___id',
  FeaturedImageParentParentId = 'featuredImage___parent___parent___id',
  FeaturedImageParentParentChildren = 'featuredImage___parent___parent___children',
  FeaturedImageParentChildren = 'featuredImage___parent___children',
  FeaturedImageParentChildrenId = 'featuredImage___parent___children___id',
  FeaturedImageParentChildrenChildren = 'featuredImage___parent___children___children',
  FeaturedImageParentInternalContent = 'featuredImage___parent___internal___content',
  FeaturedImageParentInternalContentDigest = 'featuredImage___parent___internal___contentDigest',
  FeaturedImageParentInternalDescription = 'featuredImage___parent___internal___description',
  FeaturedImageParentInternalFieldOwners = 'featuredImage___parent___internal___fieldOwners',
  FeaturedImageParentInternalIgnoreType = 'featuredImage___parent___internal___ignoreType',
  FeaturedImageParentInternalMediaType = 'featuredImage___parent___internal___mediaType',
  FeaturedImageParentInternalOwner = 'featuredImage___parent___internal___owner',
  FeaturedImageParentInternalType = 'featuredImage___parent___internal___type',
  FeaturedImageChildren = 'featuredImage___children',
  FeaturedImageChildrenId = 'featuredImage___children___id',
  FeaturedImageChildrenParentId = 'featuredImage___children___parent___id',
  FeaturedImageChildrenParentChildren = 'featuredImage___children___parent___children',
  FeaturedImageChildrenChildren = 'featuredImage___children___children',
  FeaturedImageChildrenChildrenId = 'featuredImage___children___children___id',
  FeaturedImageChildrenChildrenChildren = 'featuredImage___children___children___children',
  FeaturedImageChildrenInternalContent = 'featuredImage___children___internal___content',
  FeaturedImageChildrenInternalContentDigest = 'featuredImage___children___internal___contentDigest',
  FeaturedImageChildrenInternalDescription = 'featuredImage___children___internal___description',
  FeaturedImageChildrenInternalFieldOwners = 'featuredImage___children___internal___fieldOwners',
  FeaturedImageChildrenInternalIgnoreType = 'featuredImage___children___internal___ignoreType',
  FeaturedImageChildrenInternalMediaType = 'featuredImage___children___internal___mediaType',
  FeaturedImageChildrenInternalOwner = 'featuredImage___children___internal___owner',
  FeaturedImageChildrenInternalType = 'featuredImage___children___internal___type',
  FeaturedImageInternalContent = 'featuredImage___internal___content',
  FeaturedImageInternalContentDigest = 'featuredImage___internal___contentDigest',
  FeaturedImageInternalDescription = 'featuredImage___internal___description',
  FeaturedImageInternalFieldOwners = 'featuredImage___internal___fieldOwners',
  FeaturedImageInternalIgnoreType = 'featuredImage___internal___ignoreType',
  FeaturedImageInternalMediaType = 'featuredImage___internal___mediaType',
  FeaturedImageInternalOwner = 'featuredImage___internal___owner',
  FeaturedImageInternalType = 'featuredImage___internal___type',
  Body = 'body',
  Slug = 'slug',
  Date = 'date',
  Tags = 'tags',
  Keywords = 'keywords',
  Excerpt = 'excerpt'
}

export type BlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  featuredImage?: Maybe<FileFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
};

export type BlogPostGroupConnection = {
   __typename?: 'BlogPostGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<BlogPostEdge>,
  nodes: Array<BlogPost>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type BlogPostSortInput = {
  fields?: Maybe<Array<Maybe<BlogPostFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  birthtime?: Maybe<Scalars['Date']>,
  childBlogPostCategory?: Maybe<BlogPostCategory>,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  ChildBlogPostCategoryId = 'childBlogPostCategory___id',
  ChildBlogPostCategorySlug = 'childBlogPostCategory___slug',
  ChildBlogPostCategoryName = 'childBlogPostCategory___name',
  ChildBlogPostCategoryParentId = 'childBlogPostCategory___parent___id',
  ChildBlogPostCategoryParentParentId = 'childBlogPostCategory___parent___parent___id',
  ChildBlogPostCategoryParentParentChildren = 'childBlogPostCategory___parent___parent___children',
  ChildBlogPostCategoryParentChildren = 'childBlogPostCategory___parent___children',
  ChildBlogPostCategoryParentChildrenId = 'childBlogPostCategory___parent___children___id',
  ChildBlogPostCategoryParentChildrenChildren = 'childBlogPostCategory___parent___children___children',
  ChildBlogPostCategoryParentInternalContent = 'childBlogPostCategory___parent___internal___content',
  ChildBlogPostCategoryParentInternalContentDigest = 'childBlogPostCategory___parent___internal___contentDigest',
  ChildBlogPostCategoryParentInternalDescription = 'childBlogPostCategory___parent___internal___description',
  ChildBlogPostCategoryParentInternalFieldOwners = 'childBlogPostCategory___parent___internal___fieldOwners',
  ChildBlogPostCategoryParentInternalIgnoreType = 'childBlogPostCategory___parent___internal___ignoreType',
  ChildBlogPostCategoryParentInternalMediaType = 'childBlogPostCategory___parent___internal___mediaType',
  ChildBlogPostCategoryParentInternalOwner = 'childBlogPostCategory___parent___internal___owner',
  ChildBlogPostCategoryParentInternalType = 'childBlogPostCategory___parent___internal___type',
  ChildBlogPostCategoryChildren = 'childBlogPostCategory___children',
  ChildBlogPostCategoryChildrenId = 'childBlogPostCategory___children___id',
  ChildBlogPostCategoryChildrenParentId = 'childBlogPostCategory___children___parent___id',
  ChildBlogPostCategoryChildrenParentChildren = 'childBlogPostCategory___children___parent___children',
  ChildBlogPostCategoryChildrenChildren = 'childBlogPostCategory___children___children',
  ChildBlogPostCategoryChildrenChildrenId = 'childBlogPostCategory___children___children___id',
  ChildBlogPostCategoryChildrenChildrenChildren = 'childBlogPostCategory___children___children___children',
  ChildBlogPostCategoryChildrenInternalContent = 'childBlogPostCategory___children___internal___content',
  ChildBlogPostCategoryChildrenInternalContentDigest = 'childBlogPostCategory___children___internal___contentDigest',
  ChildBlogPostCategoryChildrenInternalDescription = 'childBlogPostCategory___children___internal___description',
  ChildBlogPostCategoryChildrenInternalFieldOwners = 'childBlogPostCategory___children___internal___fieldOwners',
  ChildBlogPostCategoryChildrenInternalIgnoreType = 'childBlogPostCategory___children___internal___ignoreType',
  ChildBlogPostCategoryChildrenInternalMediaType = 'childBlogPostCategory___children___internal___mediaType',
  ChildBlogPostCategoryChildrenInternalOwner = 'childBlogPostCategory___children___internal___owner',
  ChildBlogPostCategoryChildrenInternalType = 'childBlogPostCategory___children___internal___type',
  ChildBlogPostCategoryInternalContent = 'childBlogPostCategory___internal___content',
  ChildBlogPostCategoryInternalContentDigest = 'childBlogPostCategory___internal___contentDigest',
  ChildBlogPostCategoryInternalDescription = 'childBlogPostCategory___internal___description',
  ChildBlogPostCategoryInternalFieldOwners = 'childBlogPostCategory___internal___fieldOwners',
  ChildBlogPostCategoryInternalIgnoreType = 'childBlogPostCategory___internal___ignoreType',
  ChildBlogPostCategoryInternalMediaType = 'childBlogPostCategory___internal___mediaType',
  ChildBlogPostCategoryInternalOwner = 'childBlogPostCategory___internal___owner',
  ChildBlogPostCategoryInternalType = 'childBlogPostCategory___internal___type'
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  childBlogPostCategory?: Maybe<BlogPostCategoryFilterInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
   __typename?: 'File',
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childMdx?: Maybe<Mdx>,
  childJavascriptFrontmatter?: Maybe<JavascriptFrontmatter>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
  ChildMdxFrontmatterOpen = 'childMdx___frontmatter___open',
  ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
  ChildMdxFrontmatterName = 'childMdx___frontmatter___name',
  ChildMdxFrontmatterFeaturedImageBirthtime = 'childMdx___frontmatter___featuredImage___birthtime',
  ChildMdxFrontmatterFeaturedImageBirthtimeMs = 'childMdx___frontmatter___featuredImage___birthtimeMs',
  ChildMdxFrontmatterFeaturedImageSourceInstanceName = 'childMdx___frontmatter___featuredImage___sourceInstanceName',
  ChildMdxFrontmatterFeaturedImageAbsolutePath = 'childMdx___frontmatter___featuredImage___absolutePath',
  ChildMdxFrontmatterFeaturedImageRelativePath = 'childMdx___frontmatter___featuredImage___relativePath',
  ChildMdxFrontmatterFeaturedImageExtension = 'childMdx___frontmatter___featuredImage___extension',
  ChildMdxFrontmatterFeaturedImageSize = 'childMdx___frontmatter___featuredImage___size',
  ChildMdxFrontmatterFeaturedImagePrettySize = 'childMdx___frontmatter___featuredImage___prettySize',
  ChildMdxFrontmatterFeaturedImageModifiedTime = 'childMdx___frontmatter___featuredImage___modifiedTime',
  ChildMdxFrontmatterFeaturedImageAccessTime = 'childMdx___frontmatter___featuredImage___accessTime',
  ChildMdxFrontmatterFeaturedImageChangeTime = 'childMdx___frontmatter___featuredImage___changeTime',
  ChildMdxFrontmatterFeaturedImageBirthTime = 'childMdx___frontmatter___featuredImage___birthTime',
  ChildMdxFrontmatterFeaturedImageRoot = 'childMdx___frontmatter___featuredImage___root',
  ChildMdxFrontmatterFeaturedImageDir = 'childMdx___frontmatter___featuredImage___dir',
  ChildMdxFrontmatterFeaturedImageBase = 'childMdx___frontmatter___featuredImage___base',
  ChildMdxFrontmatterFeaturedImageExt = 'childMdx___frontmatter___featuredImage___ext',
  ChildMdxFrontmatterFeaturedImageName = 'childMdx___frontmatter___featuredImage___name',
  ChildMdxFrontmatterFeaturedImageRelativeDirectory = 'childMdx___frontmatter___featuredImage___relativeDirectory',
  ChildMdxFrontmatterFeaturedImageDev = 'childMdx___frontmatter___featuredImage___dev',
  ChildMdxFrontmatterFeaturedImageMode = 'childMdx___frontmatter___featuredImage___mode',
  ChildMdxFrontmatterFeaturedImageNlink = 'childMdx___frontmatter___featuredImage___nlink',
  ChildMdxFrontmatterFeaturedImageUid = 'childMdx___frontmatter___featuredImage___uid',
  ChildMdxFrontmatterFeaturedImageGid = 'childMdx___frontmatter___featuredImage___gid',
  ChildMdxFrontmatterFeaturedImageRdev = 'childMdx___frontmatter___featuredImage___rdev',
  ChildMdxFrontmatterFeaturedImageBlksize = 'childMdx___frontmatter___featuredImage___blksize',
  ChildMdxFrontmatterFeaturedImageIno = 'childMdx___frontmatter___featuredImage___ino',
  ChildMdxFrontmatterFeaturedImageBlocks = 'childMdx___frontmatter___featuredImage___blocks',
  ChildMdxFrontmatterFeaturedImageAtimeMs = 'childMdx___frontmatter___featuredImage___atimeMs',
  ChildMdxFrontmatterFeaturedImageMtimeMs = 'childMdx___frontmatter___featuredImage___mtimeMs',
  ChildMdxFrontmatterFeaturedImageCtimeMs = 'childMdx___frontmatter___featuredImage___ctimeMs',
  ChildMdxFrontmatterFeaturedImageAtime = 'childMdx___frontmatter___featuredImage___atime',
  ChildMdxFrontmatterFeaturedImageMtime = 'childMdx___frontmatter___featuredImage___mtime',
  ChildMdxFrontmatterFeaturedImageCtime = 'childMdx___frontmatter___featuredImage___ctime',
  ChildMdxFrontmatterFeaturedImagePublicUrl = 'childMdx___frontmatter___featuredImage___publicURL',
  ChildMdxFrontmatterFeaturedImageId = 'childMdx___frontmatter___featuredImage___id',
  ChildMdxFrontmatterFeaturedImageChildren = 'childMdx___frontmatter___featuredImage___children',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type',
  ChildMdxChildMdxBlogPostId = 'childMdx___childMdxBlogPost___id',
  ChildMdxChildMdxBlogPostTitle = 'childMdx___childMdxBlogPost___title',
  ChildMdxChildMdxBlogPostFeaturedImageBirthtime = 'childMdx___childMdxBlogPost___featuredImage___birthtime',
  ChildMdxChildMdxBlogPostFeaturedImageBirthtimeMs = 'childMdx___childMdxBlogPost___featuredImage___birthtimeMs',
  ChildMdxChildMdxBlogPostFeaturedImageSourceInstanceName = 'childMdx___childMdxBlogPost___featuredImage___sourceInstanceName',
  ChildMdxChildMdxBlogPostFeaturedImageAbsolutePath = 'childMdx___childMdxBlogPost___featuredImage___absolutePath',
  ChildMdxChildMdxBlogPostFeaturedImageRelativePath = 'childMdx___childMdxBlogPost___featuredImage___relativePath',
  ChildMdxChildMdxBlogPostFeaturedImageExtension = 'childMdx___childMdxBlogPost___featuredImage___extension',
  ChildMdxChildMdxBlogPostFeaturedImageSize = 'childMdx___childMdxBlogPost___featuredImage___size',
  ChildMdxChildMdxBlogPostFeaturedImagePrettySize = 'childMdx___childMdxBlogPost___featuredImage___prettySize',
  ChildMdxChildMdxBlogPostFeaturedImageModifiedTime = 'childMdx___childMdxBlogPost___featuredImage___modifiedTime',
  ChildMdxChildMdxBlogPostFeaturedImageAccessTime = 'childMdx___childMdxBlogPost___featuredImage___accessTime',
  ChildMdxChildMdxBlogPostFeaturedImageChangeTime = 'childMdx___childMdxBlogPost___featuredImage___changeTime',
  ChildMdxChildMdxBlogPostFeaturedImageBirthTime = 'childMdx___childMdxBlogPost___featuredImage___birthTime',
  ChildMdxChildMdxBlogPostFeaturedImageRoot = 'childMdx___childMdxBlogPost___featuredImage___root',
  ChildMdxChildMdxBlogPostFeaturedImageDir = 'childMdx___childMdxBlogPost___featuredImage___dir',
  ChildMdxChildMdxBlogPostFeaturedImageBase = 'childMdx___childMdxBlogPost___featuredImage___base',
  ChildMdxChildMdxBlogPostFeaturedImageExt = 'childMdx___childMdxBlogPost___featuredImage___ext',
  ChildMdxChildMdxBlogPostFeaturedImageName = 'childMdx___childMdxBlogPost___featuredImage___name',
  ChildMdxChildMdxBlogPostFeaturedImageRelativeDirectory = 'childMdx___childMdxBlogPost___featuredImage___relativeDirectory',
  ChildMdxChildMdxBlogPostFeaturedImageDev = 'childMdx___childMdxBlogPost___featuredImage___dev',
  ChildMdxChildMdxBlogPostFeaturedImageMode = 'childMdx___childMdxBlogPost___featuredImage___mode',
  ChildMdxChildMdxBlogPostFeaturedImageNlink = 'childMdx___childMdxBlogPost___featuredImage___nlink',
  ChildMdxChildMdxBlogPostFeaturedImageUid = 'childMdx___childMdxBlogPost___featuredImage___uid',
  ChildMdxChildMdxBlogPostFeaturedImageGid = 'childMdx___childMdxBlogPost___featuredImage___gid',
  ChildMdxChildMdxBlogPostFeaturedImageRdev = 'childMdx___childMdxBlogPost___featuredImage___rdev',
  ChildMdxChildMdxBlogPostFeaturedImageBlksize = 'childMdx___childMdxBlogPost___featuredImage___blksize',
  ChildMdxChildMdxBlogPostFeaturedImageIno = 'childMdx___childMdxBlogPost___featuredImage___ino',
  ChildMdxChildMdxBlogPostFeaturedImageBlocks = 'childMdx___childMdxBlogPost___featuredImage___blocks',
  ChildMdxChildMdxBlogPostFeaturedImageAtimeMs = 'childMdx___childMdxBlogPost___featuredImage___atimeMs',
  ChildMdxChildMdxBlogPostFeaturedImageMtimeMs = 'childMdx___childMdxBlogPost___featuredImage___mtimeMs',
  ChildMdxChildMdxBlogPostFeaturedImageCtimeMs = 'childMdx___childMdxBlogPost___featuredImage___ctimeMs',
  ChildMdxChildMdxBlogPostFeaturedImageAtime = 'childMdx___childMdxBlogPost___featuredImage___atime',
  ChildMdxChildMdxBlogPostFeaturedImageMtime = 'childMdx___childMdxBlogPost___featuredImage___mtime',
  ChildMdxChildMdxBlogPostFeaturedImageCtime = 'childMdx___childMdxBlogPost___featuredImage___ctime',
  ChildMdxChildMdxBlogPostFeaturedImagePublicUrl = 'childMdx___childMdxBlogPost___featuredImage___publicURL',
  ChildMdxChildMdxBlogPostFeaturedImageId = 'childMdx___childMdxBlogPost___featuredImage___id',
  ChildMdxChildMdxBlogPostFeaturedImageChildren = 'childMdx___childMdxBlogPost___featuredImage___children',
  ChildMdxChildMdxBlogPostSlug = 'childMdx___childMdxBlogPost___slug',
  ChildMdxChildMdxBlogPostDate = 'childMdx___childMdxBlogPost___date',
  ChildMdxChildMdxBlogPostTags = 'childMdx___childMdxBlogPost___tags',
  ChildMdxChildMdxBlogPostKeywords = 'childMdx___childMdxBlogPost___keywords',
  ChildMdxChildMdxBlogPostExcerpt = 'childMdx___childMdxBlogPost___excerpt',
  ChildMdxChildMdxBlogPostBody = 'childMdx___childMdxBlogPost___body',
  ChildMdxChildMdxBlogPostParentId = 'childMdx___childMdxBlogPost___parent___id',
  ChildMdxChildMdxBlogPostParentChildren = 'childMdx___childMdxBlogPost___parent___children',
  ChildMdxChildMdxBlogPostChildren = 'childMdx___childMdxBlogPost___children',
  ChildMdxChildMdxBlogPostChildrenId = 'childMdx___childMdxBlogPost___children___id',
  ChildMdxChildMdxBlogPostChildrenChildren = 'childMdx___childMdxBlogPost___children___children',
  ChildMdxChildMdxBlogPostInternalContent = 'childMdx___childMdxBlogPost___internal___content',
  ChildMdxChildMdxBlogPostInternalContentDigest = 'childMdx___childMdxBlogPost___internal___contentDigest',
  ChildMdxChildMdxBlogPostInternalDescription = 'childMdx___childMdxBlogPost___internal___description',
  ChildMdxChildMdxBlogPostInternalFieldOwners = 'childMdx___childMdxBlogPost___internal___fieldOwners',
  ChildMdxChildMdxBlogPostInternalIgnoreType = 'childMdx___childMdxBlogPost___internal___ignoreType',
  ChildMdxChildMdxBlogPostInternalMediaType = 'childMdx___childMdxBlogPost___internal___mediaType',
  ChildMdxChildMdxBlogPostInternalOwner = 'childMdx___childMdxBlogPost___internal___owner',
  ChildMdxChildMdxBlogPostInternalType = 'childMdx___childMdxBlogPost___internal___type',
  ChildJavascriptFrontmatterId = 'childJavascriptFrontmatter___id',
  ChildJavascriptFrontmatterParentId = 'childJavascriptFrontmatter___parent___id',
  ChildJavascriptFrontmatterParentParentId = 'childJavascriptFrontmatter___parent___parent___id',
  ChildJavascriptFrontmatterParentParentChildren = 'childJavascriptFrontmatter___parent___parent___children',
  ChildJavascriptFrontmatterParentChildren = 'childJavascriptFrontmatter___parent___children',
  ChildJavascriptFrontmatterParentChildrenId = 'childJavascriptFrontmatter___parent___children___id',
  ChildJavascriptFrontmatterParentChildrenChildren = 'childJavascriptFrontmatter___parent___children___children',
  ChildJavascriptFrontmatterParentInternalContent = 'childJavascriptFrontmatter___parent___internal___content',
  ChildJavascriptFrontmatterParentInternalContentDigest = 'childJavascriptFrontmatter___parent___internal___contentDigest',
  ChildJavascriptFrontmatterParentInternalDescription = 'childJavascriptFrontmatter___parent___internal___description',
  ChildJavascriptFrontmatterParentInternalFieldOwners = 'childJavascriptFrontmatter___parent___internal___fieldOwners',
  ChildJavascriptFrontmatterParentInternalIgnoreType = 'childJavascriptFrontmatter___parent___internal___ignoreType',
  ChildJavascriptFrontmatterParentInternalMediaType = 'childJavascriptFrontmatter___parent___internal___mediaType',
  ChildJavascriptFrontmatterParentInternalOwner = 'childJavascriptFrontmatter___parent___internal___owner',
  ChildJavascriptFrontmatterParentInternalType = 'childJavascriptFrontmatter___parent___internal___type',
  ChildJavascriptFrontmatterChildren = 'childJavascriptFrontmatter___children',
  ChildJavascriptFrontmatterChildrenId = 'childJavascriptFrontmatter___children___id',
  ChildJavascriptFrontmatterChildrenParentId = 'childJavascriptFrontmatter___children___parent___id',
  ChildJavascriptFrontmatterChildrenParentChildren = 'childJavascriptFrontmatter___children___parent___children',
  ChildJavascriptFrontmatterChildrenChildren = 'childJavascriptFrontmatter___children___children',
  ChildJavascriptFrontmatterChildrenChildrenId = 'childJavascriptFrontmatter___children___children___id',
  ChildJavascriptFrontmatterChildrenChildrenChildren = 'childJavascriptFrontmatter___children___children___children',
  ChildJavascriptFrontmatterChildrenInternalContent = 'childJavascriptFrontmatter___children___internal___content',
  ChildJavascriptFrontmatterChildrenInternalContentDigest = 'childJavascriptFrontmatter___children___internal___contentDigest',
  ChildJavascriptFrontmatterChildrenInternalDescription = 'childJavascriptFrontmatter___children___internal___description',
  ChildJavascriptFrontmatterChildrenInternalFieldOwners = 'childJavascriptFrontmatter___children___internal___fieldOwners',
  ChildJavascriptFrontmatterChildrenInternalIgnoreType = 'childJavascriptFrontmatter___children___internal___ignoreType',
  ChildJavascriptFrontmatterChildrenInternalMediaType = 'childJavascriptFrontmatter___children___internal___mediaType',
  ChildJavascriptFrontmatterChildrenInternalOwner = 'childJavascriptFrontmatter___children___internal___owner',
  ChildJavascriptFrontmatterChildrenInternalType = 'childJavascriptFrontmatter___children___internal___type',
  ChildJavascriptFrontmatterInternalContent = 'childJavascriptFrontmatter___internal___content',
  ChildJavascriptFrontmatterInternalContentDigest = 'childJavascriptFrontmatter___internal___contentDigest',
  ChildJavascriptFrontmatterInternalDescription = 'childJavascriptFrontmatter___internal___description',
  ChildJavascriptFrontmatterInternalFieldOwners = 'childJavascriptFrontmatter___internal___fieldOwners',
  ChildJavascriptFrontmatterInternalIgnoreType = 'childJavascriptFrontmatter___internal___ignoreType',
  ChildJavascriptFrontmatterInternalMediaType = 'childJavascriptFrontmatter___internal___mediaType',
  ChildJavascriptFrontmatterInternalOwner = 'childJavascriptFrontmatter___internal___owner',
  ChildJavascriptFrontmatterInternalType = 'childJavascriptFrontmatter___internal___type',
  ChildJavascriptFrontmatterNodeId = 'childJavascriptFrontmatter___node___id',
  ChildJavascriptFrontmatterNodeChildren = 'childJavascriptFrontmatter___node___children',
  ChildJavascriptFrontmatterNodeInternalContentDigest = 'childJavascriptFrontmatter___node___internal___contentDigest',
  ChildJavascriptFrontmatterNodeInternalType = 'childJavascriptFrontmatter___node___internal___type',
  ChildJavascriptFrontmatterNodeInternalMediaType = 'childJavascriptFrontmatter___node___internal___mediaType',
  ChildJavascriptFrontmatterNodeInternalDescription = 'childJavascriptFrontmatter___node___internal___description',
  ChildJavascriptFrontmatterNodeInternalCounter = 'childJavascriptFrontmatter___node___internal___counter',
  ChildJavascriptFrontmatterNodeInternalOwner = 'childJavascriptFrontmatter___node___internal___owner',
  ChildJavascriptFrontmatterNodeSourceInstanceName = 'childJavascriptFrontmatter___node___sourceInstanceName',
  ChildJavascriptFrontmatterNodeAbsolutePath = 'childJavascriptFrontmatter___node___absolutePath',
  ChildJavascriptFrontmatterNodeRelativePath = 'childJavascriptFrontmatter___node___relativePath',
  ChildJavascriptFrontmatterNodeExtension = 'childJavascriptFrontmatter___node___extension',
  ChildJavascriptFrontmatterNodeSize = 'childJavascriptFrontmatter___node___size',
  ChildJavascriptFrontmatterNodePrettySize = 'childJavascriptFrontmatter___node___prettySize',
  ChildJavascriptFrontmatterNodeModifiedTime = 'childJavascriptFrontmatter___node___modifiedTime',
  ChildJavascriptFrontmatterNodeAccessTime = 'childJavascriptFrontmatter___node___accessTime',
  ChildJavascriptFrontmatterNodeChangeTime = 'childJavascriptFrontmatter___node___changeTime',
  ChildJavascriptFrontmatterNodeBirthTime = 'childJavascriptFrontmatter___node___birthTime',
  ChildJavascriptFrontmatterNodeRoot = 'childJavascriptFrontmatter___node___root',
  ChildJavascriptFrontmatterNodeDir = 'childJavascriptFrontmatter___node___dir',
  ChildJavascriptFrontmatterNodeBaseBirthtime = 'childJavascriptFrontmatter___node___base___birthtime',
  ChildJavascriptFrontmatterNodeBaseBirthtimeMs = 'childJavascriptFrontmatter___node___base___birthtimeMs',
  ChildJavascriptFrontmatterNodeBaseSourceInstanceName = 'childJavascriptFrontmatter___node___base___sourceInstanceName',
  ChildJavascriptFrontmatterNodeBaseAbsolutePath = 'childJavascriptFrontmatter___node___base___absolutePath',
  ChildJavascriptFrontmatterNodeBaseRelativePath = 'childJavascriptFrontmatter___node___base___relativePath',
  ChildJavascriptFrontmatterNodeBaseExtension = 'childJavascriptFrontmatter___node___base___extension',
  ChildJavascriptFrontmatterNodeBaseSize = 'childJavascriptFrontmatter___node___base___size',
  ChildJavascriptFrontmatterNodeBasePrettySize = 'childJavascriptFrontmatter___node___base___prettySize',
  ChildJavascriptFrontmatterNodeBaseModifiedTime = 'childJavascriptFrontmatter___node___base___modifiedTime',
  ChildJavascriptFrontmatterNodeBaseAccessTime = 'childJavascriptFrontmatter___node___base___accessTime',
  ChildJavascriptFrontmatterNodeBaseChangeTime = 'childJavascriptFrontmatter___node___base___changeTime',
  ChildJavascriptFrontmatterNodeBaseBirthTime = 'childJavascriptFrontmatter___node___base___birthTime',
  ChildJavascriptFrontmatterNodeBaseRoot = 'childJavascriptFrontmatter___node___base___root',
  ChildJavascriptFrontmatterNodeBaseDir = 'childJavascriptFrontmatter___node___base___dir',
  ChildJavascriptFrontmatterNodeBaseBase = 'childJavascriptFrontmatter___node___base___base',
  ChildJavascriptFrontmatterNodeBaseExt = 'childJavascriptFrontmatter___node___base___ext',
  ChildJavascriptFrontmatterNodeBaseName = 'childJavascriptFrontmatter___node___base___name',
  ChildJavascriptFrontmatterNodeBaseRelativeDirectory = 'childJavascriptFrontmatter___node___base___relativeDirectory',
  ChildJavascriptFrontmatterNodeBaseDev = 'childJavascriptFrontmatter___node___base___dev',
  ChildJavascriptFrontmatterNodeBaseMode = 'childJavascriptFrontmatter___node___base___mode',
  ChildJavascriptFrontmatterNodeBaseNlink = 'childJavascriptFrontmatter___node___base___nlink',
  ChildJavascriptFrontmatterNodeBaseUid = 'childJavascriptFrontmatter___node___base___uid',
  ChildJavascriptFrontmatterNodeBaseGid = 'childJavascriptFrontmatter___node___base___gid',
  ChildJavascriptFrontmatterNodeBaseRdev = 'childJavascriptFrontmatter___node___base___rdev',
  ChildJavascriptFrontmatterNodeBaseBlksize = 'childJavascriptFrontmatter___node___base___blksize',
  ChildJavascriptFrontmatterNodeBaseIno = 'childJavascriptFrontmatter___node___base___ino',
  ChildJavascriptFrontmatterNodeBaseBlocks = 'childJavascriptFrontmatter___node___base___blocks',
  ChildJavascriptFrontmatterNodeBaseAtimeMs = 'childJavascriptFrontmatter___node___base___atimeMs',
  ChildJavascriptFrontmatterNodeBaseMtimeMs = 'childJavascriptFrontmatter___node___base___mtimeMs',
  ChildJavascriptFrontmatterNodeBaseCtimeMs = 'childJavascriptFrontmatter___node___base___ctimeMs',
  ChildJavascriptFrontmatterNodeBaseAtime = 'childJavascriptFrontmatter___node___base___atime',
  ChildJavascriptFrontmatterNodeBaseMtime = 'childJavascriptFrontmatter___node___base___mtime',
  ChildJavascriptFrontmatterNodeBaseCtime = 'childJavascriptFrontmatter___node___base___ctime',
  ChildJavascriptFrontmatterNodeBasePublicUrl = 'childJavascriptFrontmatter___node___base___publicURL',
  ChildJavascriptFrontmatterNodeBaseId = 'childJavascriptFrontmatter___node___base___id',
  ChildJavascriptFrontmatterNodeBaseChildren = 'childJavascriptFrontmatter___node___base___children',
  ChildJavascriptFrontmatterNodeExt = 'childJavascriptFrontmatter___node___ext',
  ChildJavascriptFrontmatterNodeName = 'childJavascriptFrontmatter___node___name',
  ChildJavascriptFrontmatterNodeRelativeDirectory = 'childJavascriptFrontmatter___node___relativeDirectory',
  ChildJavascriptFrontmatterNodeDev = 'childJavascriptFrontmatter___node___dev',
  ChildJavascriptFrontmatterNodeMode = 'childJavascriptFrontmatter___node___mode',
  ChildJavascriptFrontmatterNodeNlink = 'childJavascriptFrontmatter___node___nlink',
  ChildJavascriptFrontmatterNodeUid = 'childJavascriptFrontmatter___node___uid',
  ChildJavascriptFrontmatterNodeGid = 'childJavascriptFrontmatter___node___gid',
  ChildJavascriptFrontmatterNodeRdev = 'childJavascriptFrontmatter___node___rdev',
  ChildJavascriptFrontmatterNodeBlksize = 'childJavascriptFrontmatter___node___blksize',
  ChildJavascriptFrontmatterNodeIno = 'childJavascriptFrontmatter___node___ino',
  ChildJavascriptFrontmatterNodeBlocks = 'childJavascriptFrontmatter___node___blocks',
  ChildJavascriptFrontmatterNodeAtimeMs = 'childJavascriptFrontmatter___node___atimeMs',
  ChildJavascriptFrontmatterNodeMtimeMs = 'childJavascriptFrontmatter___node___mtimeMs',
  ChildJavascriptFrontmatterNodeCtimeMs = 'childJavascriptFrontmatter___node___ctimeMs',
  ChildJavascriptFrontmatterNodeBirthtimeMs = 'childJavascriptFrontmatter___node___birthtimeMs',
  ChildJavascriptFrontmatterNodeAtime = 'childJavascriptFrontmatter___node___atime',
  ChildJavascriptFrontmatterNodeMtime = 'childJavascriptFrontmatter___node___mtime',
  ChildJavascriptFrontmatterNodeCtime = 'childJavascriptFrontmatter___node___ctime',
  ChildJavascriptFrontmatterNodeBirthtime = 'childJavascriptFrontmatter___node___birthtime',
  ChildJavascriptFrontmatterFrontmatterName = 'childJavascriptFrontmatter___frontmatter___name',
  ChildJavascriptFrontmatterFrontmatterOpen = 'childJavascriptFrontmatter___frontmatter___open',
  ChildJavascriptFrontmatterFrontmatterError = 'childJavascriptFrontmatter___frontmatter___error',
  ChildJavascriptFrontmatterFileAbsolutePath = 'childJavascriptFrontmatter___fileAbsolutePath'
}

export type FileFilterInput = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMdx?: Maybe<MdxFilterInput>,
  childJavascriptFrontmatter?: Maybe<JavascriptFrontmatterFilterInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
   __typename?: 'ImageSharp',
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
   __typename?: 'ImageSharpConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
   __typename?: 'ImageSharpEdge',
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
   __typename?: 'ImageSharpFixed',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
   __typename?: 'ImageSharpFluid',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
   __typename?: 'ImageSharpGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
   __typename?: 'ImageSharpOriginal',
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
   __typename?: 'ImageSharpResize',
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
   __typename?: 'ImageSharpResolutions',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
   __typename?: 'ImageSharpSizes',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type JavascriptFrontmatter = Node & {
   __typename?: 'JavascriptFrontmatter',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  node?: Maybe<JavascriptFrontmatterNode>,
  frontmatter?: Maybe<JavascriptFrontmatterFrontmatter>,
  fileAbsolutePath?: Maybe<Scalars['String']>,
};

export type JavascriptFrontmatterConnection = {
   __typename?: 'JavascriptFrontmatterConnection',
  totalCount: Scalars['Int'],
  edges: Array<JavascriptFrontmatterEdge>,
  nodes: Array<JavascriptFrontmatter>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<JavascriptFrontmatterGroupConnection>,
};


export type JavascriptFrontmatterConnectionDistinctArgs = {
  field: JavascriptFrontmatterFieldsEnum
};


export type JavascriptFrontmatterConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: JavascriptFrontmatterFieldsEnum
};

export type JavascriptFrontmatterEdge = {
   __typename?: 'JavascriptFrontmatterEdge',
  next?: Maybe<JavascriptFrontmatter>,
  node: JavascriptFrontmatter,
  previous?: Maybe<JavascriptFrontmatter>,
};

export enum JavascriptFrontmatterFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeId = 'node___id',
  NodeChildren = 'node___children',
  NodeInternalContentDigest = 'node___internal___contentDigest',
  NodeInternalType = 'node___internal___type',
  NodeInternalMediaType = 'node___internal___mediaType',
  NodeInternalDescription = 'node___internal___description',
  NodeInternalCounter = 'node___internal___counter',
  NodeInternalOwner = 'node___internal___owner',
  NodeSourceInstanceName = 'node___sourceInstanceName',
  NodeAbsolutePath = 'node___absolutePath',
  NodeRelativePath = 'node___relativePath',
  NodeExtension = 'node___extension',
  NodeSize = 'node___size',
  NodePrettySize = 'node___prettySize',
  NodeModifiedTime = 'node___modifiedTime',
  NodeAccessTime = 'node___accessTime',
  NodeChangeTime = 'node___changeTime',
  NodeBirthTime = 'node___birthTime',
  NodeRoot = 'node___root',
  NodeDir = 'node___dir',
  NodeBaseBirthtime = 'node___base___birthtime',
  NodeBaseBirthtimeMs = 'node___base___birthtimeMs',
  NodeBaseSourceInstanceName = 'node___base___sourceInstanceName',
  NodeBaseAbsolutePath = 'node___base___absolutePath',
  NodeBaseRelativePath = 'node___base___relativePath',
  NodeBaseExtension = 'node___base___extension',
  NodeBaseSize = 'node___base___size',
  NodeBasePrettySize = 'node___base___prettySize',
  NodeBaseModifiedTime = 'node___base___modifiedTime',
  NodeBaseAccessTime = 'node___base___accessTime',
  NodeBaseChangeTime = 'node___base___changeTime',
  NodeBaseBirthTime = 'node___base___birthTime',
  NodeBaseRoot = 'node___base___root',
  NodeBaseDir = 'node___base___dir',
  NodeBaseBase = 'node___base___base',
  NodeBaseExt = 'node___base___ext',
  NodeBaseName = 'node___base___name',
  NodeBaseRelativeDirectory = 'node___base___relativeDirectory',
  NodeBaseDev = 'node___base___dev',
  NodeBaseMode = 'node___base___mode',
  NodeBaseNlink = 'node___base___nlink',
  NodeBaseUid = 'node___base___uid',
  NodeBaseGid = 'node___base___gid',
  NodeBaseRdev = 'node___base___rdev',
  NodeBaseBlksize = 'node___base___blksize',
  NodeBaseIno = 'node___base___ino',
  NodeBaseBlocks = 'node___base___blocks',
  NodeBaseAtimeMs = 'node___base___atimeMs',
  NodeBaseMtimeMs = 'node___base___mtimeMs',
  NodeBaseCtimeMs = 'node___base___ctimeMs',
  NodeBaseAtime = 'node___base___atime',
  NodeBaseMtime = 'node___base___mtime',
  NodeBaseCtime = 'node___base___ctime',
  NodeBasePublicUrl = 'node___base___publicURL',
  NodeBaseChildImageSharpId = 'node___base___childImageSharp___id',
  NodeBaseChildImageSharpChildren = 'node___base___childImageSharp___children',
  NodeBaseId = 'node___base___id',
  NodeBaseParentId = 'node___base___parent___id',
  NodeBaseParentChildren = 'node___base___parent___children',
  NodeBaseChildren = 'node___base___children',
  NodeBaseChildrenId = 'node___base___children___id',
  NodeBaseChildrenChildren = 'node___base___children___children',
  NodeBaseInternalContent = 'node___base___internal___content',
  NodeBaseInternalContentDigest = 'node___base___internal___contentDigest',
  NodeBaseInternalDescription = 'node___base___internal___description',
  NodeBaseInternalFieldOwners = 'node___base___internal___fieldOwners',
  NodeBaseInternalIgnoreType = 'node___base___internal___ignoreType',
  NodeBaseInternalMediaType = 'node___base___internal___mediaType',
  NodeBaseInternalOwner = 'node___base___internal___owner',
  NodeBaseInternalType = 'node___base___internal___type',
  NodeBaseChildMdxRawBody = 'node___base___childMdx___rawBody',
  NodeBaseChildMdxFileAbsolutePath = 'node___base___childMdx___fileAbsolutePath',
  NodeBaseChildMdxBody = 'node___base___childMdx___body',
  NodeBaseChildMdxExcerpt = 'node___base___childMdx___excerpt',
  NodeBaseChildMdxHeadings = 'node___base___childMdx___headings',
  NodeBaseChildMdxHtml = 'node___base___childMdx___html',
  NodeBaseChildMdxMdxAst = 'node___base___childMdx___mdxAST',
  NodeBaseChildMdxTableOfContents = 'node___base___childMdx___tableOfContents',
  NodeBaseChildMdxTimeToRead = 'node___base___childMdx___timeToRead',
  NodeBaseChildMdxId = 'node___base___childMdx___id',
  NodeBaseChildMdxChildren = 'node___base___childMdx___children',
  NodeBaseChildJavascriptFrontmatterId = 'node___base___childJavascriptFrontmatter___id',
  NodeBaseChildJavascriptFrontmatterChildren = 'node___base___childJavascriptFrontmatter___children',
  NodeBaseChildJavascriptFrontmatterFileAbsolutePath = 'node___base___childJavascriptFrontmatter___fileAbsolutePath',
  NodeExt = 'node___ext',
  NodeName = 'node___name',
  NodeRelativeDirectory = 'node___relativeDirectory',
  NodeDev = 'node___dev',
  NodeMode = 'node___mode',
  NodeNlink = 'node___nlink',
  NodeUid = 'node___uid',
  NodeGid = 'node___gid',
  NodeRdev = 'node___rdev',
  NodeBlksize = 'node___blksize',
  NodeIno = 'node___ino',
  NodeBlocks = 'node___blocks',
  NodeAtimeMs = 'node___atimeMs',
  NodeMtimeMs = 'node___mtimeMs',
  NodeCtimeMs = 'node___ctimeMs',
  NodeBirthtimeMs = 'node___birthtimeMs',
  NodeAtime = 'node___atime',
  NodeMtime = 'node___mtime',
  NodeCtime = 'node___ctime',
  NodeBirthtime = 'node___birthtime',
  FrontmatterName = 'frontmatter___name',
  FrontmatterOpen = 'frontmatter___open',
  FrontmatterError = 'frontmatter___error',
  FileAbsolutePath = 'fileAbsolutePath'
}

export type JavascriptFrontmatterFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  node?: Maybe<JavascriptFrontmatterNodeFilterInput>,
  frontmatter?: Maybe<JavascriptFrontmatterFrontmatterFilterInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
};

export type JavascriptFrontmatterFrontmatter = {
   __typename?: 'JavascriptFrontmatterFrontmatter',
  name?: Maybe<Scalars['String']>,
  open?: Maybe<Scalars['Boolean']>,
  error?: Maybe<Scalars['Boolean']>,
};

export type JavascriptFrontmatterFrontmatterFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  open?: Maybe<BooleanQueryOperatorInput>,
  error?: Maybe<BooleanQueryOperatorInput>,
};

export type JavascriptFrontmatterGroupConnection = {
   __typename?: 'JavascriptFrontmatterGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<JavascriptFrontmatterEdge>,
  nodes: Array<JavascriptFrontmatter>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type JavascriptFrontmatterNode = {
   __typename?: 'JavascriptFrontmatterNode',
  id?: Maybe<Scalars['String']>,
  children?: Maybe<Array<Maybe<Scalars['String']>>>,
  internal?: Maybe<JavascriptFrontmatterNodeInternal>,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<File>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  birthtime?: Maybe<Scalars['Date']>,
};


export type JavascriptFrontmatterNodeModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type JavascriptFrontmatterNodeAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type JavascriptFrontmatterNodeChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type JavascriptFrontmatterNodeBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type JavascriptFrontmatterNodeAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type JavascriptFrontmatterNodeMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type JavascriptFrontmatterNodeCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type JavascriptFrontmatterNodeBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type JavascriptFrontmatterNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  children?: Maybe<StringQueryOperatorInput>,
  internal?: Maybe<JavascriptFrontmatterNodeInternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<FileFilterInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
};

export type JavascriptFrontmatterNodeInternal = {
   __typename?: 'JavascriptFrontmatterNodeInternal',
  contentDigest?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  mediaType?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  counter?: Maybe<Scalars['Int']>,
  owner?: Maybe<Scalars['String']>,
};

export type JavascriptFrontmatterNodeInternalFilterInput = {
  contentDigest?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  counter?: Maybe<IntQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
};

export type JavascriptFrontmatterSortInput = {
  fields?: Maybe<Array<Maybe<JavascriptFrontmatterFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export type MaterialBlogThemeOptions = Node & {
   __typename?: 'MaterialBlogThemeOptions',
  basePath: Scalars['String'],
  contentPath: Scalars['String'],
  assetPath: Scalars['String'],
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type MaterialBlogThemeOptionsConnection = {
   __typename?: 'MaterialBlogThemeOptionsConnection',
  totalCount: Scalars['Int'],
  edges: Array<MaterialBlogThemeOptionsEdge>,
  nodes: Array<MaterialBlogThemeOptions>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MaterialBlogThemeOptionsGroupConnection>,
};


export type MaterialBlogThemeOptionsConnectionDistinctArgs = {
  field: MaterialBlogThemeOptionsFieldsEnum
};


export type MaterialBlogThemeOptionsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MaterialBlogThemeOptionsFieldsEnum
};

export type MaterialBlogThemeOptionsEdge = {
   __typename?: 'MaterialBlogThemeOptionsEdge',
  next?: Maybe<MaterialBlogThemeOptions>,
  node: MaterialBlogThemeOptions,
  previous?: Maybe<MaterialBlogThemeOptions>,
};

export enum MaterialBlogThemeOptionsFieldsEnum {
  BasePath = 'basePath',
  ContentPath = 'contentPath',
  AssetPath = 'assetPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MaterialBlogThemeOptionsFilterInput = {
  basePath?: Maybe<StringQueryOperatorInput>,
  contentPath?: Maybe<StringQueryOperatorInput>,
  assetPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MaterialBlogThemeOptionsGroupConnection = {
   __typename?: 'MaterialBlogThemeOptionsGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MaterialBlogThemeOptionsEdge>,
  nodes: Array<MaterialBlogThemeOptions>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MaterialBlogThemeOptionsSortInput = {
  fields?: Maybe<Array<Maybe<MaterialBlogThemeOptionsFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Mdx = Node & {
   __typename?: 'Mdx',
  rawBody: Scalars['String'],
  fileAbsolutePath: Scalars['String'],
  frontmatter?: Maybe<MdxFrontmatter>,
  body: Scalars['String'],
  excerpt: Scalars['String'],
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>,
  html?: Maybe<Scalars['String']>,
  mdxAST?: Maybe<Scalars['JSON']>,
  tableOfContents?: Maybe<Scalars['JSON']>,
  timeToRead?: Maybe<Scalars['Int']>,
  wordCount?: Maybe<MdxWordCount>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childMdxBlogPost?: Maybe<MdxBlogPost>,
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>
};

export type MdxBlogPost = Node & BlogPost & {
   __typename?: 'MdxBlogPost',
  id: Scalars['ID'],
  title: Scalars['String'],
  featuredImage?: Maybe<File>,
  slug: Scalars['String'],
  date: Scalars['Date'],
  tags: Array<Maybe<Scalars['String']>>,
  keywords: Array<Maybe<Scalars['String']>>,
  excerpt: Scalars['String'],
  body: Scalars['String'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MdxBlogPostDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type MdxBlogPostExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
};

export type MdxBlogPostConnection = {
   __typename?: 'MdxBlogPostConnection',
  totalCount: Scalars['Int'],
  edges: Array<MdxBlogPostEdge>,
  nodes: Array<MdxBlogPost>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MdxBlogPostGroupConnection>,
};


export type MdxBlogPostConnectionDistinctArgs = {
  field: MdxBlogPostFieldsEnum
};


export type MdxBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MdxBlogPostFieldsEnum
};

export type MdxBlogPostEdge = {
   __typename?: 'MdxBlogPostEdge',
  next?: Maybe<MdxBlogPost>,
  node: MdxBlogPost,
  previous?: Maybe<MdxBlogPost>,
};

export enum MdxBlogPostFieldsEnum {
  Id = 'id',
  Title = 'title',
  FeaturedImageBirthtime = 'featuredImage___birthtime',
  FeaturedImageBirthtimeMs = 'featuredImage___birthtimeMs',
  FeaturedImageSourceInstanceName = 'featuredImage___sourceInstanceName',
  FeaturedImageAbsolutePath = 'featuredImage___absolutePath',
  FeaturedImageRelativePath = 'featuredImage___relativePath',
  FeaturedImageExtension = 'featuredImage___extension',
  FeaturedImageSize = 'featuredImage___size',
  FeaturedImagePrettySize = 'featuredImage___prettySize',
  FeaturedImageModifiedTime = 'featuredImage___modifiedTime',
  FeaturedImageAccessTime = 'featuredImage___accessTime',
  FeaturedImageChangeTime = 'featuredImage___changeTime',
  FeaturedImageBirthTime = 'featuredImage___birthTime',
  FeaturedImageRoot = 'featuredImage___root',
  FeaturedImageDir = 'featuredImage___dir',
  FeaturedImageBase = 'featuredImage___base',
  FeaturedImageExt = 'featuredImage___ext',
  FeaturedImageName = 'featuredImage___name',
  FeaturedImageRelativeDirectory = 'featuredImage___relativeDirectory',
  FeaturedImageDev = 'featuredImage___dev',
  FeaturedImageMode = 'featuredImage___mode',
  FeaturedImageNlink = 'featuredImage___nlink',
  FeaturedImageUid = 'featuredImage___uid',
  FeaturedImageGid = 'featuredImage___gid',
  FeaturedImageRdev = 'featuredImage___rdev',
  FeaturedImageBlksize = 'featuredImage___blksize',
  FeaturedImageIno = 'featuredImage___ino',
  FeaturedImageBlocks = 'featuredImage___blocks',
  FeaturedImageAtimeMs = 'featuredImage___atimeMs',
  FeaturedImageMtimeMs = 'featuredImage___mtimeMs',
  FeaturedImageCtimeMs = 'featuredImage___ctimeMs',
  FeaturedImageAtime = 'featuredImage___atime',
  FeaturedImageMtime = 'featuredImage___mtime',
  FeaturedImageCtime = 'featuredImage___ctime',
  FeaturedImagePublicUrl = 'featuredImage___publicURL',
  FeaturedImageChildImageSharpFixedBase64 = 'featuredImage___childImageSharp___fixed___base64',
  FeaturedImageChildImageSharpFixedTracedSvg = 'featuredImage___childImageSharp___fixed___tracedSVG',
  FeaturedImageChildImageSharpFixedAspectRatio = 'featuredImage___childImageSharp___fixed___aspectRatio',
  FeaturedImageChildImageSharpFixedWidth = 'featuredImage___childImageSharp___fixed___width',
  FeaturedImageChildImageSharpFixedHeight = 'featuredImage___childImageSharp___fixed___height',
  FeaturedImageChildImageSharpFixedSrc = 'featuredImage___childImageSharp___fixed___src',
  FeaturedImageChildImageSharpFixedSrcSet = 'featuredImage___childImageSharp___fixed___srcSet',
  FeaturedImageChildImageSharpFixedSrcWebp = 'featuredImage___childImageSharp___fixed___srcWebp',
  FeaturedImageChildImageSharpFixedSrcSetWebp = 'featuredImage___childImageSharp___fixed___srcSetWebp',
  FeaturedImageChildImageSharpFixedOriginalName = 'featuredImage___childImageSharp___fixed___originalName',
  FeaturedImageChildImageSharpResolutionsBase64 = 'featuredImage___childImageSharp___resolutions___base64',
  FeaturedImageChildImageSharpResolutionsTracedSvg = 'featuredImage___childImageSharp___resolutions___tracedSVG',
  FeaturedImageChildImageSharpResolutionsAspectRatio = 'featuredImage___childImageSharp___resolutions___aspectRatio',
  FeaturedImageChildImageSharpResolutionsWidth = 'featuredImage___childImageSharp___resolutions___width',
  FeaturedImageChildImageSharpResolutionsHeight = 'featuredImage___childImageSharp___resolutions___height',
  FeaturedImageChildImageSharpResolutionsSrc = 'featuredImage___childImageSharp___resolutions___src',
  FeaturedImageChildImageSharpResolutionsSrcSet = 'featuredImage___childImageSharp___resolutions___srcSet',
  FeaturedImageChildImageSharpResolutionsSrcWebp = 'featuredImage___childImageSharp___resolutions___srcWebp',
  FeaturedImageChildImageSharpResolutionsSrcSetWebp = 'featuredImage___childImageSharp___resolutions___srcSetWebp',
  FeaturedImageChildImageSharpResolutionsOriginalName = 'featuredImage___childImageSharp___resolutions___originalName',
  FeaturedImageChildImageSharpFluidBase64 = 'featuredImage___childImageSharp___fluid___base64',
  FeaturedImageChildImageSharpFluidTracedSvg = 'featuredImage___childImageSharp___fluid___tracedSVG',
  FeaturedImageChildImageSharpFluidAspectRatio = 'featuredImage___childImageSharp___fluid___aspectRatio',
  FeaturedImageChildImageSharpFluidSrc = 'featuredImage___childImageSharp___fluid___src',
  FeaturedImageChildImageSharpFluidSrcSet = 'featuredImage___childImageSharp___fluid___srcSet',
  FeaturedImageChildImageSharpFluidSrcWebp = 'featuredImage___childImageSharp___fluid___srcWebp',
  FeaturedImageChildImageSharpFluidSrcSetWebp = 'featuredImage___childImageSharp___fluid___srcSetWebp',
  FeaturedImageChildImageSharpFluidSizes = 'featuredImage___childImageSharp___fluid___sizes',
  FeaturedImageChildImageSharpFluidOriginalImg = 'featuredImage___childImageSharp___fluid___originalImg',
  FeaturedImageChildImageSharpFluidOriginalName = 'featuredImage___childImageSharp___fluid___originalName',
  FeaturedImageChildImageSharpFluidPresentationWidth = 'featuredImage___childImageSharp___fluid___presentationWidth',
  FeaturedImageChildImageSharpFluidPresentationHeight = 'featuredImage___childImageSharp___fluid___presentationHeight',
  FeaturedImageChildImageSharpSizesBase64 = 'featuredImage___childImageSharp___sizes___base64',
  FeaturedImageChildImageSharpSizesTracedSvg = 'featuredImage___childImageSharp___sizes___tracedSVG',
  FeaturedImageChildImageSharpSizesAspectRatio = 'featuredImage___childImageSharp___sizes___aspectRatio',
  FeaturedImageChildImageSharpSizesSrc = 'featuredImage___childImageSharp___sizes___src',
  FeaturedImageChildImageSharpSizesSrcSet = 'featuredImage___childImageSharp___sizes___srcSet',
  FeaturedImageChildImageSharpSizesSrcWebp = 'featuredImage___childImageSharp___sizes___srcWebp',
  FeaturedImageChildImageSharpSizesSrcSetWebp = 'featuredImage___childImageSharp___sizes___srcSetWebp',
  FeaturedImageChildImageSharpSizesSizes = 'featuredImage___childImageSharp___sizes___sizes',
  FeaturedImageChildImageSharpSizesOriginalImg = 'featuredImage___childImageSharp___sizes___originalImg',
  FeaturedImageChildImageSharpSizesOriginalName = 'featuredImage___childImageSharp___sizes___originalName',
  FeaturedImageChildImageSharpSizesPresentationWidth = 'featuredImage___childImageSharp___sizes___presentationWidth',
  FeaturedImageChildImageSharpSizesPresentationHeight = 'featuredImage___childImageSharp___sizes___presentationHeight',
  FeaturedImageChildImageSharpOriginalWidth = 'featuredImage___childImageSharp___original___width',
  FeaturedImageChildImageSharpOriginalHeight = 'featuredImage___childImageSharp___original___height',
  FeaturedImageChildImageSharpOriginalSrc = 'featuredImage___childImageSharp___original___src',
  FeaturedImageChildImageSharpResizeSrc = 'featuredImage___childImageSharp___resize___src',
  FeaturedImageChildImageSharpResizeTracedSvg = 'featuredImage___childImageSharp___resize___tracedSVG',
  FeaturedImageChildImageSharpResizeWidth = 'featuredImage___childImageSharp___resize___width',
  FeaturedImageChildImageSharpResizeHeight = 'featuredImage___childImageSharp___resize___height',
  FeaturedImageChildImageSharpResizeAspectRatio = 'featuredImage___childImageSharp___resize___aspectRatio',
  FeaturedImageChildImageSharpResizeOriginalName = 'featuredImage___childImageSharp___resize___originalName',
  FeaturedImageChildImageSharpId = 'featuredImage___childImageSharp___id',
  FeaturedImageChildImageSharpParentId = 'featuredImage___childImageSharp___parent___id',
  FeaturedImageChildImageSharpParentChildren = 'featuredImage___childImageSharp___parent___children',
  FeaturedImageChildImageSharpChildren = 'featuredImage___childImageSharp___children',
  FeaturedImageChildImageSharpChildrenId = 'featuredImage___childImageSharp___children___id',
  FeaturedImageChildImageSharpChildrenChildren = 'featuredImage___childImageSharp___children___children',
  FeaturedImageChildImageSharpInternalContent = 'featuredImage___childImageSharp___internal___content',
  FeaturedImageChildImageSharpInternalContentDigest = 'featuredImage___childImageSharp___internal___contentDigest',
  FeaturedImageChildImageSharpInternalDescription = 'featuredImage___childImageSharp___internal___description',
  FeaturedImageChildImageSharpInternalFieldOwners = 'featuredImage___childImageSharp___internal___fieldOwners',
  FeaturedImageChildImageSharpInternalIgnoreType = 'featuredImage___childImageSharp___internal___ignoreType',
  FeaturedImageChildImageSharpInternalMediaType = 'featuredImage___childImageSharp___internal___mediaType',
  FeaturedImageChildImageSharpInternalOwner = 'featuredImage___childImageSharp___internal___owner',
  FeaturedImageChildImageSharpInternalType = 'featuredImage___childImageSharp___internal___type',
  FeaturedImageId = 'featuredImage___id',
  FeaturedImageParentId = 'featuredImage___parent___id',
  FeaturedImageParentParentId = 'featuredImage___parent___parent___id',
  FeaturedImageParentParentChildren = 'featuredImage___parent___parent___children',
  FeaturedImageParentChildren = 'featuredImage___parent___children',
  FeaturedImageParentChildrenId = 'featuredImage___parent___children___id',
  FeaturedImageParentChildrenChildren = 'featuredImage___parent___children___children',
  FeaturedImageParentInternalContent = 'featuredImage___parent___internal___content',
  FeaturedImageParentInternalContentDigest = 'featuredImage___parent___internal___contentDigest',
  FeaturedImageParentInternalDescription = 'featuredImage___parent___internal___description',
  FeaturedImageParentInternalFieldOwners = 'featuredImage___parent___internal___fieldOwners',
  FeaturedImageParentInternalIgnoreType = 'featuredImage___parent___internal___ignoreType',
  FeaturedImageParentInternalMediaType = 'featuredImage___parent___internal___mediaType',
  FeaturedImageParentInternalOwner = 'featuredImage___parent___internal___owner',
  FeaturedImageParentInternalType = 'featuredImage___parent___internal___type',
  FeaturedImageChildren = 'featuredImage___children',
  FeaturedImageChildrenId = 'featuredImage___children___id',
  FeaturedImageChildrenParentId = 'featuredImage___children___parent___id',
  FeaturedImageChildrenParentChildren = 'featuredImage___children___parent___children',
  FeaturedImageChildrenChildren = 'featuredImage___children___children',
  FeaturedImageChildrenChildrenId = 'featuredImage___children___children___id',
  FeaturedImageChildrenChildrenChildren = 'featuredImage___children___children___children',
  FeaturedImageChildrenInternalContent = 'featuredImage___children___internal___content',
  FeaturedImageChildrenInternalContentDigest = 'featuredImage___children___internal___contentDigest',
  FeaturedImageChildrenInternalDescription = 'featuredImage___children___internal___description',
  FeaturedImageChildrenInternalFieldOwners = 'featuredImage___children___internal___fieldOwners',
  FeaturedImageChildrenInternalIgnoreType = 'featuredImage___children___internal___ignoreType',
  FeaturedImageChildrenInternalMediaType = 'featuredImage___children___internal___mediaType',
  FeaturedImageChildrenInternalOwner = 'featuredImage___children___internal___owner',
  FeaturedImageChildrenInternalType = 'featuredImage___children___internal___type',
  FeaturedImageInternalContent = 'featuredImage___internal___content',
  FeaturedImageInternalContentDigest = 'featuredImage___internal___contentDigest',
  FeaturedImageInternalDescription = 'featuredImage___internal___description',
  FeaturedImageInternalFieldOwners = 'featuredImage___internal___fieldOwners',
  FeaturedImageInternalIgnoreType = 'featuredImage___internal___ignoreType',
  FeaturedImageInternalMediaType = 'featuredImage___internal___mediaType',
  FeaturedImageInternalOwner = 'featuredImage___internal___owner',
  FeaturedImageInternalType = 'featuredImage___internal___type',
  FeaturedImageChildMdxRawBody = 'featuredImage___childMdx___rawBody',
  FeaturedImageChildMdxFileAbsolutePath = 'featuredImage___childMdx___fileAbsolutePath',
  FeaturedImageChildMdxFrontmatterTitle = 'featuredImage___childMdx___frontmatter___title',
  FeaturedImageChildMdxFrontmatterDate = 'featuredImage___childMdx___frontmatter___date',
  FeaturedImageChildMdxFrontmatterOpen = 'featuredImage___childMdx___frontmatter___open',
  FeaturedImageChildMdxFrontmatterTags = 'featuredImage___childMdx___frontmatter___tags',
  FeaturedImageChildMdxFrontmatterName = 'featuredImage___childMdx___frontmatter___name',
  FeaturedImageChildMdxBody = 'featuredImage___childMdx___body',
  FeaturedImageChildMdxExcerpt = 'featuredImage___childMdx___excerpt',
  FeaturedImageChildMdxHeadings = 'featuredImage___childMdx___headings',
  FeaturedImageChildMdxHeadingsValue = 'featuredImage___childMdx___headings___value',
  FeaturedImageChildMdxHeadingsDepth = 'featuredImage___childMdx___headings___depth',
  FeaturedImageChildMdxHtml = 'featuredImage___childMdx___html',
  FeaturedImageChildMdxMdxAst = 'featuredImage___childMdx___mdxAST',
  FeaturedImageChildMdxTableOfContents = 'featuredImage___childMdx___tableOfContents',
  FeaturedImageChildMdxTimeToRead = 'featuredImage___childMdx___timeToRead',
  FeaturedImageChildMdxWordCountParagraphs = 'featuredImage___childMdx___wordCount___paragraphs',
  FeaturedImageChildMdxWordCountSentences = 'featuredImage___childMdx___wordCount___sentences',
  FeaturedImageChildMdxWordCountWords = 'featuredImage___childMdx___wordCount___words',
  FeaturedImageChildMdxId = 'featuredImage___childMdx___id',
  FeaturedImageChildMdxParentId = 'featuredImage___childMdx___parent___id',
  FeaturedImageChildMdxParentChildren = 'featuredImage___childMdx___parent___children',
  FeaturedImageChildMdxChildren = 'featuredImage___childMdx___children',
  FeaturedImageChildMdxChildrenId = 'featuredImage___childMdx___children___id',
  FeaturedImageChildMdxChildrenChildren = 'featuredImage___childMdx___children___children',
  FeaturedImageChildMdxInternalContent = 'featuredImage___childMdx___internal___content',
  FeaturedImageChildMdxInternalContentDigest = 'featuredImage___childMdx___internal___contentDigest',
  FeaturedImageChildMdxInternalDescription = 'featuredImage___childMdx___internal___description',
  FeaturedImageChildMdxInternalFieldOwners = 'featuredImage___childMdx___internal___fieldOwners',
  FeaturedImageChildMdxInternalIgnoreType = 'featuredImage___childMdx___internal___ignoreType',
  FeaturedImageChildMdxInternalMediaType = 'featuredImage___childMdx___internal___mediaType',
  FeaturedImageChildMdxInternalOwner = 'featuredImage___childMdx___internal___owner',
  FeaturedImageChildMdxInternalType = 'featuredImage___childMdx___internal___type',
  FeaturedImageChildMdxChildMdxBlogPostId = 'featuredImage___childMdx___childMdxBlogPost___id',
  FeaturedImageChildMdxChildMdxBlogPostTitle = 'featuredImage___childMdx___childMdxBlogPost___title',
  FeaturedImageChildMdxChildMdxBlogPostSlug = 'featuredImage___childMdx___childMdxBlogPost___slug',
  FeaturedImageChildMdxChildMdxBlogPostDate = 'featuredImage___childMdx___childMdxBlogPost___date',
  FeaturedImageChildMdxChildMdxBlogPostTags = 'featuredImage___childMdx___childMdxBlogPost___tags',
  FeaturedImageChildMdxChildMdxBlogPostKeywords = 'featuredImage___childMdx___childMdxBlogPost___keywords',
  FeaturedImageChildMdxChildMdxBlogPostExcerpt = 'featuredImage___childMdx___childMdxBlogPost___excerpt',
  FeaturedImageChildMdxChildMdxBlogPostBody = 'featuredImage___childMdx___childMdxBlogPost___body',
  FeaturedImageChildMdxChildMdxBlogPostChildren = 'featuredImage___childMdx___childMdxBlogPost___children',
  FeaturedImageChildJavascriptFrontmatterId = 'featuredImage___childJavascriptFrontmatter___id',
  FeaturedImageChildJavascriptFrontmatterParentId = 'featuredImage___childJavascriptFrontmatter___parent___id',
  FeaturedImageChildJavascriptFrontmatterParentChildren = 'featuredImage___childJavascriptFrontmatter___parent___children',
  FeaturedImageChildJavascriptFrontmatterChildren = 'featuredImage___childJavascriptFrontmatter___children',
  FeaturedImageChildJavascriptFrontmatterChildrenId = 'featuredImage___childJavascriptFrontmatter___children___id',
  FeaturedImageChildJavascriptFrontmatterChildrenChildren = 'featuredImage___childJavascriptFrontmatter___children___children',
  FeaturedImageChildJavascriptFrontmatterInternalContent = 'featuredImage___childJavascriptFrontmatter___internal___content',
  FeaturedImageChildJavascriptFrontmatterInternalContentDigest = 'featuredImage___childJavascriptFrontmatter___internal___contentDigest',
  FeaturedImageChildJavascriptFrontmatterInternalDescription = 'featuredImage___childJavascriptFrontmatter___internal___description',
  FeaturedImageChildJavascriptFrontmatterInternalFieldOwners = 'featuredImage___childJavascriptFrontmatter___internal___fieldOwners',
  FeaturedImageChildJavascriptFrontmatterInternalIgnoreType = 'featuredImage___childJavascriptFrontmatter___internal___ignoreType',
  FeaturedImageChildJavascriptFrontmatterInternalMediaType = 'featuredImage___childJavascriptFrontmatter___internal___mediaType',
  FeaturedImageChildJavascriptFrontmatterInternalOwner = 'featuredImage___childJavascriptFrontmatter___internal___owner',
  FeaturedImageChildJavascriptFrontmatterInternalType = 'featuredImage___childJavascriptFrontmatter___internal___type',
  FeaturedImageChildJavascriptFrontmatterNodeId = 'featuredImage___childJavascriptFrontmatter___node___id',
  FeaturedImageChildJavascriptFrontmatterNodeChildren = 'featuredImage___childJavascriptFrontmatter___node___children',
  FeaturedImageChildJavascriptFrontmatterNodeSourceInstanceName = 'featuredImage___childJavascriptFrontmatter___node___sourceInstanceName',
  FeaturedImageChildJavascriptFrontmatterNodeAbsolutePath = 'featuredImage___childJavascriptFrontmatter___node___absolutePath',
  FeaturedImageChildJavascriptFrontmatterNodeRelativePath = 'featuredImage___childJavascriptFrontmatter___node___relativePath',
  FeaturedImageChildJavascriptFrontmatterNodeExtension = 'featuredImage___childJavascriptFrontmatter___node___extension',
  FeaturedImageChildJavascriptFrontmatterNodeSize = 'featuredImage___childJavascriptFrontmatter___node___size',
  FeaturedImageChildJavascriptFrontmatterNodePrettySize = 'featuredImage___childJavascriptFrontmatter___node___prettySize',
  FeaturedImageChildJavascriptFrontmatterNodeModifiedTime = 'featuredImage___childJavascriptFrontmatter___node___modifiedTime',
  FeaturedImageChildJavascriptFrontmatterNodeAccessTime = 'featuredImage___childJavascriptFrontmatter___node___accessTime',
  FeaturedImageChildJavascriptFrontmatterNodeChangeTime = 'featuredImage___childJavascriptFrontmatter___node___changeTime',
  FeaturedImageChildJavascriptFrontmatterNodeBirthTime = 'featuredImage___childJavascriptFrontmatter___node___birthTime',
  FeaturedImageChildJavascriptFrontmatterNodeRoot = 'featuredImage___childJavascriptFrontmatter___node___root',
  FeaturedImageChildJavascriptFrontmatterNodeDir = 'featuredImage___childJavascriptFrontmatter___node___dir',
  FeaturedImageChildJavascriptFrontmatterNodeExt = 'featuredImage___childJavascriptFrontmatter___node___ext',
  FeaturedImageChildJavascriptFrontmatterNodeName = 'featuredImage___childJavascriptFrontmatter___node___name',
  FeaturedImageChildJavascriptFrontmatterNodeRelativeDirectory = 'featuredImage___childJavascriptFrontmatter___node___relativeDirectory',
  FeaturedImageChildJavascriptFrontmatterNodeDev = 'featuredImage___childJavascriptFrontmatter___node___dev',
  FeaturedImageChildJavascriptFrontmatterNodeMode = 'featuredImage___childJavascriptFrontmatter___node___mode',
  FeaturedImageChildJavascriptFrontmatterNodeNlink = 'featuredImage___childJavascriptFrontmatter___node___nlink',
  FeaturedImageChildJavascriptFrontmatterNodeUid = 'featuredImage___childJavascriptFrontmatter___node___uid',
  FeaturedImageChildJavascriptFrontmatterNodeGid = 'featuredImage___childJavascriptFrontmatter___node___gid',
  FeaturedImageChildJavascriptFrontmatterNodeRdev = 'featuredImage___childJavascriptFrontmatter___node___rdev',
  FeaturedImageChildJavascriptFrontmatterNodeBlksize = 'featuredImage___childJavascriptFrontmatter___node___blksize',
  FeaturedImageChildJavascriptFrontmatterNodeIno = 'featuredImage___childJavascriptFrontmatter___node___ino',
  FeaturedImageChildJavascriptFrontmatterNodeBlocks = 'featuredImage___childJavascriptFrontmatter___node___blocks',
  FeaturedImageChildJavascriptFrontmatterNodeAtimeMs = 'featuredImage___childJavascriptFrontmatter___node___atimeMs',
  FeaturedImageChildJavascriptFrontmatterNodeMtimeMs = 'featuredImage___childJavascriptFrontmatter___node___mtimeMs',
  FeaturedImageChildJavascriptFrontmatterNodeCtimeMs = 'featuredImage___childJavascriptFrontmatter___node___ctimeMs',
  FeaturedImageChildJavascriptFrontmatterNodeBirthtimeMs = 'featuredImage___childJavascriptFrontmatter___node___birthtimeMs',
  FeaturedImageChildJavascriptFrontmatterNodeAtime = 'featuredImage___childJavascriptFrontmatter___node___atime',
  FeaturedImageChildJavascriptFrontmatterNodeMtime = 'featuredImage___childJavascriptFrontmatter___node___mtime',
  FeaturedImageChildJavascriptFrontmatterNodeCtime = 'featuredImage___childJavascriptFrontmatter___node___ctime',
  FeaturedImageChildJavascriptFrontmatterNodeBirthtime = 'featuredImage___childJavascriptFrontmatter___node___birthtime',
  FeaturedImageChildJavascriptFrontmatterFrontmatterName = 'featuredImage___childJavascriptFrontmatter___frontmatter___name',
  FeaturedImageChildJavascriptFrontmatterFrontmatterOpen = 'featuredImage___childJavascriptFrontmatter___frontmatter___open',
  FeaturedImageChildJavascriptFrontmatterFrontmatterError = 'featuredImage___childJavascriptFrontmatter___frontmatter___error',
  FeaturedImageChildJavascriptFrontmatterFileAbsolutePath = 'featuredImage___childJavascriptFrontmatter___fileAbsolutePath',
  Slug = 'slug',
  Date = 'date',
  Tags = 'tags',
  Keywords = 'keywords',
  Excerpt = 'excerpt',
  Body = 'body',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MdxBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  featuredImage?: Maybe<FileFilterInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MdxBlogPostGroupConnection = {
   __typename?: 'MdxBlogPostGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MdxBlogPostEdge>,
  nodes: Array<MdxBlogPost>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MdxBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<MdxBlogPostFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MdxConnection = {
   __typename?: 'MdxConnection',
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MdxGroupConnection>,
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MdxFieldsEnum
};

export type MdxEdge = {
   __typename?: 'MdxEdge',
  next?: Maybe<Mdx>,
  node: Mdx,
  previous?: Maybe<Mdx>,
};

export enum MdxFieldsEnum {
  RawBody = 'rawBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterOpen = 'frontmatter___open',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterName = 'frontmatter___name',
  FrontmatterFeaturedImageBirthtime = 'frontmatter___featuredImage___birthtime',
  FrontmatterFeaturedImageBirthtimeMs = 'frontmatter___featuredImage___birthtimeMs',
  FrontmatterFeaturedImageSourceInstanceName = 'frontmatter___featuredImage___sourceInstanceName',
  FrontmatterFeaturedImageAbsolutePath = 'frontmatter___featuredImage___absolutePath',
  FrontmatterFeaturedImageRelativePath = 'frontmatter___featuredImage___relativePath',
  FrontmatterFeaturedImageExtension = 'frontmatter___featuredImage___extension',
  FrontmatterFeaturedImageSize = 'frontmatter___featuredImage___size',
  FrontmatterFeaturedImagePrettySize = 'frontmatter___featuredImage___prettySize',
  FrontmatterFeaturedImageModifiedTime = 'frontmatter___featuredImage___modifiedTime',
  FrontmatterFeaturedImageAccessTime = 'frontmatter___featuredImage___accessTime',
  FrontmatterFeaturedImageChangeTime = 'frontmatter___featuredImage___changeTime',
  FrontmatterFeaturedImageBirthTime = 'frontmatter___featuredImage___birthTime',
  FrontmatterFeaturedImageRoot = 'frontmatter___featuredImage___root',
  FrontmatterFeaturedImageDir = 'frontmatter___featuredImage___dir',
  FrontmatterFeaturedImageBase = 'frontmatter___featuredImage___base',
  FrontmatterFeaturedImageExt = 'frontmatter___featuredImage___ext',
  FrontmatterFeaturedImageName = 'frontmatter___featuredImage___name',
  FrontmatterFeaturedImageRelativeDirectory = 'frontmatter___featuredImage___relativeDirectory',
  FrontmatterFeaturedImageDev = 'frontmatter___featuredImage___dev',
  FrontmatterFeaturedImageMode = 'frontmatter___featuredImage___mode',
  FrontmatterFeaturedImageNlink = 'frontmatter___featuredImage___nlink',
  FrontmatterFeaturedImageUid = 'frontmatter___featuredImage___uid',
  FrontmatterFeaturedImageGid = 'frontmatter___featuredImage___gid',
  FrontmatterFeaturedImageRdev = 'frontmatter___featuredImage___rdev',
  FrontmatterFeaturedImageBlksize = 'frontmatter___featuredImage___blksize',
  FrontmatterFeaturedImageIno = 'frontmatter___featuredImage___ino',
  FrontmatterFeaturedImageBlocks = 'frontmatter___featuredImage___blocks',
  FrontmatterFeaturedImageAtimeMs = 'frontmatter___featuredImage___atimeMs',
  FrontmatterFeaturedImageMtimeMs = 'frontmatter___featuredImage___mtimeMs',
  FrontmatterFeaturedImageCtimeMs = 'frontmatter___featuredImage___ctimeMs',
  FrontmatterFeaturedImageAtime = 'frontmatter___featuredImage___atime',
  FrontmatterFeaturedImageMtime = 'frontmatter___featuredImage___mtime',
  FrontmatterFeaturedImageCtime = 'frontmatter___featuredImage___ctime',
  FrontmatterFeaturedImagePublicUrl = 'frontmatter___featuredImage___publicURL',
  FrontmatterFeaturedImageChildImageSharpId = 'frontmatter___featuredImage___childImageSharp___id',
  FrontmatterFeaturedImageChildImageSharpChildren = 'frontmatter___featuredImage___childImageSharp___children',
  FrontmatterFeaturedImageId = 'frontmatter___featuredImage___id',
  FrontmatterFeaturedImageParentId = 'frontmatter___featuredImage___parent___id',
  FrontmatterFeaturedImageParentChildren = 'frontmatter___featuredImage___parent___children',
  FrontmatterFeaturedImageChildren = 'frontmatter___featuredImage___children',
  FrontmatterFeaturedImageChildrenId = 'frontmatter___featuredImage___children___id',
  FrontmatterFeaturedImageChildrenChildren = 'frontmatter___featuredImage___children___children',
  FrontmatterFeaturedImageInternalContent = 'frontmatter___featuredImage___internal___content',
  FrontmatterFeaturedImageInternalContentDigest = 'frontmatter___featuredImage___internal___contentDigest',
  FrontmatterFeaturedImageInternalDescription = 'frontmatter___featuredImage___internal___description',
  FrontmatterFeaturedImageInternalFieldOwners = 'frontmatter___featuredImage___internal___fieldOwners',
  FrontmatterFeaturedImageInternalIgnoreType = 'frontmatter___featuredImage___internal___ignoreType',
  FrontmatterFeaturedImageInternalMediaType = 'frontmatter___featuredImage___internal___mediaType',
  FrontmatterFeaturedImageInternalOwner = 'frontmatter___featuredImage___internal___owner',
  FrontmatterFeaturedImageInternalType = 'frontmatter___featuredImage___internal___type',
  FrontmatterFeaturedImageChildMdxRawBody = 'frontmatter___featuredImage___childMdx___rawBody',
  FrontmatterFeaturedImageChildMdxFileAbsolutePath = 'frontmatter___featuredImage___childMdx___fileAbsolutePath',
  FrontmatterFeaturedImageChildMdxBody = 'frontmatter___featuredImage___childMdx___body',
  FrontmatterFeaturedImageChildMdxExcerpt = 'frontmatter___featuredImage___childMdx___excerpt',
  FrontmatterFeaturedImageChildMdxHeadings = 'frontmatter___featuredImage___childMdx___headings',
  FrontmatterFeaturedImageChildMdxHtml = 'frontmatter___featuredImage___childMdx___html',
  FrontmatterFeaturedImageChildMdxMdxAst = 'frontmatter___featuredImage___childMdx___mdxAST',
  FrontmatterFeaturedImageChildMdxTableOfContents = 'frontmatter___featuredImage___childMdx___tableOfContents',
  FrontmatterFeaturedImageChildMdxTimeToRead = 'frontmatter___featuredImage___childMdx___timeToRead',
  FrontmatterFeaturedImageChildMdxId = 'frontmatter___featuredImage___childMdx___id',
  FrontmatterFeaturedImageChildMdxChildren = 'frontmatter___featuredImage___childMdx___children',
  FrontmatterFeaturedImageChildJavascriptFrontmatterId = 'frontmatter___featuredImage___childJavascriptFrontmatter___id',
  FrontmatterFeaturedImageChildJavascriptFrontmatterChildren = 'frontmatter___featuredImage___childJavascriptFrontmatter___children',
  FrontmatterFeaturedImageChildJavascriptFrontmatterFileAbsolutePath = 'frontmatter___featuredImage___childJavascriptFrontmatter___fileAbsolutePath',
  Body = 'body',
  Excerpt = 'excerpt',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  Html = 'html',
  MdxAst = 'mdxAST',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMdxBlogPostId = 'childMdxBlogPost___id',
  ChildMdxBlogPostTitle = 'childMdxBlogPost___title',
  ChildMdxBlogPostFeaturedImageBirthtime = 'childMdxBlogPost___featuredImage___birthtime',
  ChildMdxBlogPostFeaturedImageBirthtimeMs = 'childMdxBlogPost___featuredImage___birthtimeMs',
  ChildMdxBlogPostFeaturedImageSourceInstanceName = 'childMdxBlogPost___featuredImage___sourceInstanceName',
  ChildMdxBlogPostFeaturedImageAbsolutePath = 'childMdxBlogPost___featuredImage___absolutePath',
  ChildMdxBlogPostFeaturedImageRelativePath = 'childMdxBlogPost___featuredImage___relativePath',
  ChildMdxBlogPostFeaturedImageExtension = 'childMdxBlogPost___featuredImage___extension',
  ChildMdxBlogPostFeaturedImageSize = 'childMdxBlogPost___featuredImage___size',
  ChildMdxBlogPostFeaturedImagePrettySize = 'childMdxBlogPost___featuredImage___prettySize',
  ChildMdxBlogPostFeaturedImageModifiedTime = 'childMdxBlogPost___featuredImage___modifiedTime',
  ChildMdxBlogPostFeaturedImageAccessTime = 'childMdxBlogPost___featuredImage___accessTime',
  ChildMdxBlogPostFeaturedImageChangeTime = 'childMdxBlogPost___featuredImage___changeTime',
  ChildMdxBlogPostFeaturedImageBirthTime = 'childMdxBlogPost___featuredImage___birthTime',
  ChildMdxBlogPostFeaturedImageRoot = 'childMdxBlogPost___featuredImage___root',
  ChildMdxBlogPostFeaturedImageDir = 'childMdxBlogPost___featuredImage___dir',
  ChildMdxBlogPostFeaturedImageBase = 'childMdxBlogPost___featuredImage___base',
  ChildMdxBlogPostFeaturedImageExt = 'childMdxBlogPost___featuredImage___ext',
  ChildMdxBlogPostFeaturedImageName = 'childMdxBlogPost___featuredImage___name',
  ChildMdxBlogPostFeaturedImageRelativeDirectory = 'childMdxBlogPost___featuredImage___relativeDirectory',
  ChildMdxBlogPostFeaturedImageDev = 'childMdxBlogPost___featuredImage___dev',
  ChildMdxBlogPostFeaturedImageMode = 'childMdxBlogPost___featuredImage___mode',
  ChildMdxBlogPostFeaturedImageNlink = 'childMdxBlogPost___featuredImage___nlink',
  ChildMdxBlogPostFeaturedImageUid = 'childMdxBlogPost___featuredImage___uid',
  ChildMdxBlogPostFeaturedImageGid = 'childMdxBlogPost___featuredImage___gid',
  ChildMdxBlogPostFeaturedImageRdev = 'childMdxBlogPost___featuredImage___rdev',
  ChildMdxBlogPostFeaturedImageBlksize = 'childMdxBlogPost___featuredImage___blksize',
  ChildMdxBlogPostFeaturedImageIno = 'childMdxBlogPost___featuredImage___ino',
  ChildMdxBlogPostFeaturedImageBlocks = 'childMdxBlogPost___featuredImage___blocks',
  ChildMdxBlogPostFeaturedImageAtimeMs = 'childMdxBlogPost___featuredImage___atimeMs',
  ChildMdxBlogPostFeaturedImageMtimeMs = 'childMdxBlogPost___featuredImage___mtimeMs',
  ChildMdxBlogPostFeaturedImageCtimeMs = 'childMdxBlogPost___featuredImage___ctimeMs',
  ChildMdxBlogPostFeaturedImageAtime = 'childMdxBlogPost___featuredImage___atime',
  ChildMdxBlogPostFeaturedImageMtime = 'childMdxBlogPost___featuredImage___mtime',
  ChildMdxBlogPostFeaturedImageCtime = 'childMdxBlogPost___featuredImage___ctime',
  ChildMdxBlogPostFeaturedImagePublicUrl = 'childMdxBlogPost___featuredImage___publicURL',
  ChildMdxBlogPostFeaturedImageChildImageSharpId = 'childMdxBlogPost___featuredImage___childImageSharp___id',
  ChildMdxBlogPostFeaturedImageChildImageSharpChildren = 'childMdxBlogPost___featuredImage___childImageSharp___children',
  ChildMdxBlogPostFeaturedImageId = 'childMdxBlogPost___featuredImage___id',
  ChildMdxBlogPostFeaturedImageParentId = 'childMdxBlogPost___featuredImage___parent___id',
  ChildMdxBlogPostFeaturedImageParentChildren = 'childMdxBlogPost___featuredImage___parent___children',
  ChildMdxBlogPostFeaturedImageChildren = 'childMdxBlogPost___featuredImage___children',
  ChildMdxBlogPostFeaturedImageChildrenId = 'childMdxBlogPost___featuredImage___children___id',
  ChildMdxBlogPostFeaturedImageChildrenChildren = 'childMdxBlogPost___featuredImage___children___children',
  ChildMdxBlogPostFeaturedImageInternalContent = 'childMdxBlogPost___featuredImage___internal___content',
  ChildMdxBlogPostFeaturedImageInternalContentDigest = 'childMdxBlogPost___featuredImage___internal___contentDigest',
  ChildMdxBlogPostFeaturedImageInternalDescription = 'childMdxBlogPost___featuredImage___internal___description',
  ChildMdxBlogPostFeaturedImageInternalFieldOwners = 'childMdxBlogPost___featuredImage___internal___fieldOwners',
  ChildMdxBlogPostFeaturedImageInternalIgnoreType = 'childMdxBlogPost___featuredImage___internal___ignoreType',
  ChildMdxBlogPostFeaturedImageInternalMediaType = 'childMdxBlogPost___featuredImage___internal___mediaType',
  ChildMdxBlogPostFeaturedImageInternalOwner = 'childMdxBlogPost___featuredImage___internal___owner',
  ChildMdxBlogPostFeaturedImageInternalType = 'childMdxBlogPost___featuredImage___internal___type',
  ChildMdxBlogPostFeaturedImageChildMdxRawBody = 'childMdxBlogPost___featuredImage___childMdx___rawBody',
  ChildMdxBlogPostFeaturedImageChildMdxFileAbsolutePath = 'childMdxBlogPost___featuredImage___childMdx___fileAbsolutePath',
  ChildMdxBlogPostFeaturedImageChildMdxBody = 'childMdxBlogPost___featuredImage___childMdx___body',
  ChildMdxBlogPostFeaturedImageChildMdxExcerpt = 'childMdxBlogPost___featuredImage___childMdx___excerpt',
  ChildMdxBlogPostFeaturedImageChildMdxHeadings = 'childMdxBlogPost___featuredImage___childMdx___headings',
  ChildMdxBlogPostFeaturedImageChildMdxHtml = 'childMdxBlogPost___featuredImage___childMdx___html',
  ChildMdxBlogPostFeaturedImageChildMdxMdxAst = 'childMdxBlogPost___featuredImage___childMdx___mdxAST',
  ChildMdxBlogPostFeaturedImageChildMdxTableOfContents = 'childMdxBlogPost___featuredImage___childMdx___tableOfContents',
  ChildMdxBlogPostFeaturedImageChildMdxTimeToRead = 'childMdxBlogPost___featuredImage___childMdx___timeToRead',
  ChildMdxBlogPostFeaturedImageChildMdxId = 'childMdxBlogPost___featuredImage___childMdx___id',
  ChildMdxBlogPostFeaturedImageChildMdxChildren = 'childMdxBlogPost___featuredImage___childMdx___children',
  ChildMdxBlogPostFeaturedImageChildJavascriptFrontmatterId = 'childMdxBlogPost___featuredImage___childJavascriptFrontmatter___id',
  ChildMdxBlogPostFeaturedImageChildJavascriptFrontmatterChildren = 'childMdxBlogPost___featuredImage___childJavascriptFrontmatter___children',
  ChildMdxBlogPostFeaturedImageChildJavascriptFrontmatterFileAbsolutePath = 'childMdxBlogPost___featuredImage___childJavascriptFrontmatter___fileAbsolutePath',
  ChildMdxBlogPostSlug = 'childMdxBlogPost___slug',
  ChildMdxBlogPostDate = 'childMdxBlogPost___date',
  ChildMdxBlogPostTags = 'childMdxBlogPost___tags',
  ChildMdxBlogPostKeywords = 'childMdxBlogPost___keywords',
  ChildMdxBlogPostExcerpt = 'childMdxBlogPost___excerpt',
  ChildMdxBlogPostBody = 'childMdxBlogPost___body',
  ChildMdxBlogPostParentId = 'childMdxBlogPost___parent___id',
  ChildMdxBlogPostParentParentId = 'childMdxBlogPost___parent___parent___id',
  ChildMdxBlogPostParentParentChildren = 'childMdxBlogPost___parent___parent___children',
  ChildMdxBlogPostParentChildren = 'childMdxBlogPost___parent___children',
  ChildMdxBlogPostParentChildrenId = 'childMdxBlogPost___parent___children___id',
  ChildMdxBlogPostParentChildrenChildren = 'childMdxBlogPost___parent___children___children',
  ChildMdxBlogPostParentInternalContent = 'childMdxBlogPost___parent___internal___content',
  ChildMdxBlogPostParentInternalContentDigest = 'childMdxBlogPost___parent___internal___contentDigest',
  ChildMdxBlogPostParentInternalDescription = 'childMdxBlogPost___parent___internal___description',
  ChildMdxBlogPostParentInternalFieldOwners = 'childMdxBlogPost___parent___internal___fieldOwners',
  ChildMdxBlogPostParentInternalIgnoreType = 'childMdxBlogPost___parent___internal___ignoreType',
  ChildMdxBlogPostParentInternalMediaType = 'childMdxBlogPost___parent___internal___mediaType',
  ChildMdxBlogPostParentInternalOwner = 'childMdxBlogPost___parent___internal___owner',
  ChildMdxBlogPostParentInternalType = 'childMdxBlogPost___parent___internal___type',
  ChildMdxBlogPostChildren = 'childMdxBlogPost___children',
  ChildMdxBlogPostChildrenId = 'childMdxBlogPost___children___id',
  ChildMdxBlogPostChildrenParentId = 'childMdxBlogPost___children___parent___id',
  ChildMdxBlogPostChildrenParentChildren = 'childMdxBlogPost___children___parent___children',
  ChildMdxBlogPostChildrenChildren = 'childMdxBlogPost___children___children',
  ChildMdxBlogPostChildrenChildrenId = 'childMdxBlogPost___children___children___id',
  ChildMdxBlogPostChildrenChildrenChildren = 'childMdxBlogPost___children___children___children',
  ChildMdxBlogPostChildrenInternalContent = 'childMdxBlogPost___children___internal___content',
  ChildMdxBlogPostChildrenInternalContentDigest = 'childMdxBlogPost___children___internal___contentDigest',
  ChildMdxBlogPostChildrenInternalDescription = 'childMdxBlogPost___children___internal___description',
  ChildMdxBlogPostChildrenInternalFieldOwners = 'childMdxBlogPost___children___internal___fieldOwners',
  ChildMdxBlogPostChildrenInternalIgnoreType = 'childMdxBlogPost___children___internal___ignoreType',
  ChildMdxBlogPostChildrenInternalMediaType = 'childMdxBlogPost___children___internal___mediaType',
  ChildMdxBlogPostChildrenInternalOwner = 'childMdxBlogPost___children___internal___owner',
  ChildMdxBlogPostChildrenInternalType = 'childMdxBlogPost___children___internal___type',
  ChildMdxBlogPostInternalContent = 'childMdxBlogPost___internal___content',
  ChildMdxBlogPostInternalContentDigest = 'childMdxBlogPost___internal___contentDigest',
  ChildMdxBlogPostInternalDescription = 'childMdxBlogPost___internal___description',
  ChildMdxBlogPostInternalFieldOwners = 'childMdxBlogPost___internal___fieldOwners',
  ChildMdxBlogPostInternalIgnoreType = 'childMdxBlogPost___internal___ignoreType',
  ChildMdxBlogPostInternalMediaType = 'childMdxBlogPost___internal___mediaType',
  ChildMdxBlogPostInternalOwner = 'childMdxBlogPost___internal___owner',
  ChildMdxBlogPostInternalType = 'childMdxBlogPost___internal___type'
}

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MdxFrontmatterFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  headings?: Maybe<MdxHeadingMdxFilterListInput>,
  html?: Maybe<StringQueryOperatorInput>,
  mdxAST?: Maybe<JsonQueryOperatorInput>,
  tableOfContents?: Maybe<JsonQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  wordCount?: Maybe<MdxWordCountFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMdxBlogPost?: Maybe<MdxBlogPostFilterInput>,
};

export type MdxFrontmatter = {
   __typename?: 'MdxFrontmatter',
  title: Scalars['String'],
  date?: Maybe<Scalars['Date']>,
  open?: Maybe<Scalars['Boolean']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  name?: Maybe<Scalars['String']>,
  featuredImage?: Maybe<File>,
};


export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  open?: Maybe<BooleanQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  featuredImage?: Maybe<FileFilterInput>,
};

export type MdxGroupConnection = {
   __typename?: 'MdxGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MdxHeadingMdx = {
   __typename?: 'MdxHeadingMdx',
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>,
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MdxWordCount = {
   __typename?: 'MdxWordCount',
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
   __typename?: 'Query',
  blogPost?: Maybe<BlogPost>,
  allBlogPost: BlogPostConnection,
  file?: Maybe<File>,
  allFile: FileConnection,
  mdx?: Maybe<Mdx>,
  allMdx: MdxConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  blogPostCategory?: Maybe<BlogPostCategory>,
  allBlogPostCategory: BlogPostCategoryConnection,
  mdxBlogPost?: Maybe<MdxBlogPost>,
  allMdxBlogPost: MdxBlogPostConnection,
  materialBlogThemeOptions?: Maybe<MaterialBlogThemeOptions>,
  allMaterialBlogThemeOptions: MaterialBlogThemeOptionsConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  javascriptFrontmatter?: Maybe<JavascriptFrontmatter>,
  allJavascriptFrontmatter: JavascriptFrontmatterConnection,
};


export type QueryBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  featuredImage?: Maybe<FileFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>
};


export type QueryAllBlogPostArgs = {
  filter?: Maybe<BlogPostFilterInput>,
  sort?: Maybe<BlogPostSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryFileArgs = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMdx?: Maybe<MdxFilterInput>,
  childJavascriptFrontmatter?: Maybe<JavascriptFrontmatterFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MdxFrontmatterFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  headings?: Maybe<MdxHeadingMdxFilterListInput>,
  html?: Maybe<StringQueryOperatorInput>,
  mdxAST?: Maybe<JsonQueryOperatorInput>,
  tableOfContents?: Maybe<JsonQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  wordCount?: Maybe<MdxWordCountFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMdxBlogPost?: Maybe<MdxBlogPostFilterInput>
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>,
  sort?: Maybe<MdxSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryBlogPostCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllBlogPostCategoryArgs = {
  filter?: Maybe<BlogPostCategoryFilterInput>,
  sort?: Maybe<BlogPostCategorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMdxBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  featuredImage?: Maybe<FileFilterInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMdxBlogPostArgs = {
  filter?: Maybe<MdxBlogPostFilterInput>,
  sort?: Maybe<MdxBlogPostSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMaterialBlogThemeOptionsArgs = {
  basePath?: Maybe<StringQueryOperatorInput>,
  contentPath?: Maybe<StringQueryOperatorInput>,
  assetPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMaterialBlogThemeOptionsArgs = {
  filter?: Maybe<MaterialBlogThemeOptionsFilterInput>,
  sort?: Maybe<MaterialBlogThemeOptionsSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  childBlogPostCategory?: Maybe<BlogPostCategoryFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryJavascriptFrontmatterArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  node?: Maybe<JavascriptFrontmatterNodeFilterInput>,
  frontmatter?: Maybe<JavascriptFrontmatterFrontmatterFilterInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllJavascriptFrontmatterArgs = {
  filter?: Maybe<JavascriptFrontmatterFilterInput>,
  sort?: Maybe<JavascriptFrontmatterSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataSocial = 'siteMetadata___social',
  SiteMetadataSocialName = 'siteMetadata___social___name',
  SiteMetadataSocialUrl = 'siteMetadata___social___url',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
   __typename?: 'SitePageContext',
  id?: Maybe<Scalars['String']>,
  previousId?: Maybe<Scalars['String']>,
  nextId?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  previousId?: Maybe<StringQueryOperatorInput>,
  nextId?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  ContextPreviousId = 'context___previousId',
  ContextNextId = 'context___nextId',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsAppId = 'pluginCreator___pluginOptions___appId',
  PluginCreatorPluginOptionsApiKey = 'pluginCreator___pluginOptions___apiKey',
  PluginCreatorPluginOptionsQueries = 'pluginCreator___pluginOptions___queries',
  PluginCreatorPluginOptionsQueriesQuery = 'pluginCreator___pluginOptions___queries___query',
  PluginCreatorPluginOptionsQueriesIndexName = 'pluginCreator___pluginOptions___queries___indexName',
  PluginCreatorPluginOptionsChunkSize = 'pluginCreator___pluginOptions___chunkSize',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsGatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  PluginCreatorPluginOptionsGatsbyRemarkPluginsResolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginCreatorPluginOptionsComponent = 'pluginCreator___pluginOptions___component',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsAppId = 'pluginOptions___appId',
  PluginOptionsApiKey = 'pluginOptions___apiKey',
  PluginOptionsQueries = 'pluginOptions___queries',
  PluginOptionsQueriesQuery = 'pluginOptions___queries___query',
  PluginOptionsQueriesIndexName = 'pluginOptions___queries___indexName',
  PluginOptionsChunkSize = 'pluginOptions___chunkSize',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsGatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  PluginOptionsGatsbyRemarkPluginsResolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginOptionsGatsbyRemarkPluginsOptionsMaxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
  PluginOptionsGatsbyRemarkPluginsOptionsPathPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___pathPrefix',
  PluginOptionsGatsbyRemarkPluginsOptionsWrapperStyle = 'pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle',
  PluginOptionsGatsbyRemarkPluginsOptionsBackgroundColor = 'pluginOptions___gatsbyRemarkPlugins___options___backgroundColor',
  PluginOptionsGatsbyRemarkPluginsOptionsLinkImagesToOriginal = 'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal',
  PluginOptionsGatsbyRemarkPluginsOptionsShowCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___showCaptions',
  PluginOptionsGatsbyRemarkPluginsOptionsMarkdownCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions',
  PluginOptionsGatsbyRemarkPluginsOptionsWithWebp = 'pluginOptions___gatsbyRemarkPlugins___options___withWebp',
  PluginOptionsGatsbyRemarkPluginsOptionsTracedSvg = 'pluginOptions___gatsbyRemarkPlugins___options___tracedSVG',
  PluginOptionsGatsbyRemarkPluginsOptionsLoading = 'pluginOptions___gatsbyRemarkPlugins___options___loading',
  PluginOptionsGatsbyRemarkPluginsOptionsDisableBgImageOnAlpha = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha',
  PluginOptionsComponent = 'pluginOptions___component',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  path?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  appId?: Maybe<Scalars['String']>,
  apiKey?: Maybe<Scalars['String']>,
  queries?: Maybe<Array<Maybe<SitePluginPluginOptionsQueries>>>,
  chunkSize?: Maybe<Scalars['Int']>,
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>,
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>,
  component?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  appId?: Maybe<StringQueryOperatorInput>,
  apiKey?: Maybe<StringQueryOperatorInput>,
  queries?: Maybe<SitePluginPluginOptionsQueriesFilterListInput>,
  chunkSize?: Maybe<IntQueryOperatorInput>,
  extensions?: Maybe<StringQueryOperatorInput>,
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>,
  component?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
   __typename?: 'SitePluginPluginOptionsGatsbyRemarkPlugins',
  resolve?: Maybe<Scalars['String']>,
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
   __typename?: 'SitePluginPluginOptionsGatsbyRemarkPluginsOptions',
  maxWidth?: Maybe<Scalars['Int']>,
  pathPrefix?: Maybe<Scalars['String']>,
  wrapperStyle?: Maybe<Scalars['String']>,
  backgroundColor?: Maybe<Scalars['String']>,
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  showCaptions?: Maybe<Scalars['Boolean']>,
  markdownCaptions?: Maybe<Scalars['Boolean']>,
  withWebp?: Maybe<Scalars['Boolean']>,
  tracedSVG?: Maybe<Scalars['Boolean']>,
  loading?: Maybe<Scalars['String']>,
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  backgroundColor?: Maybe<StringQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  showCaptions?: Maybe<BooleanQueryOperatorInput>,
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>,
  withWebp?: Maybe<BooleanQueryOperatorInput>,
  tracedSVG?: Maybe<BooleanQueryOperatorInput>,
  loading?: Maybe<StringQueryOperatorInput>,
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsQueries = {
   __typename?: 'SitePluginPluginOptionsQueries',
  query?: Maybe<Scalars['String']>,
  indexName?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsQueriesFilterInput = {
  query?: Maybe<StringQueryOperatorInput>,
  indexName?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsQueriesFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsQueriesFilterInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  social?: Maybe<Array<Maybe<SiteSiteMetadataSocial>>>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  social?: Maybe<SiteSiteMetadataSocialFilterListInput>,
};

export type SiteSiteMetadataSocial = {
   __typename?: 'SiteSiteMetadataSocial',
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataSocialFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export type SiteSiteMetadataSocialFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataSocialFilterInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type ActivityCalendarPostQueryVariables = {};


export type ActivityCalendarPostQuery = (
  { __typename?: 'Query' }
  & { allBlogPost: (
    { __typename?: 'BlogPostConnection' }
    & { nodes: Array<(
      { __typename?: 'MdxBlogPost' }
      & Pick<MdxBlogPost, 'date'>
    )> }
  ) }
);

export type CoverImgQueryVariables = {};


export type CoverImgQuery = (
  { __typename?: 'Query' }
  & { file: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<{ __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluid_WithWebpFragment
      > }
    )> }
  )> }
);

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { placeholderImage: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<{ __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      > }
    )> }
  )> }
);

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>
    )> }
  )> }
);

export type TagsWordCloudQueryVariables = {};


export type TagsWordCloudQuery = (
  { __typename?: 'Query' }
  & { allBlogPost: (
    { __typename?: 'BlogPostConnection' }
    & { nodes: Array<(
      { __typename?: 'MdxBlogPost' }
      & Pick<MdxBlogPost, 'tags'>
    )> }
  ) }
);

export type PostsGroupedByCategoryQueryVariables = {};


export type PostsGroupedByCategoryQuery = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'BlogPostConnection' }
    & { nodes: Array<(
      { __typename?: 'MdxBlogPost' }
      & Pick<MdxBlogPost, 'id' | 'slug' | 'title'>
    )> }
  ), categories: (
    { __typename?: 'BlogPostCategoryConnection' }
    & { nodes: Array<(
      { __typename?: 'BlogPostCategory' }
      & Pick<BlogPostCategory, 'id' | 'name' | 'slug'>
    )> }
  ) }
);

export type SiteQueryVariables = {};


export type SiteQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & Pick<Site, 'buildTime'>
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>
      & { social: Maybe<Array<Maybe<(
        { __typename?: 'SiteSiteMetadataSocial' }
        & Pick<SiteSiteMetadataSocial, 'name' | 'url'>
      )>>> }
    )> }
  )> }
);

export type ThemeOptionsQueryVariables = {};


export type ThemeOptionsQuery = (
  { __typename?: 'Query' }
  & { materialBlogThemeOptions: Maybe<(
    { __typename?: 'MaterialBlogThemeOptions' }
    & Pick<MaterialBlogThemeOptions, 'basePath' | 'contentPath' | 'assetPath'>
  )> }
);

export type ArchiveQueryVariables = {};


export type ArchiveQuery = (
  { __typename?: 'Query' }
  & { headerImage: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<{ __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluid_WithWebpFragment
      > }
    )> }
  )>, posts: (
    { __typename?: 'BlogPostConnection' }
    & { nodes: Array<(
      { __typename?: 'MdxBlogPost' }
      & Pick<MdxBlogPost, 'id' | 'slug' | 'title' | 'date'>
    )> }
  ) }
);

export type PostPageQueryVariables = {
  id: Scalars['String'],
  previousId?: Maybe<Scalars['String']>,
  nextId?: Maybe<Scalars['String']>
};


export type PostPageQuery = (
  { __typename?: 'Query' }
  & { blogPost: Maybe<(
    { __typename?: 'MdxBlogPost' }
    & Pick<MdxBlogPost, 'id' | 'excerpt' | 'body' | 'slug' | 'title' | 'tags' | 'keywords' | 'date'>
    & { featuredImage: Maybe<(
      { __typename?: 'File' }
      & { childImageSharp: Maybe<(
        { __typename?: 'ImageSharp' }
        & { fluid: Maybe<{ __typename?: 'ImageSharpFluid' }
          & GatsbyImageSharpFluid_WithWebpFragment
        > }
      )> }
    )> }
  )>, previous: Maybe<(
    { __typename?: 'MdxBlogPost' }
    & Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date'>
  )>, next: Maybe<(
    { __typename?: 'MdxBlogPost' }
    & Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date'>
  )> }
);

export type PostsQueryVariables = {};


export type PostsQuery = (
  { __typename?: 'Query' }
  & { allBlogPost: (
    { __typename?: 'BlogPostConnection' }
    & { nodes: Array<(
      { __typename?: 'MdxBlogPost' }
      & Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'tags' | 'date'>
      & { featuredImage: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp: Maybe<(
          { __typename?: 'ImageSharp' }
          & { fluid: Maybe<{ __typename?: 'ImageSharpFluid' }
            & GatsbyImageSharpFluid_WithWebpFragment
          > }
        )> }
      )> }
    )> }
  ) }
);

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);
