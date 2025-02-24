// import React from 'react'
// import {Canvas} from '@react-three/fiber'
// import {OrbitControls} from '@react-three/drei'
// import RotatingCube from './Components/RotatingCube'

// const App = () => {
//   return (
//     <Canvas style={{height : '100vh' , width : '100vw' , display : 'flex' ,
//       justifyContent : "center" , alignItems : 'center' }}>
//       <OrbitControls enableZoom enablePan enableRotate/>

//       <directionalLight position={[1 , 1, 1]} intensity={10} color={0x9CDBA6}/>

//       <color attach = "background" args = {['#F0F0F0']}/>

//       <RotatingCube/>
//     </Canvas>
//   )
// }

// export default App

import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App

