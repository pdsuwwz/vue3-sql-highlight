import { capitalize } from '@/utils/camelCase'
import { ComponentPublicInstance } from 'vue'

console.log('window.全局变量', window.全局变量)

/**
 * @description 动态获取模块内的 pages 文件并将其封装为子路由
 * @link https://juejin.cn/post/6951557699079569422
 */
export const getTargetModuleRoutes = () => {

  const letterToLowerCase = (name: string) => `${ name[0].toLowerCase() }${ name.slice(1) }`
  const letterToUpperCase = (name: string) => `${ name[0].toUpperCase() }${ name.slice(1) }`

  const modules = import.meta.glob<ComponentPublicInstance>('../pages/*.vue')
  const getComponent = (fileName) => {
    return modules[`../pages/${ fileName }.vue`]
  }

  const routerList = Object.keys(modules).map(key => {
    const nameMatch = key.match(/^\.\.\/pages\/(.+)\.vue/)
    const originName = nameMatch![1]

    let routeName = ''
    // 若包含中文，则使用原始文件名称，否则驼峰处理
    if (/[\u4E00-\u9FA5]+/g.test(originName)) {
      routeName = originName
    } else {
      routeName = capitalize(originName)
    }

    return {
      path: encodeURIComponent(originName),
      name: 'TargetModule-' + routeName,
      meta: {
        name: routeName
      },
      component: getComponent(originName)
    }
  })
  return routerList
}
