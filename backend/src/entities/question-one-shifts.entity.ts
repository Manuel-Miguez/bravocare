import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('question_one_shifts')
export class QuestionOneShift {
  @PrimaryGeneratedColumn({ name: 'shift_id', type: 'int' })
  shiftID: number;

  @Column({ name: 'facility_id', type: 'int', nullable: false })
  facilityID: number;

  @Column({ name: 'shift_date', type: 'date', nullable: false })
  shiftDate: Date | string;

  @Column({
    name: 'start_time',
    type: 'time without time zone',
    nullable: false,
  })
  startTime: Date | string;
  @Column({
    name: 'end_time',
    type: 'time without time zone',
    nullable: false,
  })
  endTime: Date | string;
}
