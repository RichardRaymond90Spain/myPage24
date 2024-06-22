const FlipCard = ({ item }) => {
    const [flipped, setFlipped] = useState(false);
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 },
    });
  
    return (
      <div onClick={() => setFlipped((state) => !state)}>
        <animated.div
          style={{
            opacity: opacity.to((o) => 1 - o),
            transform,
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backfaceVisibility: 'hidden',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          <Typography variant="h5">{item.title}</Typography>
        </animated.div>
        <animated.div
          style={{
            opacity,
            transform: transform.to((t) => `${t} rotateY(180deg)`),
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backfaceVisibility: 'hidden',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          <Typography variant="body1">{item.text}</Typography>
        </animated.div>
      </div>
    );
  };
  