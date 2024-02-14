import './index.scss'
import { useEffect, useMemo, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
        await loadSlim(engine);
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
            value: 800,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: '#fff',
          },
          opacity: {
            value: {
                min: 0.3,
                max: 0.8
            },
            random: true,
          },
          size: {
            value: {
              min: 0.1,
              max: 2
            }
          },
          move: {
            enable: true,
            speed: {
              min: 0.1,
              max: 2
            },
            direction: 'bottom',
          },
          shape: {
            type: 'circle',
          },
          wobble: {
            enable: true,
            distance: 50,
            speed: 10,
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
        preset: 'snow',
      }),
      [],
  );

    
      if (init) {
        return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
      }
    
      return <></>;
}

export default ParticleBackground