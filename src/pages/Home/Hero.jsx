"use client";
import React, { Suspense, use, useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import { Bebas_Neue, Montez } from "next/font/google";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
import coconut from "../../app/assets/HERO-SECTION/sunlover-cocco-1.webp";
import choclate from "../../app/assets/HERO-SECTION/CHOCOLATE.webp";
import berry from "../../app/assets/HERO-SECTION/straw.webp";
import caramel from "../../app/assets/HERO-SECTION/caramel.webp";
import flower from "../../app/assets/HERO-SECTION/sunlover-vanilla-1.webp";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import SecondSection from "./SecondSection";
import useMeasure from "react-use-measure";
import newRound from "@/app/assets/HERO-SECTION/hero-bg.webp";
import heroCircleMob from "../../app/assets/MOBILE/hero-circle-mob.png";
import Lenis from "@studio-freight/lenis";
import { useLenisScroll } from "@/components/SmoothScroll";

const thunder = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});
const BebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  weight: "600",
  subsets: ["latin"],
});

// -----STARWBERRY TUB CODE----

function Dub2Model({ value, rotateY }) {
  const glb = useGLTF("/assets/HERO 3D/Strawberry.glb");
  const modelRef = useRef();
  const { gl } = useThree();

  useEffect(() => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // Fix blurring issue by adjusting material properties
        child.material.roughness = 0.5;
        child.material.metalness = 0.3;
        child.material.envMapIntensity = 1.5;

        // Fix rendering issues
        child.material.transparent = false;
        child.material.depthWrite = true;
        child.material.depthTest = true;

        // Improve texture clarity
        const texture = child.material.map;
        if (texture) {
          texture.anisotropy = gl.capabilities.getMaxAnisotropy();
          texture.needsUpdate = true;
        }

        child.castShadow = true;
        child.receiveShadow = true;
        child.material.needsUpdate = true;
      }
    });
  }, [glb, gl]); // Add gl to dependency array

  useFrame(() => {
    if (rotateY && modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Smooth Y-axis rotation
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={glb.scene}
      scale={[3.5, 3.5, 3.5]}
      position={[0, -1.65, 0]}
      rotation={[0, value * 0.00915, 0]} // Adjust rotation
    />
  );
}

// Spotlight for dynamic lighting based on scroll position
function SpotlightFollower({ value }) {
  const spotlightRef = useRef();

  useFrame(() => {
    if (spotlightRef.current) {
      const normalizedValue = Math.min(value / 300, 1);
      spotlightRef.current.position.x = 3 - normalizedValue * 6;
      spotlightRef.current.position.y = 4 - normalizedValue * 2;

      // Adjust light intensity dynamically
      if (value > 400) {
        spotlightRef.current.intensity = 15 + Math.sin(Date.now() * 0.002) * 3;
      } else {
        spotlightRef.current.intensity = 12;
      }
    }
  });

  return (
    <spotLight
      ref={spotlightRef}
      position={[3, 4, 5]}
      angle={0.3}
      penumbra={0.9}
      intensity={12}
      distance={15}
      color="#ffffff"
      castShadow
    />
  );
}

// ---------ENDS HERE--------

function Dub1Model() {
  const glb = useGLTF("/assets/HERO 3D/SPANISH.glb");

  useEffect(() => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // Add roughness to all materials
        child.material.roughness = 0.7; // Adjust value between 0-1
        child.material.metalness = 0.7; // Adjust value between 0-1
        child.material.needsUpdate = true;
      }
    });
  }, [glb]);

  return (
    <primitive
      object={glb.scene}
      scale={[3.5, 3.5, 3.5]}
      position={[0, -1.65, 0]}
    />
  );
}

function Dub3Model() {
  const glb = useGLTF("/assets/HERO 3D/CHOCOLATE.glb");

  useEffect(() => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // Add roughness to all materials
        child.material.roughness = 0.6; // Adjust value between 0-1
        child.material.metalness = 0.7; // Adjust value between 0-1
        child.material.needsUpdate = true;
      }
    });
  }, [glb]);

  return (
    <primitive
      object={glb.scene}
      scale={[3.5, 3.5, 3.5]}
      position={[0, -1.65, 0]}
    />
  );
}

