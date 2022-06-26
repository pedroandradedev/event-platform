import classNames from "classnames";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  isOpen: boolean
  onClick(): void
}

export function Sidebar(props: SidebarProps) {
  const { data } = useGetLessonsQuery()

  const handleClickLesson = () => {
    if (props.isOpen) props.onClick()
  }

  return (
    <aside className={classNames('sidebar', {
      'open': props.isOpen
    })}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              onClick={handleClickLesson}
            />
          )
        })}
      </div>
    </aside>
  )
}