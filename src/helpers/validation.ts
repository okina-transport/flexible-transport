import moment from 'moment';
import { getIntl } from 'i18n';
import { IntlState } from 'react-intl-redux';
import Line from 'model/Line';
import FlexibleLine from 'model/FlexibleLine';
import JourneyPattern from 'model/JourneyPattern';
import ServiceJourney from 'model/ServiceJourney';
import StopPoint from 'model/StopPoint';
import PassingTime from 'model/PassingTime';
import { isBlank, objectValuesAreEmpty } from 'helpers/forms';
import { MessagesKey } from 'i18n/translations/translationKeys';

export const validLine = (line: Line): boolean =>
  aboutLineStepIsValid(line) &&
  line.journeyPatterns!.every(
    (jp) => validJourneyPattern(jp) && validServiceJourneys(jp.serviceJourneys)
  );

export const getMaxAllowedStepIndex = (line: Line) => {
  if (!aboutLineStepIsValid(line)) return 0;
  else if (line.journeyPatterns!.some((jp) => !validJourneyPattern(jp)))
    return 1;
  else if (
    line.journeyPatterns!.some(
      (jp) => !validServiceJourneys(jp.serviceJourneys)
    )
  )
    return 2;
  else return 3;
};

export const currentStepIsValid = (currentStep: number, line: Line) => {
  if (currentStep === 0) return aboutLineStepIsValid(line);
  else if (currentStep === 1)
    return line.journeyPatterns!.every((jp) => validJourneyPattern(jp));
  else if (currentStep === 2)
    return line.journeyPatterns!.every((jp) =>
      validServiceJourneys(jp.serviceJourneys)
    );
  else if (currentStep === 3) return true;
  else return false;
};

export const aboutLineStepIsValid = (line: Line): boolean =>
  !isBlank(line.name) &&
  !isBlank(line.publicCode) &&
  !isBlank(line.operatorRef) &&
  !isBlank(line.networkRef) &&
  !isBlank(line.transportMode) &&
  !isBlank(line.transportSubmode);

export const validFlexibleLine = (line: FlexibleLine): boolean =>
  aboutFlexibleLineStepIsValid(line) &&
  line.journeyPatterns!.every(
    (jp) => validJourneyPattern(jp) && validServiceJourneys(jp.serviceJourneys)
  );

export const aboutFlexibleLineStepIsValid = (line: FlexibleLine): boolean =>
  aboutLineStepIsValid(line) && !isBlank(line.flexibleLineType);

export const validJourneyPattern = (
  journeyPatterns?: JourneyPattern
): boolean =>
  !!journeyPatterns &&
  !isBlank(journeyPatterns.name) &&
  validateStopPoints(journeyPatterns.pointsInSequence ?? []);

export const validateStopPoints = (stopPoints: StopPoint[]): boolean =>
  getStopPointsErrors(stopPoints).every((stopPointErrors) =>
    objectValuesAreEmpty(stopPointErrors)
  );

export const getStopPointsErrors = (
  stopPoints: StopPoint[]
): StopPointsFormError[] =>
  stopPoints.map((stopPoint, index) =>
    validateStopPoint(stopPoint, index === 0, index === stopPoints.length - 1)
  );

export type StopPointsFormError = {
  flexibleStopPlaceRefAndQuayRef: keyof MessagesKey | undefined;
  frontText: keyof MessagesKey | undefined;
  boarding: keyof MessagesKey | undefined;
};

export const validateStopPoint = (
  stopPoint: StopPoint,
  isFirst: boolean,
  isLast: boolean
): StopPointsFormError => {
  const {
    quayRef,
    flexibleStopPlaceRef,
    destinationDisplay,
    forAlighting,
    forBoarding,
  } = stopPoint;

  const getFlexibleStopPlaceRefAndQuayRefError = ():
    | keyof MessagesKey
    | undefined => {
    if (isBlank(quayRef) && !flexibleStopPlaceRef)
      return 'flexibleStopPlaceRefAndQuayRefNoValues';
    if (!isBlank(quayRef) && flexibleStopPlaceRef)
      return 'flexibleStopPlaceRefAndQuayRefBothValues';
    return undefined;
  };

  const getFrontTextError = (): keyof MessagesKey | undefined => {
    if (isFirst && isBlank(destinationDisplay?.frontText))
      return 'frontTextNoValue';
    return undefined;
  };

  const getBoardingError = (): keyof MessagesKey | undefined => {
    if (isFirst && forAlighting) return 'frontTextAlighting';
    if (isLast && forBoarding) return 'frontTextBoarding';
    return undefined;
  };

  return {
    flexibleStopPlaceRefAndQuayRef: getFlexibleStopPlaceRefAndQuayRefError(),
    frontText: getFrontTextError(),
    boarding: getBoardingError(),
  };
};

export const validServiceJourneys = (
  sjs: ServiceJourney[] | undefined
): boolean => sjs?.every((sj) => validateServiceJourney(sj)) ?? false;

