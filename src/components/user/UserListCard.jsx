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
import next from '../../assets/next.png'

const img = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

const UserListCard = ({user,handleCard}) => {
    return(
    <div className="UserListCard">
        <div className= "upperCard" >

            <div style={{flex:"6%"}} >
                <img src={img[user.id%10]} height="50px" alt="User_img"/>
            </div>

            <div style={{flex:"92%"}}>
                <p className='head'>{user.name}</p>
                <p className='sub'>{user.email}</p>
            </div>

            <div style={{flex:"3%"}}>
                <button><img src={next} onClick={() => handleCard(user.id, img[user.id%10])}/></button>
            </div>
        </div>
        <p className= {`status ${user.status == "ACTIVE" ? 'active' : 'inactive '}`} >{user.status}</p>
    </div>)

};


export default UserListCard;