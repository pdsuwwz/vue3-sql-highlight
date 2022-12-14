import router from '@/router'
import useUserAccount from '@/modules/UserAccount/store'

import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'
import { systemTitle } from '@/locales/data'

import NProgress from 'nprogress'

NProgress.configure({
  showSpinner: false
})

router.beforeEach(async(to, from, next) => {
  const userAccountStore = useUserAccount()

  NProgress.start()

  document.title = `${ to.meta.title || to.name } - ${ systemTitle }`

  console.log('πππ ', to)

  const currentRouteLocale = to.params.locale

  if (
    allowlist.find(
      name => to.name === name
    )
  ) {
    next()
    return
  }

  // ε¦ζδΈε­ε¨ token εη΄ζ₯θΏεη»ε½ι‘΅
  if (!Cookie.get('token')) {
    userAccountStore.setLanguage({
      locale: currentRouteLocale || userAccountStore.locale
    })
    next(`/${ currentRouteLocale || userAccountStore.locale }/user/login`)
    return
  }

  // ε¦ζε­ε¨ token ειθΏθ·εη¨ζ·δΏ‘ζ―ζ₯ζ ‘ιͺ token ηζζζ§
  const { data, error } = await userAccountStore.getUserInfo()

  if (error) {
    userAccountStore.setLanguage({
      locale: currentRouteLocale || data.language
    })
    Cookie.remove('token')
    next(`/${ currentRouteLocale || data.language }/user/login`)
    return
  }

  next()
})

router.afterEach((to) => {
  NProgress.done()
})
