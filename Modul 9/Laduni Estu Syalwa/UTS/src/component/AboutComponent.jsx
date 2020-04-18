import React, { Component } from "react"
import Card from "react-bootstrap/Card";
import '../App.css';

const AboutComponent = () => {
    return (
        <div className="App">
            <Card border="light" text="black" style={{ width: '100' }}>
                <Card.Body>
                    <Card.Title><b>Biodata Mahasiswa</b></Card.Title>
                    <Card>
                            <Card.Header> 
                                <Card.Body><img src={require('../gambar/duni.jpg')} width="300" height="450"></img></Card.Body>
                            </Card.Header>
                        </Card>
                        <Card>
                            <Card.Header> 
                                <Card.Body>Nama : Laduni Estu Syalwa</Card.Body>
                            </Card.Header>
                        </Card>
                        <Card>
                            <Card.Header> 
                                <Card.Body>NIM : 1741720019</Card.Body>
                            </Card.Header>
                        </Card>
                        <Card>
                            <Card.Header> 
                                <Card.Body>Tahun Masuk : 2017</Card.Body>
                            </Card.Header>
                        </Card>
                        <Card>
                            <Card.Header> 
                                <Card.Body>Jurusan : Teknologi Informasi</Card.Body>
                            </Card.Header>
                        </Card>
                        <Card>
                            <Card.Header> 
                                <Card.Body>Prodi : Teknik Informatika</Card.Body>
                            </Card.Header>
                        </Card>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default AboutComponent;