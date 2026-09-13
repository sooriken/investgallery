// ========================================
// PRIVACY PAGE LANGUAGE TOGGLE
// ========================================

(function() {
  'use strict';

  // === Translations (только для страницы privacy) ===
  const translations = {
    ru: {
      privacy: {
        back: '← На главную',
        title: 'Политика в отношении обработки персональных данных',
        sections: {
          general: {
            title: '1. Общие положения',
            text: [
              'Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. № 152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Фавстрицкая Евгения Евгеньевна (далее — Оператор).',
              '1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.',
              '1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее — Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://investmeart.ru.'
            ]
          },
          concepts: {
            title: '2. Основные понятия, используемые в Политике',
            text: [
              '2.1. Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники.',
              '2.2. Блокирование персональных данных — временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).',
              '2.3. Веб-сайт — совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://investmeart.ru.',
              '2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных и обеспечивающих их обработку информационных технологий и технических средств.',
              '2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.',
              '2.6. Обработка персональных данных — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.',
              '2.7. Оператор — государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и/или осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.',
              '2.8. Персональные данные — любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://investmeart.ru.',
              '2.9. Персональные данные, разрешенные субъектом персональных данных для распространения, — персональные данные, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных путем дачи согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных (далее — персональные данные, разрешенные для распространения).',
              '2.10. Пользователь — любой посетитель веб-сайта https://investmeart.ru.',
              '2.11. Предоставление персональных данных — действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.',
              '2.12. Распространение персональных данных — любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом.',
              '2.13. Трансграничная передача персональных данных — передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.',
              '2.14. Уничтожение персональных данных — любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и/или уничтожаются материальные носители персональных данных.'
            ]
          },
          operator: {
            title: '3. Основные права и обязанности Оператора',
            subtitle1: '3.1. Оператор имеет право:',
            list1: [
              'получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные;',
              'в случае отзыва субъектом персональных данных согласия на обработку персональных данных, а также, направления обращения с требованием о прекращении обработки персональных данных, Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных;',
              'самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами.'
            ],
            subtitle2: '3.2. Оператор обязан:',
            list2: [
              'предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных;',
              'организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ;',
              'отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;',
              'сообщать в уполномоченный орган по защите прав субъектов персональных данных по запросу этого органа необходимую информацию в течение 10 дней с даты получения такого запроса;',
              'публиковать или иным образом обеспечивать неограниченный доступ к настоящей Политике в отношении обработки персональных данных;',
              'принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных;',
              'прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных Законом о персональных данных;',
              'исполнять иные обязанности, предусмотренные Законом о персональных данных.'
            ]
          },
          subjects: {
            title: '4. Основные права и обязанности субъектов персональных данных',
            subtitle1: '4.1. Субъекты персональных данных имеют право:',
            list1: [
              'получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами. Сведения предоставляются субъекту персональных данных Оператором в доступной форме, и в них не должны содержаться персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных. Перечень информации и порядок ее получения установлен Законом о персональных данных;',
              'требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;',
              'выдвигать условие предварительного согласия при обработке персональных данных в целях продвижения на рынке товаров, работ и услуг;',
              'на отзыв согласия на обработку персональных данных, а также, на направление требования о прекращении обработки персональных данных;',
              'обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействие Оператора при обработке его персональных данных;',
              'на осуществление иных прав, предусмотренных законодательством РФ.'
            ],
            subtitle2: '4.2. Субъекты персональных данных обязаны:',
            list2: [
              'предоставлять Оператору достоверные данные о себе;',
              'сообщать Оператору об уточнении (обновлении, изменении) своих персональных данных.'
            ],
            text: '4.3. Лица, передавшие Оператору недостоверные сведения о себе, либо сведения о другом субъекте персональных данных без согласия последнего, несут ответственность в соответствии с законодательством РФ.'
          },
          principles: {
            title: '5. Принципы обработки персональных данных',
            text: [
              '5.1. Обработка персональных данных осуществляется на законной и справедливой основе.',
              '5.2. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.',
              '5.3. Не допускается объединение баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.',
              '5.4. Обработке подлежат только персональные данные, которые отвечают целям их обработки.',
              '5.5. Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки. Не допускается избыточность обрабатываемых персональных данных по отношению к заявленным целям их обработки.',
              '5.6. При обработке персональных данных обеспечивается точность персональных данных, их достаточность, а в необходимых случаях и актуальность по отношению к целям обработки персональных данных. Оператор принимает необходимые меры и/или обеспечивает их принятие по удалению или уточнению неполных или неточных данных.',
              '5.7. Хранение персональных данных осуществляется в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных. Обрабатываемые персональные данные уничтожаются либо обезличиваются по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.'
            ]
          },
          goals: {
            title: '6. Цели обработки персональных данных'
          },
          conditions: {
            title: '7. Условия обработки персональных данных',
            text: [
              '7.1. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.',
              '7.2. Обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей.',
              '7.3. Обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве.',
              '7.4. Обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем.',
              '7.5. Обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных.',
              '7.6. Осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее — общедоступные персональные данные).',
              '7.7. Осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.'
            ]
          },
          storage: {
            title: '8. Порядок сбора, хранения, передачи и других видов обработки персональных данных',
            text: [
              'Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.',
              '8.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.',
              '8.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства либо в случае, если субъектом персональных данных дано согласие Оператору на передачу данных третьему лицу для исполнения обязательств по гражданско-правовому договору.',
              '8.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора investmeart@mail.ru с пометкой «Актуализация персональных данных».',
              '8.4. Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные, если иной срок не предусмотрен договором или действующим законодательством. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора investmeart@mail.ru с пометкой «Отзыв согласия на обработку персональных данных».',
              '8.5. Вся информация, которая собирается сторонними сервисами, в том числе платежными системами, средствами связи и другими поставщиками услуг, хранится и обрабатывается указанными лицами (Операторами) в соответствии с их Пользовательским соглашением и Политикой конфиденциальности. Субъект персональных данных и/или с указанными документами. Оператор не несет ответственность за действия третьих лиц, в том числе указанных в настоящем пункте поставщиков услуг.',
              '8.6. Установленные субъектом персональных данных запреты на передачу (кроме предоставления доступа), а также на обработку или условия обработки (кроме получения доступа) персональных данных, разрешенных для распространения, не действуют в случаях обработки персональных данных в государственных, общественных и иных публичных интересах, определенных законодательством РФ.',
              '8.7. Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных.',
              '8.8. Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных.',
              '8.9. Условием прекращения обработки персональных данных может являться достижение целей обработки персональных данных, истечение срока действия согласия субъекта персональных данных, отзыв согласия субъектом персональных данных или требование о прекращении обработки персональных данных, а также выявление неправомерной обработки персональных данных.'
            ]
          },
          actions: {
            title: '9. Перечень действий, производимых Оператором с полученными персональными данными',
            text: [
              '9.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.',
              '9.2. Оператор осуществляет автоматизированную обработку персональных данных с получением и/или передачей полученной информации по информационно-телекоммуникационным сетям или без таковой.'
            ]
          },
          crossborder: {
            title: '10. Трансграничная передача персональных данных',
            text: [
              '10.1. Оператор до начала осуществления деятельности по трансграничной передаче персональных данных обязан уведомить уполномоченный орган по защите прав субъектов персональных данных о своем намерении осуществлять трансграничную передачу персональных данных (такое уведомление направляется отдельно от уведомления о намерении осуществлять обработку персональных данных).',
              '10.2. Оператор до подачи вышеуказанного уведомления, обязан получить от органов власти иностранного государства, иностранных физических лиц, иностранных юридических лиц, которым планируется трансграничная передача персональных данных, соответствующие сведения.'
            ]
          },
          confidentiality: {
            title: '11. Конфиденциальность персональных данных',
            text: 'Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.'
          },
          final: {
            title: '12. Заключительные положения',
            text: [
              '12.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты investmeart@mail.ru.',
              '12.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.',
              '12.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу https://investmeart.ru.'
            ]
          }
        },
        table: {
          goal: 'Цель обработки',
          data: 'Персональные данные',
          basis: 'Правовые основания',
          types: 'Виды обработки',
          row1_goal: 'информирование Пользователя посредством отправки электронных писем',
          row1_data: 'фамилия, имя, отчество<br>электронный адрес<br>номера телефонов',
          row1_basis: 'договоры, заключаемые между оператором и субъектом персональных данных',
          row1_types: 'Сбор, запись, систематизация, накопление, хранение, уничтожение и обезличивание персональных данных<br>Отправка информационных писем на адрес электронной почты'
        }
      }
    },
    en: {
      privacy: {
        back: '← Back to home',
        title: 'Personal Data Processing Policy',
        sections: {
          general: {
            title: '1. General Provisions',
            text: [
              'This personal data processing policy is drawn up in accordance with the requirements of Federal Law No. 152-FZ of 27.07.2006 "On Personal Data" (hereinafter — the Personal Data Law) and determines the procedure for processing personal data and measures to ensure the security of personal data taken by Favstritskaya Evgenia Evgenievna (hereinafter — the Operator).',
              '1.1. The Operator sets its most important goal and condition for carrying out its activities as observing the rights and freedoms of man and citizen when processing his personal data, including protecting the rights to inviolability of private life, personal and family secrets.',
              '1.2. This Operator\'s policy regarding the processing of personal data (hereinafter — the Policy) applies to all information that the Operator may receive about visitors to the website https://investmeart.ru.'
            ]
          },
          concepts: {
            title: '2. Basic Concepts Used in the Policy',
            text: [
              '2.1. Automated processing of personal data — processing of personal data using computer technology.',
              '2.2. Blocking of personal data — temporary suspension of processing of personal data (except when processing is necessary to clarify personal data).',
              '2.3. Website — a set of graphic and information materials, as well as computer programs and databases that ensure their availability on the Internet at the network address https://investmeart.ru.',
              '2.4. Personal data information system — a set of personal data contained in databases and information technologies and technical means that ensure their processing.',
              '2.5. Depersonalization of personal data — actions as a result of which it is impossible to determine, without the use of additional information, the ownership of personal data to a specific User or other subject of personal data.',
              '2.6. Processing of personal data — any action (operation) or a set of actions (operations) performed with or without the use of automation tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, changing), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data.',
              '2.7. Operator — a state body, municipal body, legal entity or individual, independently or jointly with other persons organizing and/or carrying out the processing of personal data, as well as determining the purposes of processing personal data, the composition of personal data to be processed, actions (operations) performed with personal data.',
              '2.8. Personal data — any information relating directly or indirectly to a specific or identifiable User of the website https://investmeart.ru.',
              '2.9. Personal data authorized by the subject of personal data for distribution — personal data to which an unlimited number of persons have access, provided by the subject of personal data by giving consent to the processing of personal data authorized by the subject of personal data for distribution in the manner prescribed by the Personal Data Law (hereinafter — personal data authorized for distribution).',
              '2.10. User — any visitor to the website https://investmeart.ru.',
              '2.11. Provision of personal data — actions aimed at disclosing personal data to a certain person or a certain circle of persons.',
              '2.12. Distribution of personal data — any actions aimed at disclosing personal data to an indefinite circle of persons (transfer of personal data) or at familiarizing an unlimited circle of persons with personal data, including publication of personal data in the media, placement in information and telecommunication networks or providing access to personal data in any other way.',
              '2.13. Cross-border transfer of personal data — transfer of personal data to the territory of a foreign state to an authority of a foreign state, a foreign individual or a foreign legal entity.',
              '2.14. Destruction of personal data — any actions as a result of which personal data are destroyed irrevocably with the impossibility of further restoration of the content of personal data in the personal data information system and/or the material carriers of personal data are destroyed.'
            ]
          },
          operator: {
            title: '3. Basic Rights and Obligations of the Operator',
            subtitle1: '3.1. The Operator has the right to:',
            list1: [
              'receive from the subject of personal data reliable information and/or documents containing personal data;',
              'in case of withdrawal by the subject of personal data of consent to the processing of personal data, as well as sending an appeal with a demand to stop processing personal data, the Operator has the right to continue processing personal data without the consent of the subject of personal data if there are grounds specified in the Personal Data Law;',
              'independently determine the composition and list of measures necessary and sufficient to ensure the fulfillment of obligations provided for by the Personal Data Law and regulatory legal acts adopted in accordance with it, unless otherwise provided by the Personal Data Law or other federal laws.'
            ],
            subtitle2: '3.2. The Operator is obliged to:',
            list2: [
              'provide the subject of personal data, at his request, with information concerning the processing of his personal data;',
              'organize the processing of personal data in the manner established by the current legislation of the Russian Federation;',
              'respond to appeals and requests of subjects of personal data and their legal representatives in accordance with the requirements of the Personal Data Law;',
              'report to the authorized body for the protection of the rights of subjects of personal data, at the request of this body, the necessary information within 10 days from the date of receipt of such a request;',
              'publish or otherwise provide unrestricted access to this Policy regarding the processing of personal data;',
              'take legal, organizational and technical measures to protect personal data from unlawful or accidental access to them, destruction, modification, blocking, copying, provision, distribution of personal data, as well as from other unlawful actions in relation to personal data;',
              'stop the transfer (distribution, provision, access) of personal data, stop processing and destroy personal data in the manner and cases provided for by the Personal Data Law;',
              'perform other duties provided for by the Personal Data Law.'
            ]
          },
          subjects: {
            title: '4. Basic Rights and Obligations of Subjects of Personal Data',
            subtitle1: '4.1. Subjects of personal data have the right to:',
            list1: [
              'receive information concerning the processing of his personal data, except in cases provided for by federal laws. Information is provided to the subject of personal data by the Operator in an accessible form, and it must not contain personal data relating to other subjects of personal data, except in cases where there are legal grounds for disclosing such personal data. The list of information and the procedure for obtaining it is established by the Personal Data Law;',
              'demand from the operator clarification of his personal data, their blocking or destruction if the personal data are incomplete, outdated, inaccurate, illegally obtained or are not necessary for the stated purpose of processing, as well as take measures provided by law to protect their rights;',
              'put forward a condition of prior consent when processing personal data for the purpose of promoting goods, works and services on the market;',
              'withdraw consent to the processing of personal data, as well as send a demand to stop processing personal data;',
              'appeal to the authorized body for the protection of the rights of subjects of personal data or in court against unlawful actions or inaction of the Operator when processing his personal data;',
              'exercise other rights provided for by the legislation of the Russian Federation.'
            ],
            subtitle2: '4.2. Subjects of personal data are obliged to:',
            list2: [
              'provide the Operator with reliable data about themselves;',
              'inform the Operator about the clarification (update, change) of their personal data.'
            ],
            text: '4.3. Persons who have provided the Operator with false information about themselves, or information about another subject of personal data without the consent of the latter, are liable in accordance with the legislation of the Russian Federation.'
          },
          principles: {
            title: '5. Principles of Personal Data Processing',
            text: [
              '5.1. Processing of personal data is carried out on a lawful and fair basis.',
              '5.2. Processing of personal data is limited to achieving specific, pre-determined and legitimate purposes. Processing of personal data incompatible with the purposes of collecting personal data is not allowed.',
              '5.3. Combining databases containing personal data, the processing of which is carried out for purposes incompatible with each other, is not allowed.',
              '5.4. Only personal data that meet the purposes of their processing are subject to processing.',
              '5.5. The content and volume of processed personal data correspond to the stated purposes of processing. Redundancy of processed personal data in relation to the stated purposes of their processing is not allowed.',
              '5.6. When processing personal data, the accuracy of personal data, their sufficiency, and in necessary cases, their relevance in relation to the purposes of processing personal data is ensured. The Operator takes the necessary measures and/or ensures their adoption to delete or clarify incomplete or inaccurate data.',
              '5.7. Storage of personal data is carried out in a form that allows determining the subject of personal data, no longer than the purposes of processing personal data require, if the storage period of personal data is not established by federal law, an agreement to which the subject of personal data is a party, beneficiary or guarantor. Processed personal data are destroyed or depersonalized upon achieving the purposes of processing or in case of loss of need to achieve these purposes, unless otherwise provided by federal law.'
            ]
          },
          goals: {
            title: '6. Purposes of Personal Data Processing'
          },
          conditions: {
            title: '7. Conditions for Personal Data Processing',
            text: [
              '7.1. Processing of personal data is carried out with the consent of the subject of personal data to the processing of his personal data.',
              '7.2. Processing of personal data is necessary to achieve the purposes provided for by an international treaty of the Russian Federation or law, to carry out the functions, powers and duties assigned by the legislation of the Russian Federation to the operator.',
              '7.3. Processing of personal data is necessary for the administration of justice, execution of a judicial act, an act of another body or official subject to execution in accordance with the legislation of the Russian Federation on enforcement proceedings.',
              '7.4. Processing of personal data is necessary for the execution of an agreement to which the subject of personal data is a party, beneficiary or guarantor, as well as for concluding an agreement on the initiative of the subject of personal data or an agreement under which the subject of personal data will be a beneficiary or guarantor.',
              '7.5. Processing of personal data is necessary for the exercise of the rights and legitimate interests of the operator or third parties or to achieve socially significant goals, provided that this does not violate the rights and freedoms of the subject of personal data.',
              '7.6. Processing of personal data is carried out, access to which is provided by the subject of personal data to an unlimited number of persons or at his request (hereinafter — publicly available personal data).',
              '7.7. Processing of personal data subject to publication or mandatory disclosure in accordance with federal law is carried out.'
            ]
          },
          storage: {
            title: '8. Procedure for Collection, Storage, Transfer and Other Types of Personal Data Processing',
            text: [
              'The security of personal data processed by the Operator is ensured through the implementation of legal, organizational and technical measures necessary to fully comply with the requirements of the current legislation in the field of personal data protection.',
              '8.1. The Operator ensures the safety of personal data and takes all possible measures to exclude access to personal data by unauthorized persons.',
              '8.2. Personal data of the User will never, under any conditions, be transferred to third parties, except in cases related to the execution of current legislation or if the subject of personal data has given consent to the Operator to transfer data to a third party to fulfill obligations under a civil law agreement.',
              '8.3. In case of detection of inaccuracies in personal data, the User can update them independently by sending a notification to the Operator at the Operator\'s email address investmeart@mail.ru with the note "Actualization of personal data".',
              '8.4. The period of processing of personal data is determined by achieving the purposes for which personal data were collected, unless another period is provided for by an agreement or current legislation. The User can at any time withdraw his consent to the processing of personal data by sending a notification to the Operator via email to the Operator\'s email address investmeart@mail.ru with the note "Withdrawal of consent to the processing of personal data".',
              '8.5. All information that is collected by third-party services, including payment systems, communication means and other service providers, is stored and processed by these persons (Operators) in accordance with their User Agreement and Privacy Policy. The subject of personal data and/or with the specified documents. The Operator is not responsible for the actions of third parties, including the service providers specified in this paragraph.',
              '8.6. The prohibitions established by the subject of personal data on the transfer (except for providing access), as well as on the processing or conditions of processing (except for obtaining access) of personal data authorized for distribution, do not apply in cases of processing personal data in state, public and other public interests determined by the legislation of the Russian Federation.',
              '8.7. The Operator, when processing personal data, ensures the confidentiality of personal data.',
              '8.8. The Operator stores personal data in a form that allows determining the subject of personal data, no longer than the purposes of processing personal data require, if the storage period of personal data is not established by federal law, an agreement to which the subject of personal data is a party, beneficiary or guarantor.',
              '8.9. The condition for terminating the processing of personal data may be the achievement of the purposes of processing personal data, expiration of the consent of the subject of personal data, withdrawal of consent by the subject of personal data or a demand to stop processing personal data, as well as detection of unlawful processing of personal data.'
            ]
          },
          actions: {
            title: '9. List of Actions Performed by the Operator with Received Personal Data',
            text: [
              '9.1. The Operator carries out collection, recording, systematization, accumulation, storage, clarification (updating, changing), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion and destruction of personal data.',
              '9.2. The Operator carries out automated processing of personal data with the receipt and/or transfer of the received information via information and telecommunication networks or without such.'
            ]
          },
          crossborder: {
            title: '10. Cross-Border Transfer of Personal Data',
            text: [
              '10.1. Before starting activities on cross-border transfer of personal data, the Operator is obliged to notify the authorized body for the protection of the rights of subjects of personal data of its intention to carry out cross-border transfer of personal data (such notification is sent separately from the notification of the intention to carry out the processing of personal data).',
              '10.2. Before submitting the above notification, the Operator is obliged to obtain from the authorities of a foreign state, foreign individuals, foreign legal entities to which the cross-border transfer of personal data is planned, the relevant information.'
            ]
          },
          confidentiality: {
            title: '11. Confidentiality of Personal Data',
            text: 'The Operator and other persons who have gained access to personal data are obliged not to disclose to third parties and not to distribute personal data without the consent of the subject of personal data, unless otherwise provided by federal law.'
          },
          final: {
            title: '12. Final Provisions',
            text: [
              '12.1. The User can get any clarifications on issues of interest related to the processing of his personal data by contacting the Operator via email investmeart@mail.ru.',
              '12.2. This document will reflect any changes to the personal data processing policy by the Operator. The Policy is valid indefinitely until replaced by a new version.',
              '12.3. The current version of the Policy is freely available on the Internet at https://investmeart.ru.'
            ]
          }
        },
        table: {
          goal: 'Processing Purpose',
          data: 'Personal Data',
          basis: 'Legal Basis',
          types: 'Processing Types',
          row1_goal: 'informing the User by sending emails',
          row1_data: 'last name, first name, patronymic<br>email address<br>phone numbers',
          row1_basis: 'agreements concluded between the operator and the subject of personal data',
          row1_types: 'Collection, recording, systematization, accumulation, storage, destruction and depersonalization of personal data<br>Sending information letters to the email address'
        }
      }
    }
  };

  // === DOM refs ===
  const langBtns = document.querySelectorAll('.header__lang-btn');
  let currentLang = localStorage.getItem('lang') || 'ru';

  // === Функция получения значения по ключу ===
  function getValueByPath(obj, path) {
    const keys = path.split('.');
    let result = obj;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var match = key.match(/^(.+)\[(\d+)\]$/);
      if (match) {
        var arrayKey = match[1];
        var index = parseInt(match[2], 10);
        if (result && result[arrayKey] && Array.isArray(result[arrayKey])) {
          result = result[arrayKey][index];
        } else {
          result = undefined;
          break;
        }
      } else {
        if (result && result[key] !== undefined) {
          result = result[key];
        } else {
          result = undefined;
          break;
        }
      }
    }

    return result;
  }

  // === Функция переключения ===
  function switchLanguage(lang) {
    if (!translations[lang]) return;

    const texts = translations[lang];

    // Обновляем элементы с data-i18n (обычный текст)
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      let value = getValueByPath(texts, key);

      if (value === undefined || value === null) {
        value = el.innerHTML.trim() || '';
      }

      if (Array.isArray(value)) {
        value = value.join(' ');
      }

      el.innerHTML = value;
    });

    // Обновляем элементы с data-i18n-html (HTML-содержимое)
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      const key = el.getAttribute('data-i18n-html');
      let value = getValueByPath(texts, key);

      if (value === undefined || value === null) {
        value = el.innerHTML.trim() || '';
      }

      el.innerHTML = value;
    });

    // Обновляем активный класс у кнопок
    langBtns.forEach(function(btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('lang', lang);
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);

    // Обновляем title страницы
    if (lang === 'ru') {
      document.title = 'Политика конфиденциальности — InvestMe';
    } else {
      document.title = 'Privacy Policy — InvestMe';
    }
  }

  // === Events ===
  langBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      if (lang === currentLang) return;
      switchLanguage(lang);
    });
  });

  // === Init ===
  if (localStorage.getItem('lang')) {
    const savedLang = localStorage.getItem('lang');
    if (translations[savedLang]) {
      switchLanguage(savedLang);
      return;
    }
  }

  const browserLang = navigator.language.slice(0, 2);
  if (translations[browserLang]) {
    switchLanguage(browserLang);
  } else {
    switchLanguage('ru');
  }

})();


console.log('Вы попали на страницу privacy');