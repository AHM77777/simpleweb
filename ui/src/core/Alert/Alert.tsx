import { FC, useContext, useEffect, useState } from 'react';
import AlertContext from '../../context/AlertContext/AlertContext';

const Alert: FC = () => {
  const alert: any = useContext(AlertContext);

  const [msg, setMsg]: [any, any] = useState(null);

  useEffect(() => {
    if (alert !== null) setMsg(alert.alert);
  }, [alert]);

  return (msg != null && (
    <div className={`alert alert-${msg.type}`}>
      <i className='fas fa-info-circle' /> {msg.msg}
    </div>
  ));
};

export default Alert;
