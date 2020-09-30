import React, { ReactElement, useState, useRef } from 'react';
import { Accordion, AccordionItem } from '@entur/expand';
import { replaceElement, removeElementByIndex } from 'helpers/arrays';
import JourneyPattern, { initJourneyPattern } from 'model/JourneyPattern';
import './styles.scss';
import { LeadParagraph, Heading1 } from '@entur/typography';
import { useSelector } from 'react-redux';
import { selectIntl } from 'i18n';
import { Modal } from '@entur/modal';
import { InputGroup, TextField } from '@entur/form';
import { SecondaryButton, PrimaryButton } from '@entur/button';
import AddButton from 'components/AddButton/AddButton';
import useUniqueKeys from 'hooks/useUniqueKeys';

type Props = {
  journeyPatterns: JourneyPattern[];
  onChange: (journeyPatterns: JourneyPattern[]) => void;
  children: (
    journeyPattern: JourneyPattern,
    handleUpdate: (journeyPattern: JourneyPattern) => void,
    handleDelete?: () => void
  ) => ReactElement;
};

const JourneyPatterns = ({ journeyPatterns, onChange, children }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { formatMessage } = useSelector(selectIntl);
  const textFieldRef = useRef<HTMLInputElement>(null);

  const keys = useUniqueKeys(journeyPatterns);

  const updateJourneyPattern = (index: number) => {
    return (journeyPattern: JourneyPattern) => {
      onChange(replaceElement(journeyPatterns, index, journeyPattern));
    };
  };

  const deleteJourneyPattern = (index: number) => {
    return () => {
      if (journeyPatterns.length > 1) {
        onChange(removeElementByIndex(journeyPatterns, index));
      }
    };
  };

  const addNewJourneyPattern = (name: string) => {
    const newJourneyPatterns = [
      ...journeyPatterns,
      {
        ...initJourneyPattern(),
        name,
      },
    ];
    onChange(newJourneyPatterns);
    setShowModal(false);
    setTimeout(
      () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
      100
    );
  };

  return (
    <>
      <Modal
        size="small"
        open={showModal}
        title={formatMessage('newJourneyPatternModalTitle')}
        onDismiss={() => setShowModal(false)}
        className="modal"
      >
        {formatMessage('newJourneyPatternModalSubTitle')}
        <div className="modal-content">
          <InputGroup
            label={formatMessage('newJourneyPatternModalLabel')}
            className="modal-input"
          >
            <TextField
              placeholder={formatMessage('newJourneyPatternModalPlaceholder')}
              ref={textFieldRef}
            />
          </InputGroup>
          <div>
            <SecondaryButton
              onClick={() => setShowModal(false)}
              className="margin-right"
            >
              {formatMessage('newJourneyPatternModalCancel')}
            </SecondaryButton>
            <PrimaryButton
              onClick={() =>
                addNewJourneyPattern(textFieldRef?.current?.value ?? '')
              }
            >
              {formatMessage('newJourneyPatternModalCreate')}
            </PrimaryButton>
          </div>
        </div>
      </Modal>

      <div className="journey-patterns-editor">
        <Heading1>{formatMessage('editorJourneyPatternsTabLabel')}</Heading1>
        <LeadParagraph>{formatMessage('editorFillInformation')}</LeadParagraph>
        {journeyPatterns.length === 1 ? (
          children(journeyPatterns[0], updateJourneyPattern(0))
        ) : (
          <Accordion>
            {journeyPatterns.map((jp: JourneyPattern, index: number) => (
              <AccordionItem
                title={jp.name}
                key={jp.id ?? keys[index]}
                defaultOpen={!jp.id || index === journeyPatterns.length - 1}
              >
                {children(
                  jp,
                  updateJourneyPattern(index),
                  deleteJourneyPattern(index)
                )}
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <AddButton
          onClick={() => setShowModal(true)}
          buttonTitle={formatMessage('editorAddJourneyPatterns')}
        />
      </div>
    </>
  );
};

export default JourneyPatterns;
