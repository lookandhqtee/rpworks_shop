import React, { useState, /*useEffect*/ } from "react";
import { Container, Button } from "react-bootstrap";
import CreateDevice from "../components/modals/CreateDevice";
import CreateMaster from "../components/modals/CreateMaster";
import CreateRequest from "../components/modals/CreateRequest";
//import axios from "axios"



const Admin = () => {
    const [DeviceVisible, setDeviceVisible] = useState(false)
    const [MasterVisible, setMasterVisible] = useState(false)
    const [RequestVisible, setRequestVisible] = useState(false)
    /*const [bookPurchases, setBookPurchases] = useState(null);

    useEffect(() => {
        async function fetchBookPurchases() {
            try {
                const response = await axios.get("https://localhost:5000/api/books");
                setBookPurchases(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    fetchBookPurchases();
  }, []);*/

  return (
        
    
     <Container className='d-flex flex-column'>
        <Button variant = {"outline-dark"} className="mt-2" onClick={() => setDeviceVisible(true)} >
            Добавить инструмент
        </Button>
        <Button variant = {"outline-dark"} className="mt-2" onClick={() => setRequestVisible(true)}>
            Добавить работу в учет ремонтных работ
        </Button>
        <Button variant = {"outline-dark"} className="mt-2" onClick={() => setMasterVisible(true)}>
            Добавить мастера
        </Button>
        <Button variant = {"outline-dark"} className="mt-2">
            Добавить пользователя
        </Button>
        <Button
        variant={"outline-dark"}
        className="mt-2"
        //onClick={() => setBookPurchases(null)}
        >
        Узнать сумму закупок книг
        </Button>
        <Button variant = {"outline-dark"} className="mt-2">
            Проверить количество поставщиков книг
        </Button>
        <CreateDevice show = {DeviceVisible} onHide={() => setDeviceVisible(false)}/>
        <CreateMaster show = {MasterVisible} onHide={() => setMasterVisible(false)}/>
        <CreateRequest show = {RequestVisible} onHide={() => setRequestVisible(false)}/>
     </Container>
  );
};

export default Admin;
