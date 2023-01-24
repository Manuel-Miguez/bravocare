import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nurses')
export class Nurse {
  @PrimaryGeneratedColumn({ name: 'nurse_id', type: 'int' })
  nurseID: number;

  @Column({ name: 'nurse_name', type: 'varchar', nullable: true })
  nurseName: string;

  @Column({ name: 'nurse_type', type: 'varchar', nullable: true })
  nurseType: string;
}
