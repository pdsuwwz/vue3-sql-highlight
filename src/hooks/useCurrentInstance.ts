import { getCurrentInstance } from 'vue'
export default function useCurrentInstance() {
  const instance = getCurrentInstance()

  return {
    proxy: instance!.proxy!
  }
}
