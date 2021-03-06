import { MessagesKey } from 'i18n/translations/translationKeys';

export const messages: MessagesKey = {
  exportsLoadExportByIdErrorHeader: 'Load export',
  exportsLoadExportByIdErrorMessage:
    'An error occurred while loading export: {details}',
  exportsLoadExportsErrorHeader: 'Load exports',
  exportsLoadExportsErrorMessage:
    'An error occurred while loading exports: {details}',
  exportsSaveExportErrorHeader: 'Save export',
  exportsSaveExportErrorMessage:
    'An error occurred while saving export: {details}',
  exportsSaveExportSuccessHeader: 'Saving export',
  exportsSaveExportSuccessMessage: 'Export was saved.',
  flexibleLinesDeleteLineErrorHeader: 'Delete line',
  flexibleLinesDeleteLineErrorMessage:
    'An error occured while deleting the line: {details}',
  flexibleLinesDeleteLineSuccessHeader: 'Delete line',
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
  navBarLinesMenuItemLabel: 'Flexible lines',
  navBarNetworksMenuItemLabel: 'Networks',
  navBarRootLinkLogoAltText: 'Logo',
  navBarRootLinkText: '',
  navBarStopPlacesMenuItemLabel: 'Stop places and Areas',
  userMenuLogoutLinkText: 'Log out',
  userMenuMenuItemTextEnglish: 'English',
  userMenuMenuItemTextLanguage: 'Language',
  userMenuMenuItemTextNorwegian: 'Norsk',
  languagePickerAriaLabel: 'Choose language',
  navBarDataProvider: 'Choose data provider',
  redirectTitle: 'Unsaved changes!',
  redirectMessage:
    'You have unsaved changes which will be lost if you navigate away. Do you want to proceed?',
  redirectYes: 'Yes, leave this page',
  redirectNo: 'No, stay on this page',
  appTitle: 'Flex editor',
  homeHeader: 'Entur Flex editor',
  homeShortcut: 'Shortcuts',
  homeCardsGetStarted: 'Get started',
  homeCardsGetStartedDescription:
    'Click here if you are creating a line for the first time.',
  homeCardsLinesDescription:
    'See the overview of lines. This is where you can view and edit existing lines, or create new ones.',
  homeCardsNetworkDescription:
    'See the overview of your networks add new ones.',
  homeCardsStopPlacesDescription:
    'See the overview of stop places and areas, or create new ones.',
  getStartedRedirectButton: 'Get started',
  getStartedPlatformIDText:
    "You can go directly to 'Flexible lines' if you wish to use a Platform-ID from NSR.",
  getStartedLeadParagraph:
    'Before you can create a new line, you have to create a stop place or an area for the service. Follow the steps provided below.',
  headerParagraph:
    'Welcome to Entur flex editor. This application is a tool to help organisations make their services visible through our channels.',
  item1pre: 'Start by creating a stop place or area under ',
  item1post: ', in the menu to the left.',
  item2pre: 'Afterwards move on to ',
  item2post: ' in the menu to the left, to create a new line.',
  item3pre:
    'For the line to be visible in our travel searches, one must export it in the ',
  item3post: ' section which can be found in the menu.',
  exportsCreateExportButtonLabel: 'Create export',
  creatorDryRunFormLabel: 'Dry run',
  creatorDryRunFormLabelTooltip:
    'Will not export the service to travel search, but creates a NeTEx-file to look at',
  creatorFromDateFormLabel: 'From date *',
  creatorHeader: 'Create export',
  creatorDescription:
    'Export services so that they are available in travel search',
  creatorNameFormLabel: 'Name *',
  creatorSaveButtonLabelText: 'Create export',
  creatorSavingOverlayLoaderText: 'Saving export...',
  creatorToDateFormLabel: 'To date *',
  creatorDateForExport: 'Date for export',
  creatorDateForExportDesc:
    'Export services with availability within the selected time span',
  defaultOption: 'Select an option',
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
  exportsTableHeaderLabelName: 'Name',
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
  viewerNameLabel: 'Name',
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
  linesCreateFlexibleLineIconButtonLabel: 'Create flexible line',
  linesCreateLineIconButtonLabel: 'Create line',
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
  editorDeleteConfirmationDialogMessage:
    'Are you sure you want to delete this line?',
  editorDeleteConfirmationDialogTitle: 'Delete line',
  editorDeleteLineLoadingText: 'Deleting line...',
  editorEditLineHeader: 'Edit line',
  generalDescriptionFormGroupTitle: 'Description',
  generalNameFormGroupTitle: 'Name *',
  generalNetworkFormGroupTitle: 'Network *',
  generalOperatorFormGroupTitle: 'Operator *',
  transportModeTitle: 'Transport mode *',
  transportSubModeTitle: 'Transport submode *',
  generalPrivateCodeFormGroupTitle: 'Private code',
  generalPrivateCodeInputLabelTooltip:
    'Private code is what identifies the line internally for the operator',
  generalPublicCodeFormGroupTitle: 'Public code *',
  generalPublicCodeInputLabelTooltip:
    'Public code is what identifies the line externally towards travellers',
  generalTypeFormGroupTitle: 'Flexible line type *',
  typeFormGroupTitleTooltip: 'Read more about the line types',
  editorGeneralTabLabel: 'General',
  generalDrawer: 'Underneath is a short description of each line type.',
  drawerAria: 'Read more about the different line types.',
  generalDrawerTitle: 'Flexible line types.',
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
  editorAbout: 'About the line',
  editorFillInformation:
    'A Journey Pattern describes the line pattern or area of the service, consisting of the stops along the line or the area(s) the service operates within.',
  stepperAbout: 'General',
  stepperJourneyPattern: 'Journey Pattern',
  stepperServiceJourney: 'Service Journey',
  stepperBooking: 'Booking info',
  editorStopPoints: 'Add stop places or areas for the service',
  editorStopPointFlexibleAreaOnly:
    'Add stop place or area defining the service',
  stopPointsInfo:
    'You have to create at least two stop points; one for start and one for stop. If you are creating an area based service, and you only have one area, you have to add the same area twice.',
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
  modalLabel: 'Name',
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
  editorCreate: 'Create new ',
  editorDetailedCreate: 'Create new {details}',
  stopPointsAtleastTwoPoints: 'At least two stop points',
  stopPointsAtleastTwoPointsDetailed:
    'A journey pattern requires at least two stop points.',
  generalDescriptionLabel: 'Description',
  generalDirectionLabel: 'Direction',
  generalNameLabel: 'Name *',
  generalPrivateCodeLabel: 'Private code',
  generalPrivateCodeLabelTooltip:
    'Private code is what identifies the journey pattern internally for the operator',
  generalValidationName: 'You must enter a name.',
  tableDeleteConfirmDialogCancelButtonText: 'No',
  tableDeleteConfirmDialogConfirmButtonText: 'Yes',
  tableDeleteConfirmDialogMessage:
    'Are you sure you want to delete this journey pattern?',
  tableDeleteConfirmDialogTitle: 'Delete  journey pattern',
  tableDirectionTableHeaderCellLabel: 'Direction',
  tableNameTableHeaderCellLabel: 'Name',
  tableNewJourneyPatternDefaultText: '- New journey pattern -',
  tableNoJourneyPatternsText: 'No journey patterns.',
  tableServiceJourneysTableHeaderCellLabel: 'Service journeys',
  tableStopPlacesTableHeaderCellLabel: 'Stop places and Areas',
  editorJourneyPatternsTabLabel: 'Journey Patterns',
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
  linesHeader: 'Lines',
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
  tableName: 'Name',
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
  generalName: 'Name *',
  nameIsRequired: 'Name is required.',
  generalDescription: 'Description',
  generalAvailability: 'Availability',
  generalPrivateCode: 'Private code',
  generalPrivateCodeTooltip:
    'Private code is what identifies the service journey internally for the operator',
  generalPublicCode: 'Public code',
  generalPublicCodeTooltip:
    'Public code is what identifies the service journey externally towards travellers',
  generalOperator: 'Operator',
  serviceJourneydeleteTitle: 'Delete service journey',
  serviceJourneydeleteMessage:
    'Are you sure you want to delete this service journey?',
  linesLoadingText: 'Loading lines...',
  linesNameTableHeaderLabel: 'Name',
  linesNoLinesFoundText: 'No lines found.',
  linesOperatorTableHeader: 'Operator',
  linesPrivateCodeTableHeaderLabel: 'Private code',
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
  editorNameLabelText: 'Name *',
  editorPrivateCodeLabelText: 'Private code',
  editorSavingNetworkLoadingText: 'Saving network...',
  network: 'network',
  networksHeaderText: 'Networks',
  networksLoadingNetworksText: 'Loading networks...',
  networksNameTableHeaderLabel: 'Name',
  networksNoNetworksFoundText: 'No networks found',
  networksPrivateCodeTableHeaderLabel: 'Private code',
  stopPlacesCreateStopPlaceLinkIconLabelText: 'Create stop place or area',
  stopPlaceText: 'stop place',
  stopPlace: 'Stop place/area *',
  editorDescription:
    'Create a stop place or area, either by entering a list of coordinates in GeoJSON format, or by clicking on the map.',
  editorCreateHeader: 'Create stop place or area',
  delete: 'Delete',
  editorDeleteStopPlaceDialogCancelButtonText: 'No',
  editorDeleteStopPlaceDialogConfirmButtonText: 'Yes',
  editorDeleteStopPlaceDialogMessage:
    'Are you sure you want to delete this stop place?',
  editorDeleteStopPlaceDialogTitle: 'Delete stop place',
  editorDeletingOverlayLoaderText: 'Deleting stop place...',
  editorDescriptionFormLabelText: 'Description',
  editorEditHeader: 'Edit stop place',
  errorCoordinates: 'The coordinates are in an invalid format',
  editorLoadingDependenciesText: 'Loading dependencies',
  editorLoadingStopPlaceText: 'Loading stop place',
  editorNameFormLabelText: 'Name *',
  editorPrivateCodeFormLabelText: 'Private code',
  editorCoordinatesFormLabelText: 'Coordinates in GeoJson order [Long, Lat]',
  editorDrawPolygonButtonText: 'Draw coordinates on map',
  save: 'Save',
  editorSavingOverlayLoaderText: 'Saving stop place...',
  validateFormErrorFlexibleAreaNotEnoughPolygons:
    'You must add more map points',
  validateFormErrorNameEmpty: 'You must enter a name',
  stopPlacesHeader: 'Stop places and Areas',
  stopPlacesLoadingStopPlacesText: 'Loading stop places...',
  stopPlacesNameTableHeaderLabelText: 'Name',
  stopPlacesNoStopPlacesFoundText: 'No stop places found.',
  stopPlacesNumberOfPointsTableHeaderLabelText: 'Number of points',
  stopPlacesPrivateCodeTableHeaderLabelText: 'Private code',
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
  requiredInputMarker: 'The fields marked with * are required',
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
