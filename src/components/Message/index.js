// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props
  const messageEl = isLogin ? 'Welcome User' : 'Please Login'
  return <h1 className="heading">{messageEl}</h1>
}

export default Message
