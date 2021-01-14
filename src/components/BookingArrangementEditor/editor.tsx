import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppIntlState, selectIntl } from 'i18n';
import './styles.scss';
import BookingArrangement from 'model/BookingArrangement';
import { addOrRemove } from 'helpers/arrays';
import {
  BOOKING_ACCESS,
  BOOKING_LIMIT_TYPE,
  BOOKING_METHOD,
  bookingMethodMessages,
  paymentTimeMessages,
  PURCHASE_MOMENT,
  PURCHASE_WHEN,
} from 'model/enums';
import { Label, LeadParagraph } from '@entur/typography';
import {
  Fieldset,
  InputGroup,
  Radio,
  RadioGroup,
  TextArea,
  TextField,
} from '@entur/form';
import Contact from 'model/Contact';
import { Dropdown } from '@entur/dropdown';
import { FilterChip } from '@entur/chip';
import {
  getEnumInitWithi18n,
  mapEnumToItemsWithi18nLabel,
} from 'helpers/dropdown';
import DurationPicker from 'components/DurationPicker';
import { TimeUnitPickerPosition } from 'components/TimeUnitPicker';
import { GlobalState } from 'reducers';
import { BookingInfoAttachment, bookingInfoAttachmentLabel } from './constants';

type Props = {
  onChange: (bookingArrangement: BookingArrangement | undefined) => void;
  bookingArrangement: BookingArrangement;
  spoilPristine: boolean;
  bookingInfoAttachment: BookingInfoAttachment;
};

