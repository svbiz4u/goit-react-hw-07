import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { AiOutlineUser, AiTwotonePhone } from "react-icons/ai";
import s from './Contact.module.css'


const Contact = ({ id, name, number }) => {

    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));
    
      return (
        <div className={s.wrapper}>
              <div className={s.datacontainer}>
                  <p><AiOutlineUser /> {name}</p>
                  <p><AiTwotonePhone /> {number}</p>
              </div>
              
              <button className={s.btn} type="submit" onClick={handleDelete}>Delete</button>
        </div>
      )
    }
    
    export default Contact