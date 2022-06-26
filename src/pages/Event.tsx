import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  const [isOpen, setIsOpen] = useState(false)

  const handleClickMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onShowAulas={handleClickMenu} isOpen={isOpen} />
      <main className="flex flex-1 mt-16">
        { slug
          ? <Video lessonSlug={slug} />
          : <div className="flex-1" />
        }
        <Sidebar isOpen={isOpen} onClick={handleClickMenu} />
      </main>
    </div>
  )
}