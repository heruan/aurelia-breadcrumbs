export class NavigationContextValueConverter {
  toView(navigationContext) {
    let routes = [];
    while (navigationContext) {
      let navigationInstruction = navigationContext.nextInstruction;
      if (navigationInstruction.config.title) {
        routes.push(navigationInstruction);
      }
      navigationContext = navigationInstruction.navigationContext.plan.default.childNavigationContext;
    }
    return routes;
  }
}
