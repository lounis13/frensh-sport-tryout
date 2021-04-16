import {useState} from 'react'
import ContactService from "./ContactService";

const DeleteContact = ({id, load}) => {
    let [showDeletePopUp, setShow] = useState(false);

    let show = () => {
        console.log("Je")
        setShow(!showDeletePopUp)
    }
    return <div>
        <div onClick={show}>❌</div>
        {showDeletePopUp && <ConfirmeDeleteClientPopUp id={id} load={load} setShow={show}/>}
    </div>
}

const ConfirmeDeleteClientPopUp = ({id, load, setShow}) => {

    const deleteContact = () => {
        ContactService.deleteContrat(id).then(() => {
            load()
        })
    }
    return <div className="confirm-delete">
        <button onClick={deleteContact}>Oui</button>
        <button onClick={setShow}>Non</button>
    </div>
}

export default DeleteContact