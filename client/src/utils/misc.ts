const formatDate = (date: any) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: '2-digit',
  }).format(date)

const userInitials = (name: string) => {
  let initials = name.length ? name : 'Morgan Segura'

  return initials
    .split(' ')
    .map(n => n[0])
    .join(' ')
}

export { formatDate, userInitials }
