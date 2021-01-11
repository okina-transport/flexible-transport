import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { SuccessButton } from '@entur/button';
import { Checkbox, InputGroup, TextField } from '@entur/form';
import { DatePicker } from '@entur/datepicker';
import fr from 'date-fns/locale/fr'; // the locale you want
import { dateToString } from 'helpers/dates';
import { saveExport } from 'actions/exports';
import OverlayLoader from 'components/OverlayLoader';
import { AppIntlState, selectIntl } from 'i18n';
import { RouteComponentProps } from 'react-router';
import { exportIsValid, toDateIsBeforeFromDate } from './validateForm';
import { Export, ExportLineAssociation, newExport } from 'model/Export';
import { GlobalState } from 'reducers';
import usePristine from 'hooks/usePristine';
import { getErrorFeedback } from 'helpers/errorHandling';
import { isBlank } from 'helpers/forms';
import RequiredInputMarker from 'components/RequiredInputMarker';
import Page from 'components/Page';
import { Heading4, LeadParagraph, SubParagraph } from '@entur/typography';
import { Tooltip } from '@entur/tooltip';
import { QuestionIcon } from '@entur/icons';
import './styles.scss';
import LinesForExport from 'components/LinesForExport';
import { parseISO } from 'date-fns';
import { isBefore, isAfter } from 'date-fns';

const ExportsCreator = ({ history }: RouteComponentProps) => {
  const { formatMessage } = useSelector<GlobalState, AppIntlState>(selectIntl);
  const [saveClicked, setSaveClicked] = useState<boolean>(false);
  const [isSaving, setSaving] = useState<boolean>(false);
  const [theExport, setTheExport] = useState<Export>(newExport());

  const dispatch = useDispatch<any>();

  const namePristine = usePristine(theExport.name, saveClicked);
  const toDatePristine = usePristine(theExport.toDate, saveClicked);

  const handleOnSaveClick = () => {
    if (exportIsValid(theExport)) {
      setSaving(true);
      dispatch(saveExport(theExport))
        .then(() => history.push('/exports'))
        .finally(() => setSaving(false));
    }
    setSaveClicked(true);
  };

  const onFieldChange = (
    field: keyof Export,
    value: string | boolean | ExportLineAssociation[]
  ) => {
    setTheExport({ ...theExport, [field]: value });
  };

  return (
    <Page
      className="export-editor"
      backButtonTitle={formatMessage('navBarExportsMenuItemLabel')}
      title={formatMessage('exportCreatorHeader')}
    >
      <OverlayLoader
        className=""
        isLoading={isSaving}
        text={formatMessage('exportCreatorSavingOverlayLoaderText')}
      >
        <LeadParagraph>
          {formatMessage('exportCreatorDescription')}
        </LeadParagraph>
        <RequiredInputMarker />
        <InputGroup
          className="export-name"
          label={formatMessage('exportCreatorNameFormLabel')}
          {...getErrorFeedback(
            formatMessage('validateFormErrorExportNameIsEmpty'),
            !isBlank(theExport.name),
            namePristine
          )}
        >
          <TextField
            defaultValue={theExport.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onFieldChange('name', e.target.value)
            }
          />
        </InputGroup>

        <Heading4>{formatMessage('exportCreatorDateForExport')}</Heading4>
        <SubParagraph>
          {formatMessage('exportCreatorDateForExportDesc')}
        </SubParagraph>
        <div className="export-dates">
          <InputGroup label={formatMessage('exportCreatorFromDateFormLabel')}>
            <DatePicker
              locale={fr}
              selectedDate={moment(theExport.fromDate).toDate()}
              onChange={(date: Date | null) => {
                if (
                  date &&
                  theExport.toDate &&
                  isAfter(date, parseISO(theExport.toDate))
                ) {
                  setTheExport({
                    ...theExport,
                    fromDate: dateToString(date),
                    toDate: dateToString(date),
                  });
                } else {
                  onFieldChange('fromDate', dateToString(date));
                }
              }}
            />
          </InputGroup>
          <InputGroup
            label={formatMessage('exportCreatorToDateFormLabel')}
            {...getErrorFeedback(
              formatMessage('validateFormErrorExportFromDateIsAfterToDate'),
              !toDateIsBeforeFromDate(theExport.fromDate, theExport.toDate),
              toDatePristine
            )}
          >
            <DatePicker
              locale={fr}
              selectedDate={moment(theExport.toDate).toDate()}
              onChange={(date: Date | null) => {
                if (
                  date &&
                  theExport.fromDate &&
                  isBefore(date, parseISO(theExport.fromDate))
                ) {
                  setTheExport({
                    ...theExport,
                    fromDate: dateToString(date),
                    toDate: dateToString(date),
                  });
                } else {
                  onFieldChange('toDate', dateToString(date));
                }
              }}
            />
          </InputGroup>
        </div>
        <div className="export-lines-table">
          <Heading4>
            {formatMessage('exportCreatorLinesForExportHeader')}
          </Heading4>
          <LinesForExport
            fromDate={theExport.fromDate}
            toDate={theExport.toDate}
            onChange={(lines) => {
              onFieldChange('lineAssociations', lines);
            }}
          />
        </div>
        <div className="export-dry-run">
          <Checkbox
            value="1"
            checked={theExport.dryRun}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onFieldChange('dryRun', e.target.checked)
            }
          >
            {formatMessage('exportCreatorDryRunFormLabel')}
          </Checkbox>
          <Tooltip
            placement="right"
            content={formatMessage('exportCreatorDryRunFormLabelTooltip')}
          >
            <span className="question-icon">
              <QuestionIcon />
            </span>
          </Tooltip>
        </div>
        <SuccessButton className="export-save" onClick={handleOnSaveClick}>
          {formatMessage('exportCreatorSaveButtonLabelText')}
        </SuccessButton>
      </OverlayLoader>
    </Page>
  );
};

export default withRouter(ExportsCreator);
