import React, { Component } from "react";

class Field extends Component {
    render() {
        return (
            <div className="form-group">
                {this.props.elementName === "input" ?
                    <div>
                        <input className="form-control"
                            id={this.props.name}
                            type={this.props.type}
                            required="required"
                            placeholder={this.props.placeholder}
                            data-sb-validations={`required,${this.props.name}`}
                            name={this.props.name}
                            onChange={this.props.onChange}
                            onBlur={this.props.onBlur}
                        />
                        <div className="invalid-feedback" data-sb-feedback={`${this.props.name}:required`}>An {this.props.name} is required.</div>
                    </div>
                    :
                    <div className="form-group form-group-textarea mb-md-0">
                        <textarea
                            className="form-control"
                            id={this.props.name}
                            type={this.props.type}
                            required="required"
                            placeholder={this.props.placeholder}
                            data-sb-validations="required"
                            name={this.props.name}
                            onChange={this.props.onChange}
                            onBlur={this.props.onBlur}
                        />
                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>
                }
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors) &&
                        <span>{this.props.errors}</span>
                    }
                </p>

            </div>
        );
    }
}

export default Field;