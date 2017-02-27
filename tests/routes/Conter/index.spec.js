import ConterRoute from 'routes/Conter'

describe('(Route) Conter', () => {
  let _route

  beforeEach(() => {
    _route = ConterRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `conter`', () => {
    expect(_route.path).to.equal('conter')
  })
})
