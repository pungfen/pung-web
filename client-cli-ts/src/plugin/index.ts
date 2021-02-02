import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import * as components from '../options'

export default {
  install(app: ReturnType<typeof createApp>) {
    Object.entries(components).forEach(([, component]) =>
      app.component(component.name, component),
    )
    app.use(ElementPlus, { size: 'mini' })
  },
}
