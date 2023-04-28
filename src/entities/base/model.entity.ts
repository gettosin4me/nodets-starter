import { CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

export default abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @CreateDateColumn({name: 'created_at', nullable: false})
    createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', nullable: false})
    updatedAt: Date;
}
