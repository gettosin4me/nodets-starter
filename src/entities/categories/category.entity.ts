import {Entity, Column} from 'typeorm';
import Model from '../base/model.entity';

@Entity('categories')
export default class CategoryEntity extends Model {
  @Column({
    type: 'varchar',
    name: 'name',
    nullable: false,
  })
    name: string;
        
  @Column({
    type: 'varchar',
    name: 'slug',
    nullable: false,
  })
    slug: string;

  @Column({
    type: 'varchar',
    name: 'icon',
    nullable: true,
  })
    icon: string;

  @Column({
    name: 'active',
    default: true,
    type: 'boolean',
    nullable: false,
  })
    active: boolean;

  toJSON(): CategoryEntity {
    return { ...this, createdAt: undefined, updatedAt: undefined };
  }
}
