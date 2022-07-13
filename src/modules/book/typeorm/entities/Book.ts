import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("books")
class Book{

  @PrimaryColumn('int')
  SBN:number

  @Column()
  nome:string

  @Column()
  descricao:string

  @Column()
  autor:string

  @Column('int')
  estoque:number

@CreateDateColumn()
  created_at:Date

@UpdateDateColumn()
  updated_at:Date

}
export { Book };