export default (props: Props) => {
  const intl = useSelector<GlobalState, AppIntlState>(selectIntl);
  const { formatMessage } = intl;
  const {
    bookingArrangement,
    onChange,
    bookingInfoAttachment: {
      type: bookingInfoAttachmentType,
      name: bookingInfoAttachmentName,
    },
  } = props;
  const {
    bookingContact,
    bookingMethods,
    bookWhen,
    buyWhen,
    bookingAccess,
    bookingNote,
    latestBookingTime = '',
    minimumBookingPeriod,
  } = bookingArrangement;

  const onContactChange = (contact: Contact) =>
    onChange({
      ...bookingArrangement,
      bookingContact: contact,
    });

  const onPurchaseMomentChange = (moment: PURCHASE_MOMENT) =>
    onChange({
      ...bookingArrangement,
      buyWhen: addOrRemove(moment, buyWhen ?? []),
    });

  const onBookingMethodChange = (method: BOOKING_METHOD) =>
    onChange({
      ...bookingArrangement,
      bookingMethods: addOrRemove(method, bookingMethods ?? []),
    });

  const [bookingLimitType, setBookingLimitType] = useState(
    minimumBookingPeriod
      ? BOOKING_LIMIT_TYPE.PERIOD
      : latestBookingTime
      ? BOOKING_LIMIT_TYPE.TIME
      : BOOKING_LIMIT_TYPE.NONE
  );

  const onBookingLimitTypeChange = (type: BOOKING_LIMIT_TYPE) => {
    onChange({
      ...bookingArrangement,
      latestBookingTime: undefined,
      minimumBookingPeriod: undefined,
    });
    setBookingLimitType(type);
  };

  const onLatestBookingTimeChange = (time: string) =>
    onChange({
      ...bookingArrangement,
      latestBookingTime: time,
    });

  const onMinimumBookingPeriodChange = (period?: string) =>
    onChange({
      ...bookingArrangement,
      minimumBookingPeriod: period,
    });

  return (
    <div className="booking-editor">
      <LeadParagraph>{formatMessage('bookingInfoText')}</LeadParagraph>
      <Label>
        <i>{formatMessage('bookingLabel')} </i>
      </Label>

      {bookingInfoAttachmentType && bookingInfoAttachmentName && (
        <section className="booking-contact-info">
          <InputGroup
            label={bookingInfoAttachmentLabel(bookingInfoAttachmentType)}
          >
            <TextField defaultValue={bookingInfoAttachmentName} disabled />
          </InputGroup>
        </section>
      )}

      <section className="booking-contact-info">
        <InputGroup label={formatMessage('contactFieldsContactPersonTitle')}>
          <TextField
            defaultValue={bookingContact?.contactPerson ?? ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onContactChange({
                ...bookingContact,
                contactPerson: e.target.value,
              })
            }
          />
        </InputGroup>

        <InputGroup label={formatMessage('contactFieldsEmailTitle')}>
          <TextField
            defaultValue={bookingContact?.email ?? ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onContactChange({ ...bookingContact, email: e.target.value })
            }
          />
        </InputGroup>

        <InputGroup label={formatMessage('contactFieldsPhoneTitle')}>
          <TextField
            defaultValue={bookingContact?.phone ?? ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onContactChange({ ...bookingContact, phone: e.target.value })
            }
          />
        </InputGroup>

        <InputGroup label={formatMessage('contactFieldsUrlTitle')}>
          <TextField
            defaultValue={bookingContact?.url ?? ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onContactChange({ ...bookingContact, url: e.target.value })
            }
          />
        </InputGroup>

        <InputGroup
          label={formatMessage('bookingNoteFieldTitle')}
          labelTooltip={formatMessage('bookingNoteTooltip')}
          style={{ width: '100%' }}
        >
          <TextArea
            value={bookingNote ?? ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChange({ ...bookingArrangement, bookingNote: e.target.value })
            }
          />
        </InputGroup>

        <Dropdown
          label={formatMessage('bookingAccessSelectionTitle')}
          initialSelectedItem={getEnumInitWithi18n(
            bookingAccess,
            formatMessage
          )}
          placeholder={formatMessage('defaultOption')}
          items={mapEnumToItemsWithi18nLabel(BOOKING_ACCESS, formatMessage)}
          clearable
          onChange={(e) =>
            onChange({
              ...bookingArrangement,
              bookingAccess: e?.value as BOOKING_ACCESS,
            })
          }
        />

        <InputGroup label={formatMessage('contactFieldsFurtherDetailsTitle')}>
          <TextField
            defaultValue={bookingContact?.furtherDetails ?? ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onContactChange({
                ...bookingContact,
                furtherDetails: e.target.value,
              })
            }
          />
        </InputGroup>
      </section>

      <section className="booking-time-info">
        <Dropdown
          label={formatMessage('bookingTimeSelectionTitle')}
          initialSelectedItem={getEnumInitWithi18n(bookWhen, formatMessage)}
          placeholder={formatMessage('defaultOption')}
          items={mapEnumToItemsWithi18nLabel(PURCHASE_WHEN, formatMessage)}
          clearable
          onChange={(e) =>
            onChange({
              ...bookingArrangement,
              bookWhen: e?.value as PURCHASE_WHEN,
            })
          }
        />

        <RadioGroup
          name="booking-limit-type"
          label={formatMessage('bookingLimitFieldsHeaderLabel')}
          onChange={(e) =>
            onBookingLimitTypeChange(e?.target?.value as BOOKING_LIMIT_TYPE)
          }
          value={bookingLimitType}
        >
          <Radio value={BOOKING_LIMIT_TYPE.NONE}>
            {formatMessage('bookingLimitTypeNoneRadioButtonLabel')}
          </Radio>

          <Radio value={BOOKING_LIMIT_TYPE.TIME}>
            {formatMessage(
              'bookingLimitFieldsBookingLimitTypeTimeRadioButtonLabel'
            )}
          </Radio>

          <TextField
            type="time"
            disabled={bookingLimitType !== BOOKING_LIMIT_TYPE.TIME}
            value={latestBookingTime || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onLatestBookingTimeChange(e?.target?.value)
            }
          />

          <Radio value={BOOKING_LIMIT_TYPE.PERIOD}>
            {formatMessage(
              'bookingLimitFieldsBookingLimitTypePeriodRadioButtonLabel'
            )}
          </Radio>

          <DurationPicker
            duration={minimumBookingPeriod}
            resetOnZero
            disabled={bookingLimitType !== BOOKING_LIMIT_TYPE.PERIOD}
            position={TimeUnitPickerPosition.ABOVE}
            showYears={false}
            showMonths={false}
            onChange={(period?: string) => onMinimumBookingPeriodChange(period)}
          />
        </RadioGroup>

        <Fieldset label={formatMessage('bookingMethodSelectionTitle')}>
          <div className="filter-chip-list">
            {Object.values(BOOKING_METHOD).map((v) => (
              <FilterChip
                value={v}
                key={v}
                onClick={() => onBookingMethodChange(v)}
              >
                {formatMessage(bookingMethodMessages[v])}
              </FilterChip>
            ))}
          </div>
        </Fieldset>

        <Fieldset label={formatMessage('paymentSelectionTitle')}>
          <div className="filter-chip-list">
            {Object.values(PURCHASE_MOMENT).map((v) => (
              <FilterChip
                value={v}
                key={v}
                onClick={() => onPurchaseMomentChange(v)}
              >
                {formatMessage(paymentTimeMessages[v])}
              </FilterChip>
            ))}
          </div>
        </Fieldset>
      </section>
    </div>
  );
};
