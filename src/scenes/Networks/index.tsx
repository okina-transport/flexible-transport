import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import {
  DataCell,
  HeaderCell,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from '@entur/table';
import Loading from 'components/Loading';
import { Heading1 } from '@entur/typography';
import { deleteNetworkById, loadNetworks } from 'actions/networks';
import { selectIntl } from 'i18n';
import './styles.scss';
import { GlobalState } from 'reducers';
import { Network } from 'model/Network';

import { SecondaryButton, SuccessButton } from '@entur/button';
import ConfirmDialog from '../../components/ConfirmDialog';

import { Organisation } from 'model/Organisation';

const Networks = ({ history }: RouteComponentProps) => {
  const [showDeleteDialogue, setShowDeleteDialogue] = useState<boolean>(false);
  const [selectedNetwork, setSelectedNetwork] = useState<Network | undefined>(
    undefined
  );
  const { formatMessage } = useSelector(selectIntl);
  const { providers, companies, networks } = useSelector<
    GlobalState,
    GlobalState
  >((s) => s);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(loadNetworks());
  }, [dispatch, providers.active]);

  const RenderTableRows = ({
    networkList,
    companyList,
  }: {
    networkList: Network[];
    companyList: Organisation[];
  }) => (
    <>
      {networkList.map((n) => (
        <TableRow
          key={n.id}
          //onClick={() => handleOnRowClick(n.id)}
          title={n.description}
        >
          <DataCell>{n.name}</DataCell>
          <DataCell>{n.privateCode}</DataCell>
          <DataCell>
            {companyList.find((o) => o.id === n.authorityRef)?.name?.value ??
              '-'}
          </DataCell>
          <DataCell className="delete-row-cell"></DataCell>
        </TableRow>
      ))}
      {networkList.length === 0 && (
        <TableRow className="row-no-networks disabled">
          <DataCell colSpan={3}>
            {formatMessage('networksNoNetworksFoundText')}
          </DataCell>
        </TableRow>
      )}
    </>
  );
  return (
    <div className="networks">
      <Heading1>{formatMessage('networksHeaderText')}</Heading1>
      <br />
      <div>{formatMessage('networksInfoMessage')}</div>
      <br />
      <br />

      <Loading
        text={formatMessage('networksLoadingNetworksText')}
        isLoading={!networks || !companies}
      >
        <>
          <Table>
            <TableHead>
              <TableRow>
                <HeaderCell>
                  {formatMessage('networksNameTableHeaderLabel')}
                </HeaderCell>
                <HeaderCell>
                  {formatMessage('networksPrivateCodeTableHeaderLabel')}
                </HeaderCell>
                <HeaderCell>
                  {formatMessage('networksAuthorityTableHeaderLabel')}
                </HeaderCell>
                <HeaderCell>{''}</HeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <RenderTableRows
                networkList={networks!}
                companyList={companies!}
              />
            </TableBody>
          </Table>
          {showDeleteDialogue && selectedNetwork && (
            <ConfirmDialog
              isOpen
              onDismiss={() => {
                setSelectedNetwork(undefined);
                setShowDeleteDialogue(false);
              }}
              title={formatMessage(
                'editorDeleteNetworkConfirmationDialogTitle'
              )}
              message={formatMessage(
                'editorDeleteNetworkConfirmationDialogMessage'
              )}
              buttons={[
                <SecondaryButton
                  key="no"
                  onClick={() => {
                    setSelectedNetwork(undefined);
                    setShowDeleteDialogue(false);
                  }}
                >
                  {formatMessage('no')}
                </SecondaryButton>,
                <SuccessButton
                  key="yes"
                  onClick={() => {
                    dispatch(deleteNetworkById(selectedNetwork?.id))
                      .then(() => {
                        setSelectedNetwork(undefined);
                        setShowDeleteDialogue(false);
                      })
                      .then(() => dispatch(loadNetworks()));
                  }}
                >
                  {formatMessage('yes')}
                </SuccessButton>,
              ]}
            />
          )}
        </>
      </Loading>
    </div>
  );
};

export default withRouter(Networks);
