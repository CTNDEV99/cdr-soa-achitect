import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  AbService,
  Abonne,
} from '../models';
import {AbServiceRepository} from '../repositories';

export class AbServiceAbonneController {
  constructor(
    @repository(AbServiceRepository)
    public abServiceRepository: AbServiceRepository,
  ) { }

  @get('/ab-services/{id}/abonne', {
    responses: {
      '200': {
        description: 'Abonne belonging to AbService',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Abonne),
          },
        },
      },
    },
  })
  async getAbonne(
    @param.path.number('id') id: typeof AbService.prototype.id,
  ): Promise<Abonne> {
    return this.abServiceRepository.abonne(id);
  }
}
