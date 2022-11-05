import { date } from "zod";
import { IProduct } from "../../interface/IProduct";

export const productMock:IProduct = {
  produto: "Alexa Echo 3" ,
  valor: 300,
  descricao: "O Echo Dot é o nosso smart speaker de maior sucesso. Controlado por voz com Alexa, ele é perfeito para qualquer ambiente. Você pode pedir músicas, notícias, informações e muito mais. Além de ligar para amigos e familiares e controlar dispositivos compatíveis de casa inteligente com sua voz." , 
  created: new Date(),
  updated: new Date()
}

export const productMockWithID:IProduct & { _id:string } = {
  _id: '4edd40c86762e0fb12000003',
  produto: "Alexa Echo 3" ,
  valor: 300,
  descricao: "O Echo Dot é o nosso smart speaker de maior sucesso. Controlado por voz com Alexa, ele é perfeito para qualquer ambiente. Você pode pedir músicas, notícias, informações e muito mais. Além de ligar para amigos e familiares e controlar dispositivos compatíveis de casa inteligente com sua voz." , 
  created: new Date(),
  updated: new Date()
}