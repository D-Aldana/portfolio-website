import './index.scss'
import { useEffect, useMemo, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
      () => ({
        background: {
          opacity: 0
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
        },
        particles: {
          number: {
            value: 300,
            density: {
              enable: false,
            },
          },
          color: {
            value: '#ffd700',
          },
          opacity: {
            value: {
                min: 0.1,
                max: 0.5
            },
            random: true,
            animation: {
                enable: true,
                speed: 0.5,
                sync: true
            }
          },
          size: {
            value: {
              min: 1,
              max: 2,
            },
          },
          move: {
            enable: true,
            speed: 0.5,
          },
        },
        detectRetina: true,
        fpsLimit: 60,
        emitters: {
          direction: 'none',
          life: {
            count: 0,
            duration: 0.1,
            delay: 0.1,
          },
          rate: {
            delay: 0.1,
            quantity: 1,
          },
          size: {
            mode: 'percent',
            height: 50,
            width: 100,
          },
          position: {
            x: 50,
            y: 100,
          },
        },
        preset: 'firefly',
      }),
      [],
  );

    
      if (init) {
        return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
      }
    
      return <></>;
}

export default ParticleBackground
