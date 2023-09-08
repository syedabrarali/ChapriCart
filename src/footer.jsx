import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';


const Footer = () => {
    return (
    <div className="footer-ctr">
        <BottomNavigation className="btnav">
                <BottomNavigationAction
                label="Contact Us"
                value="ContactUs"
                icon={<ContactSupportIcon />}
            />
            <BottomNavigationAction
                label="Instagram"
                value="Insta"
                icon={<InstagramIcon />}
            />
            <BottomNavigationAction
                label="Twitter"
                value="twitter"
                icon={<TwitterIcon />}
            />
            <BottomNavigationAction 
                label="Youtube" 
                value="yt" 
                icon={<SubscriptionsOutlinedIcon />} />
        </BottomNavigation>
    </div>  
    )
}

export default Footer;
