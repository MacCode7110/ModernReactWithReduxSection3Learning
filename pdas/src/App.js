import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);
console.log(SiriImage);

/*
<img src={AlexaImage} />
<img src={CortanaImage} />
<img src={SiriImage}/>
*/

function App() {
    return (
        <div>
            <div>Personal Digital Assistance</div>
            <ProfileCard title = 'Alexa' handle = '@Alexa99' image={AlexaImage}/>
            <ProfileCard title = 'Cortana' handle = '@Cortana32' image={CortanaImage}/>
            <ProfileCard title = 'Siri' handle = '@Siri01' image={SiriImage}/>
        </div>
    );
}

export default App;