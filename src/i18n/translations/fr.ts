import { MessagesKey } from 'i18n/translations/translationKeys';

export const messages: MessagesKey = {
  exportsLoadExportByIdErrorHeader: 'Charger un export',
  exportsLoadExportByIdErrorMessage:
    "Une erreur est survenue durant le chargement de l'export: {details}",
  exportsLoadExportsErrorHeader: 'Charger des exports',
  exportsLoadExportsErrorMessage:
    'An error occurred while loading exports: {details}',
  exportsSaveExportErrorHeader: 'Save export',
  exportsSaveExportErrorMessage:
    'An error occurred while saving export: {details}',
  exportsSaveExportSuccessHeader: 'Saving export',
  exportsSaveExportSuccessMessage: 'Export was saved.',
  flexibleLinesDeleteLineErrorHeader: 'Supprimer la ligne',
  flexibleLinesDeleteLineErrorMessage:
    'An error occured while deleting the line: {details}',
  flexibleLinesDeleteLineSuccessHeader: 'Supprimer la ligne',
  flexibleLinesDeleteLineSuccessMessage: 'The line was deleted',
  flexibleLinesLoadLineByIdErrorHeader: 'Load line',
  flexibleLinesLoadLineByIdErrorMessage:
    'An error occurred while loading the line: {details}',
  flexibleLinesLoadLinesErrorHeader: 'Load lines',
  flexibleLinesLoadLinesErrorMessage:
    'An error occurred while loading lines: {details}',
  flexibleLinesSaveLineErrorHeader: 'Save line',
  flexibleLinesSaveLineErrorMessage:
    'An error occurred while saving the line: {details}',
  flexibleLinesSaveLineSuccessHeader: 'Save line',
  flexibleLinesSaveLineSuccessMessage: 'The line was successfully saved!',
  modalSaveLineSuccessHeader: 'The line was created!',
  modalSaveLineSuccessMessage:
    'was successfully created and saved. You can view or make changes to it in the overview for flexible lines. Remember to do an export including the line to make it visible in travel searches.',
  flexibleLinesSaveLineSuccessButton: 'Ok',
  flexibleStopPlacesDeleteStopPlaceErrorHeader: 'Delete stop place',
  flexibleStopPlacesDeleteStopPlaceErrorMessage:
    'An error occurred while deleting stop place: {details}',
  flexibleStopPlacesDeleteStopPlaceSuccessHeader: 'Delete stop place',
  flexibleStopPlacesDeleteStopPlaceSuccessMessage: 'Stop place was deleted',
  flexibleStopPlacesLoadStopPlaceErrorHeader: 'Load stop place',
  flexibleStopPlacesLoadStopPlaceErrorMessage:
    'An error occurred while loading stop place: {details}',
  flexibleStopPlacesLoadStopPlacesErrorHeader: 'Load stop places',
  flexibleStopPlacesLoadStopPlacesErrorMessage:
    'An error occurred while loading stop places: {details}',
  flexibleStopPlacesSaveStopPlaceErrorHeader: 'Save stop place',
  flexibleStopPlacesSaveStopPlaceErrorMessage:
    'An error occurred while saving stop place: {details}',
  flexibleStopPlacesSaveStopPlaceSuccessHeader: 'Save stop place',
  flexibleStopPlacesSaveStopPlaceSuccessMessage: 'Stop place was saved.',
  navBarIntroduction: 'Introduction',
  navBarExportsMenuItemLabel: 'Exports',
  navBarLinesMenuItemLabel: 'Lignes TAD',
  navBarNetworksMenuItemLabel: 'Réseaux',
  navBarRootLinkLogoAltText: 'Logo',
  navBarRootLinkText: '',
  navBarStopPlacesMenuItemLabel: "Points d'arrêts et zones",
  userMenuLogoutLinkText: 'Déconnecter',
  userMenuMenuItemTextEnglish: 'English',
  userMenuMenuItemTextLanguage: 'Language',
  userMenuMenuItemTextNorwegian: 'Norsk',
  languagePickerAriaLabel: 'Choose language',
  navBarDataProvider: 'Choisissez le producteur de données',
  redirectTitle: 'Unsaved changes!',
  redirectMessage:
    'You have unsaved changes which will be lost if you navigate away. Do you want to proceed?',
  redirectYes: 'Yes, leave this page',
  redirectNo: 'No, stay on this page',
  appTitle: 'Editeur TAD',
  homeHeader: 'Editeur TAD',
  homeShortcut: 'Raccourcis',
  homeCardsGetStarted: 'Première utilisation',
  homeCardsGetStartedDescription:
    'Clickez ici si vous créez un service pour la première fois',
  homeCardsLinesDescription:
    "Visualisez un aperçu de vos lignes. C'est ici que vous pouvez voir et éditer les lignes existantes ou en créer de nouvelles",
  homeCardsNetworkDescription:
    'See the overview of your networks add new ones.',
  homeCardsStopPlacesDescription:
    "Visualisez un aperçu des points d'arrêts et zones, ou créez en de nouvelles",
  getStartedRedirectButton: 'Démarrer',
  getStartedPlatformIDText:
    "Vous pouvez aller directement à 'Lignes TAD' si vous utilisez une ID de plateforme existant.",
  getStartedLeadParagraph:
    "Avant de pouvoir créer une nouvelle ligne, vous devez créer un point d'arrêt ou une zone pour le service TAD. Suivez les étapes décrites ci-dessous.",
  headerParagraph: 'Bienvenue sur votre éditeur TAD.',
  item1pre: "Commencez par créer un point d'arrêt ou une zone dans ",
  item1post: ', dans le menu de gauche.',
  item2pre: 'Ensuite passez à  ',
  item2post: ' dans le menu de gauche, pour créer une nouvelle ligne.',
  item3pre: 'Vous pouvez ensuite exporter la ligne grâce à la section  ',
  item3post: ' du menu.',
  exportsCreateExportButtonLabel: 'Créer un export',
  creatorDryRunFormLabel: 'Dry run',
  creatorDryRunFormLabelTooltip:
    'Will not export the service to travel search, but creates a NeTEx-file to look at',
  creatorFromDateFormLabel: 'From date *',
  creatorHeader: 'Create export',
  creatorDescription:
    'Export services so that they are available in travel search',
  creatorNameFormLabel: 'Nom *',
  creatorSaveButtonLabelText: 'Create export',
  creatorSavingOverlayLoaderText: 'Saving export...',
  creatorToDateFormLabel: 'To date *',
  creatorDateForExport: 'Date for export',
  creatorDateForExportDesc:
    'Export services with availability within the selected time span',
  defaultOption: 'Sélectionnez',
  validateFormErrorExportFromDateIsAfterToDate:
    'To-date must be after from-date',
  validateFormErrorExportNameIsEmpty: 'Name must be provided.',
  exportsDownloadLinkText: 'Download',
  exportsDryRunNo: 'No',
  exportsDryRunYes: 'Yes',
  exportsHeader: 'Exports',
  exportsLoadingExportsText: 'Loading exports...',
  exportsNoExportsFoundText: 'No exports found.',
  exportsTableHeaderLabelDownload: 'Download',
  exportsTableHeaderLabelDryrun: 'Dry run',
  exportsTableHeaderLabelFromDate: 'From date',
  exportsTableHeaderLabelName: 'Nom',
  exportsTableHeaderLabelStatus: 'Status',
  exportsTableHeaderLabelToDate: 'To date',
  viewerDownloadLabel: 'Download exported files',
  viewerDownloadLinkText: 'Download',
  viewerDryRunLabel: 'Dry run',
  viewerDryRunNo: 'No',
  viewerDryRunYes: 'Yes',
  NO_VALID_FLEXIBLE_LINES_IN_DATA_SPACE:
    'No valid flexible lines in data space',
  failed: 'Failed',
  in_progress: 'In progress',
  success: 'Success',
  viewerFromDateLabel: 'From date',
  viewerHeader: 'Export',
  viewerLoadingText: 'Loading export...',
  viewerMessagesLabel: 'Messages',
  viewerNameLabel: 'Nom',
  viewerStatusLabel: 'Status',
  viewerToDateLabel: 'To date',
  uttuErrorCONSTRAINT_VIOLATION: 'Ikke unikt navn',
  uttuErrorCONSTRAINT_VIOLATION_SERVICE_JOURNEY_UNIQUE_NAME:
    'Service journey must have a unique name',
  uttuErrorCONSTRAINT_VIOLATION_LINE_UNIQUE_NAME:
    'Flexible line must have a unique name',
  uttuErrorCONSTRAINT_VIOLATION_JOURNEY_PATTERN_UNIQUE_NAME:
    'The journey pattern must have a unique name',
  uttuErrorENTITY_IS_REFERENCED:
    'Entity cannot be deleted because {noOfLines, number} other {noOfLines, plural, one {entity has a reference} other {entities have references}} to it.',
  uttuErrorFROM_DATE_AFTER_TO_DATE: 'From date cannot be after to date',
  uttuErrorMINIMUM_POINTS_IN_SEQUENCE:
    'Journey pattern must have minimum 2 sequential stop points.',
  uttuErrorMISSING_OPERATOR: 'Service journey or line must have an operator',
  uttuErrorORGANISATION_NOT_VALID_OPERATOR: 'Invalid operator',
  uttuErrorNO_VALID_LINES_IN_DATA_SPACE:
    'Found no valid lines in data space, while exporting',
  uttuErrorUNKNOWN: 'Unknown error',
  linesCreateFlexibleLineIconButtonLabel: 'Créer une ligne TAD',
  linesCreateLineIconButtonLabel: 'Créer une ligne',
  bookingInfoHeader: 'Booking info',
  bookingInfoText: 'Information about how the service can be booked.',
  bookingLabel:
    'To make the booking process easier, we recommend filling out Phone, URL and Booking note.',
  bookingAccessAuthorisedPublic: 'Authorised public',
  bookingAccessPublic: 'Public',
  bookingAccessStaff: 'Staff',
  bookingAccessSelectionTitle: 'Booking access',
  bookingLimitFieldsBookingLimitTypePeriodRadioButtonLabel:
    'The minimum period prior to the departure the booking has to be placed',
  bookingLimitFieldsBookingLimitTypeTimeRadioButtonLabel:
    'Latest possible booking time',
  bookingLimitFieldsHeaderLabel: 'Booking limit',
  bookingMethodCallDriver: 'Call driver',
  bookingMethodCallOffice: 'Call office',
  bookingMethodOnline: 'Online',
  bookingMethodPhoneAtStop: 'Phone at stop',
  bookingMethodText: 'Text',
  bookingMethodSelectionTitle: 'Booking method',
  bookingNoteFieldTitle: 'Booking note',
  bookingNoteRequiredFeedback: 'Booking note is required.',
  bookingNoteTooltip:
    'Information that can be presented along with the travel detail.',
  purchaseWhenAdvanceAndDayOfTravel: 'Advance and day of travel',
  purchaseWhenDayOfTravelOnly: 'Day of travel only',
  purchaseWhenTimeOfTravelOnly: 'Time of travel only',
  purchaseWhenUntilPreviousDay: 'Until previous day',
  contactFieldsContactPersonTitle: 'Contact person',
  contactFieldsEmailTitle: 'E-mail',
  contactFieldsFurtherDetailsTitle: 'Further details',
  contactFieldsPhoneTitle: 'Phone',
  contactFieldsUrlTitle: 'URL',
  urlOrPhoneMustBeFilled: 'At least URL or Phone must be filled',
  purchaseMomentAfterBoarding: 'After boarding',
  purchaseMomentBeforeBoarding: 'Before boarding',
  purchaseMomentOnCheckOut: 'On checkout',
  purchaseMomentOnReservation: 'On reservation',
  paymentSelectionTitle: 'Payment',
  bookingTimeSelectionTitle: 'Booking time',
  editorBookingTabLabel: 'Booking',
  editorCreateLineHeader: 'Create line',
  editorDeleteButtonText: 'Delete',
  editorDeleteConfirmationDialogCancelButtonText: 'No',
  editorDeleteConfirmationDialogConfirmButtonText: 'Yes',
  editorDeleteConfirmationDialogMessage: 'Etes-vous sûr de vouloir supprimer ?',
  editorDeleteConfirmationDialogTitle: 'Supprimer',
  editorDeleteLineLoadingText: 'Deleting line...',
  editorEditLineHeader: 'Edit line',
  generalDescriptionFormGroupTitle: 'Description',
  generalNameFormGroupTitle: 'Nom *',
  generalNetworkFormGroupTitle: 'Réseau *',
  generalOperatorFormGroupTitle: 'Opérateur *',
  transportModeTitle: 'Mode de transport *',
  transportSubModeTitle: 'Sous-mode de transport *',
  generalPrivateCodeFormGroupTitle: 'Code privé',
  generalPrivateCodeInputLabelTooltip:
    'Le code privé est ce qui identifie la ligne en interne pour les opérateurs',
  generalPublicCodeFormGroupTitle: 'Public code *',
  generalPublicCodeInputLabelTooltip:
    'Le code public est ce qui identifie la ligne pour les voyageurs',
  generalTypeFormGroupTitle: 'Type de ligne TAD *',
  typeFormGroupTitleTooltip: 'En savoir plus sur les différents types',
  editorGeneralTabLabel: 'General',
  generalDrawer: 'Underneath is a short description of each line type.',
  drawerAria: 'Read more about the different line types.',
  generalDrawerTitle: 'Types de lignes TAD',
  drawerFixed:
    'Fixed route at fixed times, has to be booked beforehand for the bus to drive.',
  drawerMainRouteWithFlexibleEnds:
    'Fixed route at fixed times, with the possibility to book boarding or alighting at stop points outside the designated route.',
  drawerFixedStopAreaWide:
    'Flexible route defined by one or more areas, where each area can have different pre-defined stops.',
  drawerFlexibleAreasOnly:
    'Pickup and dropoff anywhere within a defined area and given opening hours.',
  drawerHailAndRideSections:
    'The route is defined, but along selected streches there is the possibility for boarding/alighting at any time.',
  journeyPatternsAddJourneyPatternIconButtonLabel: 'Add journey pattern',
  journeyPatternsUnsavedChanges: 'You have unsaved changes.',
  journeyPatternsSaveAndContinue: 'Save and continue',
  editorAbout: 'A propose de la ligne',
  editorFillInformation:
    "Un itinéraire décrit le trajet ou la zone empruntée par le service, consituées de ponts d'arrêts ou de zones desservies",
  stepperAbout: 'Général',
  stepperJourneyPattern: 'Itinéraire',
  stepperServiceJourney: 'Course',
  stepperBooking: 'Réservation',
  editorStopPoints: "Ajouter des points d'arrêts ou des zones pour le service",
  editorStopPointFlexibleAreaOnly:
    "Ajoutez une point d'arrêt ou une zone définissant le service",
  stopPointsInfo:
    "Vous devez créer au moins deux points d'arrêt; un pour le début et l'autre pour la fin du service. Si vous créez un service à partir d'une zone, et que vous avez seulement une zone dans votre service, vous devez ajouter la même zone deux fois.",
  stopPointsInfoFixed:
    'You have to create at least two stop points; one for start and one for stop. Enter platform-ID from NSR.',
  deleteTitle: 'Delete stop point',
  deleteMessage: 'Are you sure you want to delete this stop point?',
  selectCustom: 'Stop point',
  selectNsr: 'Platform-ID NSR',
  editorServiceJourneys: 'Service Journeys',
  modalTitle: 'New service journey',
  modalSubTitle: 'Enter a name and press Create',
  modalCancel: 'Cancel',
  modalCreate: 'Create',
  modalLabel: 'Nom',
  modalPlaceholder: 'E.g "Milk-route weekend"',
  serviceJourneysInfo:
    'Create different Service Journeys for different opening hours. For instance one for weekdays and one for the weekend.',
  dayTypeEditorWeekdays: 'Weekdays for availability',
  weekdaysError: 'Please fill in the availability.',
  dayTypeEditorDateAvailability: 'Availability for the service',
  dayTypeEditorDateTooltip: 'Specify the validity of the service',
  dayTypeEditorAddDayTypeAssignment: 'Add date',
  dayTypeEditorNoDayTypeAssignments: 'No dates are defined.',
  dayTypeEditorDate: 'Date',
  dayTypeEditorFromAndToDate: 'Use from- and to-date',
  dayTypeEditorFromDate: 'From *',
  dayTypeEditorToDate: 'To *',
  dayTypeEditorToDateValidation: 'Not before from-date',
  passingTimesEditorError: 'You need valid passing times.',
  editorAddStopPoint: 'Add stop place or area',
  editorAddServiceJourneys: 'Create more Service Journeys',
  editorEdit: 'Edit',
  editorCreate: 'Créer un nouveau ',
  editorDetailedCreate: 'Créer un nouveau {details}',
  stopPointsAtleastTwoPoints: 'At least two stop points',
  stopPointsAtleastTwoPointsDetailed:
    'A journey pattern requires at least two stop points.',
  generalDescriptionLabel: 'Description',
  generalDirectionLabel: 'Direction',
  generalNameLabel: 'Nom *',
  generalPrivateCodeLabel: 'Code privé',
  generalPrivateCodeLabelTooltip:
    'Code privé is what identifies the journey pattern internally for the operator',
  generalValidationName: 'You must enter a name.',
  tableDeleteConfirmDialogCancelButtonText: 'No',
  tableDeleteConfirmDialogConfirmButtonText: 'Yes',
  tableDeleteConfirmDialogMessage:
    'Are you sure you want to delete this journey pattern?',
  tableDeleteConfirmDialogTitle: 'Delete  journey pattern',
  tableDirectionTableHeaderCellLabel: 'Direction',
  tableNameTableHeaderCellLabel: 'Nom',
  tableNewJourneyPatternDefaultText: '- New journey pattern -',
  tableNoJourneyPatternsText: 'Aucun itinéraire.',
  tableServiceJourneysTableHeaderCellLabel: 'Service journeys',
  tableStopPlacesTableHeaderCellLabel: "Points d'arrets et zones",
  editorJourneyPatternsTabLabel: 'Itinéraires',
  editorLoadingLineText: 'Loading line',
  editorLoadingNetworkAndStopsText: 'Loading network and stop places',
  editorSaveButtonText: 'Save',
  editorSaveAndCreateLine: 'Save and create the line',
  editorSaveLineLoadingText: 'Saving line...',
  fixErrorsInTheFollowingSteps:
    'You must fix the errors in the following steps: ',
  navigationNext: 'Next',
  navigationCancel: 'Cancel',
  navigationPrevious: 'Previous',
  linesHeader: 'Lignes',
  labelForAlighting: 'For alighting',
  labelForBoarding: 'For boarding',
  labelForBoardingAndAlighting: 'Boarding and alighting',
  labelFrontText: 'Front text',
  labelFrontTextRequired: 'Front text *',
  labelBoarding: 'On/off-boarding',
  labelQuayRef: 'Platform ID (from NSR) *',
  flexibleStopPlaceRefAndQuayRefBothValues:
    'Choose either stop place or platform, not both.',
  flexibleStopPlaceRefAndQuayRefNoValues: 'You must select a place',
  flexibleStopPlaceNoValue: 'You must select a stop place',
  frontTextNoValue: 'You must enter a front text',
  frontTextAlighting: 'First stop can only be for boarding',
  frontTextBoarding: 'Last stop can only be for alighting',
  quayRefInvalid: 'Invalid platform ID',
  tableYes: 'Yes',
  tableNo: 'No',
  tableName: 'Nom',
  tableFrontText: 'Front text',
  frontTextTooltip: 'The text that is shown at the front of the vehicle',
  tableBoarding: 'Boarding',
  tableAlighting: 'Alighting',
  tableDefaultValue: '- New stop point -',
  tableNoStopPoints: 'No stop points.',
  tableDeleteTitle: 'Delete stop point',
  tableDeleteMessage: 'Are you sure you want to delete this stop point?',
  serviceJourneyAvailability: 'Availability',
  serviceJourneyPassingTimes: 'Passing times',
  serviceJourneyBusinessHours: 'Business hours',
  passingTimesInfo:
    'Enter the passing times for the different stops. For an area based service, you should specify the opening hours, with start time on the first stop and end time on the last.',
  businessHoursInfo:
    'Enter the business hour for the area or stop. For an area based service, you should specify the opening hours, with start time on the first stop and end time on the last.',
  passingTimesInfoFixed: 'Enter the passing times for the different stops.',
  serviceJourneyBooking: 'Booking',
  generalName: 'Nom *',
  nameIsRequired: 'Name is required.',
  generalDescription: 'Description',
  generalAvailability: 'Availability',
  generalPrivateCode: 'Code privé',
  generalPrivateCodeTooltip:
    'Code privé is what identifies the service journey internally for the operator',
  generalPublicCode: 'Code public',
  generalPublicCodeTooltip:
    'Public code is what identifies the service journey externally towards travellers',
  generalOperator: 'Opérateur',
  serviceJourneydeleteTitle: 'Delete service journey',
  serviceJourneydeleteMessage:
    'Are you sure you want to delete this service journey?',
  linesLoadingText: 'Chargement des lignes...',
  linesNameTableHeaderLabel: 'Nom',
  linesNoLinesFoundText: 'Aucune ligne trouvée.',
  linesOperatorTableHeader: 'Opérateur',
  linesPrivateCodeTableHeaderLabel: 'Code privé',
  nameEmpty: 'Name is required.',
  publicCodeEmpty: 'Public code is required.',
  networkRefEmpty: 'You must select a network.',
  operatorRefEmpty: 'You must select an operator.',
  transportModeEmpty: 'You must select a transport mode.',
  transportSubModeEmpty: 'You must select a transport submode.',
  flexibleLineTypeEmpty: 'You must select a type.',
  homePage: 'Home page',
  networkAuthorityMissing: 'Network is missing',
  networkAuthorityMissingDetails:
    'There are no authorities created for this data provider. Please contact the administrators for help.',
  networksAuthorityTableHeaderLabel: 'Authority',
  editorAuthorityLabelText: 'Authority *',
  editorCreateNetworkHeaderText: 'Create network',
  editorNetworkDescription:
    'At least one network is necessary. Networks can be used to group lines.',
  editorValidationAuthority: 'Authority is required',
  editorValidationName: 'Name is required',
  editorDeleteNetworkConfirmDialogCancelText: 'No',
  editorDeleteNetworkConfirmDialogConfirmText: 'Yes',
  editorDeleteNetworkConfirmDialogMessage:
    'Are you sure you want to delete this network?',
  editorDeleteNetworkConfirmDialogTitle: 'Delete network',
  editorDeletingNetworkLoadingText: 'Deleting network...',
  editorDescriptionLabelText: 'Description',
  editorEditNetworkHeaderText: 'Edit network',
  editorLoadingNetworkText: 'Loading network...',
  editorNameLabelText: 'Nom *',
  editorPrivateCodeLabelText: 'Code privé',
  editorSavingNetworkLoadingText: 'Saving network...',
  network: 'network',
  networksHeaderText: 'Réseaux',
  networksLoadingNetworksText: 'Loading networks...',
  networksNameTableHeaderLabel: 'Nom',
  networksNoNetworksFoundText: 'No networks found',
  networksPrivateCodeTableHeaderLabel: 'Code privé',
  stopPlacesCreateStopPlaceLinkIconLabelText:
    "Créer un point d'arrêt ou une zone",
  stopPlaceText: "point d'arrêt",
  stopPlace: 'Stop place/area *',
  editorDescription:
    "Créez un point d'arrêt ou une zone, soit en entrant une liste de coordonnées au format GeoJSON ou en cliquant sur la carte.",
  editorCreateHeader: "Créer un point d'arrêt ou une zone",
  delete: 'Delete',
  editorDeleteStopPlaceDialogCancelButtonText: 'No',
  editorDeleteStopPlaceDialogConfirmButtonText: 'Yes',
  editorDeleteStopPlaceDialogMessage:
    'Are you sure you want to delete this stop place?',
  editorDeleteStopPlaceDialogTitle: 'Delete stop place',
  editorDeletingOverlayLoaderText: 'Deleting stop place...',
  editorDescriptionFormLabelText: 'Description',
  editorEditHeader: 'Edit stop place',
  errorCoordinates: 'Les coordonnées sont dans un format invalide',
  editorLoadingDependenciesText: 'Loading dependencies',
  editorLoadingStopPlaceText: 'Loading stop place',
  editorNameFormLabelText: 'Nom *',
  editorPrivateCodeFormLabelText: 'Code privé',
  editorCoordinatesFormLabelText: 'Coordonnées en GeoJson [Long, Lat]',
  editorDrawPolygonButtonText: 'Dessiner les coordonnées saisies sur la carte',
  save: 'Save',
  editorSavingOverlayLoaderText: 'Saving stop place...',
  validateFormErrorFlexibleAreaNotEnoughPolygons:
    'You must add more map points',
  validateFormErrorNameEmpty: 'You must enter a name',
  stopPlacesHeader: "Point d'arrêts et zones",
  stopPlacesLoadingStopPlacesText: 'Loading stop places...',
  stopPlacesNameTableHeaderLabelText: 'Nom',
  stopPlacesNoStopPlacesFoundText: "Aucune point d'arrêt trouvé.",
  stopPlacesNumberOfPointsTableHeaderLabelText: 'Nombre de points',
  stopPlacesPrivateCodeTableHeaderLabelText: 'Code privé',
  passingTimesPassingTime: 'Passing time *',
  passingTimesDayTimeOffset: 'Daytime offset',
  passingTimesDayTimeOffsetTooltip:
    'Set offset if the passing time is a day or more after the departure of the service',
  errorAllPassingTimesMustBeFilled: 'All passing times must be set.',
  errorDepartureAfterArrival: 'Departure time cannot be before arrival time.',
  errorDepartureAfterEarliest:
    'Departure time cannot be before earliest departure time.',
  errorArrivalBeforeLatest:
    'Arrival time cannot be later than latest arrival time.',
  errorLaterThanPrevious:
    "All specified times must be later than previous stop point's times.",
  errorLastArrivalMustBeSet:
    'Arrival time or latest arrival time for last stop place must be set.',
  errorStopPoints: 'You have to create at least two stop points.',
  errorARowIsMissingData: 'At least one of the rows is missing passing times.',
  weekdaysMonday: 'Monday',
  weekdaysTuesday: 'Tuesday',
  weekdaysWednesday: 'Wednesday',
  weekdaysThursday: 'Thursday',
  weekdaysFriday: 'Friday',
  weekdaysSaturday: 'Saturday',
  weekdaysSunday: 'Sunday',
  requiredInputMarker: 'Les champs marqués avec * sont obligatoires',
  air: 'Air',
  bus: 'Bus',
  cableway: 'Cableway',
  coach: 'Coach',
  funicular: 'Funicular',
  metro: 'Metro',
  rail: 'Rail',
  tram: 'Tram',
  water: 'Water',
  domesticFlight: 'Domestic flight',
  helicopterService: 'Helicopter service',
  internationalFlight: 'International flight',
  airportLinkBus: 'Airport link bus',
  expressBus: 'Express bus',
  localBus: 'Local bus',
  nightBus: 'Night bus',
  railReplacementBus: 'Rail replacement bus',
  regionalBus: 'Regional bus',
  schoolBus: 'School bus',
  shuttleBus: 'Shuttle bus',
  sightseeingBus: 'Sightseeing bus',
  sightseeingService: 'Sightseeing service',
  telecabin: 'Telecabin',
  internationalCoach: 'International coach',
  nationalCoach: 'National coach',
  touristCoach: 'Tourist coach',
  airportLinkRail: 'Airport link rail',
  international: 'International',
  interregionalRail: 'Interregional rail',
  local: 'Local',
  longDistance: 'Long distance',
  nightRail: 'Night rail',
  regionalRail: 'Regional rail',
  touristRailway: 'Tourist railway',
  cityTram: 'City tram',
  localTram: 'Local tram',
  highSpeedPassengerService: 'High speed passenger service',
  highSpeedVehicleService: 'High speed vehicle service',
  internationalCarFerry: 'International car ferry',
  internationalPassengerFerry: 'International passenger ferry',
  localCarFerry: 'Local car ferry',
  localPassengerFerry: 'Local passenger ferry',
  nationalCarFerry: 'National car ferry',
};
