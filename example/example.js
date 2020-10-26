import React from 'react'
import ReactDOM from 'react-dom'
import useMidEnd from '../src/index'

const Root = () => {
  const [name, setName] = useMidEnd('name', 'Jien', 'person', 'db')
  return (
    <div>
      <h2>hello {name}</h2>
      <input type="text" placeholder="Enter your name here" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'));
