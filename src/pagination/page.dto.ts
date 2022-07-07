import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { PageMetaDto } from './page-meta.dto';

/** It's a generic class that takes an array of data and a PageMetaDto object */
export class PageDto<T> {
  /** It's a decorator that is used to validate the data property of the class. */
  @IsArray()
  @ApiProperty({ isArray: true })
  readonly data: T[];

  /** It's a property of the class that is of type PageMetaDto. */
  @ApiProperty({ type: () => PageMetaDto })
  readonly meta: PageMetaDto;

  /**
   * The constructor function takes in two parameters, data and meta, and sets the data and meta
   * properties of the class to the values of the parameters.
   * @param {T[]} data - T[] - the data that is returned from the API
   * @param {PageMetaDto} meta - PageMetaDto
   */
  constructor(data: T[], meta: PageMetaDto) {
    this.data = data;
    this.meta = meta;
  }
}
