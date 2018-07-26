import Reactotron, {
    trackGlobalErrors,
    openInEditor,
    overlay,
    asyncStorage,
    networking
  } from 'reactotron-react-native'
  
    Reactotron
      .configure({
        name: 'eParking'
      })
      .use(trackGlobalErrors())
      .use(openInEditor())
      .use(overlay())
      .use(asyncStorage())
      .use(networking())
      .connect()