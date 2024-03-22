import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {CdrDataSource} from '../datasources';
import {AbService, AbServiceRelations, Service, Abonne} from '../models';
import {ServiceRepository} from './service.repository';
import {AbonneRepository} from './abonne.repository';

export class AbServiceRepository extends DefaultCrudRepository<
  AbService,
  typeof AbService.prototype.id,
  AbServiceRelations
> {

  public readonly service: BelongsToAccessor<Service, typeof AbService.prototype.id>;

  public readonly abonne: BelongsToAccessor<Abonne, typeof AbService.prototype.id>;

  constructor(
    @inject('datasources.cdr') dataSource: CdrDataSource, @repository.getter('ServiceRepository') protected serviceRepositoryGetter: Getter<ServiceRepository>, @repository.getter('AbonneRepository') protected abonneRepositoryGetter: Getter<AbonneRepository>,
  ) {
    super(AbService, dataSource);
    this.abonne = this.createBelongsToAccessorFor('abonne', abonneRepositoryGetter,);
    this.registerInclusionResolver('abonne', this.abonne.inclusionResolver);
    this.service = this.createBelongsToAccessorFor('service', serviceRepositoryGetter,);
    this.registerInclusionResolver('service', this.service.inclusionResolver);
  }
}
