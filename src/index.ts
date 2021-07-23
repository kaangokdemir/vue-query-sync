import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'

const vueQuerySyncs = Vue.directive('query', {
  bind: function(el, binding, vnode) {
    const { context } = vnode
    if (!context || !context.$router) return

    const routeKeys = Object.keys(context.$route.query)

    const isRouteHasQueryEqualsToBindingValue = routeKeys.includes(
      binding.value
    )

    const isSync = binding.arg === 'sync'

    if (isSync && isRouteHasQueryEqualsToBindingValue) {
      const vmodelDirective = vnode.data?.directives?.find(
        (directive) => directive.name === 'model'
      )

      if ((el as HTMLInputElement).type === 'checkbox') {
        const isChecked = context.$route.query[binding.value] === 'true'
        ;(el as HTMLInputElement).checked = isChecked

        // Updates v-model bind data
        if (vmodelDirective) {
          ;(vnode.context as any)[vmodelDirective.expression] =
            context.$route.query[binding.value] === 'true'
        }
      } else {
        ;(el as HTMLInputElement).value = context.$route.query[
          binding.value
        ] as string

        // Updates v-model bind data
        if (vmodelDirective) {
          ;(vnode.context as any)[vmodelDirective.expression] =
            context.$route.query[binding.value]
        }
      }
    }

    el.addEventListener('input', () => {
      let { value, checked, type } = el as HTMLInputElement
      if (value === null) return

      const { context } = vnode

      if (!context || !context.$router) return
      if (vnode.elm === undefined) return

      if (type === 'checkbox') {
        value = checked.toString()
      }

      const query: { [key: string]: string } = {
        ...context.$route.query,
        [binding.value]: value,
      }

      if (value === '') {
        delete query[binding.value]
      }
      context.$router.push({
        query,
      })
    })
  },
  unbind(el, binding) {
    try {
      el.removeEventListener('input', binding?.value || {})
    } catch (error) {}
  },
})

export default vueQuerySyncs
