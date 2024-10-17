import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Ici, 768px est la largeur max pour mobile, tu peux ajuster si besoin
        };

        handleResize(); // Vérifie initialement si la taille correspond à un mobile
        window.addEventListener('resize', handleResize); // Écoute les changements de taille

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};

export default useIsMobile;
