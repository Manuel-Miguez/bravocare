import React, { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import SweetAlert from 'sweetalert2';
import './CardMain.css';
import { useAppSelector } from '../../app/hooks';
import { selectQuestionShifts } from '../card-container/features/CardContainer.slice';
import { compareShifts, getQueries } from './CardMain.service';
import { Overlaps } from '../../types/Overlap.interface';
import * as modalsOptions from '../../utils/swal.utils';
import { ButtonGroup } from '../button-group/ButtonGroup';
import { ButtonGroupProps } from '../button-group/ButtonGroup.interface';
import { usePrevious } from '../../utils/previousValue.utils';

export function MainCard() {
  const shifts = useAppSelector(selectQuestionShifts);
  const previousShift = usePrevious({ shifts });
  const [overlap, setOverlap] = useState<Overlaps | null>(null);
  const [buttonsProps, setButtons] = useState<ButtonGroupProps[]>([
    {
      name: 'Q4',
      callback: () => testQueries('4', ''),
    },
    {
      name: 'Q5',
      callback: () => testQueries('5', ''),
    },
    {
      name: 'Q6',
      callback: () => testQueries('6', '1001'),
    },
  ]);

  const testQueries = (question: '4' | '5' | '6', param: string) => {
    const getList = async () => {
      const response = await getQueries(question, param);
      return response;
    };
    const Swal = withReactContent(SweetAlert);
    Swal.fire(modalsOptions.waitingModal(Swal, 'Getting the Info'));
    getList()
      .then((res) => {
        console.log('Question ' + question, res);
        Swal.fire({
          title: 'Query Result of Question ' + question,
          html: '<textarea class="textare">' + JSON.stringify(res, undefined, 2) + '</textarea>',
        });
      })
      .catch((err: string) => Swal.fire(modalsOptions.errorModal(err)));
  };

  useEffect(() => {
    const existSubmitButton = buttonsProps.some((btn) => btn.name === 'Submit');
    if (shifts.length > 1) {
      const sameShift = !!previousShift && previousShift.shifts === shifts;
      if (existSubmitButton && sameShift) return;

      const onSubmit = () => {
        const ids: number[] = shifts.map((s) => s.shiftID);
        const getList = async () => {
          const response = await compareShifts(ids[0], ids[1]);
          setOverlap(response);
        };
        const Swal = withReactContent(SweetAlert);
        Swal.fire(modalsOptions.waitingModal(Swal, 'Getting the Info'));
        getList()
          .catch((err: string) => Swal.fire(modalsOptions.errorModal(err)))
          .finally(() => Swal.close());
      };
      const modifyButtonsProps = existSubmitButton ? [...buttonsProps].filter((btn) => btn.name !== 'Submit') : [...buttonsProps];
      modifyButtonsProps.unshift({
        name: 'Submit',
        callback: onSubmit,
      });
      setButtons(modifyButtonsProps);
      return;
    }
    if (!existSubmitButton) return;
    const modifyButtonsProps = [...buttonsProps].filter((btn) => btn.name !== 'Submit');
    setButtons(modifyButtonsProps);
  }, [buttonsProps, previousShift, shifts]);

  return (
    <div className="card_main">
      <span className="card_main_link">
        <div className="card_main_content ">
          <h2 className="card_main_subtitle">Overlap Minutes : {overlap && overlap.totalOverlapMinutes}</h2>
          <h4 className="card_main_subtitle c-gray">Max Overlap Threshold: {overlap && overlap.overlapThreshold}</h4>
          <div className="card_main_footer c-gray">
            <h4 className="card_main_subtitle c-gray">Exceeds Overlap Threshold: {overlap && String(overlap.exceeded)}</h4>
            <ButtonGroup buttons={buttonsProps} />
          </div>
        </div>
      </span>
    </div>
  );
}
