import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Photo {
  @PrimaryColumn({ type: 'bigint' })
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  filename: string

  @Column()
  views: number

  @Column()
  isPublished: boolean
}
