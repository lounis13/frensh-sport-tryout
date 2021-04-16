import DeleteContact from "./DeleteContact";
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import ContactService from "./ContactService";

const ContactTable = ({contacts, load, filter}) => {

    const UpdateContact = ({id}) => {

        let [contact, initContact] = useState(null)
        useEffect(() => {
            ContactService.getContactById(id).then((contacts) => {
                initContact(contacts.data)
            })
        })

        const history = useHistory()

        const goToUpdate = () => {
            history.push({
                pathname: "contacts/update/" + id,
                state: {contact: contact}
            });
        }

        return <button className="btn-update" onClick={goToUpdate}>Modifier</button>
    }
    return <table className="table-contact">
        <thead>
        <tr>
            <th>NOM</th>
            <th>E-MAIL</th>
            <th>TELEPHONE</th>
            <th>DATE DE CREATION</th>
            <th></th>
            <th></th>

        </tr>
        </thead>
        <tbody>
        {
            contacts.map((contact) => (
                (contact.nom.toUpperCase().indexOf(filter.toUpperCase()) === -1)
                    ? null
                    : <tr key={contact.id}>
                        <td>{contact.nom}</td>
                        <td>{contact.email}</td>
                        <td>{contact.telephone}</td>
                        <td>{contact.dateCreation}</td>
                        <td className="td-update">
                            <DeleteContact id={contact.id} load={load}/>
                        </td>
                        <td className="td-update">
                            <UpdateContact id={contact.id}/>
                        </td>
                    </tr>
            ))
        }
        </tbody>
    </table>
}

export default ContactTable;