import React from "react"
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    FormGroup,
} from "reactstrap"
import Select from "react-select"

const submitTypes = [
    { value: "For Rent", label: "For Rent" },
    { value: "For Sale", label: "For Sale" },
]

class SubmitListingModal extends React.Component {

    toggleModal = () => {
        this.props.setModalActive()
    }

    render() {
        return (
            <React.Fragment>
                <Modal
                    isOpen={this.props.isModalActive}
                    toggle={this.toggleModal}
                    className="modal-dialog-centered"
                >
                    <ModalHeader toggle={this.toggleModal}>Submit property as a listing</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="submitType">Submit as:</Label>
                            <Select
                                id="submitType"
                                name="submitType"
                                className="React"
                                classNamePrefix="select"
                                defaultValue={submitTypes[0]}
                                options={submitTypes}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleModal}>
                            Submit
                    </Button>{" "}
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}
export default SubmitListingModal
