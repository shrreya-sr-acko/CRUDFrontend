import img0 from '../../assets/userImg/0.jpg';
import img1 from '../../assets/userImg/1.jpg';
import img2 from '../../assets/userImg/2.jpg';
import img3 from '../../assets/userImg/3.jpg';
import img4 from '../../assets/userImg/4.jpg';
import img5 from '../../assets/userImg/5.jpg';
import img6 from '../../assets/userImg/6.jpg';
import img7 from '../../assets/userImg/7.jpg';
import img8 from '../../assets/userImg/8.jpg';
import img9 from '../../assets/userImg/9.jpg';
import { useState } from 'react';

const img = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

const FamilyListCard = ({fam, onEdit, onDelete}) => {

  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    name: fam.name || "",
    relation: fam.relation || ""
  }) 

  const onChanges = (e) =>{
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:value,
    }));
  }
  const handleForm = () => {
    onEdit(fam.user.id, fam.id, formData);
    setIsEdit(false);
    setFormData({
      name : fam.name || "",
      relation: fam.relation || ""
    })
  }

  return (
    <div className='FamilyListCard'>
      <div className= "upperCard" >

        <div style={{flex:"10%"}} >
          <img src={img[fam.id%10]} height="50px" alt="Fam_img"/>
        </div>

        <div style={{flex:"90%"}}>
          {!isEdit && 
            <>
              <h3 className='head'>{fam.name}</h3>
              <p className='sub'>{fam.relation}</p>
            </>
          }

          {isEdit && 
            <div className="flex">
              <div>
                <h5>Name:</h5>
                <h5>Relation:</h5>
              </div>
              <div>
                <input onChange={onChanges} name='name' value={formData.name} type="text" />
                <input onChange={onChanges} name='relation' value={formData.relation} type="text" />
              </div>
            </div>
          }          
        </div>
      </div>

      {!isEdit && 
        <div>
          <button className='roundBtn2' style={{background:"#FFAC0F"}} onClick={() => setIsEdit(true)}>Edit Details</button>
          <button className='roundBtn2' style={{background:"#F95156"}} onClick={() => onDelete(fam.user.id, fam.id)}>Delete </button>
        </div>
      }

      {isEdit && 
        <div>
          <button className='roundBtn2' style={{background:"#FFAC0F"}} onClick={handleForm}>Save</button>
          <button className='close' onClick={() => setIsEdit(false)}>Close</button>
        </div>
      }

    </div>
  )
}

export default FamilyListCard