import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      price: 0,
    };
  }

  render() {
    return (
      <form
        className="row align-top" 
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem( this.state.productname, Number(this.state.price));
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="inputname" className="form-label">
            Name
          </label>
          <input
            name="productname"
            onChange={(e) => {
              this.setState({ productname: e.currentTarget.value });
            }}
            value={this.state.productname}
            type="Name"
            className="form-control"
            id="inputname"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            name="price"
            onChange={(e) => {
              this.setState({ price:(e.currentTarget.value) });
            }}
            value={this.state.price}
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className=" mb-5 mt-4  btn btn-primary col-4">
          Submit
        </button>
      </form>
    );
  }
}

export default AddItem;













// import React from "react";

// class AddItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       productName: "",
//       productPrice: 0,
//     };
//   }
//   render() {
//     return (
//       <form
//         className="row mb-5"
//         onSubmit={(e) => {
//           e.preventDefault();
//           this.props.addItem(this.state.productName,Number(this.state.productPrice));
//         }}
//       >
//         <div className="mb-3 col-4">
//           <label htmlFor="inputName" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputName"
//             aria-describedby="name"
//             name="productName"
//             onChange={(e) => {
//               this.setState({ productName: e.currentTarget.value });
//             }}
//             value={this.state.productName}
//           />
//         </div>
//         <div className="mb-3 col-4">
//           <label htmlFor="inputPrice" className="form-label">
//             Price
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="price"
//             name="productPrice"
//             onChange={(e) => {
//               this.setState({ productPrice: e.currentTarget.value });
//             }}
//             value={this.state.productPrice}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary col-4">
//           Add
//         </button>
//       </form>
//     );
//   }
// }

// export default AddItem;