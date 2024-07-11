import { useState } from 'react';

function useVisibility(initialVisibility = false) {
    const [isVisible, setIsVisible] = useState(initialVisibility)

    const show = () => setIsVisible(true)

    const hide = () => setIsVisible(false)

    const toggle = () => setIsVisible(!isVisible)

    return {
        isVisible,
        show,
        hide,
        toggle
    }
}

export default useVisibility;