import { LifeCycles, registerApplication, start } from 'single-spa'

const apps = [
  {
    name: '@shoppe/app-header',
    package: '@shoppe/app-header',
    activeWhen: (location: any) => !location.pathname.startsWith('/blank')
  },
  {
    name: '@shoppe/app-footer',
    package: '@shoppe/app-footer',
    activeWhen: ['/']
  }
]

apps.forEach((app) => {
  registerApplication({
    name: app.package,
    app: () => System.import<LifeCycles>(app.package),
    activeWhen: app.activeWhen
  })
})

start({
  urlRerouteOnly: true
})
