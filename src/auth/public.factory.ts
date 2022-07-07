import { SetMetadata } from '@nestjs/common';

/** Setting a metadata key on the decorated class or method */
export const IS_PUBLIC_KEY = 'isPublic';
/**
 * It sets a metadata key on the decorated class or method
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
