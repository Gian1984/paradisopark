import { createI18n } from 'vue-i18n'


function loadLocaleMessages () {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {

        en: {
            // Home
            home: {
                title: "WELCOME",
                description: "Lorem ipsum",
                button: "Book",
            },

            // Services
            services: {
                title: 'Our services',
                sauna: {
                    title: 'Sauna & Hammam',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Sauna',
                },
                pool: {
                    title: 'Pool',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'pool',
                },
                wintergarden: {
                    title: 'Winter garden',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Winter garden',
                },
                eventroom: {
                    title: 'Event room',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Event room',
                },
                rooms: {
                    title: 'Rooms',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Rooms',
                },
                garden: {
                    title: 'Garden and pond',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Garden and pond',
                },
                catering: {
                    title: 'Catering',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Catering',
                },
            },

            // Events
            events: {
                title: 'Our events',
                wedding: {
                    title: 'Wedding',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Wedding',
                },
                seminar: {
                    title: 'Seminar',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Seminar',
                },
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
                title: "Bienvenue",
                description: "Lorem ipsum",
                button: "Réserver",
            },

            // Services
            services: {
                title: 'Nos services',
                sauna: {
                    title: 'Sauna & Hammam',
                    description: 'Lorem ipsum',
                    alt: 'Sauna',
                },
                pool: {
                    title: 'Piscine',
                    description: 'Lorem ipsum',
                    alt: 'Piscine',
                },
                wintergarden: {
                    title: 'Jardin d\'hiver',
                    description: 'Lorem ipsum',
                    alt: 'Jardin d\'hiver',
                },
                eventroom: {
                    title: 'Salle d\'événement',
                    description: 'Lorem ipsum',
                    alt: 'Salle d\'événement',
                },
                rooms: {
                    title: 'Chambres',
                    description: 'Lorem ipsum',
                    alt: 'Chambres',
                },
                garden: {
                    title: 'Jardin et étang',
                    description: 'Lorem ipsum',
                    alt: 'Jardin et étang',
                },
                catering: {
                    title: 'Traiteur',
                    description: 'Lorem ipsum',
                    alt: 'Traiteur',
                },
            },

            // Events
            events: {
                title: 'Our events',
                wedding: {
                    title: 'Wedding',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Wedding',
                },
                seminar: {
                    title: 'Seminar',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Seminar',
                },
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
                description: "Lorem ipsum",
                button: "Boeken",
            },

            // Services
            services: {
                title: 'Onze diensten',
                sauna: {
                    title: 'Sauna & Hammam',
                    description: 'Lorem ipsum',
                    alt: 'Sauna',
                },
                pool: {
                    title: 'Zwembad',
                    description: 'Lorem ipsum',
                    alt: 'Zwembad',
                },
                wintergarden: {
                    title: 'Wintertuin',
                    description: 'Lorem ipsum',
                    alt: 'Wintertuin',
                },
                eventroom: {
                    title: 'Evenementenzaal',
                    description: 'Lorem ipsum',
                    alt: 'Evenementenzaal',
                },
                rooms: {
                    title: 'Kamers',
                    description: 'Lorem ipsum',
                    alt: 'Kamers',
                },
                garden: {
                    title: 'Tuin en vijver',
                    description: 'Lorem ipsum',
                    alt: 'Tuin en vijver',
                },
                catering: {
                    title: 'Horeca',
                    description: 'Lorem ipsum',
                    alt: 'Horeca',
                },
            },

            // Events
            events: {
                title: 'Our events',
                wedding: {
                    title: 'Wedding',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Wedding',
                },
                seminar: {
                    title: 'Seminar',
                    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    alt: 'Seminar',
                },
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
