import slug from 'slug';

export const slugify = (str: string): string => slug(str, {lower: true, replacement: '-', trim: true});