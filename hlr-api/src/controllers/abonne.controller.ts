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
import {Abonne} from '../models';
import {AbonneRepository} from '../repositories';

export class AbonneController {
  constructor(
    @repository(AbonneRepository)
    public abonneRepository : AbonneRepository,
  ) {}

  @post('/abonnes')
  @response(200, {
    description: 'Abonne model instance',
    content: {'application/json': {schema: getModelSchemaRef(Abonne)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Abonne, {
            title: 'NewAbonne',
            exclude: ['id'],
          }),
        },
      },
    })
    abonne: Omit<Abonne, 'id'>,
  ): Promise<Abonne> {
    return this.abonneRepository.create(abonne);
  }

  @get('/abonnes/count')
  @response(200, {
    description: 'Abonne model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Abonne) where?: Where<Abonne>,
  ): Promise<Count> {
    return this.abonneRepository.count(where);
  }

  @get('/abonnes')
  @response(200, {
    description: 'Array of Abonne model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Abonne, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Abonne) filter?: Filter<Abonne>,
  ): Promise<Abonne[]> {
    return this.abonneRepository.find(filter);
  }

  @patch('/abonnes')
  @response(200, {
    description: 'Abonne PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Abonne, {partial: true}),
        },
      },
    })
    abonne: Abonne,
    @param.where(Abonne) where?: Where<Abonne>,
  ): Promise<Count> {
    return this.abonneRepository.updateAll(abonne, where);
  }

  @get('/abonnes/{id}')
  @response(200, {
    description: 'Abonne model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Abonne, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Abonne, {exclude: 'where'}) filter?: FilterExcludingWhere<Abonne>
  ): Promise<Abonne> {
    return this.abonneRepository.findById(id, filter);
  }

  @patch('/abonnes/{id}')
  @response(204, {
    description: 'Abonne PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Abonne, {partial: true}),
        },
      },
    })
    abonne: Abonne,
  ): Promise<void> {
    await this.abonneRepository.updateById(id, abonne);
  }

  @put('/abonnes/{id}')
  @response(204, {
    description: 'Abonne PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() abonne: Abonne,
  ): Promise<void> {
    await this.abonneRepository.replaceById(id, abonne);
  }

  @del('/abonnes/{id}')
  @response(204, {
    description: 'Abonne DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.abonneRepository.deleteById(id);
  }
}
