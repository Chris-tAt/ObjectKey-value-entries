
let estudiantes = [
    {nombre: "Christian", edad:15, nota:75},
    {nombre: "Maria", edad:14, nota:60},
    {nombre: "Anabel", edad:22, nota:90},
    {nombre: "Camilo", edad:17, nota:79},
    {nombre: "Yair", edad:13, nota:67},
];
document.write('Ejercicio resuelto: Usa la informacion de 5 estudiantes, cada uno debe terner: nombre, edad,nota;' + "<br>",
 'saca el promedio de las 5 notas de los estudiantes' + "<br>",
  'si el estudiante tiene una nota > o = a 70 debe devolver su nombre en pantalla' + "<br>", 
  'ordenar los estudiantes por las edades de mayor a menor.'+ "<br>"+ "<br>"+ "<br>")

function PromedioNotas(estudiantes){
    document.write('este es el promedio de todas las notas:' + "<br>");
    let notas = Object.values(estudiantes).map(estudiante => estudiante.nota);
   let promedio= notas.reduce((total, nota) => total + nota) /notas.length;
   return promedio 
}

function AlumnosAprobados(estudiantes){
    document.write('esta es la lista de los nombres aprobados:'+ "<br>");
    let aprobados = Object.entries(estudiantes).filter(([key, value]) => value.nota >=70 );
    let nombres = aprobados.map(([key,value]) => value.nombre);
    return nombres
}

function EstuOrdenados (estudiantes) {
    document.write('estos son los nombres ordenados de mayor a menor edad:'+ "<br>");
let ordenados = Object.entries (estudiantes).sort(([,{edad: edadA}], [,{edad:edadB}]) =>edadB - edadA);
let nombres = ordenados.map(([key, value]) => value.nombre);
return nombres
}
let promedio = PromedioNotas(estudiantes);
document.write(promedio + "<br>");

let aprobados = AlumnosAprobados(estudiantes);
document.write(aprobados.join(", ") + "<br>");

let ordenados = EstuOrdenados(estudiantes);
document.write(ordenados.join(", ") + "<br>");