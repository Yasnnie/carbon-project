import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleProp,
  TextInput,
} from 'react-native'
import { colors } from '../../styles/colors'
import SelectIcon from '../../../assets/icons/SelectIcon.svg'

interface SelectProps {
  label: string
  data: string[]
  onSelect: (item: string) => void
  style?: StyleProp<ViewStyle> | undefined
}

export default function Select({ label, data, onSelect, style }: SelectProps) {
  const [visible, setVisible] = useState(false)
  const [valueInput, setValueInput] = useState('')
  const [countries, setCountries] = useState<string[]>([])
  const [selected, setSelected] = useState<string | undefined>(undefined)

  function openDropdown() {
    setVisible(true)
  }

  function onItemPress(item: string) {
    setSelected(item)
    onSelect(item)
    setValueInput(item)
    setVisible(false)
  }

  function renderItem({ item }: { item: string }) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
        <Text style={styles.label}>{item}</Text>
      </TouchableOpacity>
    )
  }

  function renderDropdown() {
    return (
      <FlatList
        style={[styles.dropdown, { display: visible ? 'flex' : 'none' }]}
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }

  return (
    <View style={[styles.button, style]}>
      {renderDropdown()}
      <TextInput
        style={[styles.input, styles.label]}
        onFocus={openDropdown}
        value={valueInput}
        onChangeText={(value) => {
          setValueInput(value)
          setCountries(data.filter((item) => item.startsWith(value)))
        }}
      />

      <SelectIcon width={16} height={13} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray,
    height: 48,
    paddingHorizontal: 16,
    zIndex: 1,
    width: '100%',
    maxWidth: 272,
    position: 'relative',
  },
  label: {
    color: colors.white,
    fontFamily: 'roboto',
    fontSize: 16,
  },

  dropdown: {
    position: 'absolute',
    backgroundColor: colors.orange,
    width: 272,
    maxHeight: 144,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    top: 48,
  },

  item: {
    paddingHorizontal: 24,
    paddingVertical: 14,

    borderBottomWidth: 1,
    borderColor: colors.darkOrange,
  },
  input: {
    width: '95%',
    height: '100%',
    color: colors.white,
  },
})
