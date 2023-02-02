import axios from 'axios'

const apiBase = axios.create({
  baseURL: 'https://carbon-predict-back.vercel.app/countries/',
})

export async function getAllContries() {
  const res = await apiBase.get('names/')

  return res.data
}

export async function getCountry(name: string) {
  const res = await apiBase.get(name)

  return res.data
}

export async function getPredicted(name: string) {
  const res = await apiBase.get(`${name}/predicted_co2_values/`)

  return res.data
}

export async function getCorrelections(name: string, correlation_var: string) {
  const res = await apiBase.get(
    `${name}/predicted_co2_values/${correlation_var}/`
  )

  return res.data
}
