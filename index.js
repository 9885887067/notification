const Notification = props => {
  const {className, NotificationText, ImageLink} = props
  return <p src={ImageLink} className={className}>{NotificationText}</p>
}

const element = (
  <div className='notifications-container'>
    <h1 className='heading'>Notifications</h1>
    <div className='notification-container'>
      <Notification
        className='message-1'
        NotificationText='Information Message'
        ImageLink='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      ></Notification>
      <Notification
        className='message-2'
        NotificationText='Success Message'
        ImageLink='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      ></Notification>
      <Notification
        className='message-3'
        NotificationText='Warning Message'
        ImageLink='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      ></Notification>
      <Notification
        className='message-4'
        NotificationText='Error Message'
        ImageLink='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      ></Notification>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
