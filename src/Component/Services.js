let allCards = [
  {
    id: 1,
    branch: "Ketu",
    area: "Ojota",
    streetNum: 33,
  },

  {
    id: 2,
    branch: "Ikeja",
    area: "Magodo",
    streetNum: 24,
  },
];

let EntirePage = () => {
  return (
    <Navbar />

    // <Navbar></Navbar>
  );
};

let Services = () => {
  return allCards.map((singleCard) => {
    return (
      <div className="row">
        <div className="col-4">
          <CardServe key={singleCard.id} {...singleCard} />
        </div>
        <div className="col-4">
          <CardServe key={singleCard.id} {...singleCard} />
        </div>
        <div className="col-4">
          <CardServe key={singleCard.id} {...singleCard} />
        </div>
      </div>
    );
  });
};

// let Services = () => {
//   return (
//     <div className="row">

//     </div>
//     // <div className="row">
//     //   <div className="col-4">

//         {/* <CardServe
//           branch={firstCard.branch}
//           area={firstCard.area}
//           streetNum={firstCard.streetNum}
//         /> */}
//         {/* <CardServe
//           branch={firstCard.branch}
//           area={firstCard.area}
//           streetNum={firstCard.streetNum}
//         >
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, quaerat?
//         </CardServe> */}
//       // </div>
//       // <div className="col-4">
//         {/* <CardServe
//           branch={secondCard.branch}
//           area={secondCard.area}
//           streetNum={secondCard.streetNum}
//         /> */}
//     //   </div>
//     //   <div className="col-4">
//     //     {/* <CardServe /> */}
//     //   </div>
//     // </div>
//   );
// };

let CardServe = (props) => {
  // let CardServe = ({ branch, area, streetNum, children }) => {
  let { branch, area, streetNum, children } = props;
  let pcontent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia iste error in!";
  return (
    // <div className="card" style={{ width: "18rem" }}>
    <div className="card" style={{ width: "18rem" }}>
      <img src={logo192} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title ctitle" style={CardTitle}>
          Card title
        </h5>
        <p className="card-text">
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
          {pcontent}
        </p>
        <p>{branch}</p>
        <p>{area}</p>
        <p>{streetNum}</p>
        <p>{children}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

let CardTitle = {
  fontSize: "60px",
  fontWeight: "900",
};

export default Services;
