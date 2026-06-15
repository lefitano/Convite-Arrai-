const COLORS = [
  '#e8700a', '#f5c518', '#c0392b', '#27ae60',
  '#8e44ad', '#2980b9', '#f5c518', '#e8700a',
  '#c0392b', '#27ae60', '#8e44ad', '#f5c518',
]

const COUNT   = 12
const W       = 380
const H       = 72
const ROPE_SAG = 20

function ropeY(x) {
  const t = x / W
  return 10 + ROPE_SAG * 4 * t * (1 - t)
}

export default function Bandeirinhas({ className = '' }) {
  const step = W / (COUNT + 1)
  const flags = Array.from({ length: COUNT }, (_, i) => {
    const x = step * (i + 1)
    return { x, y: ropeY(x), color: COLORS[i % COLORS.length] }
  })

  return (
    <div className={`w-full select-none ${className}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height={H}
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <defs>
          <filter id="flagGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* corda */}
        <path
          d={`M0,10 Q${W / 2},${10 + ROPE_SAG} ${W},10`}
          stroke="rgba(255, 215, 80, 0.55)"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />

        {flags.map((f, i) => (
          <g
            key={i}
            style={{
              transformOrigin: `${f.x}px ${f.y}px`,
              animation: `flagSway ${2.8 + (i % 3) * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.12}s`,
            }}
          >
            {/* fio de conexão */}
            <line
              x1={f.x} y1={f.y}
              x2={f.x} y2={f.y + 5}
              stroke="rgba(255,215,80,0.35)"
              strokeWidth="0.8"
            />
            {/* bandeirinha */}
            <polygon
              points={`${f.x - 11},${f.y + 5} ${f.x + 11},${f.y + 5} ${f.x},${f.y + 34}`}
              fill={f.color}
              opacity="0.95"
              filter="url(#flagGlow)"
            />
            {/* brilho */}
            <polygon
              points={`${f.x - 11},${f.y + 5} ${f.x - 1},${f.y + 5} ${f.x - 5},${f.y + 18}`}
              fill="rgba(255,255,255,0.18)"
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
