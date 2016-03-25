var _dec, _dec2, _class;

import { inject } from 'aurelia-dependency-injection';
import { customElement } from 'aurelia-templating';
import { Router } from 'aurelia-router';

export let Breadcrumbs = (_dec = inject(Router), _dec2 = customElement('breadcrumbs'), _dec(_class = _dec2(_class = class Breadcrumbs {
  constructor(router) {
    while (router.parent) {
      router = router.parent;
    }
    this.router = router;
  }

  navigate(navigationInstruction) {
    navigationInstruction.router.navigateToRoute(navigationInstruction.config.name, navigationInstruction.params);
  }
}) || _class) || _class);