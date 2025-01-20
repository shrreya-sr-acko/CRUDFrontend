import React from 'react'
import useForm from './useForm';

export const NewUser = ({onAdd, onClose}) => {

    const [formData, handleChange] = useForm({
    name: "",
    email: "",
    age: "",
    status: "ACTIVE",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        onClose();
    }
    
  return (
    <div className='popup'>
        <div className="detailsCard">
            <div className="upperCard">
                <form className='flex-form' onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label >Name:</label>
                            <input className='inputField' name='name' type="text" value={formData.name} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input name='email' type="email" value={formData.email} onChange={handleChange} />    
                        </div>
                        <div className="form-group">
                            <label>Age:</label>
                            <input name='age' type="number" value={formData.age} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Status:</label>
                            <select name='status' value={formData.status}  onChange={handleChange}>
                                <option value="ACTIVE">ACTIVE</option>
                                <option value="INACTIVE">INACTIVE</option>
                            </select>
                        </div>

                    <button type='submit' className='roundButton add'> Add </button>
                    <button className='close' onClick={onClose}> Close</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewUser;