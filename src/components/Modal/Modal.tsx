import React from 'react';
import { FormControl, Modal, InputGroup } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import * as P from './parts';
import { Dispatch, connect } from 'react-redux';
import { getMenuSelector } from '~/store/selectors/menu';
import { ApplicationState } from '~/store/ApplicationState';
import { MenuItem } from '~/store/constance/menu';
import { SupportFormData } from '~/store/constance/supportData';
import { postSupportDataRequest } from '~/store/actions/supportData';

interface ModalProps {
   showModal: boolean;
   onClose: () => void;
   onSubmit: (formData: SupportFormData) => void;
   types: MenuItem[];
}

class ModalForm extends React.Component<ModalProps, { show: boolean }> {
   state = {
      show: false,
   };

   onClickSubmit;
   form;

   onToggleDropdown = (show: boolean) => {
      this.setState({ show });
   };

   onClickDropdown = (value: string) => () => {
      this.onToggleDropdown(false);
      this.form.change('type', value);
   };

   onDrop = (file) => {
      this.form.change('file', file[0]);
   };

   render() {
      return (
         <Modal show={this.props.showModal} onHide={this.props.onClose}>
            <Modal.Header closeButton>
               <Modal.Title>Dodaj nowy plik</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form
                  validate={undefined}
                  onSubmit={this.props.onSubmit}
               >
                  {({ handleSubmit, form }) => {
                     this.onClickSubmit = handleSubmit;
                     this.form = form;
                     return (
                        <form onSubmit={handleSubmit}>
                           <Field name="title">
                              {({ input, meta }) => (
                                 <div>
                                    <InputGroup className="mb-3">
                                       <InputGroup.Prepend>
                                          <InputGroup.Text id="inputGroup-sizing-default">Tytuł</InputGroup.Text>
                                       </InputGroup.Prepend>
                                       <FormControl
                                          {...input}
                                          aria-describedby="inputGroup-sizing-default"
                                       />
                                    </InputGroup>
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                 </div>
                              )}
                           </Field>
                           <Field name="description">
                              {({ input, meta }) => (
                                 <div>
                                    <InputGroup className="mb-3">
                                       <InputGroup.Prepend>
                                          <InputGroup.Text id="inputGroup-sizing-default">Opis</InputGroup.Text>
                                       </InputGroup.Prepend>
                                       <FormControl
                                          {...input}
                                          aria-describedby="inputGroup-sizing-default"
                                       />
                                    </InputGroup>
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                 </div>
                              )}
                           </Field>
                           <Field name="type">
                              {() => (
                                 <div>
                                    <P.Dropdown show={this.state.show} onToggle={this.onToggleDropdown}>
                                       <P.Toggle variant="outline-secondary" id="dropdown-basic">
                                          Wybierz typ
                                       </P.Toggle>
                                       <P.Menu>
                                          {this.props.types && this.props.types.map((item, index) => (
                                             <P.DropdawonButton
                                                key={index}
                                                onClick={this.onClickDropdown(item.type)}
                                             >
                                                {item.title}
                                             </P.DropdawonButton>
                                          ))}
                                       </P.Menu>
                                    </P.Dropdown>
                                 </div>
                              )}
                           </Field>
                           <Field name="file">
                              {({ meta }) => (
                                 <div>
                                    <P.Dropzone onDrop={this.onDrop}>Dodaj plik</P.Dropzone>
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                 </div>
                              )}
                           </Field>
                        </form>
                     );
                  }}
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <P.Button variant="secondary" onClick={this.props.onClose}>Zamknij</P.Button>
               <P.Button variant="primary" onClick={this.onClickSubmit}>Zapisz</P.Button>
            </Modal.Footer>
         </Modal>
      );
   }
}

const mapStateToProps = (state: ApplicationState) => ({
   types: getMenuSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
   onSubmit: (formData: SupportFormData) => {
      dispatch(postSupportDataRequest(formData));
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
