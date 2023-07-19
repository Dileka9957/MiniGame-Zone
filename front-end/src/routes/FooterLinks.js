import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';


const AboutUs = Loadable(lazy(() => import('views/footer/footer-components/about-us/AboutUs')));
const ContactUs = Loadable(lazy(() => import('views/footer/footer-components/contact-us/ContactUs')));
const TermsAndConditions = Loadable(lazy(() => import('views/footer/footer-components/terms-and-conditions/TermsAndConditions')));
const PrivacyPolicy = Loadable(lazy(() => import('views/footer/footer-components/privacy-policy/PrivacyPolicy')));



// ==============================|| AUTHENTICATION ROUTING ||============================== //

const FooterLinks = {
    path: '/',
    children: [
        {
            path:'/about-us',
            element:<AboutUs/>
        },
        {
            path:'/contact-us',
            element:<ContactUs/>
        },
        {
            path:'/terms-and-conditions',
            element:<TermsAndConditions/>
        },
        {
            path:'/privacy-policy',
            element:<PrivacyPolicy/>
        }
    ]
};

export default FooterLinks;
