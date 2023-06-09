import React, { useState } from 'react'
import '../../pages/style/style.css'

const Heart = () => {

    const [heart, setHeart] = useState(false)

    return (
        <div>
            <span onClick={() => heart ? setHeart(false) : setHeart(true)} className={`heart ${heart ? 'heart-active' : ''}`}></span>
        </div>
    )
}

export default Heart