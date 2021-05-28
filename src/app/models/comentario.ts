export class Comentario{
  constructor(
    public coId:number,
    public coIdUsuarioFK:string,
    public coTitle:string,
    public coComentario:string,
    public coPagina:string,
    public coCreated_at:string,
    public coDelete_at:string
  ){}
}
