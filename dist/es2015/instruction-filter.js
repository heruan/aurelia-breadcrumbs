export let InstructionFilterValueConverter = class InstructionFilterValueConverter {
  toView(navigationInstructions) {
    return navigationInstructions ? navigationInstructions.filter(i => {
      if (i.config.title) {
        return true;
      } else {
        return false;
      }
    }) : [];
  }
};