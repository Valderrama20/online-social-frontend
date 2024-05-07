export const calculateTime = (e) => {
  let currentDate = new Date();
  const targetDate = new Date(e);

  const difference = currentDate - targetDate;
  const milliseconds = Math.abs(difference);
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d`;
  else if (hours > 0) return `${hours}h`;
  else if (minutes > 0) return `${minutes}m`;
  else return `${seconds}s`;
};

export function formatearFecha(fechaStr) {
  const meses = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Convertir la cadena de fecha a un objeto de fecha
  const fecha = new Date(fechaStr);

  // Obtener el mes y el año
  const mes = meses[fecha.getMonth()];
  const año = fecha.getFullYear();

  // Construir la cadena de formato deseada
  const fechaFormateada = `Joined ${mes} ${año}`;

  return fechaFormateada;
}

export function scrollOff(isOff) {
  let body = document.body.classList;

  isOff ? body.add("overflow-hidden") : body.remove("overflow-hidden");
}

export function createFormData(e) {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append("file", file);

  return formData;
}
