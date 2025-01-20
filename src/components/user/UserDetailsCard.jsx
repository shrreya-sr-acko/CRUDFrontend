import React, { useState } from 'react'

const UserDetailsCard = ({user, onClose, onDelete, onEdit}) => {
 
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    age: user.age || "",
    status: user.status || "",
  }
  );

  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEdit(false);
    onClose();
    onEdit(user.id, formData);
    
  }

  return (
    <div className='UserDetailsCard popup'>
        <div className="detailsCard">
            <div className="upperCard">
                <div><img src={user.img} alt="" /></div>

                    <div>
                        <h3 className='head'>Name:</h3>
                        <h3 className='head'>Email:</h3>
                        <h3 className='head'>Age:</h3>
                        <h3 className='head'>Status:</h3>
                    </div>

                <div>
                    {!isEdit && 
                        <>
                            <h4 >{user.name}</h4>
                            <h4>{user.email}</h4>
                            <h4>{user.age}</h4>
                            <h4>{user.status}</h4>
                        </>
                    }

                    {isEdit && 
                        <form>
                            <h4><input name='name' type="text" onChange={handleEdit} value={formData.name} /></h4>
                            <h4><input name='email' type="email" onChange={handleEdit}  value={formData.email}/></h4>
                            <h4><input name='age' type="number" onChange={handleEdit} value={formData.age}/></h4>
                            <h4><select name='status' value={formData.status} onChange={handleEdit}>
                                <option value="ACTIVE">ACTIVE</option>
                                <option value="INACTIVE">INACTIVE</option>
                            </select></h4>
                        </form>                
                    }
                </div>
            </div>
            
            <div className='flex'>

                {isEdit && 
                    <button className='roundButton edit margin' onClick={handleSubmit}>Submit</button>
                }
                {!isEdit && 
                    <>
                        <button className='roundButton edit margin' onClick={() => setIsEdit(true)}> Edit Details </button>
                        <button className='roundButton delete margin' onClick={() => {onDelete(user.id); onClose()}}> Delete User </button>
                        
                    </>
                }
                
                <button className='close close-right' onClick={onClose}> Close</button>
                
            </div>
        </div>
    </div>
    
  )
}

export default UserDetailsCard
