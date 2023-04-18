export const FormatedDate = () => {
  const dateLastUpdate = new Date()
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]
  const month = monthNames[dateLastUpdate.getUTCMonth()]
  const day = dateLastUpdate.getUTCDate()
  const year = dateLastUpdate.getUTCFullYear()
  return `${day} de ${month} ${year}`
}

