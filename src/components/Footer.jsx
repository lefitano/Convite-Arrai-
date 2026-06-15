import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      className="relative z-10 flex flex-col items-center gap-1 mt-6 mb-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.7 }}
    >
      {/* linha */}
      <div
        className="mb-3"
        style={{
          width: 80,
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)',
        }}
      />

      <div className="flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.22)' }}>
        <Code2 size={11} />
        <span className="font-nunito text-[11px] tracking-wide">Desenvolvido por</span>
      </div>

      <p
        className="font-baloo font-semibold tracking-wide"
        style={{
          fontSize: 13,
          background: 'linear-gradient(90deg, rgba(245,197,24,0.5), rgba(232,112,10,0.5))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Leonardo Monteiro
      </p>
    </motion.footer>
  )
}
