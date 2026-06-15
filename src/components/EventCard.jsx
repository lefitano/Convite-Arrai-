import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Ticket, ChevronRight, ImageIcon } from 'lucide-react'
import Bandeirinhas from './Bandeirinhas'
import Bonfire from './Bonfire'

const EVENT = {
  nome:     'Arraiá do GG & Dôra',
  data:     '20 de Junho de 2026',
  hora:     'às 19:00 horas',
  local:    'Nossa residência',
  cidade:   'Canindé - CE',
  cota:     'R$ 00,00',
  cotaInfo: 'Inclui comidas típicas e atração',
  maps:     '#',
  logo:     '/logo.jpg',
}

const INFO_ITEMS = [
  { icon: Calendar, label: 'Data',    value: EVENT.data,   sub: null,           accent: '#f5c518', href: null       },
  { icon: Clock,    label: 'Horário', value: EVENT.hora,   sub: null,           accent: '#e8700a', href: null       },
  { icon: MapPin,   label: 'Local',   value: EVENT.local,  sub: EVENT.cidade,   accent: '#27ae60', href: EVENT.maps },
  { icon: Ticket,   label: 'Cota',    value: EVENT.cota,   sub: EVENT.cotaInfo, accent: '#8e44ad', href: null       },
]

function InfoCard({ icon: Icon, label, value, sub, accent, href, index }) {
  const inner = (
    <motion.div
      className="relative flex items-center gap-4 rounded-2xl px-4 py-3.5 overflow-hidden"
      style={{
        background:           'rgba(255,255,255,0.035)',
        border:               '1px solid rgba(255,255,255,0.07)',
        backdropFilter:       'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      whileHover={{
        background: 'rgba(255,255,255,0.07)',
        scale: 1.015,
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.45, ease: 'easeOut' }}
    >
      {/* barra lateral colorida */}
      <div
        className="absolute left-0 top-3 bottom-3 rounded-r-full"
        style={{ width: 3, background: accent }}
      />

      {/* ícone */}
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-xl"
        style={{
          width: 44, height: 44,
          background: `${accent}18`,
          border:     `1px solid ${accent}35`,
        }}
      >
        <Icon size={18} style={{ color: accent }} />
      </div>

      {/* texto */}
      <div className="flex-1 min-w-0">
        <p className="font-nunito text-[10px] uppercase tracking-widest mb-0.5"
           style={{ color: 'rgba(255,255,255,0.38)' }}>
          {label}
        </p>
        <p className="font-nunito font-semibold text-white text-[15px] leading-snug truncate">
          {value}
        </p>
        {sub && (
          <p className="font-nunito text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>
            {sub}
          </p>
        )}
      </div>

      {href && href !== '#' && (
        <ChevronRight size={16} style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
      )}
    </motion.div>
  )

  if (href && href !== '#') {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block no-underline">
        {inner}
      </a>
    )
  }
  return inner
}

export default function EventCard() {
  return (
    <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-6">

      {/* bandeirinhas acima do card */}
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Bandeirinhas />
      </motion.div>

      {/* card principal */}
      <motion.div
        className="w-full max-w-md rounded-3xl overflow-hidden relative"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:           'linear-gradient(160deg, rgba(26,47,110,0.75) 0%, rgba(13,27,62,0.88) 55%, rgba(22,16,64,0.82) 100%)',
          backdropFilter:       'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border:               '1px solid rgba(245,197,24,0.18)',
          boxShadow:            '0 0 0 1px rgba(255,255,255,0.04) inset, 0 24px 64px rgba(0,0,0,0.55), 0 0 80px rgba(232,112,10,0.06)',
        }}
      >
        {/* gradiente laranja no topo */}
        <div
          aria-hidden
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 200,
            background: 'linear-gradient(180deg, rgba(232,112,10,0.22) 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div className="relative z-10">
          {/* ── LOGO ── */}
          <motion.div
            className="flex justify-center pt-7 pb-3 px-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* moldura arredondada com glow dourado */}
            <motion.div
              className="relative overflow-hidden"
              style={{
                width: 120, height: 120,
                borderRadius: '50%',
                border: '2.5px solid rgba(245,197,24,0.55)',
                boxShadow: '0 0 0 4px rgba(245,197,24,0.1), 0 0 28px rgba(245,197,24,0.2), 0 8px 24px rgba(0,0,0,0.45)',
                background: 'rgba(13,27,62,0.6)',
              }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 0 4px rgba(245,197,24,0.18), 0 0 40px rgba(245,197,24,0.3), 0 8px 32px rgba(0,0,0,0.5)' }}
              transition={{ duration: 0.3 }}
            >
              {EVENT.logo ? (
                <motion.img
                  src={EVENT.logo}
                  alt="Logo do evento"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
                  whileHover={{ scale: 1.12 }}
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-1.5"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <ImageIcon size={26} style={{ color: 'rgba(245,197,24,0.4)' }} />
                  <span className="font-nunito text-[10px] uppercase tracking-widest"
                        style={{ color: 'rgba(245,197,24,0.4)' }}>
                    Logo
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* ── TÍTULO ── */}
          <div className="px-6 pb-2 text-center">
            <motion.p
              className="font-baloo text-xs uppercase tracking-[0.22em] mb-1"
              style={{ color: 'rgba(245,197,24,0.68)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Você está convidado para o
            </motion.p>

            <motion.h1
              className="font-baloo font-extrabold leading-tight"
              style={{
                fontSize: 'clamp(1.85rem, 7.5vw, 2.7rem)',
                background: 'linear-gradient(135deg, #ffe066 0%, #f5c518 35%, #ff8c00 68%, #ff4500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 12px rgba(245,197,24,0.25))',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
            >
              {EVENT.nome}
            </motion.h1>

            {/* linha decorativa */}
            <motion.div
              className="flex items-center gap-3 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <div className="flex-1 h-px"
                   style={{ background: 'linear-gradient(to right, transparent, rgba(245,197,24,0.35))' }} />
              <div className="flex gap-1.5" style={{ fontSize: 20 }}>
                <span>🌽</span><span>🎶</span><span>🌽</span>
              </div>
              <div className="flex-1 h-px"
                   style={{ background: 'linear-gradient(to left, transparent, rgba(245,197,24,0.35))' }} />
            </motion.div>
          </div>

          {/* ── FOGUEIRA ── */}
          <Bonfire />

          {/* separador */}
          <div className="mx-5 mb-4"
               style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)' }} />

          {/* ── INFO CARDS ── */}
          <div className="px-5 pb-5 flex flex-col gap-2.5">
            {INFO_ITEMS.map((item, i) => (
              <InfoCard key={i} index={i} {...item} />
            ))}
          </div>
        </div>

        {/* bandeirinhas rodapé */}
        <Bandeirinhas />
      </motion.div>

      {/* mensagem final */}
      <motion.p
        className="font-baloo mt-5 text-sm text-center"
        style={{ color: 'rgba(245,197,24,0.62)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Traga sua bebida e vem forrozar com a gente! 🎉
      </motion.p>
    </div>
  )
}
