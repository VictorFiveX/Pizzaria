import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.scss';
export default function MyVerticallyCenteredModal(props){
  return (
    <Modal
    {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter "
      centered
    >
      <Modal.Header closeButton>
  
      </Modal.Header>
      <Modal.Body>
      <div >
    <h4 >
        <b>Horários</b>
    </h4>
    <table class="table table-bordered">
  <thead>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Dom</th>
      <td>17:30 - 00:00</td>
    </tr>
    <tr>
      <th scope="row">Seg</th>
      <td>17:30 - 00:00</td>
    </tr>
    <tr>
      <th scope="row">Ter</th>
      <td >17:30 - 00:00</td>
    </tr>
    <tr>
      <th scope="row">Qua</th>
      <td >17:30 - 00:00</td>
    </tr>
    <tr>
      <th scope="row">Qui</th>
      <td >17:30 - 00:00</td>
    </tr>
    <tr>
      <th scope="row">Sex</th>
      <td >17:30 - 00:00</td>
    </tr>
    <tr>
      <th scope="row">Sab</th>
      <td >17:30 - 00:00</td>
    </tr>
  </tbody>
</table>

    </div>
      </Modal.Body>

    </Modal>
  );
}

