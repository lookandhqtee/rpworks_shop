import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";

const CreateDevice = ({show, onHide}) => {
    const [device_name, setDName] = useState('')
    const [device_type, setType] = useState('')
    const [manufacture_date, setDDate] = useState(Date.now())

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить инструмент
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Введите название инструмента"}
                        value={device_name}
                        onChange={e => setDName(e.target.value)}
                    />
                    <Form.Control
                        placeholder={"Введите тип инструмента"}
                        value={device_type}
                        onChange={e => setType(e.target.value)}
                    />
                    <Form.Control
                        placeholder={"Введите дату производства инструмента"}
                        value={manufacture_date}
                        onChange={e => setDDate(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;