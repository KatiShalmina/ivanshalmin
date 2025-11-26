import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

import Objects from './pages/Arch/Objects'
import ObjectType from './pages/Arch/ObjectType'
import Laconism from './pages/Arch/Laconism'
import PublicationsLayout from './pages/Arch/PublicationsLayout'
import Publications from './pages/Arch/Publications'
import PublicationObject from './pages/Arch/PublicationObject'

import Paintings from './pages/Art/Paintings'
import PaintingDetail from './pages/Art/PaintingDetail'
import Exhibitions from './pages/Art/Exhibitions'
import ExhibitionDetail from './pages/Art/ExhibitionDetail'
import VideoArt from './pages/Art/VideoArt'

import Bio from './pages/About/Bio'
import Stories from './pages/About/Stories'
import Contacts from './pages/About/Contacts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      { path: 'objects', element: <Objects /> },
      { path: 'objects/:id', element: <ObjectType /> },
      { path: 'laconism', element: <Laconism /> },
      {
        path: 'publications',
        element: <PublicationsLayout />,
        children: [
          { index: true, element: <Publications /> },         
          { path: ':id', element: <PublicationObject /> },
        ]
      },

      { path: 'paintings', element: <Paintings /> },
      { path: 'paintings/:id', element: <PaintingDetail /> },
      { path: 'exhibitions', element: <Exhibitions /> },
      { path: 'exhibitions/:id', element: <ExhibitionDetail /> },
      { path: 'video-art', element: <VideoArt /> },
      { path: 'contacts', element: <Contacts /> },

      { path: 'bio', element: <Bio /> },
      { path: 'stories', element: <Stories /> },
      { path: 'contacts', element: <Contacts /> },
    ],
  },
])

export default router