import * as components from '../options'

export default {
  install(app) {
    Object.entries(components).forEach(([, component]) =>
      app.component(component.name, component),
    )
  },
}
