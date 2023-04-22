import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createRequest} from "../../http/adminAPI";

const CreateRequest = ({show, onHide}) => {
    const [client_name, setCName] = useState('')
    const [client_surname, setCSurname] = useState('')
    const [client_lastname, setCLastname] = useState('')
    const [adress, setAdress] = useState('')
    const [phone_num, setPhone] = useState(89000000000)

    const addRequest = () => {
        const formData = new FormData()
        formData.append('client_name', client_name)
        formData.append('client_surname', client_surname)
        formData.append('client_lastname', client_lastname)
        formData.append('adress', adress)
        formData.append('phone_num', phone_num)
        createRequest(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Заполнить заявку
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={client_name}
                        onChange={e => setCName(e.target.value)}
                        placeholder={"Введите имя"}
                    />
                    <Form.Control
                        value={client_surname}
                        onChange={e => setCSurname(e.target.value)}
                        placeholder={"Введите фамилию"}
                    />
                    <Form.Control
                        value={client_lastname}
                        onChange={e => setCLastname(e.target.value)}
                        placeholder={"Введите отчество"}
                    />
                    <Form.Control
                        value={adress}
                        onChange={e => setAdress(e.target.value)}
                        placeholder={"Введите адрес"}
                    />
                    <Form.Control
                        value={phone_num} //
                        onChange={e => setPhone(Number(e.target.value))}
                        placeholder={"Введите телефон"}
                        type="number"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addRequest}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateRequest;