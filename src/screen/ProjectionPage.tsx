import { FlatList, Text } from 'react-native'

const data = [1, 2, 3]
export default function ProjectionPage() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <Text>{item}</Text>
      }}
    />
  )
}
