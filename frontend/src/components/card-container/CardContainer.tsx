import React, { useEffect, useState } from 'react';
import SweetAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { addQuestionShifts } from './features/CardContainer.slice';
import './CardContainer.css';
import { Card } from '../card/Card';
import { CardProps } from '../card/Card.interfaces';
import { useAppDispatch } from '../../app/hooks';
import { getShiftList } from './CardContainer.service';
import * as utils from './CardContainer.utils';
import * as modalsOptions from '../../utils/swal.utils';
import { formatDate } from '../../utils/date.utils';

export function CardContainer() {
  const dispatch = useAppDispatch();
  const [shifts, setShifts] = useState<CardProps[]>([]);
  const [selected, setSelectedShifts] = useState<number[]>([]);

  useEffect(() => {
    if (!shifts.length) {
      const getList = async () => {
        const response = await getShiftList();
        setShifts(response.map<CardProps>((r) => ({ ...r, shiftDate: formatDate(r.shiftDate), isCardSelected: false })));
      };
      const Swal = withReactContent(SweetAlert);
      Swal.fire(modalsOptions.waitingModal(Swal, 'Getting the Info'));
      getList()
        .catch((err: string) => Swal.fire(modalsOptions.errorModal(err)))
        .finally(() => Swal.close());
    }
  }, [shifts]);

  // On click Event for each Card
  const ToggleClass = (shiftID: number) => {
    const clone = JSON.parse(JSON.stringify(shifts));
    const modifySelectedShifts = utils.modifySelectedShifts(selected, shiftID);
    const modifyShifts = utils.modifySelectState(clone, modifySelectedShifts);
    const selectedShifts = utils.getSelectedShifts(modifyShifts);
    setShifts(modifyShifts);
    setSelectedShifts(modifySelectedShifts);
    dispatch(addQuestionShifts(selectedShifts));
  };

  return (
    <>
      <ol className="card_list">
        {shifts.map((param) => (
          <li className="card" key={param.shiftID} onClick={() => ToggleClass(param.shiftID)}>
            <Card params={param} />
          </li>
        ))}
      </ol>
    </>
  );
}