// -----MOBILE-MODELS----

function Dub1ModelMob() {
  const glb = useGLTF("/assets/HERO 3D/SPANISH.glb");

  useEffect(() => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // Add roughness to all materials
        child.material.roughness = 0.7; // Adjust value between 0-1
        child.material.metalness = 0.7; // Adjust value between 0-1
        child.material.needsUpdate = true;
      }
    });
  }, [glb]);

  return (
    <primitive
      object={glb.scene}
      scale={[3, 3, 3]}
      position={[1, -1.3, 0]}
      rotation={[0, 0, Math.PI / 6]} // Rotate 30 degrees on Z-axis
    />
  );
}

function Dub2ModelMob({ mobileValue, rotateY }) {
  const glb = useGLTF("/assets/HERO 3D/Strawberry.glb");
  const modelRef = useRef();
  const { gl } = useThree();
  useEffect(() => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // Enhance materials for better reflections

        // child.material.roughness = 0.1; // Lower roughness for more reflective surface
        // child.material.metalness = 0.7; // Higher metalness for better reflections

        // Fix rendering issues
        child.material.transparent = false;
        child.material.depthWrite = true;
        child.material.depthTest = true;

        // Improve texture clarity
        const texture = child.material.map;
        if (texture) {
          texture.anisotropy = gl.capabilities.getMaxAnisotropy();
          texture.needsUpdate = true;
        }

        // Adjust for plastic-like material
        child.material.roughness = 0.5; // Adjust value between 0-1
        child.material.metalness = 0.3; // Adjust value between 0-1
        child.material.envMapIntensity = 1.5; // Keep environment reflections
        child.material.needsUpdate = true;

        // Enable shadows
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [glb, gl]);

  useFrame(() => {
    if (rotateY && modelRef.current) {
      modelRef.current.rotation.y += 0.01; //Adjustment of Y rotation mobile
    }
  });
  return (
    <primitive
      ref={modelRef}
      object={glb.scene}
      scale={[3.5, 3.5, 3.5]}
      position={[0, -1.65, 0]}
      rotation={[0, mobileValue * 0.0082, 0]} //Adjustment of facing position on stage mobile
    />
  );
}

function Dub3ModelMob() {
  const glb = useGLTF("/assets/HERO 3D/CHOCOLATE.glb");

  useEffect(() => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // Add roughness to all materials
        child.material.roughness = 0.6; // Adjust value between 0-1
        child.material.metalness = 0.7; // Adjust value between 0-1
        child.material.needsUpdate = true;
      }
    });
  }, [glb]);

  return (
    <primitive
      object={glb.scene}
      scale={[3, 3, 3]}
      position={[-1, -1.3, 0]}
      rotation={[0, 0, -Math.PI / 6]} // Rotate 30 degrees on Z-axis
    />
  );
}

