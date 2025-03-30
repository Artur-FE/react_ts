import './styles.css';
import { BoxInfo, TitleCard, AvatarImg } from './styles';
import Avatar from '../../assets/avatar.jpg'

function Lesson09() {

    const textStyles = {color: 'blueviolet', fontSize: '28px'};

    return (
        <div className="lesson09-container">
            <h1>Styling components</h1>
            <div style={{color: 'blueviolet', fontSize: '24px'}}>Inline styles component</div>
            <p style={textStyles}>Inline styles component 1</p>
            <div style={textStyles}>Inline styles component 2</div>
            {/* <BoxInfo primary={true}>Emotion example 1</BoxInfo>
            <BoxInfo primary={false}>Emotion example 2</BoxInfo> */}

            <BoxInfo primary>
                <TitleCard>Max</TitleCard>
                <AvatarImg src={Avatar}/>
            </BoxInfo>
            <BoxInfo>Emotion example 2</BoxInfo>

        </div>
    )
}

export default Lesson09;