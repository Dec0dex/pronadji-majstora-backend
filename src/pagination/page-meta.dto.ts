import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDtoParameters } from './page-meta-dto-parameters.interface';

/** It takes a pageOptionsDto and an itemCount and returns a pageMetaDto */
export class PageMetaDto {
  /** A property of the class that represents page number. */
  @ApiProperty()
  readonly page: number;

  /** A property of the class that represents how many items per page you want to take. */
  @ApiProperty()
  readonly take: number;

  /** A property of the class that tells us the item count of all items existing in database. */
  @ApiProperty()
  readonly itemCount: number;

  /** A property of the class that tells us the total number of pages there is. */
  @ApiProperty()
  readonly pageCount: number;

  /** A property of the class that tells us whether there is previous page or not. */
  @ApiProperty()
  readonly hasPreviousPage: boolean;

  /** A property of the class that tells us whether there is next page or not. */
  @ApiProperty()
  readonly hasNextPage: boolean;

  /**
   * It takes in a pageOptionsDto and an itemCount, and then it sets the page, take, itemCount,
   * pageCount, hasPreviousPage, and hasNextPage properties of the PageMetaDto object
   * @param {PageMetaDtoParameters}  - pageOptionsDto - the pageOptionsDto object that was passed in from
   * the controller
   */
  constructor({ pageOptionsDto, itemCount }: PageMetaDtoParameters) {
    this.page = pageOptionsDto.page;
    this.take = pageOptionsDto.take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
