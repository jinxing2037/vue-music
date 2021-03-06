export const header = state => state.headerTitle
export const headerback = state => state.headerBack
export const themeImg = state => state.themeImg
export const singer = state => state.singer
export const disc = state => state.disc
export const toplist = state => state.toplist

export const playingState = state => state.playing
export const fullScreen = state => state.fullScreen
export const playList = state => state.playList
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex
export const currentSong = state => state.playList[state.currentIndex] || {}
export const searchHistory = state => state.searchHistory
export const playHistory = state => state.playHistory
export const favorite = state => state.favorite
export const vkey = state => state.vkey