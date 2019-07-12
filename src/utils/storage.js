const CARISOK_CONFIG = 'CARISOK_CONFIG'

/**
 * CARISOK_CONFIG
 */
export const getLocalConfig = () => {
    try {
        return JSON.parse(sessionStorage.getItem(CARISOK_CONFIG)) || {}
    } catch (err) {
        return {}
    }
}

export const setLocalConfig = (config) => {
    try {
        sessionStorage.setItem(CARISOK_CONFIG, JSON.stringify(config))
    } catch (err) {
        sessionStorage.setItem(CARISOK_CONFIG, '{}')
    }
}
