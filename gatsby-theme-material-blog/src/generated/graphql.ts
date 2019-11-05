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
  id = 'id',
  slug = 'slug',
  name = 'name',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
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
  id = 'id',
  title = 'title',
  featuredImage___birthtime = 'featuredImage___birthtime',
  featuredImage___birthtimeMs = 'featuredImage___birthtimeMs',
  featuredImage___sourceInstanceName = 'featuredImage___sourceInstanceName',
  featuredImage___absolutePath = 'featuredImage___absolutePath',
  featuredImage___relativePath = 'featuredImage___relativePath',
  featuredImage___extension = 'featuredImage___extension',
  featuredImage___size = 'featuredImage___size',
  featuredImage___prettySize = 'featuredImage___prettySize',
  featuredImage___modifiedTime = 'featuredImage___modifiedTime',
  featuredImage___accessTime = 'featuredImage___accessTime',
  featuredImage___changeTime = 'featuredImage___changeTime',
  featuredImage___birthTime = 'featuredImage___birthTime',
  featuredImage___root = 'featuredImage___root',
  featuredImage___dir = 'featuredImage___dir',
  featuredImage___base = 'featuredImage___base',
  featuredImage___ext = 'featuredImage___ext',
  featuredImage___name = 'featuredImage___name',
  featuredImage___relativeDirectory = 'featuredImage___relativeDirectory',
  featuredImage___dev = 'featuredImage___dev',
  featuredImage___mode = 'featuredImage___mode',
  featuredImage___nlink = 'featuredImage___nlink',
  featuredImage___uid = 'featuredImage___uid',
  featuredImage___gid = 'featuredImage___gid',
  featuredImage___rdev = 'featuredImage___rdev',
  featuredImage___blksize = 'featuredImage___blksize',
  featuredImage___ino = 'featuredImage___ino',
  featuredImage___blocks = 'featuredImage___blocks',
  featuredImage___atimeMs = 'featuredImage___atimeMs',
  featuredImage___mtimeMs = 'featuredImage___mtimeMs',
  featuredImage___ctimeMs = 'featuredImage___ctimeMs',
  featuredImage___atime = 'featuredImage___atime',
  featuredImage___mtime = 'featuredImage___mtime',
  featuredImage___ctime = 'featuredImage___ctime',
  featuredImage___publicURL = 'featuredImage___publicURL',
  featuredImage___childImageSharp___fixed___base64 = 'featuredImage___childImageSharp___fixed___base64',
  featuredImage___childImageSharp___fixed___tracedSVG = 'featuredImage___childImageSharp___fixed___tracedSVG',
  featuredImage___childImageSharp___fixed___aspectRatio = 'featuredImage___childImageSharp___fixed___aspectRatio',
  featuredImage___childImageSharp___fixed___width = 'featuredImage___childImageSharp___fixed___width',
  featuredImage___childImageSharp___fixed___height = 'featuredImage___childImageSharp___fixed___height',
  featuredImage___childImageSharp___fixed___src = 'featuredImage___childImageSharp___fixed___src',
  featuredImage___childImageSharp___fixed___srcSet = 'featuredImage___childImageSharp___fixed___srcSet',
  featuredImage___childImageSharp___fixed___srcWebp = 'featuredImage___childImageSharp___fixed___srcWebp',
  featuredImage___childImageSharp___fixed___srcSetWebp = 'featuredImage___childImageSharp___fixed___srcSetWebp',
  featuredImage___childImageSharp___fixed___originalName = 'featuredImage___childImageSharp___fixed___originalName',
  featuredImage___childImageSharp___resolutions___base64 = 'featuredImage___childImageSharp___resolutions___base64',
  featuredImage___childImageSharp___resolutions___tracedSVG = 'featuredImage___childImageSharp___resolutions___tracedSVG',
  featuredImage___childImageSharp___resolutions___aspectRatio = 'featuredImage___childImageSharp___resolutions___aspectRatio',
  featuredImage___childImageSharp___resolutions___width = 'featuredImage___childImageSharp___resolutions___width',
  featuredImage___childImageSharp___resolutions___height = 'featuredImage___childImageSharp___resolutions___height',
  featuredImage___childImageSharp___resolutions___src = 'featuredImage___childImageSharp___resolutions___src',
  featuredImage___childImageSharp___resolutions___srcSet = 'featuredImage___childImageSharp___resolutions___srcSet',
  featuredImage___childImageSharp___resolutions___srcWebp = 'featuredImage___childImageSharp___resolutions___srcWebp',
  featuredImage___childImageSharp___resolutions___srcSetWebp = 'featuredImage___childImageSharp___resolutions___srcSetWebp',
  featuredImage___childImageSharp___resolutions___originalName = 'featuredImage___childImageSharp___resolutions___originalName',
  featuredImage___childImageSharp___fluid___base64 = 'featuredImage___childImageSharp___fluid___base64',
  featuredImage___childImageSharp___fluid___tracedSVG = 'featuredImage___childImageSharp___fluid___tracedSVG',
  featuredImage___childImageSharp___fluid___aspectRatio = 'featuredImage___childImageSharp___fluid___aspectRatio',
  featuredImage___childImageSharp___fluid___src = 'featuredImage___childImageSharp___fluid___src',
  featuredImage___childImageSharp___fluid___srcSet = 'featuredImage___childImageSharp___fluid___srcSet',
  featuredImage___childImageSharp___fluid___srcWebp = 'featuredImage___childImageSharp___fluid___srcWebp',
  featuredImage___childImageSharp___fluid___srcSetWebp = 'featuredImage___childImageSharp___fluid___srcSetWebp',
  featuredImage___childImageSharp___fluid___sizes = 'featuredImage___childImageSharp___fluid___sizes',
  featuredImage___childImageSharp___fluid___originalImg = 'featuredImage___childImageSharp___fluid___originalImg',
  featuredImage___childImageSharp___fluid___originalName = 'featuredImage___childImageSharp___fluid___originalName',
  featuredImage___childImageSharp___fluid___presentationWidth = 'featuredImage___childImageSharp___fluid___presentationWidth',
  featuredImage___childImageSharp___fluid___presentationHeight = 'featuredImage___childImageSharp___fluid___presentationHeight',
  featuredImage___childImageSharp___sizes___base64 = 'featuredImage___childImageSharp___sizes___base64',
  featuredImage___childImageSharp___sizes___tracedSVG = 'featuredImage___childImageSharp___sizes___tracedSVG',
  featuredImage___childImageSharp___sizes___aspectRatio = 'featuredImage___childImageSharp___sizes___aspectRatio',
  featuredImage___childImageSharp___sizes___src = 'featuredImage___childImageSharp___sizes___src',
  featuredImage___childImageSharp___sizes___srcSet = 'featuredImage___childImageSharp___sizes___srcSet',
  featuredImage___childImageSharp___sizes___srcWebp = 'featuredImage___childImageSharp___sizes___srcWebp',
  featuredImage___childImageSharp___sizes___srcSetWebp = 'featuredImage___childImageSharp___sizes___srcSetWebp',
  featuredImage___childImageSharp___sizes___sizes = 'featuredImage___childImageSharp___sizes___sizes',
  featuredImage___childImageSharp___sizes___originalImg = 'featuredImage___childImageSharp___sizes___originalImg',
  featuredImage___childImageSharp___sizes___originalName = 'featuredImage___childImageSharp___sizes___originalName',
  featuredImage___childImageSharp___sizes___presentationWidth = 'featuredImage___childImageSharp___sizes___presentationWidth',
  featuredImage___childImageSharp___sizes___presentationHeight = 'featuredImage___childImageSharp___sizes___presentationHeight',
  featuredImage___childImageSharp___original___width = 'featuredImage___childImageSharp___original___width',
  featuredImage___childImageSharp___original___height = 'featuredImage___childImageSharp___original___height',
  featuredImage___childImageSharp___original___src = 'featuredImage___childImageSharp___original___src',
  featuredImage___childImageSharp___resize___src = 'featuredImage___childImageSharp___resize___src',
  featuredImage___childImageSharp___resize___tracedSVG = 'featuredImage___childImageSharp___resize___tracedSVG',
  featuredImage___childImageSharp___resize___width = 'featuredImage___childImageSharp___resize___width',
  featuredImage___childImageSharp___resize___height = 'featuredImage___childImageSharp___resize___height',
  featuredImage___childImageSharp___resize___aspectRatio = 'featuredImage___childImageSharp___resize___aspectRatio',
  featuredImage___childImageSharp___resize___originalName = 'featuredImage___childImageSharp___resize___originalName',
  featuredImage___childImageSharp___id = 'featuredImage___childImageSharp___id',
  featuredImage___childImageSharp___parent___id = 'featuredImage___childImageSharp___parent___id',
  featuredImage___childImageSharp___parent___children = 'featuredImage___childImageSharp___parent___children',
  featuredImage___childImageSharp___children = 'featuredImage___childImageSharp___children',
  featuredImage___childImageSharp___children___id = 'featuredImage___childImageSharp___children___id',
  featuredImage___childImageSharp___children___children = 'featuredImage___childImageSharp___children___children',
  featuredImage___childImageSharp___internal___content = 'featuredImage___childImageSharp___internal___content',
  featuredImage___childImageSharp___internal___contentDigest = 'featuredImage___childImageSharp___internal___contentDigest',
  featuredImage___childImageSharp___internal___description = 'featuredImage___childImageSharp___internal___description',
  featuredImage___childImageSharp___internal___fieldOwners = 'featuredImage___childImageSharp___internal___fieldOwners',
  featuredImage___childImageSharp___internal___ignoreType = 'featuredImage___childImageSharp___internal___ignoreType',
  featuredImage___childImageSharp___internal___mediaType = 'featuredImage___childImageSharp___internal___mediaType',
  featuredImage___childImageSharp___internal___owner = 'featuredImage___childImageSharp___internal___owner',
  featuredImage___childImageSharp___internal___type = 'featuredImage___childImageSharp___internal___type',
  featuredImage___id = 'featuredImage___id',
  featuredImage___parent___id = 'featuredImage___parent___id',
  featuredImage___parent___parent___id = 'featuredImage___parent___parent___id',
  featuredImage___parent___parent___children = 'featuredImage___parent___parent___children',
  featuredImage___parent___children = 'featuredImage___parent___children',
  featuredImage___parent___children___id = 'featuredImage___parent___children___id',
  featuredImage___parent___children___children = 'featuredImage___parent___children___children',
  featuredImage___parent___internal___content = 'featuredImage___parent___internal___content',
  featuredImage___parent___internal___contentDigest = 'featuredImage___parent___internal___contentDigest',
  featuredImage___parent___internal___description = 'featuredImage___parent___internal___description',
  featuredImage___parent___internal___fieldOwners = 'featuredImage___parent___internal___fieldOwners',
  featuredImage___parent___internal___ignoreType = 'featuredImage___parent___internal___ignoreType',
  featuredImage___parent___internal___mediaType = 'featuredImage___parent___internal___mediaType',
  featuredImage___parent___internal___owner = 'featuredImage___parent___internal___owner',
  featuredImage___parent___internal___type = 'featuredImage___parent___internal___type',
  featuredImage___children = 'featuredImage___children',
  featuredImage___children___id = 'featuredImage___children___id',
  featuredImage___children___parent___id = 'featuredImage___children___parent___id',
  featuredImage___children___parent___children = 'featuredImage___children___parent___children',
  featuredImage___children___children = 'featuredImage___children___children',
  featuredImage___children___children___id = 'featuredImage___children___children___id',
  featuredImage___children___children___children = 'featuredImage___children___children___children',
  featuredImage___children___internal___content = 'featuredImage___children___internal___content',
  featuredImage___children___internal___contentDigest = 'featuredImage___children___internal___contentDigest',
  featuredImage___children___internal___description = 'featuredImage___children___internal___description',
  featuredImage___children___internal___fieldOwners = 'featuredImage___children___internal___fieldOwners',
  featuredImage___children___internal___ignoreType = 'featuredImage___children___internal___ignoreType',
  featuredImage___children___internal___mediaType = 'featuredImage___children___internal___mediaType',
  featuredImage___children___internal___owner = 'featuredImage___children___internal___owner',
  featuredImage___children___internal___type = 'featuredImage___children___internal___type',
  featuredImage___internal___content = 'featuredImage___internal___content',
  featuredImage___internal___contentDigest = 'featuredImage___internal___contentDigest',
  featuredImage___internal___description = 'featuredImage___internal___description',
  featuredImage___internal___fieldOwners = 'featuredImage___internal___fieldOwners',
  featuredImage___internal___ignoreType = 'featuredImage___internal___ignoreType',
  featuredImage___internal___mediaType = 'featuredImage___internal___mediaType',
  featuredImage___internal___owner = 'featuredImage___internal___owner',
  featuredImage___internal___type = 'featuredImage___internal___type',
  body = 'body',
  slug = 'slug',
  date = 'date',
  tags = 'tags',
  keywords = 'keywords',
  excerpt = 'excerpt'
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
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  childBlogPostCategory___id = 'childBlogPostCategory___id',
  childBlogPostCategory___slug = 'childBlogPostCategory___slug',
  childBlogPostCategory___name = 'childBlogPostCategory___name',
  childBlogPostCategory___parent___id = 'childBlogPostCategory___parent___id',
  childBlogPostCategory___parent___parent___id = 'childBlogPostCategory___parent___parent___id',
  childBlogPostCategory___parent___parent___children = 'childBlogPostCategory___parent___parent___children',
  childBlogPostCategory___parent___children = 'childBlogPostCategory___parent___children',
  childBlogPostCategory___parent___children___id = 'childBlogPostCategory___parent___children___id',
  childBlogPostCategory___parent___children___children = 'childBlogPostCategory___parent___children___children',
  childBlogPostCategory___parent___internal___content = 'childBlogPostCategory___parent___internal___content',
  childBlogPostCategory___parent___internal___contentDigest = 'childBlogPostCategory___parent___internal___contentDigest',
  childBlogPostCategory___parent___internal___description = 'childBlogPostCategory___parent___internal___description',
  childBlogPostCategory___parent___internal___fieldOwners = 'childBlogPostCategory___parent___internal___fieldOwners',
  childBlogPostCategory___parent___internal___ignoreType = 'childBlogPostCategory___parent___internal___ignoreType',
  childBlogPostCategory___parent___internal___mediaType = 'childBlogPostCategory___parent___internal___mediaType',
  childBlogPostCategory___parent___internal___owner = 'childBlogPostCategory___parent___internal___owner',
  childBlogPostCategory___parent___internal___type = 'childBlogPostCategory___parent___internal___type',
  childBlogPostCategory___children = 'childBlogPostCategory___children',
  childBlogPostCategory___children___id = 'childBlogPostCategory___children___id',
  childBlogPostCategory___children___parent___id = 'childBlogPostCategory___children___parent___id',
  childBlogPostCategory___children___parent___children = 'childBlogPostCategory___children___parent___children',
  childBlogPostCategory___children___children = 'childBlogPostCategory___children___children',
  childBlogPostCategory___children___children___id = 'childBlogPostCategory___children___children___id',
  childBlogPostCategory___children___children___children = 'childBlogPostCategory___children___children___children',
  childBlogPostCategory___children___internal___content = 'childBlogPostCategory___children___internal___content',
  childBlogPostCategory___children___internal___contentDigest = 'childBlogPostCategory___children___internal___contentDigest',
  childBlogPostCategory___children___internal___description = 'childBlogPostCategory___children___internal___description',
  childBlogPostCategory___children___internal___fieldOwners = 'childBlogPostCategory___children___internal___fieldOwners',
  childBlogPostCategory___children___internal___ignoreType = 'childBlogPostCategory___children___internal___ignoreType',
  childBlogPostCategory___children___internal___mediaType = 'childBlogPostCategory___children___internal___mediaType',
  childBlogPostCategory___children___internal___owner = 'childBlogPostCategory___children___internal___owner',
  childBlogPostCategory___children___internal___type = 'childBlogPostCategory___children___internal___type',
  childBlogPostCategory___internal___content = 'childBlogPostCategory___internal___content',
  childBlogPostCategory___internal___contentDigest = 'childBlogPostCategory___internal___contentDigest',
  childBlogPostCategory___internal___description = 'childBlogPostCategory___internal___description',
  childBlogPostCategory___internal___fieldOwners = 'childBlogPostCategory___internal___fieldOwners',
  childBlogPostCategory___internal___ignoreType = 'childBlogPostCategory___internal___ignoreType',
  childBlogPostCategory___internal___mediaType = 'childBlogPostCategory___internal___mediaType',
  childBlogPostCategory___internal___owner = 'childBlogPostCategory___internal___owner',
  childBlogPostCategory___internal___type = 'childBlogPostCategory___internal___type'
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
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childMdx___rawBody = 'childMdx___rawBody',
  childMdx___fileAbsolutePath = 'childMdx___fileAbsolutePath',
  childMdx___frontmatter___title = 'childMdx___frontmatter___title',
  childMdx___frontmatter___date = 'childMdx___frontmatter___date',
  childMdx___frontmatter___featuredImage___birthtime = 'childMdx___frontmatter___featuredImage___birthtime',
  childMdx___frontmatter___featuredImage___birthtimeMs = 'childMdx___frontmatter___featuredImage___birthtimeMs',
  childMdx___frontmatter___featuredImage___sourceInstanceName = 'childMdx___frontmatter___featuredImage___sourceInstanceName',
  childMdx___frontmatter___featuredImage___absolutePath = 'childMdx___frontmatter___featuredImage___absolutePath',
  childMdx___frontmatter___featuredImage___relativePath = 'childMdx___frontmatter___featuredImage___relativePath',
  childMdx___frontmatter___featuredImage___extension = 'childMdx___frontmatter___featuredImage___extension',
  childMdx___frontmatter___featuredImage___size = 'childMdx___frontmatter___featuredImage___size',
  childMdx___frontmatter___featuredImage___prettySize = 'childMdx___frontmatter___featuredImage___prettySize',
  childMdx___frontmatter___featuredImage___modifiedTime = 'childMdx___frontmatter___featuredImage___modifiedTime',
  childMdx___frontmatter___featuredImage___accessTime = 'childMdx___frontmatter___featuredImage___accessTime',
  childMdx___frontmatter___featuredImage___changeTime = 'childMdx___frontmatter___featuredImage___changeTime',
  childMdx___frontmatter___featuredImage___birthTime = 'childMdx___frontmatter___featuredImage___birthTime',
  childMdx___frontmatter___featuredImage___root = 'childMdx___frontmatter___featuredImage___root',
  childMdx___frontmatter___featuredImage___dir = 'childMdx___frontmatter___featuredImage___dir',
  childMdx___frontmatter___featuredImage___base = 'childMdx___frontmatter___featuredImage___base',
  childMdx___frontmatter___featuredImage___ext = 'childMdx___frontmatter___featuredImage___ext',
  childMdx___frontmatter___featuredImage___name = 'childMdx___frontmatter___featuredImage___name',
  childMdx___frontmatter___featuredImage___relativeDirectory = 'childMdx___frontmatter___featuredImage___relativeDirectory',
  childMdx___frontmatter___featuredImage___dev = 'childMdx___frontmatter___featuredImage___dev',
  childMdx___frontmatter___featuredImage___mode = 'childMdx___frontmatter___featuredImage___mode',
  childMdx___frontmatter___featuredImage___nlink = 'childMdx___frontmatter___featuredImage___nlink',
  childMdx___frontmatter___featuredImage___uid = 'childMdx___frontmatter___featuredImage___uid',
  childMdx___frontmatter___featuredImage___gid = 'childMdx___frontmatter___featuredImage___gid',
  childMdx___frontmatter___featuredImage___rdev = 'childMdx___frontmatter___featuredImage___rdev',
  childMdx___frontmatter___featuredImage___blksize = 'childMdx___frontmatter___featuredImage___blksize',
  childMdx___frontmatter___featuredImage___ino = 'childMdx___frontmatter___featuredImage___ino',
  childMdx___frontmatter___featuredImage___blocks = 'childMdx___frontmatter___featuredImage___blocks',
  childMdx___frontmatter___featuredImage___atimeMs = 'childMdx___frontmatter___featuredImage___atimeMs',
  childMdx___frontmatter___featuredImage___mtimeMs = 'childMdx___frontmatter___featuredImage___mtimeMs',
  childMdx___frontmatter___featuredImage___ctimeMs = 'childMdx___frontmatter___featuredImage___ctimeMs',
  childMdx___frontmatter___featuredImage___atime = 'childMdx___frontmatter___featuredImage___atime',
  childMdx___frontmatter___featuredImage___mtime = 'childMdx___frontmatter___featuredImage___mtime',
  childMdx___frontmatter___featuredImage___ctime = 'childMdx___frontmatter___featuredImage___ctime',
  childMdx___frontmatter___featuredImage___publicURL = 'childMdx___frontmatter___featuredImage___publicURL',
  childMdx___frontmatter___featuredImage___id = 'childMdx___frontmatter___featuredImage___id',
  childMdx___frontmatter___featuredImage___children = 'childMdx___frontmatter___featuredImage___children',
  childMdx___frontmatter___open = 'childMdx___frontmatter___open',
  childMdx___frontmatter___tags = 'childMdx___frontmatter___tags',
  childMdx___frontmatter___name = 'childMdx___frontmatter___name',
  childMdx___body = 'childMdx___body',
  childMdx___excerpt = 'childMdx___excerpt',
  childMdx___headings = 'childMdx___headings',
  childMdx___headings___value = 'childMdx___headings___value',
  childMdx___headings___depth = 'childMdx___headings___depth',
  childMdx___html = 'childMdx___html',
  childMdx___mdxAST = 'childMdx___mdxAST',
  childMdx___tableOfContents = 'childMdx___tableOfContents',
  childMdx___timeToRead = 'childMdx___timeToRead',
  childMdx___wordCount___paragraphs = 'childMdx___wordCount___paragraphs',
  childMdx___wordCount___sentences = 'childMdx___wordCount___sentences',
  childMdx___wordCount___words = 'childMdx___wordCount___words',
  childMdx___id = 'childMdx___id',
  childMdx___parent___id = 'childMdx___parent___id',
  childMdx___parent___parent___id = 'childMdx___parent___parent___id',
  childMdx___parent___parent___children = 'childMdx___parent___parent___children',
  childMdx___parent___children = 'childMdx___parent___children',
  childMdx___parent___children___id = 'childMdx___parent___children___id',
  childMdx___parent___children___children = 'childMdx___parent___children___children',
  childMdx___parent___internal___content = 'childMdx___parent___internal___content',
  childMdx___parent___internal___contentDigest = 'childMdx___parent___internal___contentDigest',
  childMdx___parent___internal___description = 'childMdx___parent___internal___description',
  childMdx___parent___internal___fieldOwners = 'childMdx___parent___internal___fieldOwners',
  childMdx___parent___internal___ignoreType = 'childMdx___parent___internal___ignoreType',
  childMdx___parent___internal___mediaType = 'childMdx___parent___internal___mediaType',
  childMdx___parent___internal___owner = 'childMdx___parent___internal___owner',
  childMdx___parent___internal___type = 'childMdx___parent___internal___type',
  childMdx___children = 'childMdx___children',
  childMdx___children___id = 'childMdx___children___id',
  childMdx___children___parent___id = 'childMdx___children___parent___id',
  childMdx___children___parent___children = 'childMdx___children___parent___children',
  childMdx___children___children = 'childMdx___children___children',
  childMdx___children___children___id = 'childMdx___children___children___id',
  childMdx___children___children___children = 'childMdx___children___children___children',
  childMdx___children___internal___content = 'childMdx___children___internal___content',
  childMdx___children___internal___contentDigest = 'childMdx___children___internal___contentDigest',
  childMdx___children___internal___description = 'childMdx___children___internal___description',
  childMdx___children___internal___fieldOwners = 'childMdx___children___internal___fieldOwners',
  childMdx___children___internal___ignoreType = 'childMdx___children___internal___ignoreType',
  childMdx___children___internal___mediaType = 'childMdx___children___internal___mediaType',
  childMdx___children___internal___owner = 'childMdx___children___internal___owner',
  childMdx___children___internal___type = 'childMdx___children___internal___type',
  childMdx___internal___content = 'childMdx___internal___content',
  childMdx___internal___contentDigest = 'childMdx___internal___contentDigest',
  childMdx___internal___description = 'childMdx___internal___description',
  childMdx___internal___fieldOwners = 'childMdx___internal___fieldOwners',
  childMdx___internal___ignoreType = 'childMdx___internal___ignoreType',
  childMdx___internal___mediaType = 'childMdx___internal___mediaType',
  childMdx___internal___owner = 'childMdx___internal___owner',
  childMdx___internal___type = 'childMdx___internal___type',
  childMdx___childMdxBlogPost___id = 'childMdx___childMdxBlogPost___id',
  childMdx___childMdxBlogPost___title = 'childMdx___childMdxBlogPost___title',
  childMdx___childMdxBlogPost___featuredImage___birthtime = 'childMdx___childMdxBlogPost___featuredImage___birthtime',
  childMdx___childMdxBlogPost___featuredImage___birthtimeMs = 'childMdx___childMdxBlogPost___featuredImage___birthtimeMs',
  childMdx___childMdxBlogPost___featuredImage___sourceInstanceName = 'childMdx___childMdxBlogPost___featuredImage___sourceInstanceName',
  childMdx___childMdxBlogPost___featuredImage___absolutePath = 'childMdx___childMdxBlogPost___featuredImage___absolutePath',
  childMdx___childMdxBlogPost___featuredImage___relativePath = 'childMdx___childMdxBlogPost___featuredImage___relativePath',
  childMdx___childMdxBlogPost___featuredImage___extension = 'childMdx___childMdxBlogPost___featuredImage___extension',
  childMdx___childMdxBlogPost___featuredImage___size = 'childMdx___childMdxBlogPost___featuredImage___size',
  childMdx___childMdxBlogPost___featuredImage___prettySize = 'childMdx___childMdxBlogPost___featuredImage___prettySize',
  childMdx___childMdxBlogPost___featuredImage___modifiedTime = 'childMdx___childMdxBlogPost___featuredImage___modifiedTime',
  childMdx___childMdxBlogPost___featuredImage___accessTime = 'childMdx___childMdxBlogPost___featuredImage___accessTime',
  childMdx___childMdxBlogPost___featuredImage___changeTime = 'childMdx___childMdxBlogPost___featuredImage___changeTime',
  childMdx___childMdxBlogPost___featuredImage___birthTime = 'childMdx___childMdxBlogPost___featuredImage___birthTime',
  childMdx___childMdxBlogPost___featuredImage___root = 'childMdx___childMdxBlogPost___featuredImage___root',
  childMdx___childMdxBlogPost___featuredImage___dir = 'childMdx___childMdxBlogPost___featuredImage___dir',
  childMdx___childMdxBlogPost___featuredImage___base = 'childMdx___childMdxBlogPost___featuredImage___base',
  childMdx___childMdxBlogPost___featuredImage___ext = 'childMdx___childMdxBlogPost___featuredImage___ext',
  childMdx___childMdxBlogPost___featuredImage___name = 'childMdx___childMdxBlogPost___featuredImage___name',
  childMdx___childMdxBlogPost___featuredImage___relativeDirectory = 'childMdx___childMdxBlogPost___featuredImage___relativeDirectory',
  childMdx___childMdxBlogPost___featuredImage___dev = 'childMdx___childMdxBlogPost___featuredImage___dev',
  childMdx___childMdxBlogPost___featuredImage___mode = 'childMdx___childMdxBlogPost___featuredImage___mode',
  childMdx___childMdxBlogPost___featuredImage___nlink = 'childMdx___childMdxBlogPost___featuredImage___nlink',
  childMdx___childMdxBlogPost___featuredImage___uid = 'childMdx___childMdxBlogPost___featuredImage___uid',
  childMdx___childMdxBlogPost___featuredImage___gid = 'childMdx___childMdxBlogPost___featuredImage___gid',
  childMdx___childMdxBlogPost___featuredImage___rdev = 'childMdx___childMdxBlogPost___featuredImage___rdev',
  childMdx___childMdxBlogPost___featuredImage___blksize = 'childMdx___childMdxBlogPost___featuredImage___blksize',
  childMdx___childMdxBlogPost___featuredImage___ino = 'childMdx___childMdxBlogPost___featuredImage___ino',
  childMdx___childMdxBlogPost___featuredImage___blocks = 'childMdx___childMdxBlogPost___featuredImage___blocks',
  childMdx___childMdxBlogPost___featuredImage___atimeMs = 'childMdx___childMdxBlogPost___featuredImage___atimeMs',
  childMdx___childMdxBlogPost___featuredImage___mtimeMs = 'childMdx___childMdxBlogPost___featuredImage___mtimeMs',
  childMdx___childMdxBlogPost___featuredImage___ctimeMs = 'childMdx___childMdxBlogPost___featuredImage___ctimeMs',
  childMdx___childMdxBlogPost___featuredImage___atime = 'childMdx___childMdxBlogPost___featuredImage___atime',
  childMdx___childMdxBlogPost___featuredImage___mtime = 'childMdx___childMdxBlogPost___featuredImage___mtime',
  childMdx___childMdxBlogPost___featuredImage___ctime = 'childMdx___childMdxBlogPost___featuredImage___ctime',
  childMdx___childMdxBlogPost___featuredImage___publicURL = 'childMdx___childMdxBlogPost___featuredImage___publicURL',
  childMdx___childMdxBlogPost___featuredImage___id = 'childMdx___childMdxBlogPost___featuredImage___id',
  childMdx___childMdxBlogPost___featuredImage___children = 'childMdx___childMdxBlogPost___featuredImage___children',
  childMdx___childMdxBlogPost___slug = 'childMdx___childMdxBlogPost___slug',
  childMdx___childMdxBlogPost___date = 'childMdx___childMdxBlogPost___date',
  childMdx___childMdxBlogPost___tags = 'childMdx___childMdxBlogPost___tags',
  childMdx___childMdxBlogPost___keywords = 'childMdx___childMdxBlogPost___keywords',
  childMdx___childMdxBlogPost___excerpt = 'childMdx___childMdxBlogPost___excerpt',
  childMdx___childMdxBlogPost___body = 'childMdx___childMdxBlogPost___body',
  childMdx___childMdxBlogPost___parent___id = 'childMdx___childMdxBlogPost___parent___id',
  childMdx___childMdxBlogPost___parent___children = 'childMdx___childMdxBlogPost___parent___children',
  childMdx___childMdxBlogPost___children = 'childMdx___childMdxBlogPost___children',
  childMdx___childMdxBlogPost___children___id = 'childMdx___childMdxBlogPost___children___id',
  childMdx___childMdxBlogPost___children___children = 'childMdx___childMdxBlogPost___children___children',
  childMdx___childMdxBlogPost___internal___content = 'childMdx___childMdxBlogPost___internal___content',
  childMdx___childMdxBlogPost___internal___contentDigest = 'childMdx___childMdxBlogPost___internal___contentDigest',
  childMdx___childMdxBlogPost___internal___description = 'childMdx___childMdxBlogPost___internal___description',
  childMdx___childMdxBlogPost___internal___fieldOwners = 'childMdx___childMdxBlogPost___internal___fieldOwners',
  childMdx___childMdxBlogPost___internal___ignoreType = 'childMdx___childMdxBlogPost___internal___ignoreType',
  childMdx___childMdxBlogPost___internal___mediaType = 'childMdx___childMdxBlogPost___internal___mediaType',
  childMdx___childMdxBlogPost___internal___owner = 'childMdx___childMdxBlogPost___internal___owner',
  childMdx___childMdxBlogPost___internal___type = 'childMdx___childMdxBlogPost___internal___type',
  childJavascriptFrontmatter___id = 'childJavascriptFrontmatter___id',
  childJavascriptFrontmatter___parent___id = 'childJavascriptFrontmatter___parent___id',
  childJavascriptFrontmatter___parent___parent___id = 'childJavascriptFrontmatter___parent___parent___id',
  childJavascriptFrontmatter___parent___parent___children = 'childJavascriptFrontmatter___parent___parent___children',
  childJavascriptFrontmatter___parent___children = 'childJavascriptFrontmatter___parent___children',
  childJavascriptFrontmatter___parent___children___id = 'childJavascriptFrontmatter___parent___children___id',
  childJavascriptFrontmatter___parent___children___children = 'childJavascriptFrontmatter___parent___children___children',
  childJavascriptFrontmatter___parent___internal___content = 'childJavascriptFrontmatter___parent___internal___content',
  childJavascriptFrontmatter___parent___internal___contentDigest = 'childJavascriptFrontmatter___parent___internal___contentDigest',
  childJavascriptFrontmatter___parent___internal___description = 'childJavascriptFrontmatter___parent___internal___description',
  childJavascriptFrontmatter___parent___internal___fieldOwners = 'childJavascriptFrontmatter___parent___internal___fieldOwners',
  childJavascriptFrontmatter___parent___internal___ignoreType = 'childJavascriptFrontmatter___parent___internal___ignoreType',
  childJavascriptFrontmatter___parent___internal___mediaType = 'childJavascriptFrontmatter___parent___internal___mediaType',
  childJavascriptFrontmatter___parent___internal___owner = 'childJavascriptFrontmatter___parent___internal___owner',
  childJavascriptFrontmatter___parent___internal___type = 'childJavascriptFrontmatter___parent___internal___type',
  childJavascriptFrontmatter___children = 'childJavascriptFrontmatter___children',
  childJavascriptFrontmatter___children___id = 'childJavascriptFrontmatter___children___id',
  childJavascriptFrontmatter___children___parent___id = 'childJavascriptFrontmatter___children___parent___id',
  childJavascriptFrontmatter___children___parent___children = 'childJavascriptFrontmatter___children___parent___children',
  childJavascriptFrontmatter___children___children = 'childJavascriptFrontmatter___children___children',
  childJavascriptFrontmatter___children___children___id = 'childJavascriptFrontmatter___children___children___id',
  childJavascriptFrontmatter___children___children___children = 'childJavascriptFrontmatter___children___children___children',
  childJavascriptFrontmatter___children___internal___content = 'childJavascriptFrontmatter___children___internal___content',
  childJavascriptFrontmatter___children___internal___contentDigest = 'childJavascriptFrontmatter___children___internal___contentDigest',
  childJavascriptFrontmatter___children___internal___description = 'childJavascriptFrontmatter___children___internal___description',
  childJavascriptFrontmatter___children___internal___fieldOwners = 'childJavascriptFrontmatter___children___internal___fieldOwners',
  childJavascriptFrontmatter___children___internal___ignoreType = 'childJavascriptFrontmatter___children___internal___ignoreType',
  childJavascriptFrontmatter___children___internal___mediaType = 'childJavascriptFrontmatter___children___internal___mediaType',
  childJavascriptFrontmatter___children___internal___owner = 'childJavascriptFrontmatter___children___internal___owner',
  childJavascriptFrontmatter___children___internal___type = 'childJavascriptFrontmatter___children___internal___type',
  childJavascriptFrontmatter___internal___content = 'childJavascriptFrontmatter___internal___content',
  childJavascriptFrontmatter___internal___contentDigest = 'childJavascriptFrontmatter___internal___contentDigest',
  childJavascriptFrontmatter___internal___description = 'childJavascriptFrontmatter___internal___description',
  childJavascriptFrontmatter___internal___fieldOwners = 'childJavascriptFrontmatter___internal___fieldOwners',
  childJavascriptFrontmatter___internal___ignoreType = 'childJavascriptFrontmatter___internal___ignoreType',
  childJavascriptFrontmatter___internal___mediaType = 'childJavascriptFrontmatter___internal___mediaType',
  childJavascriptFrontmatter___internal___owner = 'childJavascriptFrontmatter___internal___owner',
  childJavascriptFrontmatter___internal___type = 'childJavascriptFrontmatter___internal___type',
  childJavascriptFrontmatter___node___id = 'childJavascriptFrontmatter___node___id',
  childJavascriptFrontmatter___node___children = 'childJavascriptFrontmatter___node___children',
  childJavascriptFrontmatter___node___internal___contentDigest = 'childJavascriptFrontmatter___node___internal___contentDigest',
  childJavascriptFrontmatter___node___internal___type = 'childJavascriptFrontmatter___node___internal___type',
  childJavascriptFrontmatter___node___internal___mediaType = 'childJavascriptFrontmatter___node___internal___mediaType',
  childJavascriptFrontmatter___node___internal___description = 'childJavascriptFrontmatter___node___internal___description',
  childJavascriptFrontmatter___node___internal___counter = 'childJavascriptFrontmatter___node___internal___counter',
  childJavascriptFrontmatter___node___internal___owner = 'childJavascriptFrontmatter___node___internal___owner',
  childJavascriptFrontmatter___node___sourceInstanceName = 'childJavascriptFrontmatter___node___sourceInstanceName',
  childJavascriptFrontmatter___node___absolutePath = 'childJavascriptFrontmatter___node___absolutePath',
  childJavascriptFrontmatter___node___relativePath = 'childJavascriptFrontmatter___node___relativePath',
  childJavascriptFrontmatter___node___extension = 'childJavascriptFrontmatter___node___extension',
  childJavascriptFrontmatter___node___size = 'childJavascriptFrontmatter___node___size',
  childJavascriptFrontmatter___node___prettySize = 'childJavascriptFrontmatter___node___prettySize',
  childJavascriptFrontmatter___node___modifiedTime = 'childJavascriptFrontmatter___node___modifiedTime',
  childJavascriptFrontmatter___node___accessTime = 'childJavascriptFrontmatter___node___accessTime',
  childJavascriptFrontmatter___node___changeTime = 'childJavascriptFrontmatter___node___changeTime',
  childJavascriptFrontmatter___node___birthTime = 'childJavascriptFrontmatter___node___birthTime',
  childJavascriptFrontmatter___node___root = 'childJavascriptFrontmatter___node___root',
  childJavascriptFrontmatter___node___dir = 'childJavascriptFrontmatter___node___dir',
  childJavascriptFrontmatter___node___base___birthtime = 'childJavascriptFrontmatter___node___base___birthtime',
  childJavascriptFrontmatter___node___base___birthtimeMs = 'childJavascriptFrontmatter___node___base___birthtimeMs',
  childJavascriptFrontmatter___node___base___sourceInstanceName = 'childJavascriptFrontmatter___node___base___sourceInstanceName',
  childJavascriptFrontmatter___node___base___absolutePath = 'childJavascriptFrontmatter___node___base___absolutePath',
  childJavascriptFrontmatter___node___base___relativePath = 'childJavascriptFrontmatter___node___base___relativePath',
  childJavascriptFrontmatter___node___base___extension = 'childJavascriptFrontmatter___node___base___extension',
  childJavascriptFrontmatter___node___base___size = 'childJavascriptFrontmatter___node___base___size',
  childJavascriptFrontmatter___node___base___prettySize = 'childJavascriptFrontmatter___node___base___prettySize',
  childJavascriptFrontmatter___node___base___modifiedTime = 'childJavascriptFrontmatter___node___base___modifiedTime',
  childJavascriptFrontmatter___node___base___accessTime = 'childJavascriptFrontmatter___node___base___accessTime',
  childJavascriptFrontmatter___node___base___changeTime = 'childJavascriptFrontmatter___node___base___changeTime',
  childJavascriptFrontmatter___node___base___birthTime = 'childJavascriptFrontmatter___node___base___birthTime',
  childJavascriptFrontmatter___node___base___root = 'childJavascriptFrontmatter___node___base___root',
  childJavascriptFrontmatter___node___base___dir = 'childJavascriptFrontmatter___node___base___dir',
  childJavascriptFrontmatter___node___base___base = 'childJavascriptFrontmatter___node___base___base',
  childJavascriptFrontmatter___node___base___ext = 'childJavascriptFrontmatter___node___base___ext',
  childJavascriptFrontmatter___node___base___name = 'childJavascriptFrontmatter___node___base___name',
  childJavascriptFrontmatter___node___base___relativeDirectory = 'childJavascriptFrontmatter___node___base___relativeDirectory',
  childJavascriptFrontmatter___node___base___dev = 'childJavascriptFrontmatter___node___base___dev',
  childJavascriptFrontmatter___node___base___mode = 'childJavascriptFrontmatter___node___base___mode',
  childJavascriptFrontmatter___node___base___nlink = 'childJavascriptFrontmatter___node___base___nlink',
  childJavascriptFrontmatter___node___base___uid = 'childJavascriptFrontmatter___node___base___uid',
  childJavascriptFrontmatter___node___base___gid = 'childJavascriptFrontmatter___node___base___gid',
  childJavascriptFrontmatter___node___base___rdev = 'childJavascriptFrontmatter___node___base___rdev',
  childJavascriptFrontmatter___node___base___blksize = 'childJavascriptFrontmatter___node___base___blksize',
  childJavascriptFrontmatter___node___base___ino = 'childJavascriptFrontmatter___node___base___ino',
  childJavascriptFrontmatter___node___base___blocks = 'childJavascriptFrontmatter___node___base___blocks',
  childJavascriptFrontmatter___node___base___atimeMs = 'childJavascriptFrontmatter___node___base___atimeMs',
  childJavascriptFrontmatter___node___base___mtimeMs = 'childJavascriptFrontmatter___node___base___mtimeMs',
  childJavascriptFrontmatter___node___base___ctimeMs = 'childJavascriptFrontmatter___node___base___ctimeMs',
  childJavascriptFrontmatter___node___base___atime = 'childJavascriptFrontmatter___node___base___atime',
  childJavascriptFrontmatter___node___base___mtime = 'childJavascriptFrontmatter___node___base___mtime',
  childJavascriptFrontmatter___node___base___ctime = 'childJavascriptFrontmatter___node___base___ctime',
  childJavascriptFrontmatter___node___base___publicURL = 'childJavascriptFrontmatter___node___base___publicURL',
  childJavascriptFrontmatter___node___base___id = 'childJavascriptFrontmatter___node___base___id',
  childJavascriptFrontmatter___node___base___children = 'childJavascriptFrontmatter___node___base___children',
  childJavascriptFrontmatter___node___ext = 'childJavascriptFrontmatter___node___ext',
  childJavascriptFrontmatter___node___name = 'childJavascriptFrontmatter___node___name',
  childJavascriptFrontmatter___node___relativeDirectory = 'childJavascriptFrontmatter___node___relativeDirectory',
  childJavascriptFrontmatter___node___dev = 'childJavascriptFrontmatter___node___dev',
  childJavascriptFrontmatter___node___mode = 'childJavascriptFrontmatter___node___mode',
  childJavascriptFrontmatter___node___nlink = 'childJavascriptFrontmatter___node___nlink',
  childJavascriptFrontmatter___node___uid = 'childJavascriptFrontmatter___node___uid',
  childJavascriptFrontmatter___node___gid = 'childJavascriptFrontmatter___node___gid',
  childJavascriptFrontmatter___node___rdev = 'childJavascriptFrontmatter___node___rdev',
  childJavascriptFrontmatter___node___blksize = 'childJavascriptFrontmatter___node___blksize',
  childJavascriptFrontmatter___node___ino = 'childJavascriptFrontmatter___node___ino',
  childJavascriptFrontmatter___node___blocks = 'childJavascriptFrontmatter___node___blocks',
  childJavascriptFrontmatter___node___atimeMs = 'childJavascriptFrontmatter___node___atimeMs',
  childJavascriptFrontmatter___node___mtimeMs = 'childJavascriptFrontmatter___node___mtimeMs',
  childJavascriptFrontmatter___node___ctimeMs = 'childJavascriptFrontmatter___node___ctimeMs',
  childJavascriptFrontmatter___node___birthtimeMs = 'childJavascriptFrontmatter___node___birthtimeMs',
  childJavascriptFrontmatter___node___atime = 'childJavascriptFrontmatter___node___atime',
  childJavascriptFrontmatter___node___mtime = 'childJavascriptFrontmatter___node___mtime',
  childJavascriptFrontmatter___node___ctime = 'childJavascriptFrontmatter___node___ctime',
  childJavascriptFrontmatter___node___birthtime = 'childJavascriptFrontmatter___node___birthtime',
  childJavascriptFrontmatter___frontmatter___name = 'childJavascriptFrontmatter___frontmatter___name',
  childJavascriptFrontmatter___frontmatter___open = 'childJavascriptFrontmatter___frontmatter___open',
  childJavascriptFrontmatter___frontmatter___error = 'childJavascriptFrontmatter___frontmatter___error',
  childJavascriptFrontmatter___fileAbsolutePath = 'childJavascriptFrontmatter___fileAbsolutePath'
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
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
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
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
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
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  node___id = 'node___id',
  node___children = 'node___children',
  node___internal___contentDigest = 'node___internal___contentDigest',
  node___internal___type = 'node___internal___type',
  node___internal___mediaType = 'node___internal___mediaType',
  node___internal___description = 'node___internal___description',
  node___internal___counter = 'node___internal___counter',
  node___internal___owner = 'node___internal___owner',
  node___sourceInstanceName = 'node___sourceInstanceName',
  node___absolutePath = 'node___absolutePath',
  node___relativePath = 'node___relativePath',
  node___extension = 'node___extension',
  node___size = 'node___size',
  node___prettySize = 'node___prettySize',
  node___modifiedTime = 'node___modifiedTime',
  node___accessTime = 'node___accessTime',
  node___changeTime = 'node___changeTime',
  node___birthTime = 'node___birthTime',
  node___root = 'node___root',
  node___dir = 'node___dir',
  node___base___birthtime = 'node___base___birthtime',
  node___base___birthtimeMs = 'node___base___birthtimeMs',
  node___base___sourceInstanceName = 'node___base___sourceInstanceName',
  node___base___absolutePath = 'node___base___absolutePath',
  node___base___relativePath = 'node___base___relativePath',
  node___base___extension = 'node___base___extension',
  node___base___size = 'node___base___size',
  node___base___prettySize = 'node___base___prettySize',
  node___base___modifiedTime = 'node___base___modifiedTime',
  node___base___accessTime = 'node___base___accessTime',
  node___base___changeTime = 'node___base___changeTime',
  node___base___birthTime = 'node___base___birthTime',
  node___base___root = 'node___base___root',
  node___base___dir = 'node___base___dir',
  node___base___base = 'node___base___base',
  node___base___ext = 'node___base___ext',
  node___base___name = 'node___base___name',
  node___base___relativeDirectory = 'node___base___relativeDirectory',
  node___base___dev = 'node___base___dev',
  node___base___mode = 'node___base___mode',
  node___base___nlink = 'node___base___nlink',
  node___base___uid = 'node___base___uid',
  node___base___gid = 'node___base___gid',
  node___base___rdev = 'node___base___rdev',
  node___base___blksize = 'node___base___blksize',
  node___base___ino = 'node___base___ino',
  node___base___blocks = 'node___base___blocks',
  node___base___atimeMs = 'node___base___atimeMs',
  node___base___mtimeMs = 'node___base___mtimeMs',
  node___base___ctimeMs = 'node___base___ctimeMs',
  node___base___atime = 'node___base___atime',
  node___base___mtime = 'node___base___mtime',
  node___base___ctime = 'node___base___ctime',
  node___base___publicURL = 'node___base___publicURL',
  node___base___childImageSharp___id = 'node___base___childImageSharp___id',
  node___base___childImageSharp___children = 'node___base___childImageSharp___children',
  node___base___id = 'node___base___id',
  node___base___parent___id = 'node___base___parent___id',
  node___base___parent___children = 'node___base___parent___children',
  node___base___children = 'node___base___children',
  node___base___children___id = 'node___base___children___id',
  node___base___children___children = 'node___base___children___children',
  node___base___internal___content = 'node___base___internal___content',
  node___base___internal___contentDigest = 'node___base___internal___contentDigest',
  node___base___internal___description = 'node___base___internal___description',
  node___base___internal___fieldOwners = 'node___base___internal___fieldOwners',
  node___base___internal___ignoreType = 'node___base___internal___ignoreType',
  node___base___internal___mediaType = 'node___base___internal___mediaType',
  node___base___internal___owner = 'node___base___internal___owner',
  node___base___internal___type = 'node___base___internal___type',
  node___base___childMdx___rawBody = 'node___base___childMdx___rawBody',
  node___base___childMdx___fileAbsolutePath = 'node___base___childMdx___fileAbsolutePath',
  node___base___childMdx___body = 'node___base___childMdx___body',
  node___base___childMdx___excerpt = 'node___base___childMdx___excerpt',
  node___base___childMdx___headings = 'node___base___childMdx___headings',
  node___base___childMdx___html = 'node___base___childMdx___html',
  node___base___childMdx___mdxAST = 'node___base___childMdx___mdxAST',
  node___base___childMdx___tableOfContents = 'node___base___childMdx___tableOfContents',
  node___base___childMdx___timeToRead = 'node___base___childMdx___timeToRead',
  node___base___childMdx___id = 'node___base___childMdx___id',
  node___base___childMdx___children = 'node___base___childMdx___children',
  node___base___childJavascriptFrontmatter___id = 'node___base___childJavascriptFrontmatter___id',
  node___base___childJavascriptFrontmatter___children = 'node___base___childJavascriptFrontmatter___children',
  node___base___childJavascriptFrontmatter___fileAbsolutePath = 'node___base___childJavascriptFrontmatter___fileAbsolutePath',
  node___ext = 'node___ext',
  node___name = 'node___name',
  node___relativeDirectory = 'node___relativeDirectory',
  node___dev = 'node___dev',
  node___mode = 'node___mode',
  node___nlink = 'node___nlink',
  node___uid = 'node___uid',
  node___gid = 'node___gid',
  node___rdev = 'node___rdev',
  node___blksize = 'node___blksize',
  node___ino = 'node___ino',
  node___blocks = 'node___blocks',
  node___atimeMs = 'node___atimeMs',
  node___mtimeMs = 'node___mtimeMs',
  node___ctimeMs = 'node___ctimeMs',
  node___birthtimeMs = 'node___birthtimeMs',
  node___atime = 'node___atime',
  node___mtime = 'node___mtime',
  node___ctime = 'node___ctime',
  node___birthtime = 'node___birthtime',
  frontmatter___name = 'frontmatter___name',
  frontmatter___open = 'frontmatter___open',
  frontmatter___error = 'frontmatter___error',
  fileAbsolutePath = 'fileAbsolutePath'
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
  basePath = 'basePath',
  contentPath = 'contentPath',
  assetPath = 'assetPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
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
  id = 'id',
  title = 'title',
  featuredImage___birthtime = 'featuredImage___birthtime',
  featuredImage___birthtimeMs = 'featuredImage___birthtimeMs',
  featuredImage___sourceInstanceName = 'featuredImage___sourceInstanceName',
  featuredImage___absolutePath = 'featuredImage___absolutePath',
  featuredImage___relativePath = 'featuredImage___relativePath',
  featuredImage___extension = 'featuredImage___extension',
  featuredImage___size = 'featuredImage___size',
  featuredImage___prettySize = 'featuredImage___prettySize',
  featuredImage___modifiedTime = 'featuredImage___modifiedTime',
  featuredImage___accessTime = 'featuredImage___accessTime',
  featuredImage___changeTime = 'featuredImage___changeTime',
  featuredImage___birthTime = 'featuredImage___birthTime',
  featuredImage___root = 'featuredImage___root',
  featuredImage___dir = 'featuredImage___dir',
  featuredImage___base = 'featuredImage___base',
  featuredImage___ext = 'featuredImage___ext',
  featuredImage___name = 'featuredImage___name',
  featuredImage___relativeDirectory = 'featuredImage___relativeDirectory',
  featuredImage___dev = 'featuredImage___dev',
  featuredImage___mode = 'featuredImage___mode',
  featuredImage___nlink = 'featuredImage___nlink',
  featuredImage___uid = 'featuredImage___uid',
  featuredImage___gid = 'featuredImage___gid',
  featuredImage___rdev = 'featuredImage___rdev',
  featuredImage___blksize = 'featuredImage___blksize',
  featuredImage___ino = 'featuredImage___ino',
  featuredImage___blocks = 'featuredImage___blocks',
  featuredImage___atimeMs = 'featuredImage___atimeMs',
  featuredImage___mtimeMs = 'featuredImage___mtimeMs',
  featuredImage___ctimeMs = 'featuredImage___ctimeMs',
  featuredImage___atime = 'featuredImage___atime',
  featuredImage___mtime = 'featuredImage___mtime',
  featuredImage___ctime = 'featuredImage___ctime',
  featuredImage___publicURL = 'featuredImage___publicURL',
  featuredImage___childImageSharp___fixed___base64 = 'featuredImage___childImageSharp___fixed___base64',
  featuredImage___childImageSharp___fixed___tracedSVG = 'featuredImage___childImageSharp___fixed___tracedSVG',
  featuredImage___childImageSharp___fixed___aspectRatio = 'featuredImage___childImageSharp___fixed___aspectRatio',
  featuredImage___childImageSharp___fixed___width = 'featuredImage___childImageSharp___fixed___width',
  featuredImage___childImageSharp___fixed___height = 'featuredImage___childImageSharp___fixed___height',
  featuredImage___childImageSharp___fixed___src = 'featuredImage___childImageSharp___fixed___src',
  featuredImage___childImageSharp___fixed___srcSet = 'featuredImage___childImageSharp___fixed___srcSet',
  featuredImage___childImageSharp___fixed___srcWebp = 'featuredImage___childImageSharp___fixed___srcWebp',
  featuredImage___childImageSharp___fixed___srcSetWebp = 'featuredImage___childImageSharp___fixed___srcSetWebp',
  featuredImage___childImageSharp___fixed___originalName = 'featuredImage___childImageSharp___fixed___originalName',
  featuredImage___childImageSharp___resolutions___base64 = 'featuredImage___childImageSharp___resolutions___base64',
  featuredImage___childImageSharp___resolutions___tracedSVG = 'featuredImage___childImageSharp___resolutions___tracedSVG',
  featuredImage___childImageSharp___resolutions___aspectRatio = 'featuredImage___childImageSharp___resolutions___aspectRatio',
  featuredImage___childImageSharp___resolutions___width = 'featuredImage___childImageSharp___resolutions___width',
  featuredImage___childImageSharp___resolutions___height = 'featuredImage___childImageSharp___resolutions___height',
  featuredImage___childImageSharp___resolutions___src = 'featuredImage___childImageSharp___resolutions___src',
  featuredImage___childImageSharp___resolutions___srcSet = 'featuredImage___childImageSharp___resolutions___srcSet',
  featuredImage___childImageSharp___resolutions___srcWebp = 'featuredImage___childImageSharp___resolutions___srcWebp',
  featuredImage___childImageSharp___resolutions___srcSetWebp = 'featuredImage___childImageSharp___resolutions___srcSetWebp',
  featuredImage___childImageSharp___resolutions___originalName = 'featuredImage___childImageSharp___resolutions___originalName',
  featuredImage___childImageSharp___fluid___base64 = 'featuredImage___childImageSharp___fluid___base64',
  featuredImage___childImageSharp___fluid___tracedSVG = 'featuredImage___childImageSharp___fluid___tracedSVG',
  featuredImage___childImageSharp___fluid___aspectRatio = 'featuredImage___childImageSharp___fluid___aspectRatio',
  featuredImage___childImageSharp___fluid___src = 'featuredImage___childImageSharp___fluid___src',
  featuredImage___childImageSharp___fluid___srcSet = 'featuredImage___childImageSharp___fluid___srcSet',
  featuredImage___childImageSharp___fluid___srcWebp = 'featuredImage___childImageSharp___fluid___srcWebp',
  featuredImage___childImageSharp___fluid___srcSetWebp = 'featuredImage___childImageSharp___fluid___srcSetWebp',
  featuredImage___childImageSharp___fluid___sizes = 'featuredImage___childImageSharp___fluid___sizes',
  featuredImage___childImageSharp___fluid___originalImg = 'featuredImage___childImageSharp___fluid___originalImg',
  featuredImage___childImageSharp___fluid___originalName = 'featuredImage___childImageSharp___fluid___originalName',
  featuredImage___childImageSharp___fluid___presentationWidth = 'featuredImage___childImageSharp___fluid___presentationWidth',
  featuredImage___childImageSharp___fluid___presentationHeight = 'featuredImage___childImageSharp___fluid___presentationHeight',
  featuredImage___childImageSharp___sizes___base64 = 'featuredImage___childImageSharp___sizes___base64',
  featuredImage___childImageSharp___sizes___tracedSVG = 'featuredImage___childImageSharp___sizes___tracedSVG',
  featuredImage___childImageSharp___sizes___aspectRatio = 'featuredImage___childImageSharp___sizes___aspectRatio',
  featuredImage___childImageSharp___sizes___src = 'featuredImage___childImageSharp___sizes___src',
  featuredImage___childImageSharp___sizes___srcSet = 'featuredImage___childImageSharp___sizes___srcSet',
  featuredImage___childImageSharp___sizes___srcWebp = 'featuredImage___childImageSharp___sizes___srcWebp',
  featuredImage___childImageSharp___sizes___srcSetWebp = 'featuredImage___childImageSharp___sizes___srcSetWebp',
  featuredImage___childImageSharp___sizes___sizes = 'featuredImage___childImageSharp___sizes___sizes',
  featuredImage___childImageSharp___sizes___originalImg = 'featuredImage___childImageSharp___sizes___originalImg',
  featuredImage___childImageSharp___sizes___originalName = 'featuredImage___childImageSharp___sizes___originalName',
  featuredImage___childImageSharp___sizes___presentationWidth = 'featuredImage___childImageSharp___sizes___presentationWidth',
  featuredImage___childImageSharp___sizes___presentationHeight = 'featuredImage___childImageSharp___sizes___presentationHeight',
  featuredImage___childImageSharp___original___width = 'featuredImage___childImageSharp___original___width',
  featuredImage___childImageSharp___original___height = 'featuredImage___childImageSharp___original___height',
  featuredImage___childImageSharp___original___src = 'featuredImage___childImageSharp___original___src',
  featuredImage___childImageSharp___resize___src = 'featuredImage___childImageSharp___resize___src',
  featuredImage___childImageSharp___resize___tracedSVG = 'featuredImage___childImageSharp___resize___tracedSVG',
  featuredImage___childImageSharp___resize___width = 'featuredImage___childImageSharp___resize___width',
  featuredImage___childImageSharp___resize___height = 'featuredImage___childImageSharp___resize___height',
  featuredImage___childImageSharp___resize___aspectRatio = 'featuredImage___childImageSharp___resize___aspectRatio',
  featuredImage___childImageSharp___resize___originalName = 'featuredImage___childImageSharp___resize___originalName',
  featuredImage___childImageSharp___id = 'featuredImage___childImageSharp___id',
  featuredImage___childImageSharp___parent___id = 'featuredImage___childImageSharp___parent___id',
  featuredImage___childImageSharp___parent___children = 'featuredImage___childImageSharp___parent___children',
  featuredImage___childImageSharp___children = 'featuredImage___childImageSharp___children',
  featuredImage___childImageSharp___children___id = 'featuredImage___childImageSharp___children___id',
  featuredImage___childImageSharp___children___children = 'featuredImage___childImageSharp___children___children',
  featuredImage___childImageSharp___internal___content = 'featuredImage___childImageSharp___internal___content',
  featuredImage___childImageSharp___internal___contentDigest = 'featuredImage___childImageSharp___internal___contentDigest',
  featuredImage___childImageSharp___internal___description = 'featuredImage___childImageSharp___internal___description',
  featuredImage___childImageSharp___internal___fieldOwners = 'featuredImage___childImageSharp___internal___fieldOwners',
  featuredImage___childImageSharp___internal___ignoreType = 'featuredImage___childImageSharp___internal___ignoreType',
  featuredImage___childImageSharp___internal___mediaType = 'featuredImage___childImageSharp___internal___mediaType',
  featuredImage___childImageSharp___internal___owner = 'featuredImage___childImageSharp___internal___owner',
  featuredImage___childImageSharp___internal___type = 'featuredImage___childImageSharp___internal___type',
  featuredImage___id = 'featuredImage___id',
  featuredImage___parent___id = 'featuredImage___parent___id',
  featuredImage___parent___parent___id = 'featuredImage___parent___parent___id',
  featuredImage___parent___parent___children = 'featuredImage___parent___parent___children',
  featuredImage___parent___children = 'featuredImage___parent___children',
  featuredImage___parent___children___id = 'featuredImage___parent___children___id',
  featuredImage___parent___children___children = 'featuredImage___parent___children___children',
  featuredImage___parent___internal___content = 'featuredImage___parent___internal___content',
  featuredImage___parent___internal___contentDigest = 'featuredImage___parent___internal___contentDigest',
  featuredImage___parent___internal___description = 'featuredImage___parent___internal___description',
  featuredImage___parent___internal___fieldOwners = 'featuredImage___parent___internal___fieldOwners',
  featuredImage___parent___internal___ignoreType = 'featuredImage___parent___internal___ignoreType',
  featuredImage___parent___internal___mediaType = 'featuredImage___parent___internal___mediaType',
  featuredImage___parent___internal___owner = 'featuredImage___parent___internal___owner',
  featuredImage___parent___internal___type = 'featuredImage___parent___internal___type',
  featuredImage___children = 'featuredImage___children',
  featuredImage___children___id = 'featuredImage___children___id',
  featuredImage___children___parent___id = 'featuredImage___children___parent___id',
  featuredImage___children___parent___children = 'featuredImage___children___parent___children',
  featuredImage___children___children = 'featuredImage___children___children',
  featuredImage___children___children___id = 'featuredImage___children___children___id',
  featuredImage___children___children___children = 'featuredImage___children___children___children',
  featuredImage___children___internal___content = 'featuredImage___children___internal___content',
  featuredImage___children___internal___contentDigest = 'featuredImage___children___internal___contentDigest',
  featuredImage___children___internal___description = 'featuredImage___children___internal___description',
  featuredImage___children___internal___fieldOwners = 'featuredImage___children___internal___fieldOwners',
  featuredImage___children___internal___ignoreType = 'featuredImage___children___internal___ignoreType',
  featuredImage___children___internal___mediaType = 'featuredImage___children___internal___mediaType',
  featuredImage___children___internal___owner = 'featuredImage___children___internal___owner',
  featuredImage___children___internal___type = 'featuredImage___children___internal___type',
  featuredImage___internal___content = 'featuredImage___internal___content',
  featuredImage___internal___contentDigest = 'featuredImage___internal___contentDigest',
  featuredImage___internal___description = 'featuredImage___internal___description',
  featuredImage___internal___fieldOwners = 'featuredImage___internal___fieldOwners',
  featuredImage___internal___ignoreType = 'featuredImage___internal___ignoreType',
  featuredImage___internal___mediaType = 'featuredImage___internal___mediaType',
  featuredImage___internal___owner = 'featuredImage___internal___owner',
  featuredImage___internal___type = 'featuredImage___internal___type',
  featuredImage___childMdx___rawBody = 'featuredImage___childMdx___rawBody',
  featuredImage___childMdx___fileAbsolutePath = 'featuredImage___childMdx___fileAbsolutePath',
  featuredImage___childMdx___frontmatter___title = 'featuredImage___childMdx___frontmatter___title',
  featuredImage___childMdx___frontmatter___date = 'featuredImage___childMdx___frontmatter___date',
  featuredImage___childMdx___frontmatter___open = 'featuredImage___childMdx___frontmatter___open',
  featuredImage___childMdx___frontmatter___tags = 'featuredImage___childMdx___frontmatter___tags',
  featuredImage___childMdx___frontmatter___name = 'featuredImage___childMdx___frontmatter___name',
  featuredImage___childMdx___body = 'featuredImage___childMdx___body',
  featuredImage___childMdx___excerpt = 'featuredImage___childMdx___excerpt',
  featuredImage___childMdx___headings = 'featuredImage___childMdx___headings',
  featuredImage___childMdx___headings___value = 'featuredImage___childMdx___headings___value',
  featuredImage___childMdx___headings___depth = 'featuredImage___childMdx___headings___depth',
  featuredImage___childMdx___html = 'featuredImage___childMdx___html',
  featuredImage___childMdx___mdxAST = 'featuredImage___childMdx___mdxAST',
  featuredImage___childMdx___tableOfContents = 'featuredImage___childMdx___tableOfContents',
  featuredImage___childMdx___timeToRead = 'featuredImage___childMdx___timeToRead',
  featuredImage___childMdx___wordCount___paragraphs = 'featuredImage___childMdx___wordCount___paragraphs',
  featuredImage___childMdx___wordCount___sentences = 'featuredImage___childMdx___wordCount___sentences',
  featuredImage___childMdx___wordCount___words = 'featuredImage___childMdx___wordCount___words',
  featuredImage___childMdx___id = 'featuredImage___childMdx___id',
  featuredImage___childMdx___parent___id = 'featuredImage___childMdx___parent___id',
  featuredImage___childMdx___parent___children = 'featuredImage___childMdx___parent___children',
  featuredImage___childMdx___children = 'featuredImage___childMdx___children',
  featuredImage___childMdx___children___id = 'featuredImage___childMdx___children___id',
  featuredImage___childMdx___children___children = 'featuredImage___childMdx___children___children',
  featuredImage___childMdx___internal___content = 'featuredImage___childMdx___internal___content',
  featuredImage___childMdx___internal___contentDigest = 'featuredImage___childMdx___internal___contentDigest',
  featuredImage___childMdx___internal___description = 'featuredImage___childMdx___internal___description',
  featuredImage___childMdx___internal___fieldOwners = 'featuredImage___childMdx___internal___fieldOwners',
  featuredImage___childMdx___internal___ignoreType = 'featuredImage___childMdx___internal___ignoreType',
  featuredImage___childMdx___internal___mediaType = 'featuredImage___childMdx___internal___mediaType',
  featuredImage___childMdx___internal___owner = 'featuredImage___childMdx___internal___owner',
  featuredImage___childMdx___internal___type = 'featuredImage___childMdx___internal___type',
  featuredImage___childMdx___childMdxBlogPost___id = 'featuredImage___childMdx___childMdxBlogPost___id',
  featuredImage___childMdx___childMdxBlogPost___title = 'featuredImage___childMdx___childMdxBlogPost___title',
  featuredImage___childMdx___childMdxBlogPost___slug = 'featuredImage___childMdx___childMdxBlogPost___slug',
  featuredImage___childMdx___childMdxBlogPost___date = 'featuredImage___childMdx___childMdxBlogPost___date',
  featuredImage___childMdx___childMdxBlogPost___tags = 'featuredImage___childMdx___childMdxBlogPost___tags',
  featuredImage___childMdx___childMdxBlogPost___keywords = 'featuredImage___childMdx___childMdxBlogPost___keywords',
  featuredImage___childMdx___childMdxBlogPost___excerpt = 'featuredImage___childMdx___childMdxBlogPost___excerpt',
  featuredImage___childMdx___childMdxBlogPost___body = 'featuredImage___childMdx___childMdxBlogPost___body',
  featuredImage___childMdx___childMdxBlogPost___children = 'featuredImage___childMdx___childMdxBlogPost___children',
  featuredImage___childJavascriptFrontmatter___id = 'featuredImage___childJavascriptFrontmatter___id',
  featuredImage___childJavascriptFrontmatter___parent___id = 'featuredImage___childJavascriptFrontmatter___parent___id',
  featuredImage___childJavascriptFrontmatter___parent___children = 'featuredImage___childJavascriptFrontmatter___parent___children',
  featuredImage___childJavascriptFrontmatter___children = 'featuredImage___childJavascriptFrontmatter___children',
  featuredImage___childJavascriptFrontmatter___children___id = 'featuredImage___childJavascriptFrontmatter___children___id',
  featuredImage___childJavascriptFrontmatter___children___children = 'featuredImage___childJavascriptFrontmatter___children___children',
  featuredImage___childJavascriptFrontmatter___internal___content = 'featuredImage___childJavascriptFrontmatter___internal___content',
  featuredImage___childJavascriptFrontmatter___internal___contentDigest = 'featuredImage___childJavascriptFrontmatter___internal___contentDigest',
  featuredImage___childJavascriptFrontmatter___internal___description = 'featuredImage___childJavascriptFrontmatter___internal___description',
  featuredImage___childJavascriptFrontmatter___internal___fieldOwners = 'featuredImage___childJavascriptFrontmatter___internal___fieldOwners',
  featuredImage___childJavascriptFrontmatter___internal___ignoreType = 'featuredImage___childJavascriptFrontmatter___internal___ignoreType',
  featuredImage___childJavascriptFrontmatter___internal___mediaType = 'featuredImage___childJavascriptFrontmatter___internal___mediaType',
  featuredImage___childJavascriptFrontmatter___internal___owner = 'featuredImage___childJavascriptFrontmatter___internal___owner',
  featuredImage___childJavascriptFrontmatter___internal___type = 'featuredImage___childJavascriptFrontmatter___internal___type',
  featuredImage___childJavascriptFrontmatter___node___id = 'featuredImage___childJavascriptFrontmatter___node___id',
  featuredImage___childJavascriptFrontmatter___node___children = 'featuredImage___childJavascriptFrontmatter___node___children',
  featuredImage___childJavascriptFrontmatter___node___sourceInstanceName = 'featuredImage___childJavascriptFrontmatter___node___sourceInstanceName',
  featuredImage___childJavascriptFrontmatter___node___absolutePath = 'featuredImage___childJavascriptFrontmatter___node___absolutePath',
  featuredImage___childJavascriptFrontmatter___node___relativePath = 'featuredImage___childJavascriptFrontmatter___node___relativePath',
  featuredImage___childJavascriptFrontmatter___node___extension = 'featuredImage___childJavascriptFrontmatter___node___extension',
  featuredImage___childJavascriptFrontmatter___node___size = 'featuredImage___childJavascriptFrontmatter___node___size',
  featuredImage___childJavascriptFrontmatter___node___prettySize = 'featuredImage___childJavascriptFrontmatter___node___prettySize',
  featuredImage___childJavascriptFrontmatter___node___modifiedTime = 'featuredImage___childJavascriptFrontmatter___node___modifiedTime',
  featuredImage___childJavascriptFrontmatter___node___accessTime = 'featuredImage___childJavascriptFrontmatter___node___accessTime',
  featuredImage___childJavascriptFrontmatter___node___changeTime = 'featuredImage___childJavascriptFrontmatter___node___changeTime',
  featuredImage___childJavascriptFrontmatter___node___birthTime = 'featuredImage___childJavascriptFrontmatter___node___birthTime',
  featuredImage___childJavascriptFrontmatter___node___root = 'featuredImage___childJavascriptFrontmatter___node___root',
  featuredImage___childJavascriptFrontmatter___node___dir = 'featuredImage___childJavascriptFrontmatter___node___dir',
  featuredImage___childJavascriptFrontmatter___node___ext = 'featuredImage___childJavascriptFrontmatter___node___ext',
  featuredImage___childJavascriptFrontmatter___node___name = 'featuredImage___childJavascriptFrontmatter___node___name',
  featuredImage___childJavascriptFrontmatter___node___relativeDirectory = 'featuredImage___childJavascriptFrontmatter___node___relativeDirectory',
  featuredImage___childJavascriptFrontmatter___node___dev = 'featuredImage___childJavascriptFrontmatter___node___dev',
  featuredImage___childJavascriptFrontmatter___node___mode = 'featuredImage___childJavascriptFrontmatter___node___mode',
  featuredImage___childJavascriptFrontmatter___node___nlink = 'featuredImage___childJavascriptFrontmatter___node___nlink',
  featuredImage___childJavascriptFrontmatter___node___uid = 'featuredImage___childJavascriptFrontmatter___node___uid',
  featuredImage___childJavascriptFrontmatter___node___gid = 'featuredImage___childJavascriptFrontmatter___node___gid',
  featuredImage___childJavascriptFrontmatter___node___rdev = 'featuredImage___childJavascriptFrontmatter___node___rdev',
  featuredImage___childJavascriptFrontmatter___node___blksize = 'featuredImage___childJavascriptFrontmatter___node___blksize',
  featuredImage___childJavascriptFrontmatter___node___ino = 'featuredImage___childJavascriptFrontmatter___node___ino',
  featuredImage___childJavascriptFrontmatter___node___blocks = 'featuredImage___childJavascriptFrontmatter___node___blocks',
  featuredImage___childJavascriptFrontmatter___node___atimeMs = 'featuredImage___childJavascriptFrontmatter___node___atimeMs',
  featuredImage___childJavascriptFrontmatter___node___mtimeMs = 'featuredImage___childJavascriptFrontmatter___node___mtimeMs',
  featuredImage___childJavascriptFrontmatter___node___ctimeMs = 'featuredImage___childJavascriptFrontmatter___node___ctimeMs',
  featuredImage___childJavascriptFrontmatter___node___birthtimeMs = 'featuredImage___childJavascriptFrontmatter___node___birthtimeMs',
  featuredImage___childJavascriptFrontmatter___node___atime = 'featuredImage___childJavascriptFrontmatter___node___atime',
  featuredImage___childJavascriptFrontmatter___node___mtime = 'featuredImage___childJavascriptFrontmatter___node___mtime',
  featuredImage___childJavascriptFrontmatter___node___ctime = 'featuredImage___childJavascriptFrontmatter___node___ctime',
  featuredImage___childJavascriptFrontmatter___node___birthtime = 'featuredImage___childJavascriptFrontmatter___node___birthtime',
  featuredImage___childJavascriptFrontmatter___frontmatter___name = 'featuredImage___childJavascriptFrontmatter___frontmatter___name',
  featuredImage___childJavascriptFrontmatter___frontmatter___open = 'featuredImage___childJavascriptFrontmatter___frontmatter___open',
  featuredImage___childJavascriptFrontmatter___frontmatter___error = 'featuredImage___childJavascriptFrontmatter___frontmatter___error',
  featuredImage___childJavascriptFrontmatter___fileAbsolutePath = 'featuredImage___childJavascriptFrontmatter___fileAbsolutePath',
  slug = 'slug',
  date = 'date',
  tags = 'tags',
  keywords = 'keywords',
  excerpt = 'excerpt',
  body = 'body',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
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
  rawBody = 'rawBody',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___title = 'frontmatter___title',
  frontmatter___date = 'frontmatter___date',
  frontmatter___featuredImage___birthtime = 'frontmatter___featuredImage___birthtime',
  frontmatter___featuredImage___birthtimeMs = 'frontmatter___featuredImage___birthtimeMs',
  frontmatter___featuredImage___sourceInstanceName = 'frontmatter___featuredImage___sourceInstanceName',
  frontmatter___featuredImage___absolutePath = 'frontmatter___featuredImage___absolutePath',
  frontmatter___featuredImage___relativePath = 'frontmatter___featuredImage___relativePath',
  frontmatter___featuredImage___extension = 'frontmatter___featuredImage___extension',
  frontmatter___featuredImage___size = 'frontmatter___featuredImage___size',
  frontmatter___featuredImage___prettySize = 'frontmatter___featuredImage___prettySize',
  frontmatter___featuredImage___modifiedTime = 'frontmatter___featuredImage___modifiedTime',
  frontmatter___featuredImage___accessTime = 'frontmatter___featuredImage___accessTime',
  frontmatter___featuredImage___changeTime = 'frontmatter___featuredImage___changeTime',
  frontmatter___featuredImage___birthTime = 'frontmatter___featuredImage___birthTime',
  frontmatter___featuredImage___root = 'frontmatter___featuredImage___root',
  frontmatter___featuredImage___dir = 'frontmatter___featuredImage___dir',
  frontmatter___featuredImage___base = 'frontmatter___featuredImage___base',
  frontmatter___featuredImage___ext = 'frontmatter___featuredImage___ext',
  frontmatter___featuredImage___name = 'frontmatter___featuredImage___name',
  frontmatter___featuredImage___relativeDirectory = 'frontmatter___featuredImage___relativeDirectory',
  frontmatter___featuredImage___dev = 'frontmatter___featuredImage___dev',
  frontmatter___featuredImage___mode = 'frontmatter___featuredImage___mode',
  frontmatter___featuredImage___nlink = 'frontmatter___featuredImage___nlink',
  frontmatter___featuredImage___uid = 'frontmatter___featuredImage___uid',
  frontmatter___featuredImage___gid = 'frontmatter___featuredImage___gid',
  frontmatter___featuredImage___rdev = 'frontmatter___featuredImage___rdev',
  frontmatter___featuredImage___blksize = 'frontmatter___featuredImage___blksize',
  frontmatter___featuredImage___ino = 'frontmatter___featuredImage___ino',
  frontmatter___featuredImage___blocks = 'frontmatter___featuredImage___blocks',
  frontmatter___featuredImage___atimeMs = 'frontmatter___featuredImage___atimeMs',
  frontmatter___featuredImage___mtimeMs = 'frontmatter___featuredImage___mtimeMs',
  frontmatter___featuredImage___ctimeMs = 'frontmatter___featuredImage___ctimeMs',
  frontmatter___featuredImage___atime = 'frontmatter___featuredImage___atime',
  frontmatter___featuredImage___mtime = 'frontmatter___featuredImage___mtime',
  frontmatter___featuredImage___ctime = 'frontmatter___featuredImage___ctime',
  frontmatter___featuredImage___publicURL = 'frontmatter___featuredImage___publicURL',
  frontmatter___featuredImage___childImageSharp___id = 'frontmatter___featuredImage___childImageSharp___id',
  frontmatter___featuredImage___childImageSharp___children = 'frontmatter___featuredImage___childImageSharp___children',
  frontmatter___featuredImage___id = 'frontmatter___featuredImage___id',
  frontmatter___featuredImage___parent___id = 'frontmatter___featuredImage___parent___id',
  frontmatter___featuredImage___parent___children = 'frontmatter___featuredImage___parent___children',
  frontmatter___featuredImage___children = 'frontmatter___featuredImage___children',
  frontmatter___featuredImage___children___id = 'frontmatter___featuredImage___children___id',
  frontmatter___featuredImage___children___children = 'frontmatter___featuredImage___children___children',
  frontmatter___featuredImage___internal___content = 'frontmatter___featuredImage___internal___content',
  frontmatter___featuredImage___internal___contentDigest = 'frontmatter___featuredImage___internal___contentDigest',
  frontmatter___featuredImage___internal___description = 'frontmatter___featuredImage___internal___description',
  frontmatter___featuredImage___internal___fieldOwners = 'frontmatter___featuredImage___internal___fieldOwners',
  frontmatter___featuredImage___internal___ignoreType = 'frontmatter___featuredImage___internal___ignoreType',
  frontmatter___featuredImage___internal___mediaType = 'frontmatter___featuredImage___internal___mediaType',
  frontmatter___featuredImage___internal___owner = 'frontmatter___featuredImage___internal___owner',
  frontmatter___featuredImage___internal___type = 'frontmatter___featuredImage___internal___type',
  frontmatter___featuredImage___childMdx___rawBody = 'frontmatter___featuredImage___childMdx___rawBody',
  frontmatter___featuredImage___childMdx___fileAbsolutePath = 'frontmatter___featuredImage___childMdx___fileAbsolutePath',
  frontmatter___featuredImage___childMdx___body = 'frontmatter___featuredImage___childMdx___body',
  frontmatter___featuredImage___childMdx___excerpt = 'frontmatter___featuredImage___childMdx___excerpt',
  frontmatter___featuredImage___childMdx___headings = 'frontmatter___featuredImage___childMdx___headings',
  frontmatter___featuredImage___childMdx___html = 'frontmatter___featuredImage___childMdx___html',
  frontmatter___featuredImage___childMdx___mdxAST = 'frontmatter___featuredImage___childMdx___mdxAST',
  frontmatter___featuredImage___childMdx___tableOfContents = 'frontmatter___featuredImage___childMdx___tableOfContents',
  frontmatter___featuredImage___childMdx___timeToRead = 'frontmatter___featuredImage___childMdx___timeToRead',
  frontmatter___featuredImage___childMdx___id = 'frontmatter___featuredImage___childMdx___id',
  frontmatter___featuredImage___childMdx___children = 'frontmatter___featuredImage___childMdx___children',
  frontmatter___featuredImage___childJavascriptFrontmatter___id = 'frontmatter___featuredImage___childJavascriptFrontmatter___id',
  frontmatter___featuredImage___childJavascriptFrontmatter___children = 'frontmatter___featuredImage___childJavascriptFrontmatter___children',
  frontmatter___featuredImage___childJavascriptFrontmatter___fileAbsolutePath = 'frontmatter___featuredImage___childJavascriptFrontmatter___fileAbsolutePath',
  frontmatter___open = 'frontmatter___open',
  frontmatter___tags = 'frontmatter___tags',
  frontmatter___name = 'frontmatter___name',
  body = 'body',
  excerpt = 'excerpt',
  headings = 'headings',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  html = 'html',
  mdxAST = 'mdxAST',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childMdxBlogPost___id = 'childMdxBlogPost___id',
  childMdxBlogPost___title = 'childMdxBlogPost___title',
  childMdxBlogPost___featuredImage___birthtime = 'childMdxBlogPost___featuredImage___birthtime',
  childMdxBlogPost___featuredImage___birthtimeMs = 'childMdxBlogPost___featuredImage___birthtimeMs',
  childMdxBlogPost___featuredImage___sourceInstanceName = 'childMdxBlogPost___featuredImage___sourceInstanceName',
  childMdxBlogPost___featuredImage___absolutePath = 'childMdxBlogPost___featuredImage___absolutePath',
  childMdxBlogPost___featuredImage___relativePath = 'childMdxBlogPost___featuredImage___relativePath',
  childMdxBlogPost___featuredImage___extension = 'childMdxBlogPost___featuredImage___extension',
  childMdxBlogPost___featuredImage___size = 'childMdxBlogPost___featuredImage___size',
  childMdxBlogPost___featuredImage___prettySize = 'childMdxBlogPost___featuredImage___prettySize',
  childMdxBlogPost___featuredImage___modifiedTime = 'childMdxBlogPost___featuredImage___modifiedTime',
  childMdxBlogPost___featuredImage___accessTime = 'childMdxBlogPost___featuredImage___accessTime',
  childMdxBlogPost___featuredImage___changeTime = 'childMdxBlogPost___featuredImage___changeTime',
  childMdxBlogPost___featuredImage___birthTime = 'childMdxBlogPost___featuredImage___birthTime',
  childMdxBlogPost___featuredImage___root = 'childMdxBlogPost___featuredImage___root',
  childMdxBlogPost___featuredImage___dir = 'childMdxBlogPost___featuredImage___dir',
  childMdxBlogPost___featuredImage___base = 'childMdxBlogPost___featuredImage___base',
  childMdxBlogPost___featuredImage___ext = 'childMdxBlogPost___featuredImage___ext',
  childMdxBlogPost___featuredImage___name = 'childMdxBlogPost___featuredImage___name',
  childMdxBlogPost___featuredImage___relativeDirectory = 'childMdxBlogPost___featuredImage___relativeDirectory',
  childMdxBlogPost___featuredImage___dev = 'childMdxBlogPost___featuredImage___dev',
  childMdxBlogPost___featuredImage___mode = 'childMdxBlogPost___featuredImage___mode',
  childMdxBlogPost___featuredImage___nlink = 'childMdxBlogPost___featuredImage___nlink',
  childMdxBlogPost___featuredImage___uid = 'childMdxBlogPost___featuredImage___uid',
  childMdxBlogPost___featuredImage___gid = 'childMdxBlogPost___featuredImage___gid',
  childMdxBlogPost___featuredImage___rdev = 'childMdxBlogPost___featuredImage___rdev',
  childMdxBlogPost___featuredImage___blksize = 'childMdxBlogPost___featuredImage___blksize',
  childMdxBlogPost___featuredImage___ino = 'childMdxBlogPost___featuredImage___ino',
  childMdxBlogPost___featuredImage___blocks = 'childMdxBlogPost___featuredImage___blocks',
  childMdxBlogPost___featuredImage___atimeMs = 'childMdxBlogPost___featuredImage___atimeMs',
  childMdxBlogPost___featuredImage___mtimeMs = 'childMdxBlogPost___featuredImage___mtimeMs',
  childMdxBlogPost___featuredImage___ctimeMs = 'childMdxBlogPost___featuredImage___ctimeMs',
  childMdxBlogPost___featuredImage___atime = 'childMdxBlogPost___featuredImage___atime',
  childMdxBlogPost___featuredImage___mtime = 'childMdxBlogPost___featuredImage___mtime',
  childMdxBlogPost___featuredImage___ctime = 'childMdxBlogPost___featuredImage___ctime',
  childMdxBlogPost___featuredImage___publicURL = 'childMdxBlogPost___featuredImage___publicURL',
  childMdxBlogPost___featuredImage___childImageSharp___id = 'childMdxBlogPost___featuredImage___childImageSharp___id',
  childMdxBlogPost___featuredImage___childImageSharp___children = 'childMdxBlogPost___featuredImage___childImageSharp___children',
  childMdxBlogPost___featuredImage___id = 'childMdxBlogPost___featuredImage___id',
  childMdxBlogPost___featuredImage___parent___id = 'childMdxBlogPost___featuredImage___parent___id',
  childMdxBlogPost___featuredImage___parent___children = 'childMdxBlogPost___featuredImage___parent___children',
  childMdxBlogPost___featuredImage___children = 'childMdxBlogPost___featuredImage___children',
  childMdxBlogPost___featuredImage___children___id = 'childMdxBlogPost___featuredImage___children___id',
  childMdxBlogPost___featuredImage___children___children = 'childMdxBlogPost___featuredImage___children___children',
  childMdxBlogPost___featuredImage___internal___content = 'childMdxBlogPost___featuredImage___internal___content',
  childMdxBlogPost___featuredImage___internal___contentDigest = 'childMdxBlogPost___featuredImage___internal___contentDigest',
  childMdxBlogPost___featuredImage___internal___description = 'childMdxBlogPost___featuredImage___internal___description',
  childMdxBlogPost___featuredImage___internal___fieldOwners = 'childMdxBlogPost___featuredImage___internal___fieldOwners',
  childMdxBlogPost___featuredImage___internal___ignoreType = 'childMdxBlogPost___featuredImage___internal___ignoreType',
  childMdxBlogPost___featuredImage___internal___mediaType = 'childMdxBlogPost___featuredImage___internal___mediaType',
  childMdxBlogPost___featuredImage___internal___owner = 'childMdxBlogPost___featuredImage___internal___owner',
  childMdxBlogPost___featuredImage___internal___type = 'childMdxBlogPost___featuredImage___internal___type',
  childMdxBlogPost___featuredImage___childMdx___rawBody = 'childMdxBlogPost___featuredImage___childMdx___rawBody',
  childMdxBlogPost___featuredImage___childMdx___fileAbsolutePath = 'childMdxBlogPost___featuredImage___childMdx___fileAbsolutePath',
  childMdxBlogPost___featuredImage___childMdx___body = 'childMdxBlogPost___featuredImage___childMdx___body',
  childMdxBlogPost___featuredImage___childMdx___excerpt = 'childMdxBlogPost___featuredImage___childMdx___excerpt',
  childMdxBlogPost___featuredImage___childMdx___headings = 'childMdxBlogPost___featuredImage___childMdx___headings',
  childMdxBlogPost___featuredImage___childMdx___html = 'childMdxBlogPost___featuredImage___childMdx___html',
  childMdxBlogPost___featuredImage___childMdx___mdxAST = 'childMdxBlogPost___featuredImage___childMdx___mdxAST',
  childMdxBlogPost___featuredImage___childMdx___tableOfContents = 'childMdxBlogPost___featuredImage___childMdx___tableOfContents',
  childMdxBlogPost___featuredImage___childMdx___timeToRead = 'childMdxBlogPost___featuredImage___childMdx___timeToRead',
  childMdxBlogPost___featuredImage___childMdx___id = 'childMdxBlogPost___featuredImage___childMdx___id',
  childMdxBlogPost___featuredImage___childMdx___children = 'childMdxBlogPost___featuredImage___childMdx___children',
  childMdxBlogPost___featuredImage___childJavascriptFrontmatter___id = 'childMdxBlogPost___featuredImage___childJavascriptFrontmatter___id',
  childMdxBlogPost___featuredImage___childJavascriptFrontmatter___children = 'childMdxBlogPost___featuredImage___childJavascriptFrontmatter___children',
  childMdxBlogPost___featuredImage___childJavascriptFrontmatter___fileAbsolutePath = 'childMdxBlogPost___featuredImage___childJavascriptFrontmatter___fileAbsolutePath',
  childMdxBlogPost___slug = 'childMdxBlogPost___slug',
  childMdxBlogPost___date = 'childMdxBlogPost___date',
  childMdxBlogPost___tags = 'childMdxBlogPost___tags',
  childMdxBlogPost___keywords = 'childMdxBlogPost___keywords',
  childMdxBlogPost___excerpt = 'childMdxBlogPost___excerpt',
  childMdxBlogPost___body = 'childMdxBlogPost___body',
  childMdxBlogPost___parent___id = 'childMdxBlogPost___parent___id',
  childMdxBlogPost___parent___parent___id = 'childMdxBlogPost___parent___parent___id',
  childMdxBlogPost___parent___parent___children = 'childMdxBlogPost___parent___parent___children',
  childMdxBlogPost___parent___children = 'childMdxBlogPost___parent___children',
  childMdxBlogPost___parent___children___id = 'childMdxBlogPost___parent___children___id',
  childMdxBlogPost___parent___children___children = 'childMdxBlogPost___parent___children___children',
  childMdxBlogPost___parent___internal___content = 'childMdxBlogPost___parent___internal___content',
  childMdxBlogPost___parent___internal___contentDigest = 'childMdxBlogPost___parent___internal___contentDigest',
  childMdxBlogPost___parent___internal___description = 'childMdxBlogPost___parent___internal___description',
  childMdxBlogPost___parent___internal___fieldOwners = 'childMdxBlogPost___parent___internal___fieldOwners',
  childMdxBlogPost___parent___internal___ignoreType = 'childMdxBlogPost___parent___internal___ignoreType',
  childMdxBlogPost___parent___internal___mediaType = 'childMdxBlogPost___parent___internal___mediaType',
  childMdxBlogPost___parent___internal___owner = 'childMdxBlogPost___parent___internal___owner',
  childMdxBlogPost___parent___internal___type = 'childMdxBlogPost___parent___internal___type',
  childMdxBlogPost___children = 'childMdxBlogPost___children',
  childMdxBlogPost___children___id = 'childMdxBlogPost___children___id',
  childMdxBlogPost___children___parent___id = 'childMdxBlogPost___children___parent___id',
  childMdxBlogPost___children___parent___children = 'childMdxBlogPost___children___parent___children',
  childMdxBlogPost___children___children = 'childMdxBlogPost___children___children',
  childMdxBlogPost___children___children___id = 'childMdxBlogPost___children___children___id',
  childMdxBlogPost___children___children___children = 'childMdxBlogPost___children___children___children',
  childMdxBlogPost___children___internal___content = 'childMdxBlogPost___children___internal___content',
  childMdxBlogPost___children___internal___contentDigest = 'childMdxBlogPost___children___internal___contentDigest',
  childMdxBlogPost___children___internal___description = 'childMdxBlogPost___children___internal___description',
  childMdxBlogPost___children___internal___fieldOwners = 'childMdxBlogPost___children___internal___fieldOwners',
  childMdxBlogPost___children___internal___ignoreType = 'childMdxBlogPost___children___internal___ignoreType',
  childMdxBlogPost___children___internal___mediaType = 'childMdxBlogPost___children___internal___mediaType',
  childMdxBlogPost___children___internal___owner = 'childMdxBlogPost___children___internal___owner',
  childMdxBlogPost___children___internal___type = 'childMdxBlogPost___children___internal___type',
  childMdxBlogPost___internal___content = 'childMdxBlogPost___internal___content',
  childMdxBlogPost___internal___contentDigest = 'childMdxBlogPost___internal___contentDigest',
  childMdxBlogPost___internal___description = 'childMdxBlogPost___internal___description',
  childMdxBlogPost___internal___fieldOwners = 'childMdxBlogPost___internal___fieldOwners',
  childMdxBlogPost___internal___ignoreType = 'childMdxBlogPost___internal___ignoreType',
  childMdxBlogPost___internal___mediaType = 'childMdxBlogPost___internal___mediaType',
  childMdxBlogPost___internal___owner = 'childMdxBlogPost___internal___owner',
  childMdxBlogPost___internal___type = 'childMdxBlogPost___internal___type'
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
  featuredImage?: Maybe<File>,
  open?: Maybe<Scalars['Boolean']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  name?: Maybe<Scalars['String']>,
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
  featuredImage?: Maybe<FileFilterInput>,
  open?: Maybe<BooleanQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
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
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
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
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___author = 'siteMetadata___author',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___social = 'siteMetadata___social',
  siteMetadata___social___name = 'siteMetadata___social___name',
  siteMetadata___social___url = 'siteMetadata___social___url',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  buildTime = 'buildTime'
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
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  path = 'path',
  internalComponentName = 'internalComponentName',
  component = 'component',
  componentChunkName = 'componentChunkName',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___id = 'context___id',
  context___previousId = 'context___previousId',
  context___nextId = 'context___nextId',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___extensions = 'pluginCreator___pluginOptions___extensions',
  pluginCreator___pluginOptions___gatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  pluginCreator___pluginOptions___component = 'pluginCreator___pluginOptions___component',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
  pluginCreator___pluginOptions___disable = 'pluginCreator___pluginOptions___disable',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___author = 'pluginCreator___packageJson___author',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
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
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___extensions = 'pluginOptions___extensions',
  pluginOptions___gatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  pluginOptions___gatsbyRemarkPlugins___resolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  pluginOptions___gatsbyRemarkPlugins___options___maxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
  pluginOptions___gatsbyRemarkPlugins___options___pathPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___pathPrefix',
  pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle = 'pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle',
  pluginOptions___gatsbyRemarkPlugins___options___backgroundColor = 'pluginOptions___gatsbyRemarkPlugins___options___backgroundColor',
  pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal = 'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal',
  pluginOptions___gatsbyRemarkPlugins___options___showCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___showCaptions',
  pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions',
  pluginOptions___gatsbyRemarkPlugins___options___withWebp = 'pluginOptions___gatsbyRemarkPlugins___options___withWebp',
  pluginOptions___gatsbyRemarkPlugins___options___tracedSVG = 'pluginOptions___gatsbyRemarkPlugins___options___tracedSVG',
  pluginOptions___gatsbyRemarkPlugins___options___loading = 'pluginOptions___gatsbyRemarkPlugins___options___loading',
  pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha',
  pluginOptions___component = 'pluginOptions___component',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___disable = 'pluginOptions___disable',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
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
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>,
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>,
  component?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  disable?: Maybe<Scalars['Boolean']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  extensions?: Maybe<StringQueryOperatorInput>,
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>,
  component?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  disable?: Maybe<BooleanQueryOperatorInput>,
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

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  social?: Maybe<Array<Maybe<SiteSiteMetadataSocial>>>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
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
  ASC = 'ASC',
  DESC = 'DESC'
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
          & { fluid: Maybe<(
            { __typename?: 'ImageSharpFluid' }
            & Pick<ImageSharpFluid, 'presentationHeight'>
          )
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
