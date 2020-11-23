export enum BookingInfoAttachmentType {
  LINE = 'LINE',
  STOP_POINT_IN_JOURNEYPATTERN = 'STOP_POINT_IN_JOURNEYPATTERN',
  SERVICE_JOURNEY = 'SERVICE_JOURNEY',
}

export type BookingInfoAttachment = {
  type: BookingInfoAttachmentType;
  name: string;
};

export const bookingInfoAttachmentLabel = (
  bookingInfoAttachmentType: BookingInfoAttachmentType
) => {
  switch (bookingInfoAttachmentType) {
    case BookingInfoAttachmentType.LINE:
      return 'Ligne';
    case BookingInfoAttachmentType.STOP_POINT_IN_JOURNEYPATTERN:
      return 'Un point dans un itinéraire';
    case BookingInfoAttachmentType.SERVICE_JOURNEY:
      return 'Une course';
    default:
      return '';
  }
};
