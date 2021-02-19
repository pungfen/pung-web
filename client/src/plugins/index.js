import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import ResizeObserver from 'resize-observer-polyfill'

import router from '@/router'

import * as components from '@/options/components'

export default {
  install(app) {
    Object.entries(components).forEach(([name, component]) => app.component(name, component))

    app.use(router)

    app.use(ElementPlus, { size: 'small' })

    app.mixin({
      data() {
        const ro = new ResizeObserver((entries) => {
          const view = entries[0]
          const { height } = view.contentRect
          height && (this.flexBox.height = height < 250 ? 250 : height)
        })

        setTimeout(() => {
          const flexBox = document.querySelector('.flex-box')
          if (flexBox) ro.observe(flexBox)
        })
        return {
          flexBox: {
            height: 10
          }
        }
      }
    })
  }
}
