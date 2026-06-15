import { motion } from 'framer-motion'

function Flame({ d, fill, duration, delay, scaleRange, opacityRange }) {
  return (
    <motion.path
      d={d}
      fill={fill}
      animate={{
        scaleY: scaleRange,
        scaleX: [1, 0.92, 1],
        opacity: opacityRange,
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
      style={{ transformOrigin: '50px 64px' }}
    />
  )
}

export default function Bonfire() {
  return (
    <div className="flex justify-center py-3">
      <svg width="100" height="80" viewBox="0 0 100 80" style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id="fireGlow" cx="50%" cy="80%" r="60%">
            <stop offset="0%"   stopColor="#ff6600" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff6600" stopOpacity="0"   />
          </radialGradient>
        </defs>

        {/* glow no chão */}
        <ellipse cx="50" cy="68" rx="38" ry="10" fill="url(#fireGlow)" />

        {/* chama externa — vermelha */}
        <Flame
          d="M50,8 C50,8 72,26 72,42 C72,56 62,66 50,66 C38,66 28,56 28,42 C28,26 50,8 50,8Z"
          fill="#e63300"
          duration={0.9}
          delay={0}
          scaleRange={[1, 1.08, 1]}
          opacityRange={[0.95, 1, 0.95]}
        />
        {/* chama média — laranja */}
        <Flame
          d="M50,18 C50,18 68,32 68,46 C68,58 60,66 50,66 C40,66 32,58 32,46 C32,32 50,18 50,18Z"
          fill="#ff6600"
          duration={0.75}
          delay={0.1}
          scaleRange={[1, 1.1, 1]}
          opacityRange={[0.9, 1, 0.9]}
        />
        {/* chama interna — âmbar */}
        <Flame
          d="M50,28 C50,28 63,38 63,50 C63,60 57,66 50,66 C43,66 37,60 37,50 C37,38 50,28 50,28Z"
          fill="#ff9900"
          duration={0.65}
          delay={0.15}
          scaleRange={[1, 1.12, 1]}
          opacityRange={[0.85, 1, 0.85]}
        />
        {/* núcleo — amarelo */}
        <Flame
          d="M50,36 C50,36 59,44 59,53 C59,61 55,66 50,66 C45,66 41,61 41,53 C41,44 50,36 50,36Z"
          fill="#ffcc00"
          duration={0.55}
          delay={0.2}
          scaleRange={[1, 1.15, 1]}
          opacityRange={[0.8, 1, 0.8]}
        />
        {/* ponto brilhante */}
        <motion.ellipse
          cx="50" cy="52" rx="5" ry="7"
          fill="#fff5c0"
          animate={{ opacity: [0.5, 0.9, 0.5], scaleY: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 52px' }}
        />

        {/* lenhas */}
        <rect x="14" y="62" width="46" height="7" rx="3.5" fill="#7B3F00"
          transform="rotate(-14 14 62)" />
        <rect x="40" y="62" width="46" height="7" rx="3.5" fill="#5C2D00"
          transform="rotate(14 86 62)" />
        <rect x="22" y="65" width="56" height="6" rx="3" fill="#6B3500" />
      </svg>
    </div>
  )
}
