import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {CdrDataSource} from '../datasources';
import {Abonne, AbonneRelations, AbService} from '../models';
import {AbServiceRepository} from './ab-service.repository';

export class AbonneRepository extends DefaultCrudRepository<
  Abonne,
  typeof Abonne.prototype.id,
  AbonneRelations
> {

  public readonly abServices: HasManyRepositoryFactory<AbService, typeof Abonne.prototype.id>;

  constructor(
    @inject('datasources.cdr') dataSource: CdrDataSource, @repository.getter('AbServiceRepository') protected abServiceRepositoryGetter: Getter<AbServiceRepository>,
  ) {
    super(Abonne, dataSource);
    this.abServices = this.createHasManyRepositoryFactoryFor('abServices', abServiceRepositoryGetter,);
    this.registerInclusionResolver('abServices', this.abServices.inclusionResolver);
  }
}
