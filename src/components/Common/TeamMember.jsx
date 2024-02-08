import React, { Component } from "react";
import { Link } from "react-router-dom";

class TeamMember extends Component {
    render() {
        return (
            <>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src={this.props.image} alt="..." />
                        <h4>{this.props.name}</h4>
                        <p class="text-muted">{this.props.role}</p>
                        <Link class="btn btn-dark btn-social mx-2" to="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></Link>
                        <Link class="btn btn-dark btn-social mx-2" to="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></Link>
                        <Link class="btn btn-dark btn-social mx-2" to="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </>
        );
    }
}
export default TeamMember;