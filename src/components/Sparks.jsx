import { motion } from 'framer-motion'
import { useMemo } from 'react'

const COLORS = ['#ff6600', '#ffaa00', '#ffe066', '#ff3300', '#ff9900', '#ffcc00']

export default function Sparks() {
  const sparks = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left:     `${43 + (Math.random() - 0.5) * 14}%`,
      color:    COLORS[Math.floor(Math.random() * COLORS.length)],
      size:     Math.random() * 2.5 + 1,
      duration: Math.random() * 2 + 2.5,
      delay:    Math.random() * 4,
      driftX:   (Math.random() - 0.5) * 90,
      distance: 160 + Math.random() * 120,
    })),
  [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparks.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            width:      s.size,
            height:     s.size,
            background: s.color,
            left:       s.left,
            bottom:     '30%',
            boxShadow:  `0 0 ${s.size * 2}px ${s.color}`,
          }}
          animate={{
            y:       [0, -s.distance],
            x:       [0, s.driftX],
            opacity: [0, 0.9, 0.6, 0],
            scale:   [1, 1.4, 0.6, 0],
          }}
          transition={{
            duration:    s.duration,
            delay:       s.delay,
            repeat:      Infinity,
            repeatDelay: Math.random() * 1.5,
            ease:        'easeOut',
          }}
        />
      ))}
    </div>
  )
}
