import type { ReactNode } from 'react'

interface SkeletonProps {
  className?: string
  children?: ReactNode
}

export function Skeleton({ className = '', children }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-neutral-200 rounded ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }}
    >
      {children}
    </div>
  )
}

// Card skeleton for research areas, publications
export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl p-6 border border-neutral-100 ${className}`}>
      <div className="flex items-start gap-4 mb-4">
        <Skeleton className="w-11 h-11 rounded-xl flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-3/4" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}

// Profile card skeleton
export function ProfileSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-100">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 items-center lg:items-start">
        <Skeleton className="w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full flex-shrink-0" />
        <div className="flex-1 w-full max-w-md">
          <Skeleton className="h-8 w-48 mb-3 mx-auto lg:mx-0" />
          <Skeleton className="h-5 w-32 mb-5 mx-auto lg:mx-0" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6 mx-auto lg:mx-0" />
            <Skeleton className="h-4 w-4/6 mx-auto lg:mx-0" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Member card skeleton
export function MemberSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 text-center border border-neutral-100">
      <Skeleton className="w-20 h-20 rounded-full mx-auto mb-5" />
      <Skeleton className="h-5 w-32 mx-auto mb-2" />
      <Skeleton className="h-4 w-24 mx-auto mb-4" />
      <Skeleton className="h-6 w-20 mx-auto rounded-full" />
    </div>
  )
}

// Publication item skeleton
export function PublicationSkeleton() {
  return (
    <div className="bg-white rounded-xl p-5 border border-neutral-100">
      <Skeleton className="h-4 w-full mb-3" />
      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-24 rounded-full" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  )
}

// Timeline item skeleton
export function TimelineSkeleton() {
  return (
    <div className="flex group">
      <div className="hidden sm:flex w-[112px] flex-shrink-0 justify-end items-start pr-5 pt-4">
        <Skeleton className="h-4 w-16" />
      </div>
      <div className="flex-shrink-0 relative mt-[18px]">
        <div className="w-3 h-3 rounded-full bg-neutral-200 border-[2.5px] border-white" />
      </div>
      <div className="flex-1 pl-4 sm:pl-6 pb-3">
        <div className="p-4">
          <Skeleton className="h-5 w-full mb-2" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    </div>
  )
}

// Stats skeleton
export function StatsSkeleton() {
  return (
    <div className="flex flex-wrap gap-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/10">
          <Skeleton className="h-8 w-12 mb-1 bg-white/20" />
          <Skeleton className="h-4 w-20 bg-white/10" />
        </div>
      ))}
    </div>
  )
}

// Section heading skeleton
export function SectionHeadingSkeleton() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <Skeleton className="h-8 w-48" />
      <div className="flex-1 h-px bg-neutral-200" />
    </div>
  )
}
