import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {CdrDataSource} from '../datasources';
import {Service, ServiceRelations, AbService} from '../models';
import {AbServiceRepository} from './ab-service.repository';

export class ServiceRepository extends DefaultCrudRepository<
  Service,
  typeof Service.prototype.id,
  ServiceRelations
> {

  public readonly abServices: HasManyRepositoryFactory<AbService, typeof Service.prototype.id>;

  constructor(
    @inject('datasources.cdr') dataSource: CdrDataSource, @repository.getter('AbServiceRepository') protected abServiceRepositoryGetter: Getter<AbServiceRepository>,
  ) {
    super(Service, dataSource);
    this.abServices = this.createHasManyRepositoryFactoryFor('abServices', abServiceRepositoryGetter,);
    this.registerInclusionResolver('abServices', this.abServices.inclusionResolver);
  }
}
