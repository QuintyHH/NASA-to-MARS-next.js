import { useState, useEffect } from 'react'
import { useCustomSelector } from '../../store/ContextProvider'
import { startLoading, stopLoading, addNotification } from '../../actions/web'
import { resetMission, updateMission } from '../../actions/mission'
import { SimpleButton, UploadButton } from '../Reusables'
import config from './FileControl.config'

export const FileControl = () => {
  const {
    webState,
    missionState,
    setMissionState,
    setWebState,
  } = useCustomSelector()
  const [file, setFile] = useState(null)
  const [prevDisabled, setPrevDisabled] = useState(false)

  useEffect(() => {
    file && handleUpload()
  }, [file])

  const handleFileChange = (e) => setFile(e.target.files[0])

  const handleUpload = async () => {
    setMissionState(resetMission())
    setWebState(startLoading())
    /*normally i wouldn't use fetch, 
    but keeping this as lightweight as possible
    */
    try {
      const response = await (
        await fetch(config.uploadUrl, {
          method: 'POST',
          body: file,
        })
      ).json()
      setMissionState(updateMission(response))
      setWebState(addNotification(config.notification.success))
      setPrevDisabled(false)
      setFile(null)
    } catch {
      setMissionState(resetMission())
      setWebState(addNotification(config.notification.fail))
    }
    setWebState(stopLoading())
  }

  const handleDownload = async () => {
    setMissionState(resetMission())
    setWebState(startLoading())
    try {
      const response = await (
        await fetch(config.downloadUrl, {
          method: 'POST',
        })
      ).json()
      setMissionState(updateMission(response))
      setWebState(addNotification(config.notification.downloadsuccess))
      setFile(null)
    } catch {
      setMissionState(resetMission())
      setWebState(addNotification(config.notification.downloadfail))
      setPrevDisabled(true)
    }
    setWebState(stopLoading())
  }

  return (
    <div className={'file-control-wrapper'}>
      <UploadButton onChange={handleFileChange} disabled={webState.isLoading}>
        {config.buttonPrimary.upload}
      </UploadButton>
      <SimpleButton
        disabled={webState.isLoading || prevDisabled}
        onClick={handleDownload}
      >
        {config.buttonSecondary.useExisting}
      </SimpleButton>
    </div>
  )
}
