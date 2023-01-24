import { Entity, PrimaryColumn } from 'typeorm';

@Entity('nurse_hired_jobs')
export class NurseHiredJob {
  @PrimaryColumn({ name: 'job_id', type: 'int', nullable: false })
  jobID: number;

  @PrimaryColumn({ name: 'nurse_id', type: 'int', nullable: false })
  nurseID: number;
}
