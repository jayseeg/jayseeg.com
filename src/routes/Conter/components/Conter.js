import React from 'react'

export const Conter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Conter: {props.conter}</h2>
    <button className='btn btn-default' onClick={props.reset}>
      Reset
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.exponentAsync}>
      Exponent (Async)
    </button>
  </div>
)

Conter.propTypes = {
  conter:        React.PropTypes.number.isRequired,
  exponentAsync: React.PropTypes.func.isRequired,
  doubleAsync:   React.PropTypes.func.isRequired,
  reset:         React.PropTypes.func.isRequired,
  increment:     React.PropTypes.func.isRequired,
}

export default Conter
