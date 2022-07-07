import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { Order } from './page-order.model';

/** It's a class that defines the shape of the query parameters that will be used to paginate a list of
items */
export class PageOptionsDto {
  /** Defining the shape of the query parameters that will be used to paginate a list of items. */
  @ApiPropertyOptional({ enum: Order, default: Order.ASC })
  @IsEnum(Order)
  @IsOptional()
  readonly order?: Order = Order.ASC;

  /** Defining the shape of the query parameters that will be used to paginate a list of items. */
  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page?: number = 1;

  /** Defining the shape of the query parameters that will be used to paginate a list of items. */
  @ApiPropertyOptional({
    minimum: 1,
    maximum: 100,
    default: 10,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  readonly take?: number = 10;

  /**
   * The skip function returns the number of records to skip when retrieving data from the database
   * @returns The number of items to skip.
   */
  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
