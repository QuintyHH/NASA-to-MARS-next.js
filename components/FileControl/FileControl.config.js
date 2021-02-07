import { BASE_URL, UPLOAD_API, DOWNLOAD_API } from '../../constants/apiUrl'
export default {
  uploadUrl: `${BASE_URL}${UPLOAD_API}`,
  downloadUrl: `${BASE_URL}${DOWNLOAD_API}`,
  buttonPrimary: {
    upload: 'upload new routes'.toUpperCase(),
  },
  buttonSecondary: {
    useExisting: 'reload last mission'.toUpperCase(),
  },
  notification: {
    success: {
      type: 'success',
      message: 'File uploaded succefully!',
    },
    fail: {
      type: 'fail',
      message: 'File failed to upload!',
    },
    downloadsuccess: {
      type: 'success',
      message: 'Previous mission loaded succefully!',
    },
    downloadfail: {
      type: 'success',
      message: 'Previous mission failed to load!',
    },
  },
}
