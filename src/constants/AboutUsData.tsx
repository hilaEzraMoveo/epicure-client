import {AboutUsDataType} from '../models/aboutUsType';
import EpicureLogo from '../assets/images/epicureLogoAboutUs.svg';
import GooglePlayLogo from '../assets/images/googlePlayLogo.svg'; 
import AppleLogo from '../assets/images/appleLogo.svg';

const AboutUsData: AboutUsDataType = {
    title: 'ABOUT US:',
    logo: EpicureLogo,
    contentOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, dignissim a vestibulum.',
    contentTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum noeu ipsum. Cras porta malesuada eros.',
    appsButtons: [
        {
            logo: GooglePlayLogo,
            contentOne:'Get it on',
            contentTwo: 'Google Play'

        },
        {
            logo: AppleLogo,
            contentOne:'Download on the',
            contentTwo: 'App Store'
        }
    ]
}

export default AboutUsData;