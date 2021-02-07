export default {
  mode: {
    label: 'current mode'.toUpperCase(),
  },
  notification: {
    success: (mode) => ({
      type: 'success',
      message: `Mode updated to ${mode}!`,
    }),
  },
  updateButton: 'update mode'.toUpperCase(),
}
