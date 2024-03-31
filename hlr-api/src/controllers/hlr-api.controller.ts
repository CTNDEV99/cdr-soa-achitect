// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, param, post, requestBody} from '@loopback/rest';
import {Abonne, Service} from '../models';
import {HlrService} from '../services';

// import {inject} from '@loopback/core';
export class SubscriberActivationRequest {
  newAbonne: Abonne;
  services: Service[];
}

export class HlrApiController {
  constructor(
    @inject('services.HlrService')
    protected hlrService: HlrService,
  ) {}

  @get('api/display-subscriber/{abonneId}')
  async displaySubscriber(
    @param.path.number('abonneId') abonneId: number,
  ): Promise<Abonne> {
    return this.hlrService.displaySubscriber(abonneId);
  }

  @post('api/activate-subscriber')
  async activateSubscriber(
    @requestBody() request: SubscriberActivationRequest,
  ): Promise<void> {
    return this.hlrService.activateSubscriber(
      request.newAbonne,
      request.services,
    );
  }
  @post('api/deactivate-subscriber/{abonneId}')
  async deactivateSubscriber(
    @param.path.number('abonneId') abonneId: number,
  ): Promise<void> {
    await this.hlrService.deactivateSubscriber(abonneId);
  }
  @post('api/modify-service-subscriber/{abserviceId}')
  async modifyServiceSubscriber(
    @param.path.number('abserviceId') abserviceId: number,
  ): Promise<void> {
    await this.hlrService.modifyServiceSubscriber(abserviceId);
  }
}
