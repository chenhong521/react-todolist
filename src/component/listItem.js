/*
 * @Author: chenh
 * @Date: 2018-12-26 14:11:27
 * @Last Modified by: chenh
 * @Last Modified time: 2018-12-28 10:16:53
 */
import React, {Component} from 'react'
import storage from '../utils/storage'
class ListItem extends Component {
  constructor (props) {
    super (props)
    this.handleFinished = this.handleFinished.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleFinished () {
    let status = this.props.item.status
    status = (status === 0 ? 1 : 0)
    let obj = {
      id: this.props.item.id,
      name: this.props.item.name,
      status: status
    }
    this.props.finishedChange(obj)
  }
  handleDelete () {
    // debugger
    this.props.totalChange(this.props.item)
    let todolist = storage.get('todolist')
    // 删除本地todolist中的该事项
    todolist.splice(this.props.item.id, 1)
    // 再把新TODOlist存储到本地
    storage.set('todolist', todolist)
  }
  render () {
    const item = this.props.item
    const unfinish = {
      backgroundColor: '#DFFCB5',
      color: '#2EB872'
    }
    const finish = {
      backgroundColor: '#FFA9D',
      color: '#FF9A3C',
      textDecoration: 'line-through'
    }
    let itemStyle = item.status === 0 ? unfinish : finish

    return (
      <li key={item.id} style={itemStyle}>
        <span onClick={this.handleFinished} id={item.id} className='check-btn' style={{backgroundColor: item.status === 0 ? '#fff' : '#A1EAFB'}}></span>
        <span>{item.name}</span>
        <span onClick={this.handleDelete} className='delete-btn'>删除</span>
      </li>
    )
  }
}

export default ListItem