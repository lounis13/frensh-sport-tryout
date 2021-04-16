
import {useForm} from "react-hook-form"
import {useHistory, useParams} from "react-router-dom";


const AddContact = ({setContact}) => {

    const params = useParams();
    let history = useHistory()

    let {register, handleSubmit} = useForm({
        defaultValues: (params.id!=null) && history.location.state.contact
    })


    const onSubmit = (data) => {
        if (params.id == null) {
            setContact(data)
        } else {
            setContact(params.id, data)
        }
        history.push("/contacts")
    }

    return <div className="edit-contact-container">
        <div className="pop-up-edit">
            <form className="form-edit-contrat" onSubmit={handleSubmit(onSubmit)}>
                <button className="btn-cancel">annuler</button>
                <h1>{params.id == null ? "Nouveau Contact": "Modifier Contact"}</h1>
                <label>Nom</label>
                <input type="text" name="nom" ref={register}/>

                <label>E-mail</label>
                <input type="email" name="email" ref={register}/>

                <label>Telephone</label>
                <input type="text" name="telephone" ref={register}/>

                <label>Date de creation</label>
                <input type="date" name="dateCreation" ref={register}/>

                <button className="btn-add" type="submit">Ajouter</button>

            </form>
        </div>
    </div>
}

export default AddContact