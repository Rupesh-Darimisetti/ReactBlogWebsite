import React, { Component } from "react";
import { Link } from "react-router-dom";
import img3 from "../assets/img/logos/facebook.svg";
import img2 from "../assets/img/logos/google.svg";
import img4 from "../assets/img/logos/ibm.svg";
import img1 from "../assets/img/logos/microsoft.svg";
const clients = [
    { image: img1, name: 'Microsoft Logo' },
    { image: img2, name: 'Google Logo' },
    { image: img3, name: 'Facebook Logo' },
    { image: img4, name: 'Microsoft Logo' }
]
class Clients extends Component {
    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {clients.map((client, index) => {
                            return (
                                <div className="col-md-3 col-sm-6 my-3">
                                    <Link to="#!"><img className="img-fluid img-brand d-block mx-auto" src={client.image} alt="..." aria-label={client.name} /></Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
export default Clients;