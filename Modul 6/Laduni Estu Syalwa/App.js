import React from 'react';
import './App.css';
import Logo from './duni.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams
} from "react-router-dom";



export default function Navbar() {
  return (
    <Router>
        <div class="topnav">
          
            
            <Link to="/Home" class="active">Home</Link>
            <Link to="/rumahtangga">Kategori Rumah Tangga</Link>
            <Link to="/mobil">Kategori Mobil</Link>
            <Link to="/motor">Kategori Motor</Link>
            <AuthButton /> 
            
            
          </div>
          <div>
          <hr />
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/rumahtangga">
            <RumahTangga />
          </PrivateRoute>
          <PrivateRoute path="/mobil">
            <Mobil />
          </PrivateRoute>
          <PrivateRoute path="/motor">
            <Motor />
          </PrivateRoute>
        </Switch>
        <Footer />
        </div>
    </Router>
    
    
  );
}

const fakeAuth = {
  isAuthenticated:false,
  authenticate(cb){
    fakeAuth.isAuthenticated =true; //fake async
    setTimeout(cb, 100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      <button onClick={() =>{
        fakeAuth.signout(() => history.push("/Home"));
      }}>
        Sign Out
      </button>
    </p>
  ) : (
    <p></p>
  )
}

//Pembungkus untuk <Route> yang mengarahkan ke login
//tampilan jika anda belum terkonfirmasi

function PrivateRoute({ children, ...rest}) {
  return(
    <Route {...rest} render={({location}) => fakeAuth.isAuthenticated ? (
      children
      ) : (
      <Redirect to ={{pathname: "/login", state: { from: location}}} />
      ) 
      }  
    />
  );
}

function Home() {
  return (
    <div>
       <table class="table-noborder">
      <tr>  
        <td rowSpan="10"><img src={Logo} alt="" width="350px" height="550px"></img></td>
        <td>Nama</td>
        <td>:</td>
        <td>Laduni Estu Syalwa</td>
      </tr>
      <tr>
        <td>TTL</td>
        <td>:</td>
        <td>Tulungagung, 9 Februari 1999</td>
      </tr>
      <tr>
        <td>Jenis Kelamin</td>
        <td>:</td>
        <td>Laki - laki</td>
      </tr>
      <tr>
        <td>Alamat</td>
        <td>:</td>
        <td>Jl. Pisang Kipas No.9 Malang</td>
      </tr>
      <tr>
        <td>No. HP</td>
        <td>:</td>
        <td>082140453418</td>
      </tr>
      <tr>
        <td>Status</td>
        <td>:</td>
        <td>Mahasiswa</td>
      </tr>
      <tr>
        <td>Hobi</td>
        <td>:</td>
        <td>Musik</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>:</td>
        <td>duniedun@gmail.com</td>
      </tr>
      <tr>
        <td>GitHub</td>
        <td>:</td>
        <td>https://github.com/laduniestu</td>
      </tr>
    
  </table> 
    </div>
  )
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();
  

  let { from } = location.state || {from:{pathname:"/"}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  alert(`You must log in to view the page at ${from.pathname}`)
  return (
    
    <div class= "botton">
      <button onClick={login}>Log In</button>
    </div>
      
    
  );
}

function RumahTangga(){
  let { path, url } = useRouteMatch();
  return(
    <div>
      <h2>Kategori Rumah Tangga</h2>
      <ul>
        <li>
          <Link to={`${url}/Panci, Sendok Makan, Piring`}>Dapur</Link>
        </li>
        <li>
          <Link to={`${url}/Spring Bed, Bantal, Guling`}>Kamar Tidur</Link>
        </li>
        <li>
          <Link to={`${url}/Gayung, Tempat Sabun, Shower Cap`}>Kamar Mandi</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a Category.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}



function Mobil(){
  let { path, url } = useRouteMatch();
  return(
    <div>
      <h2>Kategori Mobil</h2>
      <ul>
        <li>
          <Link to={`${url}/X-Pander, Xenia, Inova`}>Keluarga</Link>
        </li>
        <li>
          <Link to={`${url}/Audi, Lamborghini, BMW`}>Sport</Link>
        </li>
        
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a Category.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}

function Motor(){
  let { path, url } = useRouteMatch();
  return(
    <div>
      <h2>Kategori Motor</h2>
      <ul>
        <li>
          <Link to={`${url}/Harley Davidson, BMW`}>CC Tinggi</Link>
        </li>
        <li>
          <Link to={`${url}/R25, Ninja, CRF`}>CC Sedang</Link>
        </li>
        <li>
          <Link to={`${url}/Supra, Beat, Kharisma`}>CC Rendah</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a Category.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}

function Topic(){
  let {topicId} = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  )
}

const Footer = () => {
  return(
    <div class="footer">
      <p>Copyright © Laduni Estu Syalwa 2020</p>
    </div>
  )
}






