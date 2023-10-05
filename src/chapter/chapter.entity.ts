import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chapter')
export class Chapter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 60 })
  title: string;

  @Column({ type: 'varchar', length: 100 })
  domain: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'auth_client_id',
    nullable: true,
  })
  authClientId: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'auth_client_secret',
    nullable: true,
  })
  authClientSecret: string;

  @Column({ type: 'varchar', length: 100, name: 'auth_domain', nullable: true })
  auth_domain: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'auth_connection',
    nullable: true,
  })
  authConnection: string;
}
