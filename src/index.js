import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import EntirePage from "./pages/Entirepages";
import logo192 from "./images/logo192.png";
import { Navbar } from "./Component/Navbar";
// import logo192 from "./images/logo192.png";

// function SayHi() {
//   return <p>Hi this is my first component</p>;
// }

// let EntirePage = () => {
//   return (
//     (<Navbar />), (<Services />)

//     // <Navbar></Navbar>
//   );
// };

// let Navbar = () => {
//   return (
//     <ul className="nav">
//       <li className="nav-item">
//         <a className="nav-link active" aria-current="page" href="#">
//           Active
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Link
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Link
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled">Disabled</a>
//       </li>
//     </ul>
//   );
// };

// let Services = () => {
//   return (
//     <div className="row">
//       <div className="col-4">
//         <CardServe branch="Ketu" area="Ojota" streetNum={33} />
//       </div>
//       <div className="col-4">
//         <CardServe branch="Ikeja" area="Magodo" streetNum={24} />
//       </div>
//       <div className="col-4">
//         <CardServe />
//       </div>
//     </div>
//   );
// };

// let CardServe = (props) => {
//   let pcontent =
//     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia iste error in!";
//   return (
//     // <div className="card" style={{ width: "18rem" }}>
//     <div className="card" style={{ width: "18rem" }}>
//       <img src={logo192} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title ctitle" style={CardTitle}>
//           Card title
//         </h5>
//         <p className="card-text">
//           {/* Some quick example text to build on the card title and make up the
//           bulk of the card's content. */}
//           {pcontent}
//         </p>
//         <p>{props.branch}</p>
//         <p>{props.area}</p>
//         <p>{props.streetNum}</p>
//         <a href="#" className="btn btn-primary">
//           Go somewhere
//         </a>
//       </div>
//     </div>
//   );
// };

// let CardTitle = {
//   fontSize: "60px",
//   fontWeight: "900",
// };

// let firstCard = {
//   branch: "Ketu",
//   area: "Ojota",
//   streetNum: 33,
// };

// let secondCard = {
//   branch: "Ikeja",
//   area: "Magodo",
//   streetNum: 24,
// };

// let EntirePage = () => {
//   return (
//     (<Navbar />), (<Services />)

//     // <Navbar></Navbar>
//   );
// };

// let Navbar = () => {
//   return (
//     <ul className="nav">
//       <li className="nav-item">
//         <a className="nav-link active" aria-current="page" href="#">
//           Active
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Link
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Link
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled">Disabled</a>
//       </li>
//     </ul>
//   );
// };

// let Services = () => {
//   return (
//     <div className="row">
//       <div className="col-4">
//         {/* <CardServe
//           branch={firstCard.branch}
//           area={firstCard.area}
//           streetNum={firstCard.streetNum}
//         /> */}
//         <CardServe
//           branch={firstCard.branch}
//           area={firstCard.area}
//           streetNum={firstCard.streetNum}
//         >
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, quaerat?
//         </CardServe>
//       </div>
//       <div className="col-4">
//         <CardServe
//           branch={secondCard.branch}
//           area={secondCard.area}
//           streetNum={secondCard.streetNum}
//         />
//       </div>
//       <div className="col-4">
//         <CardServe />
//       </div>
//     </div>
//   );
// };

// let CardServe = (props) => {
//   let pcontent =
//     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia iste error in!";
//   return (
//     // <div className="card" style={{ width: "18rem" }}>
//     <div className="card" style={{ width: "18rem" }}>
//       <img src={logo192} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title ctitle" style={CardTitle}>
//           Card title
//         </h5>
//         <p className="card-text">
//           {/* Some quick example text to build on the card title and make up the
//           bulk of the card's content. */}
//           {pcontent}
//         </p>
//         <p>{props.branch}</p>
//         <p>{props.area}</p>
//         <p>{props.streetNum}</p>
//         <p>{props.children}</p>
//         <a href="#" className="btn btn-primary">
//           Go somewhere
//         </a>
//       </div>
//     </div>
//   );
// };

// let CardTitle = {
//   fontSize: "60px",
//   fontWeight: "900",
// };

function Indexpage() {
  <EntirePage />;
}

ReactDOM.render(<Indexpage />, document.getElementById("root"));
