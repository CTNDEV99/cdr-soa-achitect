import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {
  AbServiceRepository,
  AbonneRepository,
  ServiceRepository,
} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class HlrService {
  constructor(
    @repository(AbonneRepository)
    public abonneRepository: AbonneRepository,
    @repository(ServiceRepository)
    public serviceRepository: ServiceRepository,
    @repository(AbServiceRepository)
    public abServiceRepository: AbServiceRepository,
  ) {}

  public async activateSubscriber() {}
  public async deactivateSubscriber() {}
  public async modifyServiceSubscriber() {}
  public async displaySubscriber() {}
}