export const validateServiceJourney = (sj: ServiceJourney): boolean => {
  const isBlankName = isBlank(sj.name);
  const validDayTimes = (sj.dayTypes?.[0]?.daysOfWeek?.length ?? 0) > 0;
  const { isValid } = validateTimes(sj.passingTimes ?? []);

  return !isBlankName && isValid && validDayTimes;
};

export const isBefore = (
  passingTime: string | undefined,
  dayOffset: number | undefined,
  nextPassingTime: string | undefined,
  nextDayOffset: number | undefined
) => {
  if (!passingTime || !nextPassingTime) return false;
  const date = moment(passingTime, 'HH:mm:ss').add(dayOffset ?? 0, 'days');
  const nextDate = moment(nextPassingTime, 'HH:mm:ss').add(
    nextDayOffset ?? 0,
    'days'
  );

  return date < nextDate;
};

export const isAfter = (
  passingTime: string | undefined,
  dayOffset: number | undefined,
  nextPassingTime: string | undefined,
  nextDayOffset: number | undefined
) => {
  if (!passingTime || !nextPassingTime) return false;
  const date = moment(passingTime, 'HH:mm:ss').add(dayOffset ?? 0, 'days');
  const nextDate = moment(nextPassingTime, 'HH:mm:ss').add(
    nextDayOffset ?? 0,
    'days'
  );

  return date > nextDate;
};

const hasAtleastOneFieldSet = (passingTime: PassingTime) => {
  const {
    departureTime,
    earliestDepartureTime,
    arrivalTime,
    latestArrivalTime,
  } = passingTime;
  return Boolean(
    departureTime || earliestDepartureTime || arrivalTime || latestArrivalTime
  );
};

export const validateTimes = (
  passingTimes: PassingTime[],
  intlState?: IntlState
): { isValid: boolean; errorMessage: string } => {
  const intl = intlState && getIntl({ intl: intlState });
  const getMessage = (message: keyof MessagesKey) =>
    intl ? intl.formatMessage(message) : '';

  if (passingTimes.length < 2)
    return {
      isValid: false,
      errorMessage: getMessage('errorStopPoints'),
    };

  const firstError = passingTimes
    .map((passingTime, index: number) => {
      const {
        departureTime,
        arrivalTime,
        latestArrivalTime,
        earliestDepartureTime,
        departureDayOffset,
        arrivalDayOffset,
        latestArrivalDayOffset,
        earliestDepartureDayOffset,
      } = passingTime;

      if (!hasAtleastOneFieldSet(passingTime))
        return {
          isValid: false,
          errorMessage: getMessage('errorAllPassingTimesMustBeFilled'),
        };
      if (
        isBefore(
          departureTime,
          departureDayOffset,
          arrivalTime,
          arrivalDayOffset
        )
      )
        return {
          isValid: false,
          errorMessage: getMessage('errorDepartureAfterArrival'),
        };
      if (
        isBefore(
          departureTime,
          departureDayOffset,
          earliestDepartureTime,
          earliestDepartureDayOffset
        )
      )
        return {
          isValid: false,
          errorMessage: getMessage('errorDepartureAfterEarliest'),
        };
      if (
        isBefore(
          latestArrivalTime,
          latestArrivalDayOffset,
          arrivalTime,
          arrivalDayOffset
        )
      )
        return {
          isValid: false,
          errorMessage: getMessage('errorArrivalBeforeLatest'),
        };
      if (index === 0) return { isValid: true, errorMessage: '' };
      if (
        index === passingTimes.length - 1 &&
        !passingTime.arrivalTime &&
        !passingTime.latestArrivalTime
      ) {
        return {
          isValid: false,
          errorMessage: getMessage('errorLastArrivalMustBeSet'),
        };
      }

      const prevPassingTime = passingTimes[index - 1];

      if (
        isBefore(
          departureTime,
          departureDayOffset,
          prevPassingTime.departureTime,
          prevPassingTime.departureDayOffset
        ) ||
        isBefore(
          arrivalTime,
          arrivalDayOffset,
          prevPassingTime.arrivalTime,
          prevPassingTime.arrivalDayOffset
        ) ||
        isBefore(
          latestArrivalTime,
          latestArrivalDayOffset,
          prevPassingTime.latestArrivalTime,
          prevPassingTime.latestArrivalDayOffset
        ) ||
        isBefore(
          earliestDepartureTime,
          earliestDepartureDayOffset,
          prevPassingTime.earliestDepartureTime,
          prevPassingTime.earliestDepartureDayOffset
        )
      ) {
        return {
          isValid: false,
          errorMessage: getMessage('errorLaterThanPrevious'),
        };
      }
      return {
        isValid: true,
        errorMessage: '',
      };
    })
    .find((e) => !e.isValid);

  return firstError || { isValid: true, errorMessage: '' };
};
