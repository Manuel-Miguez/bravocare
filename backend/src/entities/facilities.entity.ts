import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('facilities')
export class Facility {
  @PrimaryGeneratedColumn({ name: 'facility_id', type: 'int' })
  facilityID: number;

  @Column({ name: 'facility_name', type: 'varchar', nullable: true })
  facilityName: string;
}
