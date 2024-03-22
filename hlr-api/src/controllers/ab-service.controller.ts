import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {AbService} from '../models';
import {AbServiceRepository} from '../repositories';

export class AbServiceController {
  constructor(
    @repository(AbServiceRepository)
    public abServiceRepository : AbServiceRepository,
  ) {}

  @post('/ab-services')
  @response(200, {
    description: 'AbService model instance',
    content: {'application/json': {schema: getModelSchemaRef(AbService)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AbService, {
            title: 'NewAbService',
            exclude: ['id'],
          }),
        },
      },
    })
    abService: Omit<AbService, 'id'>,
  ): Promise<AbService> {
    return this.abServiceRepository.create(abService);
  }

  @get('/ab-services/count')
  @response(200, {
    description: 'AbService model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AbService) where?: Where<AbService>,
  ): Promise<Count> {
    return this.abServiceRepository.count(where);
  }

  @get('/ab-services')
  @response(200, {
    description: 'Array of AbService model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AbService, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AbService) filter?: Filter<AbService>,
  ): Promise<AbService[]> {
    return this.abServiceRepository.find(filter);
  }

  @patch('/ab-services')
  @response(200, {
    description: 'AbService PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AbService, {partial: true}),
        },
      },
    })
    abService: AbService,
    @param.where(AbService) where?: Where<AbService>,
  ): Promise<Count> {
    return this.abServiceRepository.updateAll(abService, where);
  }

  @get('/ab-services/{id}')
  @response(200, {
    description: 'AbService model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AbService, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AbService, {exclude: 'where'}) filter?: FilterExcludingWhere<AbService>
  ): Promise<AbService> {
    return this.abServiceRepository.findById(id, filter);
  }

  @patch('/ab-services/{id}')
  @response(204, {
    description: 'AbService PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AbService, {partial: true}),
        },
      },
    })
    abService: AbService,
  ): Promise<void> {
    await this.abServiceRepository.updateById(id, abService);
  }

  @put('/ab-services/{id}')
  @response(204, {
    description: 'AbService PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() abService: AbService,
  ): Promise<void> {
    await this.abServiceRepository.replaceById(id, abService);
  }

  @del('/ab-services/{id}')
  @response(204, {
    description: 'AbService DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.abServiceRepository.deleteById(id);
  }
}
