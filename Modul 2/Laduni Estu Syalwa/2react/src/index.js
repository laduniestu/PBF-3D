import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import img from '../src/fotoku.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


const Biodata=(props)=>{
    return (
      <div class="container-sm">
          <div class="row">
            <div class="col" >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th colSpan="2" >Biodata : </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>Laduni Estu Syalwa</td>
                  </tr>
                  <tr>
                    <td>TTL</td>
                    <td>Tulungagung, 9 Februari 1999</td>
                  </tr>
                  <tr>
                    <td>Jenis Kelamin</td>
                    <td>Laki - Laki</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>Tulungagung</td>
                  </tr>
                  <tr>
                    <td>Umur</td>
                    <td>21</td>
                  </tr>
                  <tr>
                    <td>Pas Foto</td>
                    <td class="image">
                      <Image src={img} alt="img" thumbnail/>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
      </div>
    );
  }

  ReactDOM.render(<Biodata />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
