import { Link } from 'react-router-dom';

export default function HomePage(){
  return(
  <>
    <div className="container">
      <h1>這是首頁</h1>
      <Link to="/login">登入頁面</Link>
    </div>
  </>
  ) 
}
