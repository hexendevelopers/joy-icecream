"use client";
import React, { Suspense, use, useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import { Bebas_Neue, Montez } from "next/font/google";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import bg from "../../app/assets/HERO-SECTION/background-one.png";
import mobBg from "../../app/assets/MOBILE/HOME/mobile-background1.png";
import Image from "next/image";
import dubOne from "../../app/assets/HERO-SECTION/130.png";
import dubTwo from "../../app/assets/HERO-SECTION/131.png";
import dubThree from "../../app/assets/HERO-SECTION/132.png";
import { motion } from "framer-motion";
import coconut from "../../app/assets/HERO-SECTION/sunlover-cocco-1.png";
import choclate from "../../app/assets/HERO-SECTION/CHOCOLATE.png";
import berry from "../../app/assets/HERO-SECTION/straw.png";
import caramel from "../../app/assets/HERO-SECTION/caramel.png";
import flower from "../../app/assets/HERO-SECTION/sunlover-vanilla-1.png";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import SecondSection from "./SecondSection";
import useMeasure from "react-use-measure";

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

function Dub1Model() {
  const glb = useGLTF("/assets/HERO 3D/SPANISH.glb");
  return (
    <primitive object={glb.scene} scale={[2.5, 2, 1.5]} position={[0, 0, 0]} />
  );
}
function Dub2Model({ value }) {
  const glb = useGLTF("/assets/HERO 3D/Strawberry.glb");
  return (
    <primitive
      object={glb.scene}
      scale={[3.9, 3.05, 3.9]}
      position={[0, 0, 0]}
      rotation={[0, value * 0.0085, 0]}
    />
  );
}
function Dub3Model() {
  const glb = useGLTF("/assets/HERO 3D/CHOCOLATE.glb");
  return (
    <primitive object={glb.scene} scale={[2.5, 2, 1.5]} position={[0, 0, 0]} />
  );
}

// -----MOBILE-MODELS----

function Dub1ModelMob() {
  const glb = useGLTF("/assets/HERO 3D/SPANISH.glb");
  return (
    <primitive object={glb.scene} scale={[1.4, 1.2, 2]} position={[0, 0, 0]} />
  );
}
function Dub2ModelMob({ mobileValue }) {
  const glb = useGLTF("/assets/HERO 3D/Strawberry.glb");
  return (
    <primitive
      object={glb.scene}
      scale={[1.8, 1.5, 2]}
      position={[0, 0, 0]}
      rotation={[0, mobileValue * 0.0078, 0]}
    />
  );
}
function Dub3ModelMob() {
  const glb = useGLTF("/assets/HERO 3D/CHOCOLATE.glb");
  return (
    <primitive object={glb.scene} scale={[1.4, 1.2, 2]} position={[0, 0, 0]} />
  );
}

function Hero() {
  const [value, setValue] = useState(0);
  const [mobileValue, setMobileValue] = useState(0);
  const containerRef = useRef();
  const [stageTop, setStageTop] = useState(0);
  const [dubTop, setDubTop] = useState(0);
  const [limit, setLimit] = useState(500);

  const hasSetDubTop = useRef(false); // Tracks if value was set


  const [dubRef, dubBounds] = useMeasure({
    scroll: true,
    debounce: 50,
  });

  useEffect(() => {
    if (dubTop && stageTop) {
      setLimit((stageTop - dubTop)-330);
    }
  }, [dubTop, stageTop]);

  useEffect(() => {
    console.log(dubTop, "dubTop");
    console.log(stageTop, "stageTop");
  }, [dubTop, stageTop]);


  useEffect(() => {
    console.log(limit, "limit");
  }, [limit]);

  useEffect(() => {
    if (!hasSetDubTop.current) {
      setDubTop(dubBounds.top);
      if (dubBounds.top != 0) {
        hasSetDubTop.current = true; // Prevent future updates
      }
    }
  }, [dubBounds]);


  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      if (containerTop < -limit) {
        setValue(limit);
      } else if (containerTop < 0) {
        setValue(-containerTop);
      } else {
        setValue(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit]);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      if (containerTop < -limit) {
        setMobileValue(limit);
      } else if (containerTop < 0) {
        setMobileValue(-containerTop);
      } else {
        setMobileValue(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit]);

  //  useEffect(() => {
  //     console.log(mobileValue);
  //   }, [mobileValue]);

  return (
    <>
      <div
        ref={containerRef}
        className=" w-full h-screen  bg-gradient-to-b from-red-900 to-red-500  relative"
      >
        <Image
          src={bg}
          alt="bg"
          className=" w-full h-full hidden md:block bg-cover"
        />
        <Image
          src={mobBg}
          alt="bg"
          className=" w-full h-full  md:hidden object-contain object-bottom "
        />

        <div className=" w-full h-full absolute top-0 left-0 pt-10 px-8 lg:px-20">
          <div className=" w-full h-full flex flex-col justify-between">
            <div className=" flex flex-col gap-5">
              <Navbar />
              <hr className=" w-full border-gray-300" />
              <div className=" flex flex-col justify-center lg:gap-3 -mt-8 lg:-mt-16">
                <div className=" w-full  flex justify-evenly md:gap-12  flex-col md:flex-row ">
                  <h1
                    className={`text-[10rem] md:text-[11rem] xl:text-[16.5rem] ${thunder.className} font-extrabold`}
                  >
                    SCOOP
                  </h1>
                  <h1
                    className={`text-[8rem] md:text-[11rem]  xl:text-[16.5rem]  flex-1 ${thunder.className}  -mt-24 md:mt-0`}
                  >
                    THE JOY!
                  </h1>
                </div>
                <h1
                  className={` ${manrope.className} w-full lg:w-72 -mt-10 leading-7 lg:leading-9 text-center lg:text-start  text-white text-xl lg:text-[1.75rem] font-semibold lg:-mt-32 `}
                >
                  Indulge in the creamiest flavors, crafted with love!
                </h1>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <motion.div
                ref={dubRef}
                style={{
                  transform: `translateY(${value}px)`,
                }}
                className="absolute  bottom-11 w-full flex items-center justify-center  h-[24rem]  z-20"
              >
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={1} />
                  <hemisphereLight intensity={1.5} groundColor="#ff0000" />
                  <directionalLight position={[2, 2, 5]} intensity={1} />
                  <Dub2Model value={value} />
                </Canvas>
              </motion.div>

              <motion.div
                initial={{ x: -200, rotateZ: 0 }}
                animate={{ x: 0, rotateZ: 30 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                className=" absolute  -bottom-14 right-[17rem] h-[30rem] w-[20rem]  overflow-hidden"
              >
                <Canvas
                  resize={{ scroll: false, debounce: 0 }}
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <ambientLight intensity={1} />
                  <hemisphereLight intensity={1.5} groundColor="#ff0000" />
                  <directionalLight position={[2, 2, 5]} intensity={1} />
                  <Dub3Model />
                </Canvas>
              </motion.div>

              <motion.div
                initial={{ x: 200, rotateZ: 0 }}
                animate={{ x: 0, rotateZ: -30 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                className="absolute -bottom-14 left-[17rem] h-[30rem] w-[20rem] z-10 overflow-hidden"
              >
                <Canvas
                  resize={{ scroll: false, debounce: 0 }}
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <ambientLight intensity={1} />
                  <hemisphereLight intensity={1.5} groundColor="#ff0000" />
                  <directionalLight position={[2, 2, 5]} intensity={1} />
                  <Dub1Model />
                </Canvas>
              </motion.div>
            </div>

            {/* ----MOBILE VERSION---- */}
            <div className="lg:hidden relative">
              <motion.div
                style={{
                  transform: `translateY(${mobileValue}px)`,
                }}
                className="absolute  -bottom-16 w-full flex items-center justify-center  h-[35rem]  z-20"
              >
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={1} />
                  <hemisphereLight intensity={1.5} groundColor="#ff0000" />
                  <directionalLight position={[2, 2, 5]} intensity={1} />
                  <Dub2ModelMob mobileValue={mobileValue} />
                </Canvas>
              </motion.div>

              <motion.div
                initial={{ x: -100, rotateZ: 0 }}
                animate={{ x: 0, rotateZ: 30 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                className=" absolute  -bottom-14 -right-24 h-[30rem] w-[20rem]  overflow-hidden"
              >
                <Canvas
                  resize={{ scroll: false, debounce: 0 }}
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <ambientLight intensity={1} />
                  <hemisphereLight intensity={1.5} groundColor="#ff0000" />
                  <directionalLight position={[2, 2, 5]} intensity={1} />
                  <Dub3ModelMob />
                </Canvas>
              </motion.div>

              <motion.div
                initial={{ x: 100, rotateZ: 0 }}
                animate={{ x: 0, rotateZ: -30 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                className="absolute -bottom-14 -left-24 h-[30rem] w-[20rem] z-10 overflow-hidden"
              >
                <Canvas
                  resize={{ scroll: false, debounce: 0 }}
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <ambientLight intensity={1} />
                  <hemisphereLight intensity={1.5} groundColor="#ff0000" />
                  <directionalLight position={[2, 2, 5]} intensity={1} />
                  <Dub1ModelMob />
                </Canvas>
              </motion.div>
            </div>
          </div>
        </div>

        <div className=" w-full h-full absolute top-0 left-0 flex  justify-between">
          <div className="hidden md:flex items-center gap-32 w-full justify-between overflow-hidden">
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
              <Image src={coconut} width={200} />
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
              className=" z-10 -mt-32  ml-56 flex flex-shrink-0 transform -translate-y-1/2 animate-float-fast"
            >
              <Image src={berry} width={120} />
            </motion.div>
            <motion.div
              className=" "
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
              <Image
                src={caramel}
                width={140}
                className=" -mt-56 transform -translate-y-1/2 animate-float-fast"
              />
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
              <Image src={flower} width={160} />
            </motion.div>
          </div>

          {/* ---MOBILE VERSION---- */}
          <div className="md:hidden relative h-screen w-screen overflow-hidden">
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
              <Image src={coconut} width={110} />
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
              className="absolute top-[10rem] left-[10.5rem] flex flex-shrink-0 transform -translate-y-1/2 animate-float-fast"
            >
              <Image src={choclate} width={65} className="" />
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
              className="absolute top-[17rem] left-[9.5rem] flex flex-shrink-0 transform -translate-y-1/2 animate-float-fast"
            >
              <Image src={berry} width={65} />
            </motion.div>
            <motion.div
              className="absolute top-[20rem] left-[15.5rem]"
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
              <Image src={flower} width={110} />
            </motion.div>
          </div>
        </div>
      </div>

      <SecondSection setStageTop={setStageTop} />
    </>
  );
}

export default Hero;
