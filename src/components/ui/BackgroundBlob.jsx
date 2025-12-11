import React from 'react';

// Add these styles to your global CSS or CSS module
const blobStyles = `
  @keyframes rotateBlob {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }

  @keyframes subtleMorph {
    0% {
      border-radius: 50%;
      scale: 1;
    }
    25% {
      border-radius: 48% 52% 49% 51%;
      scale: 1.15;
    }
    50% {
      border-radius: 51% 49% 50% 50%;
      scale: 0.95;
    }
    75% {
      border-radius: 49% 51% 52% 48%;
      scale: 1.05;
    }
    100% {
      border-radius: 52% 48% 51% 49%;
      scale: 1.1;
    }
  }

  .blob-animate {
    animation: rotateBlob 30s linear infinite alternate, 
               subtleMorph 20s ease-in-out infinite alternate;
  }
`;

const BackgroundBlob = ({position, color}) => {
    return (
        <div className={`${position} absolute flex items-center justify-center`}>
            <div className="relative w-fit h-fit md:w-fit md:h-fit">
                <div
                    className="-translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-15 blob-animate"
                    style={{
                        backgroundColor: `${color}`,
                        filter: 'blur(70px)',
                    }}
                ></div>
            </div>
            <style>
                {blobStyles}
            </style>
        </div>
    );
};

export default BackgroundBlob;