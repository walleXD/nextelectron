// Native
import {join} from 'path'
import {format} from 'url'

// Packages
import {BrowserWindow, app} from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./src/client')

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  const url = isDev ? 'http://localhost:8000' : format({
    pathname: join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  })

  mainWindow.loadURL(url)
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)
