import { PageOptionsDto } from './page-options.dto';

/** Defining the interface for the parameters that will be passed into the PageMetaDto class. */
export interface PageMetaDtoParameters {
  /** Defining the type of the `pageOptionsDto` parameter. */
  pageOptionsDto: PageOptionsDto;
  /** The total number of items in the database. */
  itemCount: number;
}
