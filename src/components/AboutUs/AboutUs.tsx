import './AboutUs.scss'
import AboutUsData from '../../constants/AboutUsData';

const AboutUs = () => {

    return(
        <div className='about-us-container'>
            <img className='app-logo' src={AboutUsData.logo} alt='Epicure Logo' />
            <div className='buttons-and-about-us'>
                <div className='apps-buttons'>
                    {AboutUsData.appsButtons.map((button, index) => (
                        <button className='app-button' key={index}>
                            <img src={button.logo} alt={button.contentOne} />
                            <div className='button-content-container'>
                                <span className='button-content-one'>{button.contentOne} </span>
                                <span className='button-content-two'>{button.contentTwo}</span>
                            </div>
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