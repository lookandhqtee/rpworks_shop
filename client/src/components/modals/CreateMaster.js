import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Context} from "../../index";
import {createMaster} from "../../http/adminAPI";
import {observer} from "mobx-react-lite";

const CreateMaster = observer(({show, onHide}) => {
    const {master} = useContext(Context)
    const [master_name, setMName] = useState('')
    const [master_surname, setMSurname] = useState('')
    const [master_lastname, setMLastname] = useState('')
    const [rank, setRank] = useState('')
    const [employment_date, setMEDate] = useState(Date.now())

    /*useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])*/

    const addMaster = () => {
        const formData = new FormData()
        formData.append('master_name', master_name)
        formData.append('master_surname', master_surname)
        formData.append('master_lastname', master_lastname)
        formData.append('rank', rank)
        formData.append('employment_date', employment_date)
        createMaster(formData).then(data => onHide())
    }
    /*const addMaster = async () => {
        try {
            const response = await createMaster({
                master_name,
                master_surname,
                master_lastname,
                rank,
                employment_date: new Date(employment_date).toISOString() // преобразование даты в ISO-строку
            });
    
            // обработка ответа сервера
            console.log(response);
            onHide();
        } catch (e) {
            console.error(e);
        }
    }*/
    

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить мастера
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите имя мастера"
                        value={master_name}
                        onChange={e => setMName(e.target.value)}

                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите фамилию мастера"
                        value={master_surname}
                        onChange={e => setMSurname(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите отчество мастера"
                        value={master_lastname}
                        onChange={e => setMLastname(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ранг мастера"
                        value={rank}
                        onChange={e => setRank(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите дату работоустройства"
                        value={employment_date}
                        onChange={e => setMEDate(e.target.value)}
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addMaster}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateMaster;