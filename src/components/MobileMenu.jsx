"use client";
import localFont from "next/font/local";
import Link from "next/link";
import React, { useEffect, Suspense } from "react";
import { IoClose } from "react-icons/io5";
import menuStage from "../app/assets/MOBILE/menu-stage.png";
import dub from "../app/assets/HERO-SECTION/132.png";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const thunderMedium = localFont({
  src: "../app/fonts/Thunder-LC.ttf",
  weight: "400",
});
const thunderSemibold = localFont({
  src: "../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "600",
});

function IceCreamModel() {
  const gltf = useGLTF("/assets/MENU 3D/joy ice cream tub.gltf");
  // Increased scale from [1.5, 1.5, 1.5] to [2, 2, 2] for larger model
  return (
    <primitive
      object={gltf.scene}
      scale={[3.3, 3.3, 3.3]}
      rotation={[-6.3, Math.PI / 50, 0]}
      position={[0, 0, 0]}
    />
  );
}

const MobileMenu = ({ showMenu, setShowMenu }) => {
  //---CONTROLLING SCROLL IN MENU ----
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div
      className={`${
        showMenu ? "block" : "hidden"
      } overflow-y-hidden z-50 fixed top-0 left-0 w-screen h-screen p-3 bg-gradient-to-b from-red-900 to-red-500`}
    >
      <div className="px-4 py-8">
        <div className="w-full flex items-center justify-between ">
          <h1 className={`text-3xl ${thunderMedium.className}`}>MENU</h1>
          <IoClose className="text-3xl" onClick={() => setShowMenu(false)} />
        </div>
        <div className="w-full h-full flex flex-col gap-[18rem] justify-between relative">
          <div className=" w-full h-screen flex items-center justify-center absolute top-0 left-0">
            <div className=" flex flex-col justify-between pb-32 w-full h-full">
              <div className={` w-full flex flex-col text-white py-10 -mt-5  `}>
                <Link onClick={() => setShowMenu(false)} href={"/"}>
                  <button
                    className={`${thunderSemibold.className} text-5xl py-1.5  `}
                  >
                    HOME
                  </button>
                </Link>
                <Link onClick={() => setShowMenu(false)} href={"/about"}>
                  <button
                    className={`${thunderSemibold.className} text-5xl py-1.5`}
                  >
                    ABOUT
                  </button>
                </Link>
                <Link onClick={() => setShowMenu(false)} href={"/catalog"}>
                  <button
                    className={`${thunderSemibold.className} text-5xl py-1.5`}
                  >
                    CATALOG
                  </button>
                </Link>
                <Link onClick={() => setShowMenu(false)} href={"/contact"}>
                  <button
                    className={`${thunderSemibold.className} text-5xl py-1.5`}
                  >
                    CONTACT
                  </button>
                </Link>
              </div>
           
              <div className="w-full flex flex-col gap-1  items-center" >
                <div className="relative w-full flex md:hidden flex-col  items-center  ">
                  {/* Increased container size from 400px to 500px for both width and height */}
                  <div
                    style={{ width: "450px", height: "450px" }}
                    className="absolute bottom-4    left-[48.5%] transform -translate-x-1/2 "
                  >
                    <Canvas>
                      <Suspense fallback={null}>
                        {/* 
                    BRIGHTNESS CONTROLS:
                    - Increase/decrease intensity values for brighter/darker model
                    - ambientLight: Controls overall brightness (0.1 to 2.0)
                    - hemisphereLight: Controls environmental lighting (0.1 to 2.0)
                    - spotLight: Controls focused lighting (0.1 to 4.0)
                    - directionalLight: Controls directional shadows (0.1 to 2.0)
                    */}
                        <ambientLight intensity={1} />
                        <hemisphereLight intensity={2} groundColor="#ff0000" />
                        <spotLight
                          position={[10, 20, 10]}
                          angle={0.5}
                          penumbra={1}
                          intensity={4}
                          castShadow
                        />
                        <directionalLight
                          position={[0, 0, 4]} // Changed to center position
                          intensity={0.6}
                          castShadow
                        />
                        <IceCreamModel />
                        <OrbitControls
                          enableZoom={false}
                          autoRotate
                          minPolarAngle={Math.PI / 2}
                          maxPolarAngle={Math.PI / 2}
                        />
                      </Suspense>
                    </Canvas>
                  </div>
                  <Image
                    src={menuStage}
                    alt="stage"
                    width={350}
                    className=" -bottom-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
