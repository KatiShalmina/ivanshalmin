import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from './pages/AppLayout'
import Home from './pages/Home'

import ArchitectureLayout from './pages/Arch/ArchitectureLayout'
import Projects from './pages/Arch/Projects'
import ProjectType from './pages/Arch/ProjectType'
import Laconism from './pages/Arch/Laconism'
import Publications from './pages/Arch/Publications'
import PublicationObject from './pages/Arch/PublicationObject'

import PaintingsLayout from './pages/Art/PaintingsLayout'
import Collections from './pages/Art/Collections'
import PaintingDetail from './pages/Art/PaintingDetail'
import Exhibitions from './pages/Art/Exhibitions'
import CubePhotos from './pages/Art/CubePhotos'
import VideoArt from './pages/Art/VideoArt'

import AboutLayout from './pages/About/AboutLayout'
import Bio from './pages/About/Bio'
import Contact from './pages/About/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: 'architecture',
        element: <ArchitectureLayout />,
        children: [
          { index: true, element: <Navigate to='projects' replace /> },

          { path: 'projects', element: <Projects /> },
          { path: 'projects/:slug', element: <ProjectType /> },

          { path: 'laconism', element: <Laconism /> },

          { path: 'publications', element: <Publications /> },
          { path: 'publications/:slug', element: <PublicationObject /> },
        ]
      },

      {
        path: 'paintings',
        element: <PaintingsLayout />,
        children: [
          { index: true, element: <Navigate to='collections' replace /> },
          { path: 'collections', element: <Collections /> },
          { path: 'collections/:slug', element: <PaintingDetail /> },

          { path: 'exhibitions', element: <Exhibitions /> },
          { path: 'exhibitions/cube-photos', element: <CubePhotos /> },

          { path: 'video-art', element: <VideoArt /> },
        ]
      },

      {
        path: 'about',
        element: <AboutLayout />,
        children: [
          { index: true, element: <Navigate to='bio' replace /> },

          { path: 'bio', element: <Bio /> },
          { path: 'contact', element: <Contact /> },
        ]
      },
    ]
  }
])

export default router
