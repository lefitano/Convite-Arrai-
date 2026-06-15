import { motion } from 'framer-motion'
import { useMemo } from 'react'

const COLORS = ['#f5c518', '#e8700a', '#c0392b', '#27ae60', '#8e44ad', '#ffffff']

function Spark({ angle, color, delay }) {
  const rad = (angle * Math.PI) / 180
  const dist = 28 + Math.random() * 12
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 3,
        height: 3,
        background: color,
        top: '50%',
        left: '50%',
        marginTop: -1.5,
        marginLeft: -1.5,
      }}
      animate={{
        x: [0, Math.cos(rad) * dist],
        y: [0, Math.sin(rad) * dist],
        opacity: [1, 0],
        scale: [1, 0.3],
      }}
      transition={{ duration: 1.2, delay, repeat: Infinity, repeatDelay: 2.5, ease: 'easeOut' }}
    />
  )
}

function Burst({ x, y, color, delay }) {
  const sparks = useMemo(
    () => Array.from({ length: 10 }, (_, i) => ({ angle: i * 36 })),
    []
  )
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: x, top: y, width: 0, height: 0 }}
    >
      {sparks.map((s, i) => (
        <Spark key={i} angle={s.angle} color={color} delay={delay + i * 0.02} />
      ))}
    </div>
  )
}

export default function Fireworks() {
  const bursts = useMemo(() => [
    { x: '15%', y: '15%', color: COLORS[0], delay: 0    },
    { x: '80%', y: '10%', color: COLORS[2], delay: 0.8  },
    { x: '50%', y: '8%',  color: COLORS[4], delay: 1.6  },
    { x: '25%', y: '25%', color: COLORS[1], delay: 2.4  },
    { x: '75%', y: '20%', color: COLORS[3], delay: 3.2  },
  ], [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bursts.map((b, i) => (
        <Burst key={i} {...b} />
      ))}
    </div>
  )
}
