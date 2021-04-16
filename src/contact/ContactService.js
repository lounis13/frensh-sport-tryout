import axios from "axios";


const  URL_API_CONTACT = "http://localhost:8080/api/contacts"
class ContactService {

    getContactById(contactID) {
        return axios.get(URL_API_CONTACT+"/"+contactID);
    }

    getContacts() {
        return axios.get(URL_API_CONTACT)
    }

    createContact(contact) {
        return axios.post(URL_API_CONTACT+"/add", contact)
    }

    deleteContrat(id) {
        return axios.delete(URL_API_CONTACT+"/delete/"+ id);
    }

    updateContact(contactID, contact) {
        return axios.put(URL_API_CONTACT+"/update/"+contactID, contact)
    }
}

export default new ContactService()