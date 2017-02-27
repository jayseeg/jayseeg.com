import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'conter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Conter = require('./containers/ConterContainer').default
      const reducer = require('./modules/conter').default

      /*  Add the reducer to the store on key 'conter'  */
      injectReducer(store, { key: 'conter', reducer })

      /*  Return getComponent   */
      cb(null, Conter)

    /* Webpack named bundle   */
    }, 'conter')
  }
})
