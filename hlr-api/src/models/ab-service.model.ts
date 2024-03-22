import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Service} from './service.model';
import {Abonne} from './abonne.model';

@model()
export class AbService extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'boolean',
    required: true,
  })
  active: boolean;

  @belongsTo(() => Service)
  serviceId: number;

  @belongsTo(() => Abonne)
  abonneId: number;

  constructor(data?: Partial<AbService>) {
    super(data);
  }
}

export interface AbServiceRelations {
  // describe navigational properties here
}

export type AbServiceWithRelations = AbService & AbServiceRelations;
