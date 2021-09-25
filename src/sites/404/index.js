import {MdError} from 'react-icons/md'
import './index.css'

function TakeBack(){
  window.location="/"
}

function NotFound() {
  document.title = "404 - M2rsho.cf"
  return (
    <div className="App">
        <MdError size={64} className="error-icon"/>
        <pre>Error 404<br/>This Page Doesn't Exist</pre>
        <div onClick={TakeBack} className="button">
          Take Me Back
        </div>
    </div>
  );
}

export default NotFound;
