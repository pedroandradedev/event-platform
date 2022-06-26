import { CheckCircle, Lock } from 'phosphor-react'
import { format, isPast } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActiveLesson = slug === props.slug

  return (
    <Link to={isLessonAvailable ? `/event/lesson/${props.slug}` : '#'} className={classNames('group', {
      'pointer-events-none': !isLessonAvailable
    })}>
      <span className="text-gray-300">
        {availableDateFormatted.charAt(0).toUpperCase() + availableDateFormatted.slice(1)}
      </span>

      <div className={classNames('rounded border p-4 mt-2', {
        'border-blue-500 bg-blue-500 relative before:w-3 before:h-3 before:absolute before:bg-blue-500 before:top-2/4 before:left-0 before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:rounded-sm': isActiveLesson,
        'border-gray-500': !isActiveLesson,
        'group-hover:border-blue-500': isLessonAvailable,
        'opacity-50': !isLessonAvailable
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('text-sm font-medium flex items-center gap-2', {
              'text-gray-700': isActiveLesson,
              'text-blue-500': !isActiveLesson
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          
          <span className={classNames('text-xs rounded py-[0.125rem] px-2 border font-bold', {
            'border-gray-700 text-gray-700': isActiveLesson,
            'border-blue-300 text-white': !isActiveLesson && isLessonAvailable,
            'border-orange-500 text-white': !isLessonAvailable
          })}>
            {props.type === 'live' ? 'AO VIVO' : ' AULA PRÁTICA'}
          </span>
        </header>
        
        <strong className={classNames('mt-5 block', {
          'text-gray-700': isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}