function Hero() {
  const [value, setValue] = useState(0);
  const [mobileValue, setMobileValue] = useState(0);
  const [stageTop, setStageTop] = useState(0);
  const [stageTopMobile, setStageTopMobile] = useState(0);
  const [dubTop, setDubTop] = useState(0);
  const [dubTopMobile, setDubTopMobile] = useState(0);
  const [limit, setLimit] = useState(500);
  const [limitMobile, setLimitMobile] = useState(500);
  const [rotateY, setRotateY] = useState(false);

  const scrollY = useLenisScroll();
  const containerRef = useRef();

  const hasSetDubTop = useRef(false); // Tracks if value was set
  const hasSetDubTopMobile = useRef(false); // Tracks if value was set

  const [dubRef, dubBounds] = useMeasure({
    scroll: true,
    debounce: 50,
  });
  const [dubRefMobile, dubBoundsMobile] = useMeasure({
    scroll: true,
    debounce: 50,
  });

  //Stop position adjustment of main Dub
  useEffect(() => {
    if (dubTop && stageTop) {
      setLimit(stageTop - dubTop + 55);
    }
  }, [dubTop, stageTop]);

  useEffect(() => {
    if (dubTopMobile && stageTopMobile) {
      setLimitMobile(stageTopMobile - dubTopMobile + 35);
    }
  }, [dubTopMobile, stageTopMobile]);

  // useEffect(() => {
  //   console.log(dubTop, "dubTop");
  //   console.log(stageTop, "stageTop");
  // }, [dubTop, stageTop]);

  // useEffect(() => {
  //   console.log(Math.round(value), "value");
  // }, [value]);

  useEffect(() => {
    if (!hasSetDubTop.current) {
      setDubTop(dubBounds.top + dubBounds.height);
      if (dubBounds.top != 0) {
        hasSetDubTop.current = true;
      }
    }
  }, [dubBounds]);

  useEffect(() => {
    if (!hasSetDubTopMobile.current) {
      setDubTopMobile(dubBoundsMobile.top + dubBoundsMobile.height);
      if (dubBoundsMobile.top != 0) {
        hasSetDubTopMobile.current = true;
      }
    }
  }, [dubBoundsMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      if (containerTop < -limit) {
        if (value !== limit) {
          setValue(limit);
          setRotateY(true);
        }
      } else if (containerTop < 0) {
        if (value !== -containerTop) {
          setValue(-containerTop);
          setRotateY(false);
        }
      } else {
        setValue(0);
        setRotateY(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit]);

  // IF USING LENIS USE THIS USEEFFECT INSTEAD OF THE ABOVE ONE

  // useEffect(() => {
  //   if (!containerRef.current) return;
  // const containerTop = Math.round(scrollY);
  //   const containerTop = Math.round(scrollY / 2) * 2;
  //   console.log(containerTop,"containertop");

  //   if (containerTop > limit) {
  //     if (value !== limit) {
  //       setValue(limit);
  //       setRotateY(true);
  //     }
  //   } else if (containerTop > 0) {
  //     if (value !== containerTop) {
  //       setValue(containerTop);
  //       setRotateY(false);
  //     }
  //   } else {
  //     setValue(0);
  //     setRotateY(false);
  //   }
  // }, [scrollY, limit]);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = Math.round(
        containerRef.current.getBoundingClientRect().top
      );
      if (containerTop < -limitMobile) {
        setMobileValue(limitMobile);
        setRotateY(true);
      } else if (containerTop < 0) {
        setMobileValue(-containerTop);
        setRotateY(false);
      } else {
        setMobileValue(0);
        setRotateY(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limitMobile]);

  return (
    <>
      <div
        ref={containerRef}
        className=" w-screen h-screen bg-gradient-to-b from-red-800 to-red-900  relative text-white overflow-x-clip"
      >
        <div className="w-full h-screen absolute hidden lg:block -bottom-[40vh] z-0 ">
          <div className="w-full h-full mx-auto">
            <Image src={newRound} alt="new" className="" />
          </div>
        </div>

        <div className="w-full h-screen absolute  lg:hidden -bottom-[72vh] md:-bottom-[60vh] z-0 ">
          <div className="w-full h-full mx-auto">
            <Image src={heroCircleMob} alt="new" className="" />
          </div>
        </div>

        <div className=" w-screen h-screen absolute top-0 left-0 pt-6 px-5 lg:px-20 ">
          {/* ----TEXT AND ICE CREAM CONTAINERS---- */}
          <div className="flex h-full w-full flex-col justify-between">
            <div className=" flex  z-30 lg:z-50">
              <Navbar />
            </div>
            <div className=" flex flex-col justify-between ">
              <div className=" w-full  flex  lg:justify-center  ">
                <h1
                  className={`mt-10 leading-none w-full justify-center lg:text-[16vw] xl:text-[16.5vw] hidden lg:flex ${thunder.className} text-white font-extrabold`}
                >
                  SHARING THE JOY!
                </h1>
              </div>
              {/* ----MOBILE VERSION--- */}
              <div className=" w-full lg:hidden  flex justify-evenly gap-16 lg:gap-0  flex-col ">
                <h1
                  className={`text-[38.5vw] w-full leading-none lg:text-[18vw] ${thunder.className} text-white flex justify-center font-extrabold`}
                >
                  SCOOP
                </h1>
                <h1
                  className={`text-[30vw] w-full leading-none lg:text-[18vw] flex justify-center text-white flex-1 ${thunder.className}  -mt-24 lg:mt-0`}
                >
                  THE JOY!
                </h1>
              </div>
              <h1
                className={` ${manrope.className} w-full lg:-mt-8 lg:w-72 leading-7 lg:leading-9 text-center lg:text-start  text-white text-xl md:text-2xl lg:text-[1.75rem] font-semibold`}
              >
                Indulge in the creamiest flavors, crafted with love!
              </h1>
            </div>

            <div className="hidden xl:block h-full w-full relative">
              <motion.div
                ref={dubRef}
                style={{
                  transform: `translateY(${value}px)`,
                }}
                className="absolute bottom-10 w-full  flex items-center justify-center h-[22rem] z-20"
              >
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  shadows
                  dpr={[1, 2]} // High DPI rendering for better quality
                  gl={{ antialias: true }} // Enable anti-aliasing
                >
                  {/* Create environment for reflections */}
                  {/* <Environment 
                     preset="sunset"
                    background={false}
                      intensity={0.3}
                       /> */}

                  {/* Base ambient light */}
                  <ambientLight intensity={2} />

                  {/* Directional lights to enhance form and add edge highlights */}
                  <directionalLight
                    position={[2, 0, 1]}
                    intensity={1}
                    shadow-camera-left={1}
                    shadow-camera-right={1}
                  />

                  <directionalLight position={[-2, 0, 1]} intensity={1} />

                  {/* Rim light to create separation from background */}
                  <spotLight
                    position={[-5, 2, -8]}
                    angle={0.5}
                    penumbra={0.8}
                    intensity={8}
                    color="#ff9999"
                  />

                  {/* Environmental reflection simulation */}
                  <hemisphereLight
                    intensity={0.8}
                    groundColor="#111111"
                    color="#EA2424"
                  />

                  {/* Dynamic reflection effect that changes with scroll */}
                  <SpotlightFollower value={value} />

                  {/* Main model */}
                  <Dub2Model value={value} rotateY={rotateY} />
                </Canvas>
              </motion.div>

              <motion.div
                initial={{ x: -180, rotateZ: 0 }}
                animate={{ x: 15, rotateZ: 30 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                className=" absolute z-10  bottom-12 left-1/2 -translate-x-1/2 h-[15rem] w-[20rem]  overflow-hidden"
              >
                <Canvas
                  resize={{ scroll: false, debounce: 0 }}
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  {/* Base ambient light */}
                  <ambientLight intensity={4} />

                  {/* Side specular highlight */}
                  <spotLight
                    position={[8, 3, 8]}
                    angle={0.4}
                    penumbra={0.7}
                    intensity={22}
                    distance={12}
                  />

                  <directionalLight position={[2, 0, 1]} intensity={1.8} />

                  <directionalLight position={[-2, 0, 1]} intensity={1.8} />

                  {/* Environmental reflection simulation */}
                  <hemisphereLight
                    intensity={1}
                    groundColor="#111111"
                    color="#EA2424"
                  />

                  <Dub3Model />
                </Canvas>
              </motion.div>
              <motion.div
                initial={{ x: 180, rotateZ: 0 }}
                animate={{ x: 10, rotateZ: -30 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                className="absolute bottom-[3.7rem] right-1/2 translate-x-1/2 h-[15rem] w-[20rem] z-10 overflow-hidden"
              >
                <Canvas
                  resize={{ scroll: false, debounce: 0 }}
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  {/* Base ambient light */}
                  <ambientLight intensity={3} />

                  {/* Side specular highlight */}
                  <spotLight
                    position={[8, 3, 8]}
                    angle={0.4}
                    penumbra={0.7}
                    intensity={22}
                    distance={12}
                  />

                  {/* Subtle fill light */}
                  <directionalLight position={[-3, 0, 1]} intensity={2.2} />

                  {/* Subtle fill light */}
                  <directionalLight position={[3, 0, 1]} intensity={2.2} />

                  {/* Environmental reflection simulation */}
                  <hemisphereLight
                    intensity={2}
                    groundColor="#111111"
                    color="#EA2424"
                  />
                  <Dub1Model />
                </Canvas>
              </motion.div>
            </div>

            {/* ----MOBILE VERSION---- */}
            <div className="xl:hidden relative flex items-center justify-center h-full w-full">
              <motion.div
                ref={dubRefMobile}
                style={{
                  transform: `translateY(${mobileValue}px)`,
                }}
                // className="absolute bottom-8  w-full  flex items-center justify-center  h-[15rem] md:h-[25rem]  z-20"
                className="w-full  flex items-center justify-center  h-[15rem] md:h-[25rem]  z-20"
              >
                <Canvas
                  resize={{ scroll: false, debounce: 0 }}
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ width: "100%", height: "100%" }}
                  shadows
                  dpr={[1, 2]} // High DPI rendering for better quality
                  gl={{ antialias: true }} // Enable anti-aliasing
                >
                  {/* Create environment for reflections */}
                  {/* <Environment 
                     preset="sunset"
                     background={false}
                     intensity={0.3}
                   /> */}

                  {/* Base ambient light */}
                  <ambientLight intensity={2} />

                  {/* Directional lights to enhance form and add edge highlights */}
                  <directionalLight
                    position={[2, 0, 1]}
                    intensity={1}
                    shadow-camera-left={1}
                    shadow-camera-right={1}
                  />

                  <directionalLight position={[-2, 0, 1]} intensity={1} />

                  {/* Rim light to create separation from background */}
                  <spotLight
                    position={[-5, 2, -8]}
                    angle={0.5}
                    penumbra={0.8}
                    intensity={8}
                    color="#ff9999"
                  />

                  {/* Environmental reflection simulation */}
                  <hemisphereLight
                    intensity={0.8}
                    groundColor="#111111"
                    color="#EA2424"
                  />

                  {/* Dynamic reflection effect that changes with scroll */}
                  <SpotlightFollower value={value} />

                  <Dub2ModelMob mobileValue={mobileValue} rotateY={rotateY} />
                </Canvas>
              </motion.div>

              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 50 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                className=" absolute flex justify-center z-10  bottom-10 left-1/2 -translate-x-1/2 h-[12rem] md:h-[22rem] w-[11rem] md:w-[21rem]  overflow-hidden"
              >
                <Canvas
                  resize={{ scroll: false, debounce: 0 }}
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  {/* Base ambient light */}
                  <ambientLight intensity={4} />

                  {/* Side specular highlight */}
                  <spotLight
                    position={[8, 3, 8]}
                    angle={0.4}
                    penumbra={0.7}
                    intensity={22}
                    distance={12}
                  />

                  <directionalLight position={[2, 0, 1]} intensity={1.8} />

                  <directionalLight position={[-2, 0, 1]} intensity={1.8} />

                  {/* Environmental reflection simulation */}
                  <hemisphereLight
                    intensity={1}
                    groundColor="#111111"
                    color="#EA2424"
                  />
                  <Dub3ModelMob />
                </Canvas>
              </motion.div>

              <motion.div
                initial={{ x: 100 }}
                animate={{ x: -30 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                className="absolute flex justify-center bottom-11 right-1/2 translate-x-1/2 h-[12rem] md:h-[22rem] w-[11rem] md:w-[21rem] z-10 overflow-hidden"
              >
                <Canvas
                  resize={{ scroll: false, debounce: 0 }}
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  {/* Base ambient light */}
                  <ambientLight intensity={3} />

                  {/* Side specular highlight */}
                  <spotLight
                    position={[8, 3, 8]}
                    angle={0.4}
                    penumbra={0.7}
                    intensity={22}
                    distance={12}
                  />

                  {/* Subtle fill light */}
                  <directionalLight position={[-3, 0, 1]} intensity={2.2} />

                  {/* Subtle fill light */}
                  <directionalLight position={[3, 0, 1]} intensity={2.2} />

                  {/* Environmental reflection simulation */}
                  <hemisphereLight
                    intensity={2}
                    groundColor="#111111"
                    color="#EA2424"
                  />
                  <Dub1ModelMob />
                </Canvas>
              </motion.div>
            </div>
          </div>

          {/* ----FRUITS ICONS----- */}
          <div className=" w-full h-full absolute top-0 left-0 flex justify-between">
            <div className="hidden lg:flex items-center gap-32 w-full justify-between overflow-hidden">
              <motion.div
                initial={{ x: 300, y: 200 }}
                animate={{ x: 0, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className=" -ml-20 mt-20 z-50 transform -translate-y-1/2 animate-float-fast"
              >
                <Image alt="coconut" src={coconut} width={200} />
              </motion.div>
              <motion.div
                initial={{ x: 100, y: 300 }}
                animate={{ x: 0, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className=" relative -mt-[30rem] ml-16 bg-whit   z-50 flex flex-shrink-0"
              >
                <Image
                  alt="choclate"
                  src={choclate}
                  width={130}
                  className="z-50 mt-44 transform -translate-y-1/2 animate-float-fast"
                />
              </motion.div>
              <motion.div
                initial={{ x: 100, y: 300 }}
                animate={{ x: 0, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className=" z-50 -mt-32  ml-56 flex flex-shrink-0 transform -translate-y-1/2 animate-float-fast"
              >
                <Image alt="berry" src={berry} width={120} />
              </motion.div>
              <motion.div
                className="z-50 -mt-56 transform -translate-y-1/2 animate-float-fast"
                initial={{ x: 0, y: 300 }}
                animate={{ x: 0, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
              >
                <Image alt="caramel" src={caramel} width={140} />
              </motion.div>
              <motion.div
                initial={{ x: -300, y: 300 }}
                animate={{ x: 0, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className=" z-20 -mt-54 -mr-16 -mt-28 transform -translate-y-1/2 animate-float-fast"
              >
                <Image alt="flower" src={flower} width={160} />
              </motion.div>
            </div>

            {/* ---MOBILE VERSION---- */}
            <div className="lg:hidden relative h-screen w-screen overflow-hidden">
              <motion.div
                initial={{ x: 100, y: 300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className="absolute top-[13rem] -left-9 transform -translate-y-1/2 animate-float-fast"
              >
                <Image alt="coconut" src={coconut} width={110} />
              </motion.div>
              <motion.div
                initial={{ x: -50, y: 300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className="absolute z-20 top-[10rem] left-[10.5rem] flex flex-shrink-0 transform -translate-y-1/2 animate-float-fast"
              >
                <Image alt="choclate" src={choclate} width={65} className="" />
              </motion.div>
              <motion.div
                initial={{ x: 0, y: 300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className="absolute z-20 top-[17rem] left-[9.5rem] flex flex-shrink-0 transform -translate-y-1/2 animate-float-fast"
              >
                <Image alt="berry" src={berry} width={65} />
              </motion.div>
              <motion.div
                className="absolute z-20 top-[20rem] left-[15.5rem]"
                initial={{ x: -20, y: 300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
              >
                <Image
                  alt="caramel"
                  src={caramel}
                  width={90}
                  className=" transform -translate-y-1/2 animate-float-fast"
                />
              </motion.div>
              <motion.div
                initial={{ x: -100, y: 300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className="absolute -right-11 top-[10rem] transform -translate-y-1/2 animate-float-fast"
              >
                <Image src={flower} alt="flower" width={110} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <SecondSection
        setStageTopMobile={setStageTopMobile}
        setStageTop={setStageTop}
      />
    </>
  );
}

export default Hero;
