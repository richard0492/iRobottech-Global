import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "mdbreact";
import "./AdminDashboard.css";
import RegisterStudent from "./RegisterStudent";
import RegisterProfessor from "./RegisterProfessor";
import RegisterSecretary from "./RegisterSecretary";
import DisableAccount from "./DisableAccount";
import Enrollment from "./Enrollment";
import CreateCourse from "./CreateCourse";
import CreateGroup from "./CreateGroup";
const registerStudent = <RegisterStudent />;
const registerProfessor = <RegisterProfessor />;
const registerSecretary = <RegisterSecretary />;
const disableAccount = <DisableAccount />;
const enrollmentStudent = <Enrollment />;
const createCourse = <CreateCourse />;
const createGroup = <CreateGroup />;

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentSelector: ""
    };
    this.selector = this.selector.bind(this);
  }

  render() {
    return (
      <div>
        <Row className="mt-5">
          <Col md="4" className="mt-5">
            <Card>
              <h5 className="text-center font-weight-bold pl-0 my-4 deep-orange-text">
                Panel de Administrador
              </h5>
              <CardBody>
                <div className="left-box align-box">
                  <ListGroup>
                    <label className="mt-2 font-weight-bold deep-orange-text">
                      Registro
                    </label>
                    <ListGroupItem hover onClick={this.loaderRegStu.bind(this)}>
                      Estudiante
                    </ListGroupItem>
                    <ListGroupItem
                      hover
                      onClick={this.loaderRegProf.bind(this)}
                    >
                      Profesor
                    </ListGroupItem>
                    <ListGroupItem hover onClick={this.loaderRegSec.bind(this)}>
                      Secretaria/o
                    </ListGroupItem>
                    <label className="mt-2 font-weight-bold deep-orange-text">
                      Estudiante
                    </label>
                    <ListGroupItem hover onClick={this.enrollment.bind(this)}>
                      Matricular Estudiante
                    </ListGroupItem>
                    <label className="mt-2 font-weight-bold deep-orange-text">
                      Cursos
                    </label>
                    <ListGroupItem hover onClick={this.createCourse.bind(this)}>
                      Crear Curso
                    </ListGroupItem>
                    <ListGroupItem hover onClick={this.createGroup.bind(this)}>
                      Crear Grupo
                    </ListGroupItem>
                    <label className="mt-2 font-weight-bold deep-orange-text">
                      Cuenta
                    </label>
                    <ListGroupItem hover onClick={this.loaderDisAcc.bind(this)}>
                      Deshabilitar Cuenta
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </CardBody>
            </Card>
          </Col>
          <div className="align-box">
            {this.selector(this.state.componentSelector)}
          </div>
        </Row>
      </div>
    );
  }

  selector(componentSelector) {
    switch (componentSelector) {
      case "R_STU":
        return registerStudent;
      case "R_PROF":
        return registerProfessor;
      case "R_SEC":
        return registerSecretary;
      case "DIS_ACC":
        return disableAccount;
      case "ENROLL":
        return enrollmentStudent;
      case "C_COURSE":
        return createCourse;
      case "C_GROUP":
        return createGroup;
      default:
        return "";
    }
  }

  loaderRegStu() {
    this.setState({ componentSelector: "R_STU" });
  }
  loaderRegProf() {
    this.setState({ componentSelector: "R_PROF" });
  }
  loaderRegSec() {
    this.setState({ componentSelector: "R_SEC" });
  }
  loaderDisAcc() {
    this.setState({ componentSelector: "DIS_ACC" });
  }
  enrollment() {
    this.setState({ componentSelector: "ENROLL" });
  }
  createCourse() {
    this.setState({ componentSelector: "C_COURSE" });
  }
  createGroup() {
    this.setState({ componentSelector: "C_GROUP" });
  }
}

export default AdminDashboard;
