import { createI18n } from 'vue-i18n'


function loadLocaleMessages () {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {

        en: {
            // Home
            home: {
                title1: "A true",
                title2: "paradise,",
                title3: "close to your home...",
                subtitle1: 'Would you like to relax in a totally unusual setting in Belgium, for a few hours, a day or a longer stay?',
                subtitle2: 'Take a dive into a 30 degree pool, enjoy a bubble bath to relax, a Nordic bath or a Moroccan hammam?',
                subtitle3: 'All this in a unique setting and in one same place?',
                button: "Book now",
                description:"Discover the Paradiso Park Estate, a 20 hectare domain between Brussels and Antwerp dedicated to nature and well-being ...",

                philosophy: {
                    title:"Our philosophy",
                    description1:"Our domain is designed for people who need to disconnect or have a real change of scenery a few kilometres from home.  In a totally new place, nature and well-being are celebrated with equipment inspired by rituals from around the world.",
                    description2:"The estate is a majestic place that offers an immediate sense of travel and change of air. Book the estate for a few hours or a few days, with friends, for an event or a seminar and enjoy a fully privatised estate and all the services it offers.",
                },

                category: {
                    services: {
                        title: 'Our services',
                        description: 'The domain offers a whole range of services that will make your experience unique, an indoor heated swimming pool, an indoor and outdoor sauna, a Moroccan hammam... Let yourself be surprised by the quality of the facilities of the estate that will take you on a journey through the world and its different well-being rituals...',
                    },
                    rooms: {
                        title: 'The rooms',
                        description: 'Five beautifully appointed rooms and facilities that can accommodate up to 30 people on site. Discover our 5 rooms and all their services.',
                    },
                    events: {
                        title: 'Your events',
                        description: '',
                    },
                },
            },

            // Services
            services: {
                title: 'Our services',
                sauna: {
                    title: 'Sauna & Hammam',
                    description: 'There is nothing like a sauna or a hammam to relax and detoxify your muscles. Discover our wonderful hammam and indoor sauna, as well as our Nordic bath and outdoor sauna, ideal when the temperature drops to enjoy a Finnish fitness experience.',
                    alt: 'Sauna',
                },
                pool: {
                    title: 'Pool',
                    description: 'A huge indoor pool heated to 30 degrees as the central feature of the property. No, you are not dreaming... You never dreamed of such a paradise like pool in total privacy….',
                    alt: 'pool',
                },
                wintergarden: {
                    title: 'Winter garden',
                    description: 'An evening by the fire, with a good book and a delicious cup of tea? A moment with friends to rethink the world? An unusual place to meet up with friends or colleagues? Enjoy our winter garden during the coldest months of the year. A unique and comforting environment, just a stone\'s throw from your home...',
                    alt: 'Winter garden',
                },
                garden: {
                    title: 'Garden and pond',
                    description: 'Let yourself be surprised by the variety of landscapes and the richness of the surroundings: between wild nature, ponds, gardens and waterfalls... Enjoy the sun on your lounger or a relaxing Nordic bath, but above all enjoy the tranquillity of this magical and timeless place.',
                    alt: 'Garden and pond',
                },
                catering: {
                    title: 'Catering',
                    description: 'We offer all the facilities you need to organise your meals during your stay in Paradiso Park, but you can also call on us to organise a catering service. We work with a number of regular partners to meet all your requirements. Do not hesitate to contact us using the form at the bottom of the page and tell us your wishes.',
                    alt: 'Catering',
                },
            },

            // Events
            events: {
                title: 'Our events',
                wedding: {
                    title: 'Your private events',
                    description1: 'A birthday, a wedding or a bachelor party? Our space lends itself to all those days that mark your existence, whatever the type of event. An event in Paradiso Park will remain forever in the memory of all those who accompany you during your stay...',
                    description2: 'Are you interested?  Do not hesitate to fill in the form at the bottom of the page to plan your event with us!',
                    alt: '',
                },
                seminar: {
                    title: 'Your professional events',
                    description1: 'Would you like to organise a seminar, yoga classes, a wellness treatment or an event for your company? Do not hesitate to contact us directly. We can organise a whole range of private events for you, adapting our formulas to your needs.',
                    description2: 'Are you interested?  Do not hesitate to fill in the form at the bottom of the page to plan your event with us!',
                    alt: '',
                },
            },

            // Booking
            booking:{
                title: 'Make your choice',
                timeslot:{
                    title: 'Reserve a time slot',
                    description: 'Looking for a break between meetings, or a moment in a unique place with a few friends or a working group?',
                    button: '',
                },
                fullday: {
                    title: 'Book an on-site stay',
                    description: 'Want to share an incredible moment with family, colleagues or friends?  Want to organise a group fitness retreat? Discover our offers for stays of one or more nights in the heart of the Paradiso Park Estate',
                    button: '',
                },
            },

            // Contact
            contact: {
                title: '',
                description: 'Are you interested in renting Paradiso Park and do you want more information? Fill in this form and our team will contact you as soon as possible.',
                address: 'Address',
                phone: 'Phone number',
                mail: 'E-mail',
                label: {
                    name: 'Name and first name',
                    mail: 'E-mail',
                    phone: 'Phone number',
                    message: 'Your question',
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
                title1: "Un lieu",
                title2: "paradisiaque,",
                title3: "tout près de chez vous…",
                subtitle1: 'Envie de vous détendre dans un cadre totalement insolite en Belgique , le temps de quelques heures, d’une journée ou d’un séjour plus long ?',
                subtitle2: 'Plongez dans une piscine à 30 degrés, profitez d’un bain bulle pour vous détendre, d’un bain nordique ou d’un hammam marocain?',
                subtitle3: 'Tout ça dans un cadre unique et dans un seul et même lieu ?',
                button: "Réserver",
                description:"Découvrez le domaine de Paradiso Park, un domaine de 20 hectares entre Bruxelles et Anvers dédié à la nature et au bien-être…",

                philosophy: {
                    title:"Notre philosophie",
                    description1:"Notre domaine se destine aux personnes ayant besoin de déconnecter ou d’un véritable dépaysement à quelques kilomètres de chez eux.  Dans un lieu totalement inédit qui célèbre la nature et le bien-être à travers des équipments s’inspirant de rituels venus du monde entier.",
                    description2:"Le domaine est un lieu majestueux qui offre un sentiment immédiat de voyage et de dépaysement. Réservez le domaine pour quelques heures ou pour quelques jours, entre amis, pour un événement ou un séminaire et profitez d’un domaine entièrement privatisé et de tous les services qu’il propose.",
                },

                category: {
                    services: {
                        title: 'Nos services',
                        description: 'Le domaine offre toute une série de services qui rendent votre expérience unique, piscine intérieure chauffée, sauna intérieur et extérieur, hammam marocain… laissez-vous surprendre par la qualité des équipements du domaine qui vous feront voyager à travers le monde et ses différents rituels de bien-être…',
                    },
                    rooms: {
                        title: 'Les chambres',
                        description: 'Cinq chambres magnifiquement aménagées et des équipements pouvant loger jusqu’à 30 personnes sur place, Découvrez nos 5 chambres et tous leurs services.',
                    },
                    events: {
                        title: 'Vos événements',
                        description: 'Cinq chambres magnifiquement aménagées et des équipements pouvant loger jusqu’à 30 personnes sur place, Découvrez nos 5 chambres et tous leurs services.',
                    },
                },
            },

            // Services
            services: {
                title: 'Nos services',
                sauna: {
                    title: 'Sauna & Hammam',
                    description: 'Rien de tel qu’un sauna ou un hammam pour détendre ses muscles et se detoxifier. Découvrez notre magnifique hammam et notre sauna intérieur mais également notre bain nordic et notre sauna extérieur, idéal quand les températures baissent pour profiter d’une expérience finnoise de remise en forme.',
                    alt: 'Sauna',
                },
                pool: {
                    title: 'Piscine',
                    description: 'Une gigantesque piscine intérieure chauffée à 30 degrés comme élément central de la propriété. Non, vous ne rêvez pas… Jamais vous n’auriez même rêvé profiter d’une piscine aussi paradisiaque de manière totalement privée…',
                    alt: 'Piscine',
                },
                wintergarden: {
                    title: 'Jardin d\'hiver',
                    description: 'Une soirée au coin du feu, accompagné d’un bon livre et d’une délicieuse tasse de thé? Un moment entre amis pour refaire le monde? Un lieu insolite pour vous retrouver entre amis ou entre collègues ? Profitez de notre jardin d’hiver durant les mois les plus froids de l’année. Un cadre unique et réconfortant, à deux pas de chez vous…',
                    alt: 'Jardin d\'hiver',
                },
                garden: {
                    title: 'Jardin et étang',
                    description: 'Laissez-vous surprendre par la variété des paysages et la richesse de l\'environnement: entre nature sauvage, étang et jardins et cascades… Profitez des rayons du soleil sur votre chaise longue ou d’un bain nordique ressourçant mais surtout profitez de la tranquillité de ce lieu magique et hors du temps.',
                    alt: 'Jardin et étang',
                },
                catering: {
                    title: 'Traiteur',
                    description: 'Nous mettons à votre disposition toutes les installations nécessaires pour organiser vos repas lors de votre séjour au Paradiso Park mais vous pouvez également faire appel à nos services pour l’organisation d’un service traiteur. Nous travaillons avec une série de partenaires fixes pour répondre à vos envies. N’hésitez pas à nous contacter via le formulaire en bas de page et à nous partager vos demandes.',
                    alt: 'Traiteur',
                },
            },

            // Events
            events: {
                title: 'Our events',
                wedding: {
                    title: 'Vos événements privés',
                    description1: 'Un anniversaire, un mariage ou un enterrement de vie de jeunes filles ? Notre espace se prête à toutes ces journées qui marquent votre existence et ce, quel que soit votre type d’événement. Un événement au Paradiso Park restera à jamais gravé dans la mémoire de tout ceux qui vous accompagneront lors de votre séjour…',
                    description2: 'Intéressé ?  N’hésitez pas à remplir le formulaire en bas de page pour planifier votre événement chez nous !',
                    alt: 'Wedding',
                },
                seminar: {
                    title: 'Vos événements professionnels',
                    description1: 'Vous désirez organiser un séminaire, des cours de yoga, une cure de bien-être ou un événement pour votre société? N’hésitez  pas à nous contacter directement. Nous organisons pour vous toute une série d’événements privés en adaptant nos formules à votre demande.',
                    description2: 'Intéressé ?  N’hésitez pas à remplir le formulaire en bas de page pour planifier votre événement chez nous !',
                    alt: 'Seminar',
                },
            },

            // Booking
            booking: {
                title: 'Faites votre choix',
                timeslot: {
                    title: 'Réservez une tranche horaire',
                    description: 'Envie d’un break entre deux rendez-vous, ou d’un moment dans un lieu unique avec quelques amies ou groupe de travail ?',
                    button: 'Réserver',
                },
                fullday: {
                    title: 'Réservez un séjour sur place',
                    description: 'Envie de partager un incroyable moment en famille, entre collègues ou entre amis ?  Envie d’organiser une retraite de remise en forme en groupe ? Découvrez nos offres pour des séjours d’une ou plusieurs nuit au cœur du Domaine du Paradiso Park',
                    button: 'Réserver',
                },
            },

            // Contact
            contact: {
                title: 'Contact',
                description: 'Vous êtes intéressés par la location du Paradiso Park et désirez obtenir davantage d’informations ? N’hésitez pas à remplir ce formulaire et nos équipes reviendront vers vous dans les plus brefs délais.',
                address: 'Adresse',
                phone: 'Numéro de téléphone',
                mail: 'E-mail',
                label: {
                    name: 'Nom et Prénom',
                    mail: 'E-mail',
                    phone: 'Numéro de téléphone',
                    message: 'Votre question',
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
                title1: "Een hemelse",
                title2: "plek,",
                title3: "dicht bij huis...",
                subtitle1: 'Wilt u uitrusten in een totaal buitengewoon omgeving in België, voor een paar uren, een dag of een langer verblijf?',
                subtitle2: 'Een duik nemen in een zwembad van 30 graden, genieten van een bubbelbad om te ontspannen, een Nordic bath of een Marokkaanse hammam?',
                subtitle3: 'Dit alles in een unieke omgeving en op dezelfde plaats?',
                button: "Boeken",
                description:"Ontdek het Paradiso Park domein, een 20 hectare groot domein tussen Brussel en Antwerpen gewijd aan natuur en welzijn ...",

                philosophy: {
                    title:"Onze filosofie",
                    description1:"Ons domein is bedoeld voor mensen die behoefte hebben om zich los te koppelen of een echte verandering van omgeving op enkele kilometers van huis.  Op een totaal ander plek waar de natuur en het welzijn worden gevierd met apparatuur die geïnspireerd is op rituelen uit de hele wereld.",
                    description2:"Het gebied is een majestueuze plek die onmiddellijk een gevoel van reizen en verandering van omgeving biedt. Reserveer het domein voor een paar uur of een paar dagen, met vrienden, voor een evenement of een seminar en geniet van een volledig geprivatiseerd domein en alle diensten die het biedt.",
                },

                category: {
                    services: {
                        title: 'Onze diensten',
                        description: 'Het domein biedt een hele reeks diensten die uw ervaring uniek zullen maken, verwarmd binnenzwembad, binnen- en buitensauna, Marokkaanse hammam... laat u verrassen door de kwaliteit van de faciliteiten van het domein die u zullen meenemen op een reis door de wereld en haar verschillende welzijnsrituelen...',
                    },
                    rooms: {
                        title: 'De kamers',
                        description: 'Vijf prachtig ingerichte kamers en slaapgelegenheid die ter plaatse plaats bieden aan maximaal 30 personen. Ontdek onze 5 kamers en al hun diensten.',
                    },
                    events: {
                        title: 'Uw evenementen',
                        description: '',
                    },
                },
            },

            // Services
            services: {
                title: 'Onze diensten',
                sauna: {
                    title: 'Sauna & Hammam',
                    description: 'Er gaat niets boven een sauna of een hammam om uw spieren te ontspannen en te detoxen. Ontdek onze prachtige hammam en binnensauna, maar ook ons Nordic bath en onze buitensauna, ideaal wanneer de temperatuur daalt om te genieten van een Finse fitnesservaring.',
                    alt: 'Sauna',
                },
                pool: {
                    title: 'Zwembad',
                    description: 'Een gigantisch verwarmd binnenzwembad tot 30 graden als het centrale kenmerk van het domein. Nee, u droomt niet... U had nooit durven dromen van zo\'n zalig zwembad in totale privacy...',
                    alt: 'Zwembad',
                },
                wintergarden: {
                    title: 'Wintertuin',
                    description: 'Een avond bij het haardvuur, met een goed boek en een heerlijk kopje thee? Een moment met vrienden om de wereld opnieuw te imagineren? Een uniek plek om af te spreken met vrienden of collega\'s? Geniet van onze wintertuin tijdens de koudste maanden van het jaar. Een unieke en troostende omgeving, op een steenworp afstand van uw huis...',
                    alt: 'Wintertuin',
                },
                garden: {
                    title: 'Tuin en vijver',
                    description: 'Laat u verrassen door de variatie in landschappen en de rijkdom van de omgeving: tussen wilde natuur, vijvers en tuinen en watervallen... Geniet van de zon op uw ligstoel of van een ontspannend Nordic bath, maar geniet vooral van de rust van deze magische en tijdloze plek.',
                    alt: 'Tuin en vijver',
                },
                catering: {
                    title: 'Horeca',
                    description: 'Wij bieden alle faciliteiten die u nodig heeft om uw maaltijden te organiseren tijdens uw verblijf in Paradiso Park, maar u kunt ons ook vragen voor het organiseren van een cateringservice voor u. Wij werken samen met een aantal vaste partners om aan uw eisen te voldoen. Aarzel niet om contact met ons op te nemen via het formulier onderaan de pagina en ons uw wensen mee te delen.',
                    alt: 'Horeca',
                },
            },

            // Events
            events: {
                title: 'Our events',
                wedding: {
                    title: 'Uw privé evenementen',
                    description1: 'Een verjaardag, een bruiloft of een vrijgezellenfeest? Onze ruimte leent zich voor al die dagen die uw leven markeren, ongeacht het soort evenement. Een evenement in Paradiso Park zal voor altijd in het geheugen gegrift blijven van al diegenen die u tijdens uw verblijf vergezellen...',
                    description2: 'Heb je interesse?  Aarzel niet om het formulier onderaan de pagina in te vullen om uw evenement met ons te plannen!',
                    alt: '',
                },
                seminar: {
                    title: 'Uw professionele evenementen',
                    description1: 'U wenst een seminarie, yogalessen, een wellness behandeling of een evenement voor uw bedrijf te organiseren? Aarzel niet om direct contact met ons op te nemen. Wij kunnen een heel reeks privé-evenementen voor u organiseren, waarbij wij onze formules aanpassen aan uw behoeften.',
                    description2: 'Heb je interesse?  Aarzel niet om het formulier onderaan de pagina in te vullen om uw evenement met ons te plannen!',
                    alt: '',
                },
            },

            // Booking
            booking:{
                title: 'Maak uw keuze',
                timeslot:{
                    title: 'Reserveer een tijdslot',
                    description: 'Op zoek naar een pauze tussen twee vergaderingen, of een moment op een unieke plek met een paar vrienden of een werkgroep?',
                    button: '',
                },
                fullday: {
                    title: 'Boek een verblijf',
                    description: 'Wil je een ongelofelijk moment delen met familie, collega\'s of vrienden?  Wilt u een groeps fitness retraite organiseren? Ontdek onze aanbiedingen voor verblijven van één of meerdere nachten in het hart van het Paradiso Park Domein',
                    button: '',
                },
            },

            // Contact
            contact: {
                title: 'Contact',
                description: 'Bent u geïnteresseerd in het huren van Paradiso Park en wilt u meer informatie? Vul dit formulier in en ons team neemt zo vlug mogelijk contact met u op.',
                address: '',
                phone: 'Telefoonnummer',
                mail: 'E-mail',
                label: {
                    name: 'Naam en voornaam',
                    mail: 'E-mail',
                    phone: 'Telefoonnummer',
                    message: 'Jouw vraag',
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
