import 'bulma/css/bulma.css'
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
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title = 'Alexa' handle = '@Alexa99' image={AlexaImage}/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title = 'Cortana' handle = '@Cortana32' image={CortanaImage}/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title = 'Siri' handle = '@Siri01' image={SiriImage}/>
                        </div>
                    </div>
                </section>
            </div>   
        </div>
    );
}

export default App;