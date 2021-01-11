
export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = localStorage.getItem('__user__token__')

    if (!loggedIn && to.path !== '/auth') {
      next('/auth')
    } else {
      next()
    }
  })
}
