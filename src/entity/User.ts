import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryColumn({ type: 'bigint' })
  id: number;
  @Column({ length: 100, nullable: false, unique: true })
  username: string;
  @Column({ length: 200, nullable: false })
  password: string;
  @Column({ length: 20, nullable: true, unique: true })
  phoneNum: string;
  @Column()
  regtime: Date;
}
