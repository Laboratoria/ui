export default async (value) => {
  const response = await fetch('https://api.laboratoria.la/campuses');
  const data = await response.json();

  return data
    .map(({ slug, name }) => ({ value: slug, label: name }))
    .filter(i => i.label.toLowerCase().includes(value.toLowerCase()));
};
