import React, { useState } from 'react';
import "./styleToggle.css";

const StyleToggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleOnClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <div className='style_toggle_container'>
                <button
                    className={`style_toggle_button ${isToggled ? 'dark' : 'light'}`}
                    onClick={handleOnClick}
                >
                    <div className="style_toggle_button-bg">
                        <span className="style_toggle_button-span"></span>
                    </div>

                </button>
            </div>
        </>
    )
}

export default StyleToggle;