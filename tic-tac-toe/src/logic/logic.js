import { LINEAS } from "./constants";

export function quienGano(turno, tableroNuevo, ganador) {
    if(ganador) return;
    var lineas = Array(8).fill(true);
    for(var i = 0; i < 3; i++){
      lineas[LINEAS.HORI1] = tableroNuevo[i] != turno ? false : lineas[LINEAS.HORI1];
      lineas[LINEAS.HORI2] = tableroNuevo[i+3] != turno ? false : lineas[LINEAS.HORI2];
      lineas[LINEAS.HORI3] = tableroNuevo[i+6] != turno ? false : lineas[LINEAS.HORI3];
      lineas[LINEAS.VERT1] = tableroNuevo[0+i*3] != turno ? false : lineas[LINEAS.VERT1];
      lineas[LINEAS.VERT2] = tableroNuevo[1+i*3] != turno ? false : lineas[LINEAS.VERT2];
      lineas[LINEAS.VERT3] = tableroNuevo[2+i*3] != turno ? false : lineas[LINEAS.VERT3];
      lineas[LINEAS.DIAG1] = tableroNuevo[0+i*4] != turno ? false : lineas[LINEAS.DIAG1];
      lineas[LINEAS.DIAG2] = tableroNuevo[2+i*2] != turno ? false : lineas[LINEAS.DIAG2];
      //console.log(tableroNuevo[i])
    }
    if(lineas.indexOf(true) != -1){
      return turno;
    }
    return null;
}

export function juegoTrancado (tablero) {
    return tablero.every((marca) => marca != null);
  }