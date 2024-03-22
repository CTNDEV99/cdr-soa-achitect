import {Entity, model, property, hasMany} from '@loopback/repository';
import {AbService} from './ab-service.model';

@model()
export class Service extends Entity {
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
  service: string;

  @hasMany(() => AbService)
  abServices: AbService[];

  constructor(data?: Partial<Service>) {
    super(data);
  }
}

export interface ServiceRelations {
  // describe navigational properties here
}

export type ServiceWithRelations = Service & ServiceRelations;
