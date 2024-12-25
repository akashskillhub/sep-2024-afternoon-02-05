import React, { useState } from 'react'

const LearnDarkMode = () => {
    const [isDark, setIsDark] = useState(true)
    return <div className={`${isDark && "dark"}`}>
        <div className='bg-gray-200 dark:bg-gray-800 dark:text-gray-200 h-screen'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quod explicabo possimus, beatae commodi distinctio enim dignissimos voluptas nisi quae dolore, minima officia, totam sunt. Iure ratione consequatur eius explicabo!
        </div>
        <button onClick={e => setIsDark(!isDark)}>toggle</button>
    </div>
}
// framer-motion
// gsap

export default LearnDarkMode