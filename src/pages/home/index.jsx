import Button from 'react-bootstrap/Button';

import MyVerticallyCenteredModal from '../../components/modal/modal';
import { useEffect, useState, useRef } from "react";
import {useNavigate} from 'react-router-dom';
import './style.css';


export default function Index() {
    const [modalShow, setModalShow] = useState(false);
    const Navigate = useNavigate();
 

    return (
        <main className='page page-bemvindo'>
        <div className="boxG">

        <img src="../src/images/Screen.png" alt="pizza" />

    <div className="box">

    <div className="info">

        <h1>🍕 Bem Vindo 🍕</h1>
        <h2>Usura's pizzaria</h2>
        <p>pizzaria x, endereço x - 237 <br />
                bairro x - São Paulo/SP</p>
        <div className="contato">
            <ul>
              <li>
                <a href="tel:+5521971602369" title="Fazer ligação">
                    +xx (xx) xxxxx-xxxx
                </a>
              </li>

            </ul>  
        </div>
        <Button className='aberto' variant="outline-success pequeno" onClick={() => setModalShow(true)}>Aberto</Button>
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
       
    </div>
 
    <div className='botoes d-flex align-items-center flex-column bd-highlight mb-3' >
    <Button variant="outline-dark medio" onClick={() => Navigate('/cardapio')}>Cardapio</Button>{' '} 
    {' '} <Button className='pedido ' variant="outline-dark mb-10px medio">Fazer Pedido</Button>
    </div>

</div>
            </div>

        </main>
    )
}

