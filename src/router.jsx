import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

import Objects from './pages/Arch/Objects'
import ObjectType from './pages/Arch/ObjectType'
import Laconism from './pages/Arch/Laconism'
import PublicationsLayout from './pages/Arch/PublicationsLayout'
import Publications from './pages/Arch/Publications'
import PublicationObject from './pages/Arch/PublicationObject'
import InteriorsLayout from './pages/Arch/InteriorsLayout'
import Interiors from './pages/Arch/Interiors'
import InteriorObject from './pages/Arch/InteriorObject'

import Paintings from './pages/Art/Paintings'
import PaintingDetail from './pages/Art/PaintingDetail'
import Exhibitions from './pages/Art/Exhibitions'
import ExhibitionDetail from './pages/Art/ExhibitionDetail'
import VideoArt from './pages/Art/VideoArt'

import Bio from './pages/About/Bio'
import Contacts from './pages/About/Contacts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      { path: 'objects', element: <Objects /> },
      { path: 'objects/:slug', element: <ObjectType /> },
      { path: 'laconism', element: <Laconism /> },
      {
        path: 'publications',
        element: <PublicationsLayout />,
        children: [
          { index: true, element: <Publications /> },
          {
            path: 'interiors',
            element: <InteriorsLayout />,
            children: [
              { index: true, element: <Interiors /> },
              { path: ':subslug', element: <InteriorObject /> }
            ]
          },
          { path: ':slug', element: <PublicationObject /> },
        ]
      },

      { path: 'paintings', element: <Paintings /> },
      { path: 'paintings/:id', element: <PaintingDetail /> },
      { path: 'exhibitions', element: <Exhibitions /> },
      { path: 'exhibitions/:slug', element: <ExhibitionDetail /> },
      { path: 'video-art', element: <VideoArt /> },
      { path: 'contacts', element: <Contacts /> },

      { path: 'bio', element: <Bio /> },
      { path: 'contacts', element: <Contacts /> },
    ],
  },
])

export default router