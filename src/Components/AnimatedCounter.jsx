import React from 'react';
import { counterItems } from '../Constants/index.js';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div id={'counter'} className="padding-x-lg py-16">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((counter) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div key={counter.label} className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp
                duration={5}
                end={counter.value}
                suffix={counter.suffix}
                decimals={Number.isInteger(counter.value) ? 0 : 1}
              />
            </div>
            <div className="text-white-50 text-lg">{counter.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AnimatedCounter;
