/*
 * @Author: chenh
 * @Date: 2018-12-26 14:11:32
 * @Last Modified by: chenh
 * @Last Modified time: 2018-12-28 09:34:59
 */
import React, {Component} from 'react'
// import storage from '../utils/storage'
class Dialog extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    let len = this.props.nums
    let newid = len > 0 ? len : 0
    let value = this.refs.myText.value
    if (value !== '') {
      let obj = {
        id: newid,
        name: value,
        status: 0
      }
      this.refs.myText.value = ''
      this.props.addNewTask(obj)
    }
  }
  render () {
    return (
      <div className='dialog'>
        <div>
          <h3>Task</h3>
          <input type='text' ref='myText' placeholder='你想做点什么' />
        </div>
        <div>
          <input type='button' value='Save Task' onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}
export default Dialog