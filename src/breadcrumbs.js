import {inject} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {Router} from 'aurelia-router';

@inject(Router)
@customElement('breadcrumbs')
export class Breadcrumbs {
  constructor(router) {
    while (router.parent) {
      router = router.parent;
    }
    this.router = router;
  }

  navigate(navigationInstruction) {
    navigationInstruction.navigationContext.router.navigateToRoute(navigationInstruction.config.name, navigationInstruction.params);
  }
}
