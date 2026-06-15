import { motion } from 'framer-motion'

export default function Moon() {
  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{ top: '4%', right: '7%' }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      {/* glow ambiente */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: -32,
          background: 'radial-gradient(circle, rgba(255,253,200,0.12) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
        <defs>
          <radialGradient id="moonGrad" cx="38%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#fffde7" />
            <stop offset="100%" stopColor="#f0c040" stopOpacity="0.85" />
          </radialGradient>
          <mask id="crescentMask">
            <circle cx="34" cy="34" r="26" fill="white" />
            <circle cx="46" cy="28" r="21" fill="black" />
          </mask>
        </defs>
        <circle
          cx="34"
          cy="34"
          r="26"
          fill="url(#moonGrad)"
          mask="url(#crescentMask)"
          opacity="0.88"
        />
        {/* crateras sutis */}
        <circle cx="24" cy="40" r="2.5" fill="rgba(200,160,20,0.25)" mask="url(#crescentMask)" />
        <circle cx="18" cy="30" r="1.5" fill="rgba(200,160,20,0.2)" mask="url(#crescentMask)" />
      </svg>
    </motion.div>
  )
}
