'use client'
import { motion } from 'motion/react'

type Props = React.PropsWithChildren<{
  className?: string
  delay?: number
  duration?: number
}>

export default function MotionFade({
  children,
  className,
  delay = 0,
  duration = 0.8,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
