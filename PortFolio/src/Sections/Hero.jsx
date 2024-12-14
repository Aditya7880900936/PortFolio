import React, { Suspense } from "react";
import "../index.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../Components/HackerRoom";
import CanvasLoader from "../Components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../Components/Target";
import ReactLogo from "../Components/ReactLogo";
import Cube from "../Components/Cube";
import Rings from "../Components/Rings";
import HeroCamera from "../Components/HeroCamera";
import Button from "../Components/Button";

const Hero = () => {
//   const controls = useControls('HackerRoom',{
//       positionX:{
//         value: 2.5,
//         min: -10,
//         max: 10,
//       },
//       positionY:{
//         value: 2.5,
//         min: -10,
//         max: 10,
//       },
//      positionZ:{
//         value: 2.5,
//         min: -10,
//         max: 10,
//       },
//       rotationX:{
//         value: 0,
//         min: -10,
//         max: 10,
//       },    
//       rotationY:{           
//         value: 0,
//         min: -10,
//         max: 10,
//       },
//       rotationZ:{
//         value: 0,
//         min: -10,
//         max: 10,
//       },
//       scale:{
//         value: 1,
//         min: 0.1,
//         max: 10,
//       },
//   });

  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hello, I am Aditya <span className="waving-hand ">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products And Brands</p>
      </div>

      <div className="w-full h-full absolute inset-0">
      {/* <Leva/> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0, 0, 27]}/>
            <HeroCamera isMobile={isMobile}>
            <HackerRoom
             scale={sizes.deskScale} 
            //  position={[0.9, -9.1, 4.1]} 
             position={sizes.deskPosition} 
             rotation={[0.0, -3.2, 0.0]}
            // position={[controls.positionX, controls.positionY, controls.positionZ]}
            // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
            //  scale={[controls.scale, controls.scale, controls.scale]}
             />
            </HeroCamera>

             <group>
                <Target position={sizes.targetPosition} scale={2}/>
                <ReactLogo position={sizes.reactLogoPosition}/>
                <Cube position={sizes.cubePosition}/>
                <Rings position={sizes.ringPosition}/>
             </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
         <a href="#contact" className="w-fit">
             <Button name="Lets Work Together" isBeam containerClass ="sm:w-fit w-full sm:min-w-96"/>
         </a>
      </div>
    </section>
  );
};

export default Hero;
