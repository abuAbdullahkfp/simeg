import {Router} from 'express'

 const BaseRouter = () => {
  const logRegisteredRoutes = (controllerName: string, router: Router): void => {
    console.log(controllerName)
    router.stack.forEach((r: any) => {
      if (r.route && r.route.path) {
        console.log('\t' + r.route.stack[0].method.toUpperCase() + '\t' + r.route.path)
      }
    })
  }
  return {
    logRegisteredRoutes
  }
}

export const baseRouter = BaseRouter()