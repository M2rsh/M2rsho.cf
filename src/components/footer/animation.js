import { useSpring, animated } from 'react-spring';

function Animation() {
    const path1 = useSpring({
        loop: { reverse: true },
        from: {d: "M0 50L22.8 48.2C45.7 46.3 91.3 42.7 137 43.5C182.7 44.3 228.3 49.7 274 52.7C319.7 55.7 365.3 56.3 411.2 53.7C457 51 503 45 548.8 43.2C594.7 41.3 640.3 43.7 686 45C731.7 46.3 777.3 46.7 823 48.2C868.7 49.7 914.3 52.3 937.2 53.7L960 55L960 101L937.2 101C914.3 101 868.7 101 823 101C777.3 101 731.7 101 686 101C640.3 101 594.7 101 548.8 101C503 101 457 101 411.2 101C365.3 101 319.7 101 274 101C228.3 101 182.7 101 137 101C91.3 101 45.7 101 22.8 101L0 101Z"},
        to: {d: "M0 50L22.8 51.5C45.7 53 91.3 56 137 55.5C182.7 55 228.3 51 274 51C319.7 51 365.3 55 411.2 57C457 59 503 59 548.8 58C594.7 57 640.3 55 686 53.8C731.7 52.7 777.3 52.3 823 50.3C868.7 48.3 914.3 44.7 937.2 42.8L960 41L960 101L937.2 101C914.3 101 868.7 101 823 101C777.3 101 731.7 101 686 101C640.3 101 594.7 101 548.8 101C503 101 457 101 411.2 101C365.3 101 319.7 101 274 101C228.3 101 182.7 101 137 101C91.3 101 45.7 101 22.8 101L0 101Z"},
        config: { duration: 5000 },
    });
    return (
        <svg style={{width: "100vw", margin: "0px", padding: "0px", position: "relative", top: "6px"}} id="footer-svg" viewBox="0 0 960 100"  xmlns="http://www.w3.org/2000/svg" version="1.1">
            <animated.path
                d={path1.d}
                fill="#1b212b"
            />
        </svg>
    );
}

export default Animation