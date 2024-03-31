import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Abonne, Service} from '../models';
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

  public async activateSubscriber(newAbonne: Abonne, services: Service[]) {
    const ab = await this.abonneRepository.create(newAbonne);
    for (const service of services) {
      await this.abServiceRepository.create({
        abonneId: ab.id,
        serviceId: service.id,
      });
    }
  }
  public async deactivateSubscriber(abonneId: number) {
    return this.abonneRepository.deleteById(abonneId);
  }
  public async modifyServiceSubscriber(abserviceId: number) {
    const abService = await this.abServiceRepository.findById(abserviceId);
    return this.abServiceRepository.updateById(abService.id, {
      active: !abService.active,
    });
  }
  public async displaySubscriber(abonneId: number) {
    const filter = {
      include: [
        {
          relation: 'abServices',
          scope: {
            include: ['abonne'],
          },
        },
      ],
    };
    return this.abonneRepository.findById(abonneId, filter);
  }
}
