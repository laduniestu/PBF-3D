import React, { Component } from "react"
import '../App.css';
import Post from './BlogPost/Post';

class ProductComponent extends Component {
    state = {
        listProduk: []
    }

    ambilDataProduk = () => {
        fetch('http://localhost:3001/listProduk')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduk: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataProduk()
    }

    handleGetTV = data => {
        fetch(`http://localhost:3001/listProduk/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataSetrika = { ...this.state.insertKeranjang };
                dataSetrika["id"] = res["id"];
                dataSetrika["nama"] = res["nama"];
                dataSetrika["harga"] = res["harga"];
                dataSetrika["stok"] = res["stok"];
                dataSetrika["qty"] = 1;
                this.setState({
                    insertKeranjang: dataSetrika
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataProduk();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataProduk();
            });
    }

    render() {
        return (
            <div class="post-artikel">
                <center><h2>List Product</h2></center>{
                    this.state.listProduk.map(produk => {
                        return (
                            <Post
                                key={produk.id}
                                id={produk.id}
                                gambar={produk.gambar}
                                nama={produk.nama}
                                harga={produk.harga}
                                stok={produk.stok}
                                tambahSetrika={this.handleGetTV} />
                        )
                    })
                }
            </div>
        )
    }
}

export default ProductComponent;