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
            value: 200,
            density: {
              enable: false,
            },
          },
          shape: {
            type: "star",
          },
          color: {
            value: ['#fff', '#ffd700', '#00FFDD']
          },
          opacity: {
            value: {
                min: 0.1,
                max: 0.5
            },
            random: true,
            animation: {
                enable: true,
                speed: 1,
                sync: true
            }
          },
          size: {
            value: {
                min: 0.5,
                max: 2
            }
            }
          },
        detectRetina: true,
        fpsLimit: 60,
        emitters: {
          direction: 'none',
          life: {
            count: 10,
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
        preset: 'stars',
      }),
      [],
  );

    
      if (init) {
        return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
      }
    
      return <></>;
}

export default ParticleBackground