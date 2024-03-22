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
  Service,
} from '../models';
import {AbServiceRepository} from '../repositories';

export class AbServiceServiceController {
  constructor(
    @repository(AbServiceRepository)
    public abServiceRepository: AbServiceRepository,
  ) { }

  @get('/ab-services/{id}/service', {
    responses: {
      '200': {
        description: 'Service belonging to AbService',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Service),
          },
        },
      },
    },
  })
  async getService(
    @param.path.number('id') id: typeof AbService.prototype.id,
  ): Promise<Service> {
    return this.abServiceRepository.service(id);
  }
}
