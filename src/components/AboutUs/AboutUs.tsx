import './AboutUs.scss'
import AboutUsData from '../../constants/AboutUsData';

const AboutUs = () => {

    return(
        <div className='about-us-container'>
            <img className='app-logo' src={AboutUsData.logo} alt='Epicure Logo' />
            <div className='buttons-and-about-us'>
                <div className='apps-buttons'>
                    {AboutUsData.appsButtons.map((button, index) => (
                        <button key={index}>
                        <img src={button.logo} alt={button.contentOne} />
                        <span>{button.contentOne}</span>
                        <span>{button.contentTwo}</span>
                        </button>
                    ))}
                </div>
                <div className='about-us-content-container'>
                    <p className='about-us-title'>{AboutUsData.title}</p>
                    <p className='about-us-content-one'>{AboutUsData.contentOne}</p>
                    <p className='about-us-content-two'>{AboutUsData.contentTwo}</p>
                </div>
            </div>        
        </div>

    );

}
export default AboutUs;