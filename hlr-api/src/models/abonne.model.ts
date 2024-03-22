import {Entity, model, property, hasMany} from '@loopback/repository';
import {AbService} from './ab-service.model';

@model({settings: {strict: false}})
export class Abonne extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  numero: number;

  @property({
    type: 'string',
    required: true,
  })
  imsi: string;

  @property({
    type: 'boolean',
    required: true,
  })
  active: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  postpaid: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  prepaid: boolean;

  @hasMany(() => AbService)
  abServices: AbService[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Abonne>) {
    super(data);
  }
}

export interface AbonneRelations {
  // describe navigational properties here
}

export type AbonneWithRelations = Abonne & AbonneRelations;
