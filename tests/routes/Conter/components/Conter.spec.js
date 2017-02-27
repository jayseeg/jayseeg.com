import React from 'react'
import { bindActionCreators } from 'redux'
import { Conter } from 'routes/Conter/components/Conter'
import { shallow } from 'enzyme'

describe('(Component) Conter', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      conter : 5,
      ...bindActionCreators({
        exponentAsync: (_spies.exponentAsync = sinon.spy()),
        doubleAsync:   (_spies.doubleAsync = sinon.spy()),
        reset:         (_spies.reset = sinon.spy()),
        increment:     (_spies.increment = sinon.spy()),
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Conter {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  it('Should render with an <h2> that includes Sample Conter text.', () => {
    expect(_wrapper.find('h2').text()).to.match(/Conter:/)
  })

  it('Should render props.conter at the end of the sample conter <h2>.', () => {
    expect(_wrapper.find('h2').text()).to.match(/5$/)
    _wrapper.setProps({ conter: 8 })
    expect(_wrapper.find('h2').text()).to.match(/8$/)
  })

  it('Should render exactly 4 buttons.', () => {
    expect(_wrapper.find('button')).to.have.length(4)
  })

  describe('An increment button...', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Increment')
    })

    it('has bootstrap classes', () => {
      expect(_button.hasClass('btn btn-default')).to.be.true
    })

    it('Should dispatch a `increment` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      _button.simulate('click')

      _spies.dispatch.should.have.been.called
      _spies.increment.should.have.been.called
    })
  })

  describe('A reset button...', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Reset')
    })

    it('has bootstrap classes', () => {
      expect(_button.hasClass('btn btn-default')).to.be.true
    })

    it('Should dispatch a `reset` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      _button.simulate('click')

      _spies.dispatch.should.have.been.called
      _spies.reset.should.have.been.called
    })
  })

  describe('A Double (Async) button...', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Double (Async)')
    })

    it('has bootstrap classes', () => {
      expect(_button.hasClass('btn btn-default')).to.be.true
    })

    it('Should dispatch a `doubleAsync` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      _button.simulate('click')

      _spies.dispatch.should.have.been.called
      _spies.doubleAsync.should.have.been.called
    })
  })

  describe('An Exponent (Async) button...', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Exponent (Async)')
    })

    it('has bootstrap classes', () => {
      expect(_button.hasClass('btn btn-default')).to.be.true
    })

    it('Should dispatch a `exponentAsync` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      _button.simulate('click')

      _spies.dispatch.should.have.been.called
      _spies.exponentAsync.should.have.been.called
    })
  })
})
