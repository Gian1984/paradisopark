import { createI18n } from 'vue-i18n'


function loadLocaleMessages () {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {

        en: {
            // Home
            home: {
                title: "WELCOME",
            },

            cookies:{
                title:'Dear visitor',
                click:'By clicking "Accept All" you accept the',
                terms:'Terms of use',
                and:'as well as the',
                privacy:'processing of personal data',
                service:'in order to be able to provide the service.',
            },

        },

        fr: {
            // Home
            home: {
                title: "Bienvenu",
            },

            cookies:{
                title:'Cher visiteur',
                click:'En cliquant "Accept All" vous acceptez les',
                terms:'conditions d\'utilisation',
                and:'ainsi que le',
                privacy:'traitement des données personnelles',
                service:'afin de pouvoir fournir le service.',
            },

        },

        nl: {
            // Home
            home: {
                title: "Welkom",
            },

            cookies:{
                title:'Beste bezoeker',
                click:'Door op "Alles accepteren" te klikken accepteert u de',
                terms:'Gebruiksvoorwaarden',
                and:'en ook de',
                privacy:'verwerking van persoonsgegevens',
                service:'om de dienst te kunnen verlenen.',
            },

        },

    }
    
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key).default
        }
    })
    return messages
}

export default createI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'fr',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'fr',
    messages: loadLocaleMessages()
})
