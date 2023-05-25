import { Component } from 'react'

class Header extends Component {
  render() {
    const { title } = this.props;
    const { linkName } = this.props
    
    
    return (
        <header>
            <div className='container flexbox'>
                <h1>{title}</h1>
                <div className='inline'>
                  <button>{linkName}</button>
                </div>
            </div>
        </header>
    )
  }
}

export default Header;