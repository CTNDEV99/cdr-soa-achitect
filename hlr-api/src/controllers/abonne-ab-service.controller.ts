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
  Abonne,
  AbService,
} from '../models';
import {AbonneRepository} from '../repositories';

export class AbonneAbServiceController {
  constructor(
    @repository(AbonneRepository) protected abonneRepository: AbonneRepository,
  ) { }

  @get('/abonnes/{id}/ab-services', {
    responses: {
      '200': {
        description: 'Array of Abonne has many AbService',
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
    return this.abonneRepository.abServices(id).find(filter);
  }

  @post('/abonnes/{id}/ab-services', {
    responses: {
      '200': {
        description: 'Abonne model instance',
        content: {'application/json': {schema: getModelSchemaRef(AbService)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Abonne.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AbService, {
            title: 'NewAbServiceInAbonne',
            exclude: ['id'],
            optional: ['abonneId']
          }),
        },
      },
    }) abService: Omit<AbService, 'id'>,
  ): Promise<AbService> {
    return this.abonneRepository.abServices(id).create(abService);
  }

  @patch('/abonnes/{id}/ab-services', {
    responses: {
      '200': {
        description: 'Abonne.AbService PATCH success count',
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
    return this.abonneRepository.abServices(id).patch(abService, where);
  }

  @del('/abonnes/{id}/ab-services', {
    responses: {
      '200': {
        description: 'Abonne.AbService DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(AbService)) where?: Where<AbService>,
  ): Promise<Count> {
    return this.abonneRepository.abServices(id).delete(where);
  }
}
