import { motion } from 'framer-motion'

const BALLOON_CONFIGS = [
  { color: '#e8700a', x: '8%',  delay: 0,    duration: 7  },
  { color: '#c0392b', x: '82%', delay: 1.2,  duration: 9  },
  { color: '#f5c518', x: '20%', delay: 2.5,  duration: 8  },
  { color: '#27ae60', x: '70%', delay: 0.8,  duration: 10 },
  // { color: '#8e44ad', x: '50%', delay: 3,    duration: 7.5},
]

function SingleBalloon({ color, x, delay, duration }) {
  return (
    <motion.div
      className="absolute bottom-0 pointer-events-none"
      style={{ left: x }}
      animate={{
        y: [0, -18, 0],
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width="38" height="56" viewBox="0 0 38 56">
        {/* corpo do balão */}
        <ellipse cx="19" cy="20" rx="15" ry="18" fill={color} />
        {/* brilho */}
        <ellipse cx="13" cy="13" rx="4" ry="5" fill="rgba(255,255,255,0.25)" />
        {/* base triangular */}
        <polygon points="15,36 23,36 19,42" fill={color} />
        {/* barbante */}
        <path
          d="M19,42 Q22,48 19,56"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    </motion.div>
  )
}

export default function Balloons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {BALLOON_CONFIGS.map((b, i) => (
        <SingleBalloon key={i} {...b} />
      ))}
    </div>
  )
}
