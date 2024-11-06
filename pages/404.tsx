// import '../styles/CommonStyles/Text.css'
import npStyles from './404.module.css'
import '../assets/Rick Astley Background.svg'
import React from 'react'

const NoPage = () => {
    const generateLink = () => {
        const randomNumber = Math.ceil(Math.random() * 6);
        if (randomNumber === 1) {
            return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        } else {
            return '/';
        }
    }

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        window.location.href = generateLink()
    }

    return (
        <div className={npStyles.noPageFrame}>
            <div className={npStyles.middleContentContainer}>
                <div className={npStyles.centerTextContainer}>
                    <h1 className={npStyles.noPageTitle}>Error 404!</h1>
                    <p className={`${npStyles.noPageText} ${npStyles.noPageTextStyle}`}>Page Not Found</p>
                </div>
                <div className={npStyles.noPageGame}>
                    <div className={npStyles.gameDescription}>
                    <p className={npStyles.noPageTextStyle}>Let's play a game, Rickroll Russian Roulette!</p>
                    <p className={npStyles.noPageTextStyle}>The button will bring you to the homepage, but there is a catch!</p>
                    <p className={npStyles.noPageTextStyle}>There is a 1/6 chance that you will get rickrolled, let's test your luck!</p>
                    </div>
                    <button className={`${npStyles.gachaButton} ${npStyles.noPageTextStyle}`} onClick={handleClick}>Go Home</button>
                </div>
            </div>
        </div>
    )
}

export default NoPage;