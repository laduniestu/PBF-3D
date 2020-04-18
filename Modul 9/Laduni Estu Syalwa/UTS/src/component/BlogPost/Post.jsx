import React from "react";
import "./Post.css";

const Post = (props) => {
    return (

        <div className="artikel">
            <div className="gambar-artikel">
                <img src={require('../../gambar/' + props.gambar)} alt="Gambar Produk" />
            </div>
            <div className="konten-artikel">
                <p className="judul-artikel">No Barang : {props.id} </p>
                <p className="isi-artikel">Nama Barang : {props.nama}</p>
                <p className="isi-artikel">Harga Barang : {props.harga}</p>
                <p className="isi-artikel">Stok Barang : {props.stok}</p>
                <button className="btn btn-sm btn-warning" onClick={props.tambahSetrika.bind(this, props.id)}>Beli</button>
            </div>
        </div>
    )
}

export default Post;