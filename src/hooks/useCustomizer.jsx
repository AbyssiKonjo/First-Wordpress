import {useState, useEffect} from 'react'
import axios from 'axios'

const useCustomizer = () => {
    const [bgColor, setBgColor] = useState('');
    const [fontFamily, setFontFamily] = useState('');
    const [mobileMenu, setMobileMenu] = useState('');
    const [navColor, setNavColor] = useState('');
    const [primaryButtonColor, setPrimaryButtonColor] = useState('');
    const [cardPostColor, setCardPostColor] = useState('');

    const baseUrl = import.meta.env.VITE_WP_BASEURL;

    useEffect(()=> {
        axios
        .get(`${baseUrl}wp-json/custom-theme/v1/customizer-settings`)
        .then((response) => {
            const {backgroundColor, fontFamily, mobileMenu, navbarColor, primaryButtonColor, cardPostColor} = response.data;
            setBgColor (backgroundColor);
            setFontFamily (fontFamily);
            setMobileMenu (mobileMenu);
            setNavColor (navbarColor);
            setPrimaryButtonColor (primaryButtonColor);
            setCardPostColor (cardPostColor);
        })
        .catch((error) => {
            console.error('Error fetching customizer settings:', error);
        });
    }, [baseUrl]);

    return {bgColor, fontFamily, mobileMenu, navColor, primaryButtonColor, cardPostColor};
};

export default useCustomizer
