import FlexibleStopPlace from 'model/FlexibleStopPlace';
import { isBlank } from 'helpers/forms';
import { MessagesKey } from 'i18n/translations/translationKeys';

export type FlexibleStopPlaceErrors = {
  name?: keyof MessagesKey;
  flexibleArea?: keyof MessagesKey;
  flexibleStopAreaType?: keyof MessagesKey;
};

export const validateFlexibleStopPlace = ({
  name,
  flexibleArea,
  keyValues,
}: FlexibleStopPlace): FlexibleStopPlaceErrors => ({
  name: isBlank(name) ? 'validateFormErrorNameEmpty' : undefined,
  flexibleArea:
    (flexibleArea?.polygon?.coordinates?.length ?? 0) < 4
      ? 'validateFormErrorFlexibleAreaNotEnoughPolygons'
      : undefined,
  flexibleStopAreaType: keyValues?.find((v) => v.key === 'FlexibleStopAreaType')
    ?.values[0]
    ? undefined
    : 'validateFormErrorStopAreaTypeEmpty',
});
