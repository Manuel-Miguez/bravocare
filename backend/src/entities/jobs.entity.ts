import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn({ name: 'job_id', type: 'int' })
  jobID: number;

  @Column({ name: 'facility_id', type: 'int', nullable: false })
  facilityID: number;

  @Column({ name: 'nurse_type_needed', type: 'varchar', nullable: false })
  nurseTypeNeeded: string;

  @Column({ name: 'total_number_nurses_needed', type: 'int', nullable: false })
  totalNumberNursesNeeded: number;
}
