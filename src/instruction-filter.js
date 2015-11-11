export class InstructionFilterValueConverter {
  toView(navigationInstructions) {
    return navigationInstructions.filter(i => {
      if (i.config.title) {
        return true;
      } else {
        return false;
      }
    });
  }
}
