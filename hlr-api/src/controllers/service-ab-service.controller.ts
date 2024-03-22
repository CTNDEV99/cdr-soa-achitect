import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Service,
  AbService,
} from '../models';
import {ServiceRepository} from '../repositories';

export class ServiceAbServiceController {
  constructor(
    @repository(ServiceRepository) protected serviceRepository: ServiceRepository,
  ) { }

  @get('/services/{id}/ab-services', {
    responses: {
      '200': {
        description: 'Array of Service has many AbService',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(AbService)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<AbService>,
  ): Promise<AbService[]> {
    return this.serviceRepository.abServices(id).find(filter);
  }

  @post('/services/{id}/ab-services', {
    responses: {
      '200': {
        description: 'Service model instance',
        content: {'application/json': {schema: getModelSchemaRef(AbService)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Service.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AbService, {
            title: 'NewAbServiceInService',
            exclude: ['id'],
            optional: ['serviceId']
          }),
        },
      },
    }) abService: Omit<AbService, 'id'>,
  ): Promise<AbService> {
    return this.serviceRepository.abServices(id).create(abService);
  }

  @patch('/services/{id}/ab-services', {
    responses: {
      '200': {
        description: 'Service.AbService PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AbService, {partial: true}),
        },
      },
    })
    abService: Partial<AbService>,
    @param.query.object('where', getWhereSchemaFor(AbService)) where?: Where<AbService>,
  ): Promise<Count> {
    return this.serviceRepository.abServices(id).patch(abService, where);
  }

  @del('/services/{id}/ab-services', {
    responses: {
      '200': {
        description: 'Service.AbService DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(AbService)) where?: Where<AbService>,
  ): Promise<Count> {
    return this.serviceRepository.abServices(id).delete(where);
  }
}
