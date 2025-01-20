import React from 'react'
import useForm from './useForm';

export const NewFamily = ({userId, onAdd, onClose}) => {
    const [formData, handleChange] = useForm({
    name: "",
    relation: "",
    });
    const handleSubmit = (e) => {
        onClose();
        onAdd(userId, formData);
        e.preventDefault()
    }
    
    return (
        <div className='popup'>
            <div className="detailsCard">
                <div className="upperCard">
                    <div>
                    <form className='flex-form' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label >Name:</label>
                            <input className='inputField' name='name' type="text" value={formData.name} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Relation</label>
                            <input name='relation' type="text" value={formData.email} onChange={handleChange} />    
                        </div>

                        <button type='submit' className='roundButton add'> Add </button>
                        
                        </form>
                    </div>
                </div>
                <button className='close' onClick={onClose}> Close</button>     
            </div>
        </div>
  )
}


export default NewFamily;