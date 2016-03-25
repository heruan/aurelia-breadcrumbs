import { Breadcrumbs } from './breadcrumbs';
import { InstructionFilterValueConverter } from './instruction-filter';

export function configure(frameworkConfiguration, config) {
  frameworkConfiguration.globalResources('./breadcrumbs');
}