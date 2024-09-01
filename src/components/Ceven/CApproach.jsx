// import arrow from "../../assets/svg/arrow.svg";
// import star1 from "../../assets/svg/star1.svg";
// import shape from "../../assets/svg/shape.svg";
// import spiral from "../../assets/svg/spiral.svg";
// import { SparklesCore } from "../../components/ui/sparkles.jsx";
// // import { CanvasRevealEffect } from "../../components/ui/canvas-reveal-effect.jsx";

// function CApproach() {
//   return (
//     <div className="flex flex-col justify-center items-center mt-10 pb-10 font-roboto mx-auto space-y-8">
//       <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//         <h1 className="md:text-7xl text-4xl lg:text-6xl font-bold text-center text-white relative z-20 mb-10">
//           Our Approach
//         </h1>
//         <div className="w-[40rem] h-40 relative">
//           {/* Gradients */}
//           <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//           <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//           <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//           <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//           {/* Core component */}
//           <SparklesCore
//             background="transparent"
//             minSize={0.4}
//             maxSize={1}
//             particleDensity={1200}
//             className="w-full h-full"
//             particleColor="#FFFFFF"
//           />
//         </div>
//         <div className="-mt-24 font-roboto grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 text-white gap-x-7 gap-y-12 lg:gap-y-14 ">
//           <div className="flex flex-col items-center">
//             <img src={arrow} alt="" className="mx-auto h-16 lg:h-20" />
//             <div className="text-lg text-center mt-4 mb-2 md:text-xl lg:text-2xl text-[#FF6EC7]">
//               Client-Centric
//             </div>
//             <div className="text text-center md:text-md lg:text-lg lg:leading-snug">
//               We tailor solutions to your needs, ensuring they fit your
//               requirements.
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <img src={star1} alt="" className="mx-auto h-16 lg:h-20" />
//             <div className="text-lg text-center mt-4 mb-2 md:text-xl lg:text-2xl text-[#f5f5a8]">
//               Innovation-Driven
//             </div>
//             <div className="text text-center md:text-md lg:text-lg lg:leading-snug">
//               We use the latest tech to provide cutting-edge solutions.
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <img src={shape} alt="" className="mx-auto h-16 lg:h-20" />
//             <div className="text-lg text-center mt-4 mb-2 md:text-xl lg:text-2xl text-[#5d7ef9]">
//               Collaborative
//             </div>
//             <div className="text text-center md:text-md lg:text-lg lg:leading-snug">
//               We work closely with you, ensuring transparency throughout.
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src={spiral}
//               alt=""
//               className="mx-auto h-16 lg:h-20 fill-[#ff833b]"
//             />
//             <div className="text-lg text-center mt-4 mb-2 md:text-xl lg:text-2xl text-[#ff833b]">
//               Quality-Focused
//             </div>
//             <div className="text text-center md:text-md lg:text-lg lg:leading-snug">
//               We prioritize quality, ensuring robust and reliable software.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CApproach;

//? Another styling other solutiin of this

import { SparklesCore } from "../../components/ui/sparkles.jsx";
import { CanvasRevealEffectDemo } from "./CanvasRevealEffect.jsx";
// import { CanvasRevealEffectDemo } from "./CanvasRevealEffectDemo.jsx";

function CApproach() {
  return (
    <div
      id="approach"
      className="flex flex-col justify-center items-center mt-10 pb-10 font-roboto mx-auto space-y-8"
    >
      <div className="w-full bg-richBlack flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-4xl lg:text-6xl font-bold text-center text-white relative z-20 mb-2">
          Our Approach
        </h1>

        {/* Decorative Elements */}
        <div className="w-[40rem] h-40 relative mb-1">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="-mt-36 grid-cols-2 w-[70rem]">
          <CanvasRevealEffectDemo />
        </div>
      </div>
    </div>
  );
}

export default CApproach;
