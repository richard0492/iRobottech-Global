import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";

class DropdownPage extends React.Component {
  render() {
    return (
      <Dropdown>
        <DropdownToggle nav caret>
          Descargas
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem  className="nav-link d-none d-md-block" href="/download/formularioEstudiante.pdf">
            Folmulario de registro para estudiantes
          </DropdownItem>
          <DropdownItem className="nav-link d-none d-md-block" href="/download/CurriculumDePersonal.zip">
            Formulario de currículum para personal
          </DropdownItem>
          {/*<DropdownItem href="#">Something else here</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem> */}
        </DropdownMenu>
      </Dropdown>



    );
  }
}
export default DropdownPage;
