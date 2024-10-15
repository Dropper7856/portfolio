import React, { useEffect } from "react";

export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    callback: (event: MouseEvent | TouchEvent) => void
) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => { // Définir le type de l'événement
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            callback(event); // Appel du callback avec le type correct
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};
