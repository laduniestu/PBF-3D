import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getNewsBlog = () => GetAPI('posts?_sort=id&_orderdesc');
const postNewsBlog = (dataYgDiKirim) => PostAPI ('posts, dataYgDiKirim');
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;

// const domainPath = 'http://localhost:3001';
// const GetAPI = (path) => {
//     const promise = new Promise((resolve, reject) => {
//         fetch(`${domainPath}/${path}`)
//         .then(response => response.json())
//         .then((result) => {
//             resolve(result);
//         }, (err) => {
//             reject(err);
//         })
//     })
//     return promise;
// }

// const PostAPI = (path, data) => {
//     const promise = new Promise((resolve, reject) => {
//         fetch( `${domainPath}/${path}`,{
//             method: 'post',
//             headers: {
//                 'Accept': 'aplication/json',
//                 'Content-Type': 'Aplication/json'
//             },
//             body: JSON.stringify(data)
//         })
//             .then((result) => {
//                 resolve(result);
//             }, (err) => {
//                 reject(err);
//             })
//     })
//     return promise;
// }

// const DeleteAPI = (path, data) => {
//     const promise = new Promise((resolve, reject) => {
//         fetch(`${domainPath}/${path}/${data}`, {method: 'DELETE'})
//             .then((result) => {
//                 resolve(result);
//             }, (err) => {
//                 reject(err);
//             })
//     })
// }