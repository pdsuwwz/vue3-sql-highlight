import ModalDialog from '@/widgets/ModalDialog'
import LocaleInject from '@/widgets/LocaleInject'

declare module 'vue' {
  // 自定义全局变量，模板中和 proxy 中的
  export interface ComponentCustomProperties {
    _t: (...args: any[]) => any
    $ModalDialog: typeof ModalDialog
  }

  export interface VNode {
    destroy?: any
  }
}

export default {
  install(app: import('vue').App<any>) {
    app.use(ModalDialog)
    app.use(LocaleInject)
  }
}
